---
title: "AETHER DMX — Hardware Setup"
description: "DMX node assembly, wiring diagrams, firmware flashing, and network configuration for AETHER hardware."
order: 3
version: "v0.9 Beta"
---

# Hardware Setup Guide

This guide covers DMX node assembly, wiring diagrams, component selection, and physical installation of AETHER DMX hardware.

## Part 1: Component Selection

### Portal Components

| Component | Recommended Model | Approx. Cost |
|-----------|-------------------|--------------|
| Single Board Computer | Raspberry Pi 5 (8GB) | $80 |
| Display | Official Raspberry Pi 7" Touch Display | $70 |
| Power Supply | Official Pi 5 27W USB-C PD | $12 |
| MicroSD Card | Samsung EVO Plus 64GB A2 | $12 |
| Case (optional) | SmartiPi Touch Pro | $30 |
| Heatsink/Fan | Active cooler for Pi 5 | $5 |

### Pulse Node Components

| Component | Recommended Model | Approx. Cost |
|-----------|-------------------|--------------|
| Microcontroller | ESP32-DevKitC-32 or ESP32-S3-DevKitC | $8-15 |
| RS485 Transceiver | MAX485 module (TTL to RS485) | $2 |
| DMX Connector | 3-pin or 5-pin XLR panel mount | $3-8 |
| OLED Display (optional) | SSD1306 128x64 I2C | $4 |
| Enclosure | Project box or 3D printed | $5-15 |
| Power Supply | 5V 1A USB or 12-24V DC adapter | $5 |

> ℹ️ **Note**  
> Total cost per Pulse node: approximately $25-50 depending on enclosure and connector choices.

## Part 2: Pulse Node Wiring

### ESP32 to MAX485 Connection

The MAX485 module converts TTL serial to RS485 differential signaling required for DMX. Low-quality MAX485 clones vary significantly in reliability; reputable modules from established suppliers are recommended for production installs.

| ESP32 Pin | MAX485 Pin | Function |
|-----------|------------|----------|
| GPIO17 (TX2) | DI | Data In (transmit to DMX) |
| GPIO16 (RX2) | RO | Receive Out (not used for output-only) |
| GPIO4 | DE + RE (tied) | Driver Enable (HIGH for transmit) |
| 3.3V | VCC | Power supply |
| GND | GND | Ground |

### MAX485 to XLR DMX Output

| MAX485 Pin | XLR Pin | DMX Signal |
|------------|---------|------------|
| A | Pin 3 | Data+ (hot) |
| B | Pin 2 | Data- (cold) |
| GND | Pin 1 | Shield/Ground |

> ⚠️ **Warning**  
> Always use shielded twisted-pair cable for DMX runs. Connect the shield to Pin 1 at one end only to prevent ground loops.

### Optional OLED Display

Connect the SSD1306 OLED for visual status feedback:

| OLED Pin | ESP32 Pin | Function |
|----------|-----------|----------|
| VCC | 3.3V | Power (3.3V only!) |
| GND | GND | Ground |
| SCL | GPIO22 | I2C Clock |
| SDA | GPIO21 | I2C Data |

### Dual Universe Configuration

For nodes with two DMX outputs, use a second MAX485 module:

| ESP32 Pin | Second MAX485 | Function |
|-----------|---------------|----------|
| GPIO25 (or custom) | DI | Universe 2 TX |
| GPIO5 | DE + RE | Driver Enable 2 |
| 3.3V | VCC | Power |
| GND | GND | Ground |

## Part 3: Wiring Diagrams

### Basic Single-Universe Pulse Node

The following diagram shows the minimum viable Pulse node configuration:

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────┐
│    ESP32        │     │   MAX485     │     │  XLR Output │
│                 │     │              │     │             │
│  3.3V ─────────────── VCC           │     │             │
│  GND  ─────────────── GND ───────────────── Pin 1 (Gnd) │
│                 │     │              │     │             │
│  GPIO17 (TX2) ─────── DI            │     │             │
│  GPIO4  ───────────── DE            │     │             │
│          └────────── RE            │     │             │
│                 │     │              │     │             │
│                 │     │  A ────────────── Pin 3 (Data+) │
│                 │     │  B ────────────── Pin 2 (Data-) │
└─────────────────┘     └──────────────┘     └─────────────┘
```

### Power Supply Options

**Option 1: USB Power (5V)**

Simplest option - power the ESP32 directly via USB. Suitable for most installations.

**Option 2: DC Barrel Jack (12-24V)**

Use a buck converter to step down to 5V for the ESP32. Allows sharing power with fixtures.

```
12-24V DC Input ──► Buck Converter (LM2596) ──► 5V ──► ESP32 VIN
```

**Option 3: PoE Splitter**

For network-powered installations, use a passive PoE splitter to extract power from Ethernet.

## Part 4: Portal Assembly

### Display Connection

The official Raspberry Pi 7-inch touchscreen connects via the DSI ribbon cable:

1. Mount the Pi on the display standoffs using the included screws
2. Connect the DSI ribbon cable to the Pi (metal contacts facing the board)
3. Connect the power jumper wires from the display to the Pi GPIO (5V and GND)
4. No drivers required - the display works immediately with Raspberry Pi OS

### Enclosure Recommendations

For a clean installation, consider these enclosure options:

- **SmartiPi Touch Pro**: Professional desktop stand with rear cable management
- **Wall-mount**: 3D printed bracket or VESA mount adapter
- **Rack-mount**: 1U or 2U enclosure for server room installations

## Part 5: Network Infrastructure

### Small Venue (1-10 Pulse Nodes)

The Portal built-in WiFi is sufficient for small installations:

- Portal creates AETHER-DMX WiFi network
- Pulse nodes connect directly to Portal
- Range: approximately 30-50 feet depending on obstacles

### Medium Venue (10-50 Pulse Nodes)

Add external WiFi infrastructure for better coverage:

1. Connect Portal to venue Ethernet
2. Configure venue WiFi access points with AETHER-DMX SSID
3. All nodes connect to the same network
4. Portal broadcasts sACN multicast to all nodes

### Large Venue (50+ Pulse Nodes)

For large installations, consider:

- Multiple VLANs with multicast routing
- Wired Ethernet backhaul to node locations
- Aether Seance repeaters for network extension (planned)
- Redundant Portal configuration

## Part 6: DMX Wiring Best Practices

- Use 120-ohm termination resistors at the end of long DMX runs
- Do not exceed 400 meters total cable length per universe
- Use optically isolated splitters when feeding multiple fixtures
- Keep DMX cables away from power cables to reduce interference
- Test each run with a DMX tester before connecting expensive fixtures

> ⚠️ **Warning**  
> While AETHER Pulse nodes include some error correction, proper DMX wiring is essential for reliable operation.

## Part 7: Testing Your Installation

### Pre-Power Checklist

1. Verify all connections match the wiring diagrams
2. Check for solder bridges or loose connections
3. Confirm proper polarity on power connections
4. Ensure XLR connectors are wired correctly

### Initial Power-Up

1. Power on the Portal first and wait for boot (approximately 45 seconds)
2. Power on Pulse nodes one at a time
3. Check OLED display (if equipped) for WiFi connection status
4. Verify nodes appear in Portal UI under **Nodes**

### DMX Output Test

1. Connect a DMX tester or simple fixture to each Pulse node
2. Use the Portal **Live Control** to send test values
3. Verify all channels respond correctly
4. Test full range (0-255) on each channel
