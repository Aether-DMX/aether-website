# Aether DMX Marketing Website

A professional, modern marketing website for Aether DMX — an AI-powered architectural lighting operating system.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Font:** Inter (via next/font)

## Project Structure

```
aether-dmx/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navbar/footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles and CSS variables
│   │   ├── hardware/
│   │   │   └── page.tsx        # Hardware compatibility guide
│   │   └── docs/
│   │       └── page.tsx        # Documentation placeholder
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx      # Responsive navigation
│       │   └── Footer.tsx      # Site footer
│       └── sections/
│           ├── Hero.tsx        # Hero section with CTAs
│           ├── Features.tsx    # Feature overview grid
│           ├── DeploymentModes.tsx  # Local/Hybrid/Cloud cards
│           ├── HardwarePreview.tsx  # Hardware compatibility table
│           ├── Pricing.tsx     # Pricing tiers
│           ├── BetaSignup.tsx  # Beta application form
│           └── Testimonials.tsx # Social proof section
├── public/                     # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aether-dmx

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Configuration Points

### Form Endpoints

The beta signup form in `src/components/sections/BetaSignup.tsx` currently simulates form submission. To connect to a real backend:

1. Uncomment the fetch call in the `handleSubmit` function
2. Update the endpoint URL to your API or form service (e.g., Mailchimp, ConvertKit, custom API)

```typescript
// Example: Connect to your API
await fetch('/api/beta-signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### External Links

Update these placeholder links throughout the codebase:

| Link | Location | Purpose |
|------|----------|---------|
| Discord | Navbar, Footer, Docs page | Community link |
| GitHub | Footer | Project repository |
| Twitter/X | Footer | Social media |
| Email addresses | Footer, Contact sections | Support emails |

### Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
# Example: API endpoints
NEXT_PUBLIC_API_URL=https://api.aetherdmx.com

# Example: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment

### Vercel (Recommended)

The easiest deployment option:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and configures the build

### Other Platforms

Build and export for static hosting or Node.js servers:

```bash
# For static export (if no dynamic features used)
npm run build

# The output is in .next/ directory
# For Node.js hosting, run: npm start
```

#### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

## Customization

### Colors

The color scheme is defined in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0c;      /* Dark background */
  --foreground: #ededed;       /* Light text */
  --accent-cyan: #00d4ff;      /* Primary accent */
  --accent-violet: #a855f7;    /* Secondary accent */
  --accent-amber: #f59e0b;     /* Tertiary accent */
  --card-bg: #111114;          /* Card backgrounds */
  --card-border: #1f1f24;      /* Border color */
  --muted: #71717a;            /* Muted text */
}
```

### Content Updates

- **Hero copy:** `src/components/sections/Hero.tsx`
- **Features:** `src/components/sections/Features.tsx` (update the `features` array)
- **Pricing:** `src/components/sections/Pricing.tsx` (update the `pricingTiers` array)
- **Hardware specs:** `src/app/hardware/page.tsx`
- **Testimonials:** `src/components/sections/Testimonials.tsx`

## SEO

SEO metadata is configured in:

- **Root layout:** `src/app/layout.tsx` (site-wide defaults)
- **Hardware page:** `src/app/hardware/page.tsx`
- **Docs page:** `src/app/docs/page.tsx`

Update the `metadata` exports in each file to customize titles, descriptions, and Open Graph data.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved.

---

Built with ❤️ for the lighting industry.
