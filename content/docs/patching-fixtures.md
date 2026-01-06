---
title: "AETHER DMX — Patching & Fixtures"
description: "How to patch fixtures, manage universes, import fixture profiles, and organize your show in AETHER DMX."
order: 4
version: "v0.9 Beta"
---

# Patching & Fixtures Guide

Learn how to patch fixtures, manage DMX universes, import fixture profiles, and organize your lighting system in AETHER DMX.

## Understanding the Patch

The patch is the core configuration that tells AETHER DMX how your physical fixtures map to DMX addresses. A well-organized patch makes programming faster and troubleshooting easier.

### Key Concepts

**Universe:** A single DMX512 line containing 512 channels. AETHER supports multiple universes, each output through a Pulse node.

**Address:** The starting channel number (1-512) where a fixture begins. Multi-channel fixtures occupy consecutive addresses.

**Footprint:** The number of channels a fixture uses in a particular mode. An RGBW fixture typically uses 4 channels.

**Group:** A logical collection of fixtures that can be controlled together. Examples: Front Wash, Back RGB, Stage Left Movers.

## The Patch Editor

### Accessing the Patch Editor

From the main menu, tap **Patch** to open the patching interface. The editor shows a grid view of all universes and their channel assignments.

### Adding Fixtures

1. Tap **Add Fixture** or use the **+** button
2. Select the fixture type from the library (or create a custom profile)
3. Choose the fixture mode (e.g., 4-channel, 8-channel, 16-bit)
4. Enter the quantity to add
5. Select the starting universe and address
6. Optionally assign to a group
7. Tap **Patch** to confirm

> ℹ️ **Note**  
> AETHER automatically checks for address conflicts and will warn you if fixtures overlap.

### Fixture Library

AETHER includes profiles for common fixture types. Each profile defines:

- Channel layout and functions
- Available modes (basic, extended, 16-bit)
- Color capabilities (RGB, RGBW, CMY, CCT)
- Position ranges for moving fixtures
- Special features (strobes, gobos, effects)

### Built-in Fixture Types

| Type | Channels | Description |
|------|----------|-------------|
| Dimmer | 1 | Single-channel intensity control |
| Dimmer 16-bit | 2 | High-resolution dimmer (coarse + fine) |
| RGB | 3 | Red, Green, Blue color mixing |
| RGBW | 4 | RGB plus dedicated white channel |
| RGBA | 4 | RGB plus amber for warmer tones |
| CCT | 2-3 | Tunable white (warm to cool) |
| Generic 8ch | 8 | Customizable 8-channel profile |
| Generic 16ch | 16 | Customizable 16-channel profile |

## Managing Universes

### Creating Universes

New installations start with Universe 1. To add additional universes:

1. Navigate to **Patch > Universes**
2. Tap **Add Universe**
3. Enter a name (e.g., Stage Left, House Lights)
4. Assign to a Pulse node for output

### Universe Assignment

Each universe must be assigned to a Pulse node for physical output. A single Pulse node can output 1-2 universes depending on hardware configuration.

| Pulse Model | Max Universes | Notes |
|-------------|---------------|-------|
| Pulse Basic | 1 | Single MAX485 output |
| Pulse Dual | 2 | Dual MAX485 outputs |
| Pulse Pro (planned) | 4 | Multiple outputs with failover |

### Virtual Universes

For testing and programming without physical hardware, create a virtual universe that exists only in software. Virtual universes can be previewed in the visualizer but do not output to any Pulse node.

## Working with Groups

### Creating Groups

Groups simplify programming by allowing you to control multiple fixtures together:

1. Select multiple fixtures in the patch view (tap and hold, then tap additional fixtures)
2. Tap **Group Selected**
3. Enter a descriptive name
4. Tap **Create**

### Group Best Practices

- Use descriptive names: "Front Wash" rather than "Group 1"
- Create position-based groups: Stage Left, Stage Right, Upstage
- Create type-based groups: All RGB, All Movers, All Dimmers
- A fixture can belong to multiple groups

### Using Groups in Programming

In the Designer and Live Control views, you can select groups instead of individual fixtures. All AI commands understand group references.

```
Examples:
"Set Front Wash to 80% warm white"
"Fade Back RGB to blue over 3 seconds"
"Create a chase across Stage Left to Stage Right"
```

## Custom Fixture Profiles

### Creating a New Profile

For fixtures not in the library, create a custom profile:

1. Navigate to **Patch > Fixture Library > Create Custom**
2. Enter manufacturer and model name
3. Define each channel with function and range
4. Set color capabilities and special features
5. Save the profile for future use

### Profile Channel Types

| Channel Type | Function | Merge Mode |
|--------------|----------|------------|
| Intensity | Master dimmer | HTP |
| Red | Red color component | HTP |
| Green | Green color component | HTP |
| Blue | Blue color component | HTP |
| White | White/CTO channel | HTP |
| Amber | Amber channel | HTP |
| Pan | Horizontal position | LTP |
| Tilt | Vertical position | LTP |
| Pan Fine | 16-bit pan (LSB) | LTP |
| Tilt Fine | 16-bit tilt (LSB) | LTP |
| Color Wheel | Fixed color selection | LTP |
| Gobo | Pattern selection | LTP |
| Gobo Rotation | Rotating gobo speed | LTP |
| Prism | Prism insertion/rotation | LTP |
| Focus | Beam focus | LTP |
| Zoom | Beam angle | LTP |
| Strobe | Strobe effect | LTP |
| Control | Fixture control channel | LTP |

### Importing GDTF/Fixture Profiles

AETHER supports importing fixture definitions in GDTF format (General Device Type Format). Download .gdtf files from the Open Fixture Library and import via **Patch > Import Profile**.

> ⚠️ **Warning**  
> GDTF import is experimental during beta and may not fully support advanced fixture features. Some modes, macros, and wheel definitions may require manual adjustment. Always verify channel mappings after import.

## Address Allocation

### Manual Addressing

Assign each fixture a specific start address. This gives you complete control but requires careful planning to avoid overlaps.

### Auto-Patch

Let AETHER automatically assign addresses:

1. Select fixtures to auto-patch
2. Tap **Auto-Patch**
3. Choose starting universe and address
4. Select gap between fixtures (0 = contiguous)
5. Confirm the proposed layout

### Address Planning Tips

- Leave gaps between fixture types for future expansion
- Use round numbers for easy mental math (1, 17, 33, 49...)
- Keep similar fixtures in address sequence
- Document your patch with notes

## RDM Support (Advanced)

Remote Device Management allows two-way communication with RDM-compatible fixtures. RDM support is hardware-dependent and not guaranteed across all Pulse node versions or fixture combinations:

- **Identify**: Flash a fixture to locate it physically
- **Set Address**: Change fixture DMX address remotely
- **Set Mode**: Switch fixture personality/mode
- **Get Info**: Read firmware version, lamp hours, errors

> ⚠️ **Warning**  
> RDM requires compatible Pulse node hardware, appropriate firmware, and RDM-enabled fixtures. Availability varies by configuration and is not supported on all setups.

## Backup and Restore

### Exporting Your Patch

Save your patch configuration for backup or transfer:

1. Navigate to **Patch > Export**
2. Choose format (JSON or CSV)
3. Save to USB drive or download

### Importing a Patch

1. Navigate to **Patch > Import**
2. Select the patch file
3. Choose merge behavior (replace all or add to existing)
4. Review and confirm
