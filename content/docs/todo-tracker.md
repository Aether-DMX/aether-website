---
title: "AETHER DMX — TODO Tracker"
description: "Known gaps, verification tasks, and planned improvements during the AETHER DMX beta period."
order: 7
version: "v0.9 Beta"
---

# Documentation TODO Tracker

This document tracks known gaps, verification tasks, and planned improvements during the AETHER DMX beta period.

This document is primarily for internal tracking and transparent beta communication. It provides visibility into what is complete, what needs verification, and what is planned for future releases.

> ⚠️ **Maintenance Note**  
> Review this document regularly and update as items are completed or requirements change.

## Getting Started

| Item | Status | Notes |
|------|--------|-------|
| Verify system requirements table | TODO | Confirm min Pi 4 support |
| Add link to releases page | TODO | Waiting for public GitHub repo |
| Screenshot of main UI | TODO | Capture after UI polish complete |
| Discord invite link | TODO | Create permanent invite |
| Confirm pricing tiers | TODO | Creator $19/Pro $39 per launch roadmap |

## Installation

| Item | Status | Notes |
|------|--------|-------|
| Pre-built image download URL | TODO | Host on GitHub releases or S3 |
| Verify manual install steps on fresh Pi | TODO | Test full procedure |
| hostapd configuration example | TODO | Verify with current sACN setup |
| OTA update procedure | TODO | Document when OTA is implemented |
| Verify Python dependencies list | TODO | Check requirements.txt is current |
| Document PlatformIO version | TODO | Confirm compatible versions |

## Hardware Setup

| Item | Status | Notes |
|------|--------|-------|
| Wiring diagrams - create visual versions | TODO | ASCII art is placeholder |
| Bill of materials with purchase links | TODO | Add Amazon/DigiKey links |
| 3D printed enclosure files | TODO | Host STL files on GitHub |
| Photo of assembled Pulse node | TODO | Take reference photos |
| Power consumption measurements | TODO | Measure actual current draw |
| Confirm dual-universe GPIO pins | TODO | Verify with firmware |
| PoE splitter recommendations | TODO | Test and document models |

## Patching & Fixtures

| Item | Status | Notes |
|------|--------|-------|
| Screenshot of patch editor | TODO | After UI complete |
| Built-in fixture profile list | TODO | Document all included profiles |
| GDTF import status | TODO | Confirm experimental state |
| RDM hardware requirements | TODO | Which Pulse versions support RDM? |
| Export format specification | TODO | Document JSON schema |
| Maximum fixtures/universes tested | TODO | Performance benchmarks |

## AI Features

| Item | Status | Notes |
|------|--------|-------|
| API endpoint documentation | TODO | Internal or public? |
| Rate limits | TODO | Confirm with Anthropic pricing |
| Offline AI capabilities | TODO | Local LLM option? |
| ALDL specification document | TODO | Full grammar reference |
| Style preset list | TODO | Document all presets |
| Privacy policy link | TODO | Needs legal review |
| Voice mode documentation | TODO | If/when implemented |

## Troubleshooting

| Item | Status | Notes |
|------|--------|-------|
| Complete error code list | TODO | Document all E01-E99 codes |
| Log file locations | TODO | Verify paths |
| Known issues list | TODO | Beta blockers |
| Recovery image procedure | TODO | Emergency restore steps |
| Support email/contact | TODO | Set up support system |
| Warranty information | TODO | Legal/business decision |

## General Documentation Tasks

| Item | Status | Notes |
|------|--------|-------|
| Version number system | TODO | Semantic versioning plan |
| Changelog format | TODO | Keep a CHANGELOG |
| Video tutorials | TODO | Script and record |
| Quick reference card | TODO | 1-page PDF |
| Multi-language support | TODO | Spanish, French priority? |
| Accessibility review | TODO | Screen reader compatibility |
| Print stylesheet | TODO | For PDF export |

## Technical Verification Needed

### Portal Software

- [ ] Confirm React frontend build process
- [ ] Verify Flask backend API endpoints
- [ ] Test SQLite database migrations
- [ ] Confirm OLA integration status
- [ ] Verify sACN multicast configuration
- [ ] Test systemd service restart behavior

### Pulse Firmware

- [ ] Confirm ESP32 vs ESP32-S3 compatibility
- [ ] Verify GPIO pin assignments
- [ ] Test WiFi reconnection behavior
- [ ] Confirm sACN packet parsing
- [ ] Test DMX timing accuracy
- [ ] Verify OLED display driver

### Network

- [ ] Test max Pulse nodes per AP
- [ ] Measure actual latency
- [ ] Test multicast across subnets
- [ ] Verify DHCP range is sufficient

## Content to Add After Beta

- Real-world installation case studies
- Customer testimonials
- Performance benchmarks
- Comparison with competitors
- ROI calculator
- Dealer/integrator program info

## Priority Matrix

Items ranked by importance for Beta 1 release:

### P0 - Critical (Must Have)

- Pre-built image download link
- Basic wiring diagrams
- Installation verification
- Error code documentation

### P1 - High (Should Have)

- Video tutorials
- Complete troubleshooting guide
- Fixture profile documentation
- AI command examples

### P2 - Medium (Nice to Have)

- 3D enclosure files
- Multi-language support
- Quick reference card
- Case studies

### P3 - Low (Future)

- Dealer program documentation
- Enterprise deployment guide
- Custom integration APIs
- Certification program
