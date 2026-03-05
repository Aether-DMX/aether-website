---
title: "AETHER DMX — AI Features"
description: "Using the AI scene builder, natural language commands, voice control, and intelligent automation in AETHER DMX."
order: 5
version: "v0.9 Beta"
---

# AI Features Guide

Discover how to use AETHER's AI-powered scene builder, natural language commands, voice control, and intelligent automation to streamline your lighting design workflow.

> **Beta Notice**
> AI features in AETHER DMX are under active development. Core scene generation and natural language commands are functional. Advanced automation features are being expanded throughout the beta period.

## Introduction to AETHER AI

AETHER DMX integrates AI to transform how you create and control lighting. Instead of manually programming every parameter, simply describe what you want in plain English — or say it out loud — and the system generates professional lighting configurations.

### What AI Can Do

- Generate complete scenes from text or voice descriptions
- Create chases and effects from natural language
- Build show timelines with cued changes
- Schedule lighting based on time of day
- Suggest fixture patches and groups
- Troubleshoot issues and optimize output

### AI Modes

**Local Mode:** AI features are disabled. All control is manual through the interface. No internet required.

**Hybrid Mode (Recommended):** AI features available when internet connected. Core control works offline. Best of both worlds.

**Cloud Mode:** Full AI capabilities including advanced scene analysis. Requires internet connection.

## The AI Assistant

### Accessing the Assistant

Tap the **AI button** (star icon) from any screen to open the assistant panel. You can also speak commands aloud when voice mode is enabled in Settings.

### Conversation Style

The AI maintains context throughout your session. You can have natural conversations:

```
You: Create a warm welcome scene for the front wash at 50%
AI: I've created "Warm Welcome" with front wash at 50% using
    3200K warm white. Would you like to preview it?

You: Make it a bit brighter and add some amber to the back
AI: Updated to 65% intensity with back RGB set to amber at 30%.
    Ready to preview or go live?
```

### Command Examples

Here are effective ways to communicate with the AI:

### Creating Scenes

```
"Make a warm, cozy scene at 40%"
"Create a blue wash for the stage with a bit of purple"
"Set up a presentation look — bright white on stage, dim in house"
"Design a romantic dinner atmosphere"
"Give me a dramatic red look for the concert"
```

### Creating Chases

```
"Create a slow rainbow chase across all RGB fixtures"
"Make a fast pulse effect at 120 BPM on the dance floor"
"Set up a gentle color fade between warm and cool"
"Build a theatrical chase left to right across the stage"
```

### Timeline Shows

```
"Build a 3-minute intro sequence starting calm and building intensity"
"Create a sunrise simulation from 6 AM to 7 AM"
"Design a walk-in sequence that fades up over 30 seconds"
```

### Scheduling

```
"Schedule the welcome scene for 7 AM weekdays"
"Turn everything off at midnight"
"Dim to 30% at sunset"
"Create an evening schedule that gradually warms the lights"
```

## Voice Control

### How It Works

AETHER supports voice commands through a built-in speech recognition system. Enable voice mode in **Settings > AI > Voice Control**, then speak naturally — the system transcribes your voice and processes it as an AI command.

### Tips for Voice Commands

- Speak clearly and at a normal pace
- Use the same natural language you'd type
- Voice mode works alongside the text assistant — use whichever is easier in the moment

## The Scene Builder

### AI-Assisted Design Flow

1. Describe your desired look to the AI (text or voice)
2. Review the generated scene configuration
3. Preview on your fixtures before going live
4. Make adjustments via conversation or manual editing
5. Go live with a smooth crossfade

### Preview vs Go Live

The AI always offers to preview before going live. This is especially important for:

- Any scene that might be disruptive (bright flashes, sudden changes)
- Effects that haven't been tested
- Changes during a live event

## Safety & Confirmation

### Automatic Safety Checks

The AI enforces safety rules to prevent accidents:

- Strobe effects above 10Hz require explicit confirmation
- Full blackouts during shows trigger a warning
- UV and laser content needs manual approval
- Sudden full-intensity snaps are smoothed by default

### Confirmation Dialog

When you request something potentially disruptive, the AI will ask:

```
⚠️ This may cause noticeable flashes or interruptions.
   Proceed now, preview first, or cancel?
```

## AI Patch Suggestions

### Auto-Patch Recommendations

When adding new fixtures, the AI can suggest optimal addressing:

```
You: I'm adding 12 new RGB PARs for the dance floor
AI: I suggest patching these to Universe 2, starting at address 1,
    with a 4-channel gap between each fixture for expansion.
    I'll also create a "Dance Floor" group. Proceed?
```

### Group Optimization

The AI can analyze your patch and suggest useful groups:

```
You: Suggest some groups for my current patch
AI: Based on your fixture layout, I recommend:
    - "All RGB" (fixtures 1-20)
    - "Stage Left" (fixtures 1-6)
    - "Stage Right" (fixtures 15-20)
    - "Downstage Wash" (fixtures 7-14)
    Create these groups?
```

## Advanced AI Features

The following features demonstrate the AI's expanding capabilities. Availability may vary during beta as these features are refined.

### Style Presets

Request looks by style name for quick setup:

- **Retail Warm**: Inviting, comfortable retail lighting
- **Gallery Neutral**: Clean, even museum-quality lighting
- **Theater Dramatic**: High contrast, focused stage lighting
- **Concert Energy**: Dynamic, colorful event lighting
- **Restaurant Intimate**: Soft, warm dining atmosphere

### Time-of-Day Intelligence

The AI understands circadian lighting concepts:

```
You: Create an office lighting schedule that follows natural daylight
AI: I'll create a schedule with:
    - Morning (7-9 AM): Cool 5000K to energize
    - Midday (9 AM-4 PM): Neutral 4000K for productivity
    - Evening (4-6 PM): Warm 3200K to wind down
    Want me to add a gradual transition between each?
```

### Learning from Feedback (Planned)

In Cloud Mode, the AI will adapt to your preferences over time:

- Remembers your preferred color temperatures
- Notes which scenes you modify most
- Adapts suggestions based on your venue type
- Improves accuracy based on your feedback

## Troubleshooting with AI

### Diagnostic Assistance

Ask the AI to help diagnose issues:

```
You: Some of my fixtures aren't responding
AI: Let me check. I see Node 2 hasn't reported in 2 minutes.
    This could be a WiFi issue. Try these steps:
    1. Check that the node is powered on
    2. Verify WiFi signal strength
    3. Check the DMX cable connection
    Would you like me to send an identify command to that node?
```

### Output Optimization

The AI can help improve DMX output quality:

```
You: I'm seeing stepping on my pan/tilt movements
AI: I'll adjust the smoothing parameters:
    - Lowering output rate to 40Hz for better motor response
    - Adding critically damped smoothing filter
    - Setting rate limit to 180 degrees/second
    This should eliminate the stepping. Test now?
```

## Privacy & Data

### What Data is Shared

In Hybrid/Cloud mode, the following may be sent to AI services:

- Your text commands and questions
- Patch configuration (fixture types and addresses)
- Scene and show definitions
- No audio, video, or personal information

### Local-Only Mode

Enable **Local Mode** in Settings to disable all AI cloud features. The system will operate completely offline with manual control only.
