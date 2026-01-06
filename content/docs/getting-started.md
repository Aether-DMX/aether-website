---
title: "AETHER DMX — Getting Started"
description: "Quick start guide covering system requirements, architecture overview, and basic concepts for new AETHER DMX users."
order: 1
version: "v0.9 Beta"
---

# Getting Started with AETHER DMX

Welcome to AETHER DMX, an AI-powered architectural lighting control system that brings professional DMX control to venues of all sizes through modular, affordable hardware.

> ℹ️ **Beta Notice**  
> AETHER DMX is currently in private beta, with a focus on core playback, patching, and stability. Some features described in this documentation may be refined or expanded in future releases.

## What is AETHER DMX?

AETHER DMX is a modular, intelligent lighting control platform designed to reduce reliance on expensive proprietary DMX controllers. The system consists of two main components:

- **Aether Portal**: A Raspberry Pi 5-based controller hub with a 7-inch touchscreen running the AETHER control software
- **Aether Pulse**: ESP32-based wireless DMX nodes that provide distributed DMX output throughout your venue

## Key Features

### AI-Powered Scene Design

Unlike traditional lighting controllers, AETHER DMX integrates natural language AI capabilities. Simply describe what you want in plain English, and the system generates professional lighting scenes, chases, and shows automatically.

### Distributed Architecture

The system uses a hub-and-spoke model where the central Portal manages multiple wireless Pulse nodes. Each Pulse node handles local DMX timing and output, ensuring reliable performance even with dozens of universes.

### Professional Protocols

AETHER DMX uses industry-standard protocols including sACN/E1.31 for network transport and DMX512-A for fixture output. This ensures compatibility with virtually all professional lighting equipment.

### Offline-First Design

The system operates completely offline for show control. AI features can optionally connect to cloud services, but core functionality never requires internet access.

## System Requirements

### Portal (Main Controller)

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Hardware | Raspberry Pi 4 (4GB) | Raspberry Pi 5 (8GB) |
| Display | 7-inch touchscreen | 7-inch official Pi display |
| Storage | 32GB microSD | 64GB+ high-endurance microSD |
| Power | 5V 3A USB-C | 5V 5A USB-C PD (Pi 5) |
| Network | WiFi built-in | WiFi + Ethernet for large installs |

### Pulse Nodes (DMX Output)

| Component | Specification |
|-----------|---------------|
| Microcontroller | ESP32-DevKitC-32 or ESP32-S3 |
| DMX Interface | MAX485 RS485 transceiver module |
| Display (optional) | SSD1306 128x64 OLED |
| Power | 5V via USB or 12-24V DC |
| Outputs | 1-2 DMX universes per node |

> ℹ️ **Note**  
> Total cost per Pulse node: approximately $25-50 depending on enclosure and connector choices.

## Architecture Overview

The AETHER DMX system uses a modern distributed architecture:

1. The Portal runs the AETHER Core service, which manages scenes, patches, and playback
2. The Portal broadcasts a WiFi access point (AETHER-DMX network) for Pulse nodes
3. Pulse nodes connect to this network and receive sACN/E1.31 multicast data
4. Each Pulse node converts network data to physical DMX512 output
5. The React-based touchscreen UI provides real-time control and monitoring

## Supported Fixture Types

AETHER DMX supports a wide range of fixture types through its flexible patching system:

- **Dimmers**: 8-bit and 16-bit single-channel dimmers
- **RGB/RGBW**: LED fixtures with color mixing
- **CCT**: Tunable white fixtures (warm to cool)
- **Moving Heads**: Pan, tilt, color, gobo, and effects channels
- **Pixel Tape**: Individually addressable LED strips via pixel mapping

## Quick Start Checklist

1. Gather your hardware (see Hardware Setup guide)
2. Flash the AETHER OS image to your Pi (see Installation guide)
3. Flash firmware to your ESP32 Pulse nodes
4. Connect Pulse nodes to the AETHER-DMX WiFi network
5. Patch your fixtures in the AETHER UI
6. Create your first scene using the Designer or AI assistant

> ℹ️ **Need Help?**  
> If you encounter any issues during setup, refer to the Troubleshooting guide or join our community Discord server for support.

## Next Steps

Continue with the Installation guide to set up your AETHER Portal and Pulse nodes. If you already have hardware ready, you can skip ahead to Hardware Setup for wiring diagrams and assembly instructions.

## Glossary of Terms

| Term | Definition |
|------|------------|
| DMX512 | Digital Multiplex protocol for lighting control, 512 channels per universe |
| Universe | A single DMX512 line containing up to 512 channels |
| sACN/E1.31 | Streaming ACN - protocol for sending DMX data over Ethernet/WiFi |
| Patch | The assignment of fixtures to DMX addresses and universes |
| Scene | A static lighting look with defined intensity and color values |
| Chase | An animated sequence that cycles through multiple steps |
| Show | A timeline-based program with cued scene changes and effects |
| HTP | Highest Takes Precedence - merge mode for intensity values |
| LTP | Latest Takes Precedence - merge mode for color and position values |
| OLA | Open Lighting Architecture - the DMX transport layer used by AETHER |
