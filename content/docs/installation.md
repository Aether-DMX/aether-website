---
title: "AETHER DMX — Installation"
description: "Step-by-step installation instructions for Aether Portal on Raspberry Pi and Pulse node firmware flashing."
order: 2
version: "v0.9 Beta"
---

# Installation Guide

This guide covers the complete installation process for AETHER DMX, including Portal OS setup, Pulse firmware flashing, and network configuration.

## Part 1: Portal Installation (Raspberry Pi)

### Option A: Pre-built Image (Recommended)

Download the latest AETHER OS image from our releases page and flash it to your microSD card.

1. Download the latest `aether-os-*.img.gz` from GitHub releases
2. Use Raspberry Pi Imager or balenaEtcher to flash the image
3. Insert the microSD card into your Raspberry Pi
4. Connect power and display - the system will boot automatically

> ℹ️ **Note**  
> The pre-built image includes all dependencies and boots directly to the AETHER kiosk interface.

### Option B: Manual Installation

> ⚠️ **Warning**  
> Manual installation is intended for advanced users comfortable with Linux system administration. Beta users are strongly encouraged to use the pre-built image.

For advanced users who want to install on an existing Raspberry Pi OS installation:

**Step 1: Install Raspberry Pi OS Lite (64-bit, Bookworm)**

```bash
# Download and flash using Raspberry Pi Imager
# Choose: Raspberry Pi OS Lite (64-bit)
# Configure WiFi and SSH in the imager settings
```

**Step 2: Initial System Setup**

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git python3-pip python3-venv nodejs npm
sudo apt install -y libgl1-mesa-glx ola cage
```

**Step 3: Clone the AETHER Repository**

```bash
cd /home/aether
git clone https://github.com/Aether-DMX/aether-core.git
cd aether-core
```

**Step 4: Install Python Dependencies**

```bash
pip install -r requirements.txt --break-system-packages
# Or use a virtual environment:
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**Step 5: Build the React Frontend**

```bash
cd frontend
npm install
npm run build
cd ..
```

**Step 6: Configure systemd Service**

```bash
sudo cp systemd/aether-core.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable aether-core
sudo systemctl start aether-core
```

**Step 7: Configure WiFi Access Point**

The Portal creates its own WiFi network for Pulse nodes to connect to.

```bash
# Edit hostapd configuration
sudo nano /etc/hostapd/hostapd.conf

# Set your network name and password:
ssid=AETHER-DMX
wpa_passphrase=your_secure_password

# Enable and start hostapd
sudo systemctl unmask hostapd
sudo systemctl enable hostapd
sudo systemctl start hostapd
```

### Boot Configuration

For kiosk mode without desktop, add these settings:

**/boot/firmware/config.txt:**

```ini
# Enable DRM/KMS driver for Wayland
dtoverlay=vc4-kms-v3d

# Disable splash and quiet boot
disable_splash=1

# GPU memory allocation
gpu_mem=256

# For 7-inch official display
dtoverlay=vc4-kms-dsi-7inch
```

**/boot/firmware/cmdline.txt:**

```
# Add to existing line (do not create new lines):
quiet splash plymouth.ignore-serial-consoles logo.nologo
```

## Part 2: Pulse Node Firmware

### Requirements

- ESP32-DevKitC-32 or ESP32-S3 development board
- USB cable for flashing
- PlatformIO IDE (VS Code extension) or Arduino IDE

### Flashing with PlatformIO (Recommended)

```bash
# Clone the Pulse firmware repository
git clone https://github.com/Aether-DMX/aether-pulse.git
cd aether-pulse

# Build and upload
pio run -t upload

# Monitor serial output
pio device monitor
```

### Configuration

Edit the configuration file before flashing to set WiFi credentials and node identity:

**src/config.h:**

```cpp
#define WIFI_SSID "AETHER-DMX"
#define WIFI_PASSWORD "your_secure_password"

#define NODE_NAME "Pulse-001"
#define DMX_UNIVERSE_1 1
#define DMX_UNIVERSE_2 2  // Set to 0 if using only one universe

#define SACN_MULTICAST true
#define SACN_PORT 5568
```

### First Boot

After flashing, the Pulse node will:

1. Attempt to connect to the configured WiFi network
2. Display connection status on the OLED (if connected)
3. Begin listening for sACN multicast packets
4. Output DMX data when frames are received

> ⚠️ **Warning**  
> If connection fails, the node will retry every 5 seconds. Check that the Portal WiFi AP is running and credentials match.

## Part 3: Network Configuration

### Default Network Settings

| Setting | Value |
|---------|-------|
| Portal IP | 192.168.4.1 |
| DHCP Range | 192.168.4.10 - 192.168.4.100 |
| Subnet Mask | 255.255.255.0 |
| sACN Multicast | 239.255.0.x (where x = universe) |
| Web UI Port | 5000 |
| sACN Port | 5568 |

### Connecting to External Networks

The Portal can simultaneously connect to an external WiFi network for AI features while hosting its own AP for Pulse nodes:

```bash
# Configure wlan0 as client to external network
sudo nmcli device wifi connect "YourNetworkName" password "password"

# The AP runs on wlan0:0 virtual interface
```

## Part 4: Verification

### Check Portal Status

```bash
# Check service status
sudo systemctl status aether-core

# View logs
journalctl -u aether-core -f

# Check WiFi AP
iwconfig
hostapd_cli status
```

### Check Pulse Node Connection

On the Portal touchscreen, navigate to **Nodes** to see connected Pulse nodes. Each node should show:

- Green status indicator (connected)
- Node name and firmware version
- Assigned universe(s)
- Last seen timestamp

### Test DMX Output

1. Connect a DMX fixture to a Pulse node
2. In the Portal UI, go to **Live Control**
3. Set Universe 1, Channel 1 to 100%
4. Verify the fixture responds

> ℹ️ **Note**  
> If DMX output is not working, check the Troubleshooting guide for common issues.

## Updating the System

### Portal Updates

```bash
cd /home/aether/aether-core
git pull origin main
pip install -r requirements.txt --break-system-packages
cd frontend && npm install && npm run build
sudo systemctl restart aether-core
```

### Pulse Firmware Updates

OTA updates can be triggered from the Portal UI under **Settings > Nodes > Update Firmware**. Alternatively, connect the node via USB and reflash manually.

> ℹ️ **Note**  
> Manual installations may require additional troubleshooting and are not fully supported during early beta. For the smoothest experience, use the pre-built image.
