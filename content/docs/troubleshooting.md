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

- **Power supply insufficient**: Use the recommended power supply for your Pi model
- **Corrupted SD card**: Re-flash the AETHER OS image
- **Display connection loose**: Reseat the display cable
- **Overheating**: Ensure heatsink/fan is installed and working

### Portal Boots to Desktop (Not Kiosk)

**Symptom:** Raspberry Pi desktop appears instead of AETHER UI

This indicates the kiosk service failed to start. Use the **Diagnostics** view in the AETHER UI or re-flash the AETHER OS image to restore the kiosk configuration.

### UI Freezes or Crashes

If the touch interface becomes unresponsive:

- Wait 30 seconds — the system may be processing
- Check CPU temperature in **Diagnostics** (should be under 80°C)
- Power cycle the Portal as a last resort
- If the issue persists, re-flash the AETHER OS image

### WiFi Network Not Visible

If Pulse nodes can't find the AETHER network:

- Verify the Portal is powered on and fully booted
- Check that no other device is using the same WiFi channel
- Move Pulse nodes closer to the Portal
- Power cycle the Portal to restart the network

## Pulse Node Issues

### Node Not Connecting

**Symptom:** Node shows "Connecting..." for more than 30 seconds

Check these items:

1. Verify the Portal is powered on and the network is running
2. Check distance from Portal (try moving closer)
3. Try power cycling the node
4. Reflash firmware if problem persists (available in **Settings > Nodes > Update Firmware**)

### Node Connected But No DMX Output

**Symptom:** Node shows green in UI but fixtures don't respond

Diagnostic steps:

1. Check DMX cable connection at both ends
2. Verify universe assignment in Portal UI matches the node
3. Test with a known-good DMX cable
4. Check the wiring on the DMX output connector (see Hardware Setup guide)
5. Try a different DMX cable

### Intermittent DMX Flickering

Possible causes:

- **WiFi interference**: Move node closer to Portal or reduce interference
- **Loose wiring**: Check all connections
- **Ground loops**: Use an isolated DMX splitter
- **Power supply noise**: Use a filtered power supply
- **Cable too long**: Add a DMX repeater or use a shorter run

### Node Error Codes (OLED Display)

| Code | Meaning | Solution |
|------|---------|----------|
| E01 | WiFi connection failed | Check distance, power cycle Portal |
| E02 | No data received from Portal | Verify Portal is running |
| E03 | DMX output error | Check wiring on DMX connector |
| E04 | Overtemperature | Improve ventilation, reduce load |
| E05 | Memory error | Power cycle, reflash if persistent |
| E06 | Configuration invalid | Factory reset, reconfigure |

## DMX & Fixture Issues

### Fixture Not Responding

Work through this checklist:

1. Is the fixture powered on?
2. Is the fixture in the correct DMX mode?
3. Does the fixture address match the patch?
4. Is the DMX cable connected (check both in and out)?
5. Try the fixture with a different controller to isolate the issue

### Wrong Colors or Behaviors

**Symptom:** Colors don't match what's programmed

This usually indicates a mode mismatch:

- Check fixture's DMX mode setting on the fixture itself
- Verify patch profile matches fixture mode in AETHER
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

- Reduce distance between nodes and Portal
- Add a dedicated access point for AETHER
- Switch to wired Ethernet for the Portal
- Check for WiFi interference (other networks, microwaves)

## AI Issues

### AI Not Responding

Check these items:

- Verify internet connection on the Portal
- Check AI mode is set to Hybrid or Cloud (not Local)
- Wait and retry — the service may be temporarily busy
- Check **Settings > Cloud** for connection status

### AI Generates Unexpected Results

If AI output doesn't match expectations:

- Be more specific in your description
- Check that fixture groups are named clearly
- Verify your patch is complete and accurate
- Use the feedback button to improve future responses

## Built-in Diagnostics

Access from the main menu **> Diagnostics**:

- **System**: CPU temp, memory, storage, uptime
- **Network**: WiFi signal, packet stats, connected nodes
- **DMX**: Frame rate, universes active, output health
- **Nodes**: Individual Pulse node status and history
- **Logs**: Recent events and errors

## Factory Reset

### Soft Reset (Preserves Data)

Use **Settings > System > Restart Services** to restart the AETHER software without losing any data.

### Hard Reset (Clears All Data)

> **Warning**
> This will erase all patches, scenes, and settings!

Use **Settings > System > Factory Reset** to clear all data and return to the initial setup wizard.

### Pulse Node Factory Reset

Hold the **BOOT** button for 10 seconds while powering on to reset the node and return to setup mode.

## Getting Help

### Community Support

- **Discord**: Join our community server for real-time help
- **Email**: Reach out to the team at hello@aetherdmx.com

### When Reporting Issues

Include this information for faster resolution:

1. AETHER version (shown in **Settings > About**)
2. Hardware configuration (Pi model, number of Pulse nodes)
3. Steps to reproduce the issue
4. Screenshots or video if possible
5. Any error codes displayed on the Pulse node OLED
