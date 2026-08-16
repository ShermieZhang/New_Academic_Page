---
name: Shimin Zhang Academic Profile
description: A Monet-toned academic atlas for research, teaching, credentials, and contact.
colors:
  ink: "#2d2940"
  muted: "#625c70"
  paper: "#faf8fb"
  lavender: "#d8d0ec"
  violet: "#7669a0"
  violet-deep: "#5d527f"
  blush: "#edcfdc"
  blue: "#c9d9ee"
  jade: "#c8ddd7"
  yellow: "#f2e5ae"
typography:
  display:
    fontFamily: "Bodoni MT, Didot, Songti SC, STSong, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(2.375rem, 4.8vw, 4rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Segoe UI, Microsoft YaHei, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Segoe UI, Microsoft YaHei, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.15em"
rounded:
  none: "0"
spacing:
  xs: "8px"
  sm: "16px"
  md: "28px"
  lg: "48px"
  xl: "74px"
components:
  button-primary:
    backgroundColor: "{colors.violet-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
  button-secondary:
    backgroundColor: "rgba(255,255,255,.7)"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
---

# Design System: Shimin Zhang Academic Profile

## Overview

**Creative North Star: "The Monet Research Atlas"**

The site behaves like five consecutive chapters of one personal academic atlas. Visitors can read the complete profile by scrolling, while the persistent navigation acts as a fast chapter index. Pale color fields, porcelain-like reading surfaces, precise rules, and restrained mineral texture provide personality without weakening scholarly clarity. Typography carries most of the authority; imagery is atmospheric and never used as a pseudo-rigorous diagram.

**Key Characteristics:**

- English identity leads; Chinese identity is a quiet secondary signature.
- Moderately scaled editorial serif headings establish presence, while generously sized sans-serif text keeps the evidence comfortable to read.
- Lavender, blush, blue, yellow, and jade appear as low-saturation fields rather than scattered accents.
- Square edges and fine rules keep the composition disciplined.

## Colors

The full palette is soft and luminous, with dark violet-gray ink maintaining academic legibility.

**The Pale Field Rule.** Colored regions remain light enough to read as atmosphere; important text never depends on translucency alone.

## Typography

**Display Font:** Bodoni MT or Didot, falling back to Palatino/Georgia and Songti for Chinese.

**Body Font:** Segoe UI or Microsoft YaHei, falling back to Arial.

Display type is elegant and personal; body and label type remain neutral and highly legible. The display scale is intentionally restrained so chapter titles do not overpower the scholarship, while body copy and metadata are larger than conventional portfolio microtype. Headings use tight but not compressed tracking, and paragraphs stay within readable measures.

## Layout

The five chapters form one uninterrupted document, with distinct tonal fields marking each transition. Desktop chapters use a centered 1180px reading width, a persistent 76px navigation bar, and asymmetric editorial grids. Each navigation item points to a section anchor and the active underline follows the reader's scroll position. Mobile collapses every grid to a single column at 850px while preserving the full five-item navigation in a horizontal scroller. Section spacing follows a quiet 8/16/28/48/74px rhythm.

## Elevation & Depth

Most surfaces are flat and separated by tonal fields or one-pixel rules. Shadows are reserved for the portrait and major contact/teaching surfaces, always with visible offset and soft blur.

**The Flat Evidence Rule.** Research evidence and credentials use rules and spacing, not floating cards.

## Shapes

The system is square-edged. The one exception is the organic feathered mask around the Home name texture, whose irregular edge must dissolve into the background rather than read as a crystal plaque.

## Components

### Buttons

Buttons are square, compact, and label-driven. Primary actions use deep violet with white text; secondary actions use a translucent paper surface with a fine violet border. Focus rings are always visible.

### Navigation

Navigation is a translucent sticky paper strip and a quick index into the continuous page. Active state follows the visible chapter and is expressed by a short pink-lavender-blue underline and `aria-current`, not by a filled tab.

### Research Architecture

Research content is organized into labeled horizontal strata: domains, economic questions, outcomes, and approaches. This prevents visual position from implying false one-to-one relationships.

### Academic Ledger

Education uses a vertical rule with diamond markers and right-aligned dates on desktop; mobile moves dates under each degree without losing order.

## Do's and Don'ts

### Do:

- **Do** let typographic hierarchy and verified evidence carry the page.
- **Do** use the approved artwork only as atmospheric background material.
- **Do** keep the research framework explicitly labeled by logical category.

### Don't:

- **Don't** restore a Publications section without real publication evidence.
- **Don't** use decorative crypto icons or node positions to imply unsupported conceptual mappings.
- **Don't** enlarge the Chinese name until it competes with the English name.
- **Don't** introduce lotus imagery, saturated fluorite edges, generic glass cards, or blue-gold finance-template styling.
