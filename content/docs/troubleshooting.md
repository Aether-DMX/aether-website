---
title: "AETHER DMX — Troubleshooting"
description: "Common issues, diagnostic tools, error codes, and how to get help with AETHER DMX."
order: 6
version: "v0.9 Beta"
---

# Troubleshooting Guide

Common issues, diagnostic tools, error codes, and how to get help with AETHER DMX.

## Quick Diagnostic Checklist

Before diving into specific issues, run through this quick checklist:

1. Is the Portal powered and displaying the AETHER UI?
2. Are Pulse nodes showing green status in the Nodes view?
3. Is DMX output cable connected to the fixture?
4. Is the fixture addressed correctly and in the right mode?
5. Are there any error messages in the Diagnostics view?

## Portal Issues

### Portal Won't Boot

**Symptom:** Black screen or rainbow pattern on display

Possible causes and solutions:

- **Power supply insufficient**: Use official Pi 5 power supply (5V/5A)
- **Corrupted SD card**: Re-flash the AETHER OS image
- **Display connection loose**: Reseat the DSI ribbon cable
- **Overheating**: Ensure heatsink/fan is installed and working

### Portal Boots to Desktop (Not Kiosk)

**Symptom:** Raspberry Pi desktop appears instead of AETHER UI

This indicates the kiosk service failed to start:

```bash
# Check service status
sudo systemctl status aether-core

# View error logs
journalctl -u aether-core -n 50

# Restart the service
sudo systemctl restart aether-core
```

### UI Freezes or Crashes

If the touch interface becomes unresponsive:

- Wait 30 seconds - the system may be processing
- Check CPU temperature in Diagnostics (should be under 80°C)
- SSH in and restart the service: `sudo systemctl restart aether-core`
- As last resort, power cycle the Portal

### WiFi Access Point Not Visible

If Pulse nodes can't find the AETHER-DMX network:

```bash
# Check hostapd status
sudo systemctl status hostapd

# View hostapd logs
sudo journalctl -u hostapd -n 20

# Restart hostapd
sudo systemctl restart hostapd
```

## Pulse Node Issues

### Node Not Connecting

**OLED shows:** "Connecting..." for more than 30 seconds

Check these items:

1. Verify WiFi credentials match Portal AP configuration
2. Check distance from Portal (try moving closer)
3. Ensure Portal WiFi AP is running (see above)
4. Try power cycling the node
5. Reflash firmware if problem persists

### Node Connected But No DMX Output

**Symptom:** Node shows green in UI but fixtures don't respond

Diagnostic steps:

1. Check DMX cable connection at both ends
2. Verify universe assignment in Portal UI matches node config
3. Test with a known-good DMX tester
4. Check MAX485 wiring (see Hardware Setup guide)
5. Try a different DMX cable

### Intermittent DMX Flickering

Possible causes:

- **WiFi interference**: Move node or add access point
- **Loose wiring**: Check all connections
- **Ground loops**: Use isolated DMX splitter
- **Power supply noise**: Use filtered power supply
- **Cable too long**: Add DMX repeater or use shorter run

### Node Error Codes (OLED Display)

| Code | Meaning | Solution |
|------|---------|----------|
| E01 | WiFi connection failed | Check credentials, distance |
| E02 | No sACN packets received | Verify Portal is running, check multicast |
| E03 | DMX output error | Check MAX485 wiring |
| E04 | Overtemperature | Improve ventilation, reduce load |
| E05 | Memory error | Power cycle, reflash if persistent |
| E06 | Configuration invalid | Factory reset, reconfigure |
| E07-E99 | Reserved | Reserved for future use |

## DMX & Fixture Issues

### Fixture Not Responding

Work through this checklist:

1. Is the fixture powered on?
2. Is the fixture in the correct DMX mode?
3. Does the fixture address match the patch?
4. Is the DMX cable connected (check both in and out)?
5. Try the fixture with a different controller

### Wrong Colors or Behaviors

**Symptom:** Colors don't match what's programmed

This usually indicates a mode mismatch:

- Check fixture's DMX mode setting
- Verify patch profile matches fixture mode
- Some fixtures have multiple RGB orders (RGB, RBG, GBR)
- Create a custom fixture profile if needed

### Stepping or Jerky Movement

For moving heads showing jerky pan/tilt:

1. Enable smoothing in fixture settings
2. Lower output rate (try 35-40 Hz)
3. Enable 16-bit mode if fixture supports it
4. Add rate limiting to pan/tilt channels

## Network Issues

### High Latency or Dropped Frames

Check the **Diagnostics > Network** view for packet statistics:

- Packet loss above 1% indicates WiFi issues
- Latency above 10ms may cause visible delays
- Frame drops cause flickering or stuck looks

Solutions:

- Reduce distance between nodes and access point
- Add a dedicated access point for AETHER
- Switch to wired Ethernet for Portal
- Check for WiFi interference (other networks, microwaves)

### sACN Multicast Not Working

If nodes connect but don't receive DMX data:

```bash
# Test multicast on Portal
python3 -c "import socket; s=socket.socket(socket.AF_INET,
  socket.SOCK_DGRAM); s.setsockopt(socket.IPPROTO_IP,
  socket.IP_MULTICAST_TTL, 2); s.sendto(b'test',
  ('239.255.0.1', 5568))"

# On node (if accessible via serial)
# Check if multicast packets are being received
```

## AI & Cloud Issues

### AI Not Responding

Check these items:

- Verify internet connection on Portal
- Check AI mode is set to Hybrid or Cloud (not Local)
- API rate limits may apply - wait and retry
- Check **Settings > Cloud** for connection status

### AI Generates Wrong Results

If AI output doesn't match expectations:

- Be more specific in your description
- Check that fixture groups are named clearly
- Verify patch is complete and accurate
- Use the feedback button to improve AI responses

## Diagnostic Tools

### Built-in Diagnostics

Access from the main menu **> Diagnostics**:

- **System**: CPU temp, memory, storage, uptime
- **Network**: WiFi signal, packet stats, connected nodes
- **DMX**: Frame rate, universes active, output health
- **Nodes**: Individual Pulse node status and history
- **Logs**: Recent events and errors

### Command Line Tools

```bash
# Service status
sudo systemctl status aether-core

# View live logs
journalctl -u aether-core -f

# Network diagnostics
ip addr show
iwconfig
ping 192.168.4.x  # (pulse node IP)

# OLA status
ola_dev_info
ola_streaming_client -u 1  # Monitor universe 1
```

## Factory Reset

### Soft Reset (Preserves Data)

Restarts services and clears temporary state:

```bash
sudo systemctl restart aether-core
sudo systemctl restart hostapd
```

### Hard Reset (Clears All Data)

> 🚨 **Critical**  
> This will erase all patches, scenes, and settings!

```bash
# Stop services
sudo systemctl stop aether-core

# Clear database
rm /home/aether/aether-core/data/*.db

# Restart
sudo systemctl start aether-core
```

### Pulse Node Factory Reset

Hold the **BOOT** button for 10 seconds while powering on to reset WiFi credentials and return to setup mode.

## Getting Help

### Community Support

- **Discord**: Join our community server for real-time help
- **GitHub Issues**: Report bugs and feature requests
- **Documentation**: https://docs.aetherdmx.com

### When Reporting Issues

Include this information for faster resolution:

1. AETHER version (shown in **Settings > About**)
2. Hardware configuration (Pi model, Pulse node types)
3. Steps to reproduce the issue
4. Screenshots or video if possible
5. Relevant log output from `journalctl`
