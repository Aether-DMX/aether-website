---
title: "AETHER DMX — Hardware Setup"
description: "Hardware overview, assembly tips, and physical installation guidance for AETHER DMX."
order: 3
version: "v0.9 Beta"
---

# Hardware Setup Guide

This guide covers the physical setup of your AETHER DMX hardware, including the controller and DMX nodes.

## Portal (Controller) Setup

### What You Need

| Component | Recommended |
|-----------|-------------|
| Single Board Computer | Raspberry Pi 5 (8GB) |
| Display | Official Raspberry Pi 7" Touch Display |
| Power Supply | Official Pi 5 27W USB-C PD |
| MicroSD Card | 64GB A2 rated |
| Case (optional) | SmartiPi Touch Pro or similar |
| Heatsink/Fan | Active cooler for Pi 5 |

### Assembly

1. Mount the Pi on the display standoffs using the included screws
2. Connect the display ribbon cable (metal contacts facing the board)
3. Connect the power jumper wires from the display to the Pi
4. Insert the flashed microSD card
5. Connect power — no additional setup needed

### Enclosure Options

- **SmartiPi Touch Pro**: Professional desktop stand with rear cable management
- **Wall-mount**: VESA mount adapter for permanent installation
- **Rack-mount**: 1U or 2U enclosure for server room installations

## Pulse Node (DMX Output) Setup

### Beta Hardware Program

- **First 5 beta users**: Receive a free pre-assembled DMX node kit
- **All other beta users**: Receive a detailed hardware spec sheet to build your own, or can purchase pre-assembled kits from our upcoming store

### Connecting Your Nodes

1. Power on the Pulse node via USB-C
2. The node automatically finds your AETHER controller
3. Status indicator turns green when connected
4. Assign the node to a DMX universe in the AETHER UI

### DMX Output

Each node has one or two XLR outputs for connecting to your DMX fixtures. Simply run a standard DMX cable from the node to your fixture chain.

## DMX Wiring Best Practices

- Use proper DMX cable (shielded twisted pair), not microphone cable
- Add a termination plug at the end of long DMX runs
- Don't exceed 400 meters total cable length per universe
- Use optically isolated splitters when feeding many fixtures
- Keep DMX cables away from power cables to reduce interference
- Test each run before connecting expensive fixtures

## Testing Your Installation

### Pre-Power Checklist

1. Verify all cable connections are secure
2. Confirm proper polarity on power connections
3. Ensure XLR connectors are seated fully

### Initial Power-Up

1. Power on the controller first and wait for it to boot (~45 seconds)
2. Power on Pulse nodes one at a time
3. Verify each node appears in the AETHER UI under **Nodes**
4. Connect a fixture and test with **Live Control**

> **Need Help?**
> Beta users receive hands-on setup support from the dev team. Join our Discord or email support@aetherdmx.com.
