---
title: "AETHER DMX — Getting Started"
description: "Quick start guide covering system overview, key features, and basic concepts for new AETHER DMX users."
order: 1
version: "v0.9 Beta"
---

# Getting Started with AETHER DMX

Welcome to AETHER DMX, an AI-powered architectural lighting control system that brings professional DMX control to venues of all sizes through modular, affordable hardware.

> **Beta Notice**
> AETHER DMX is currently in private beta. Some features described in this documentation may be refined or expanded in future releases.

## What is AETHER DMX?

AETHER DMX is a modular, intelligent lighting control platform designed to replace expensive proprietary DMX controllers. The system consists of two main components:

- **Aether Portal**: A Raspberry Pi-based controller with a touchscreen running the AETHER control software
- **Aether Pulse**: DMX nodes that provide distributed DMX output throughout your venue, connected wirelessly or via Ethernet

## Key Features

### AI-Powered Scene Design

Unlike traditional lighting controllers, AETHER DMX integrates natural language AI capabilities. Simply describe what you want in plain English, and the system generates professional lighting scenes, chases, and shows automatically.

### DMX Nodes — Wired or Wireless

Place DMX nodes anywhere in your venue — connect them wirelessly or via Ethernet on AETHER's dedicated network. Each node outputs up to 2 universes of DMX to your fixtures. If the connection drops, nodes keep playing the last look — your lights never go dark unexpectedly.

### Offline-First Design

The system operates completely offline for show control. AI features can optionally use cloud services, but core functionality never requires internet access.

### Control From Any Device

AETHER runs as a web app on its own dedicated network — separate from your venue WiFi. Control it from a dedicated touchscreen, tablet, phone, or laptop — no special software to install.

## System Requirements

### Portal (Main Controller)

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Hardware | Raspberry Pi 4 (4GB) | Raspberry Pi 5 (8GB) |
| Display | Any HDMI touchscreen | 7-inch official Pi display |
| Storage | 32GB microSD | 64GB+ high-endurance microSD |
| Power | 5V 3A USB-C | 5V 5A USB-C PD (Pi 5) |

### Pulse Nodes (DMX Output)

Beta users receive DMX nodes as part of the program, or can build their own from the provided hardware spec sheet. Each node outputs 1-2 DMX universes via wireless or Ethernet connection.

## Supported Fixture Types

AETHER DMX supports a wide range of fixture types through its flexible patching system:

- **Dimmers**: 8-bit and 16-bit single-channel dimmers
- **RGB/RGBW**: LED fixtures with color mixing
- **CCT**: Tunable white fixtures (warm to cool)
- **Moving Heads**: Pan, tilt, color, gobo, and effects channels
- **Pixel Tape**: Individually addressable LED strips via pixel mapping

## Quick Start Checklist

1. Set up your Raspberry Pi controller (see Installation guide)
2. Connect your Pulse nodes to the network
3. Patch your fixtures in the AETHER UI
4. Create your first scene using the Designer or AI assistant

> **Need Help?**
> If you encounter any issues during setup, refer to the Troubleshooting guide or join our community Discord server for support.

## Glossary of Terms

| Term | Definition |
|------|------------|
| DMX512 | Digital Multiplex protocol for lighting control, 512 channels per universe |
| Universe | A single DMX line containing up to 512 channels |
| Patch | The assignment of fixtures to DMX addresses and universes |
| Look | A static lighting snapshot with defined intensity and color values |
| Chase | An animated sequence that cycles through multiple steps |
| Sequence | A multi-step ordered playback with crossfade transitions |
