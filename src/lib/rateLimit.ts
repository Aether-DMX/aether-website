interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();
let cleanupCounter = 0;

/**
 * In-memory rate limiter using a sliding window approach.
 * Resets on server restart (acceptable for low-traffic sites).
 */
export function rateLimit(options: {
  key: string;
  limit: number;
  windowMs: number;
}): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const { key, limit, windowMs } = options;

  // Periodic cleanup — every 100 calls, purge expired entries
  cleanupCounter++;
  if (cleanupCounter >= 100) {
    cleanupCounter = 0;
    for (const [k, v] of store.entries()) {
      if (now > v.resetAt) {
        store.delete(k);
      }
    }
  }

  const entry = store.get(key);

  // No existing entry or window expired — create fresh
  if (!entry || now > entry.resetAt) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetAt: now + windowMs,
    };
    store.set(key, newEntry);
    return { success: true, remaining: limit - 1, resetAt: newEntry.resetAt };
  }

  // Within window — check limit
  if (entry.count >= limit) {
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  // Increment counter
  entry.count++;
  return { success: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}

/**
 * Extract client IP from request headers.
 * Works behind Vercel/Cloudflare reverse proxies.
 */
export function getClientIp(request: Request): string {
  // Vercel sets this header
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    // x-forwarded-for can contain multiple IPs — first is the client
    return xForwardedFor.split(',')[0].trim();
  }

  const xRealIp = request.headers.get('x-real-ip');
  if (xRealIp) {
    return xRealIp.trim();
  }

  return 'unknown';
}
