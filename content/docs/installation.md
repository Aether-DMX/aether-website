---
title: "AETHER DMX — Installation"
description: "How to get AETHER DMX up and running on your Raspberry Pi controller."
order: 2
version: "v0.9 Beta"
---

# Installation Guide

This guide covers getting AETHER DMX up and running on your Raspberry Pi controller.

## Portal Installation (Raspberry Pi)

### Pre-built Image (Recommended)

The easiest way to get started is with the AETHER OS image. This includes everything pre-configured and boots directly into the AETHER interface.

1. Download the latest AETHER OS image from your beta invite email
2. Use Raspberry Pi Imager or balenaEtcher to flash the image to your microSD card
3. Insert the microSD card into your Raspberry Pi
4. Connect power and display — the system boots automatically into AETHER

> **Note**
> The pre-built image includes all software and boots directly to the AETHER kiosk interface. No command line setup required.

### First Boot

On first boot, AETHER will:

1. Configure the system automatically
2. Start the dedicated network for your DMX nodes
3. Launch the AETHER control interface
4. Display the setup wizard to guide you through initial configuration

The setup wizard walks you through:

- Naming your system
- Connecting to your venue's internet (optional, for AI features)
- Discovering connected DMX nodes

## Pulse Node Setup

### Connecting Nodes

Pulse nodes come pre-loaded with firmware. Simply power them on and they will automatically connect to your AETHER controller.

1. Power on the Pulse node via USB
2. The node will search for your AETHER controller
3. Once connected, the status indicator turns green
4. The node appears in the AETHER UI under **Nodes**

### Assigning Universes

Once a node is connected:

1. Go to **Nodes** in the AETHER UI
2. Tap the node you want to configure
3. Assign it to a DMX universe
4. Connect your DMX fixtures to the node's output

## Verification

### Check Everything Works

1. Verify the AETHER UI is running on your controller
2. Confirm all Pulse nodes show green status in the Nodes view
3. Connect a DMX fixture to a Pulse node
4. Use **Live Control** to send test values and verify the fixture responds

> **Need Help?**
> If you run into issues, check the Troubleshooting guide or reach out on Discord for support.

## Updating

AETHER checks for updates automatically. When an update is available, you'll see a notification in Settings. Updates can be applied with a single tap.

Pulse node firmware can be updated wirelessly from the AETHER UI under **Settings > Nodes > Update Firmware**.
