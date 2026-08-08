---
name: Cosmic Protocol
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#47464e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#77767e'
  outline-variant: '#c8c5ce'
  surface-tint: '#5a5b7f'
  primary: '#020221'
  on-primary: '#ffffff'
  primary-container: '#1a1b3b'
  on-primary-container: '#8283a9'
  inverse-primary: '#c3c3ec'
  secondary: '#5e39e0'
  on-secondary: '#ffffff'
  secondary-container: '#7757fa'
  on-secondary-container: '#fffbff'
  tertiary: '#000609'
  on-tertiary: '#ffffff'
  tertiary-container: '#00222b'
  on-tertiary-container: '#0092b1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c3c3ec'
  on-primary-fixed: '#171838'
  on-primary-fixed-variant: '#434466'
  secondary-fixed: '#e6deff'
  secondary-fixed-dim: '#cabeff'
  on-secondary-fixed: '#1c0062'
  on-secondary-fixed-variant: '#4816cb'
  tertiary-fixed: '#b4ebff'
  tertiary-fixed-dim: '#3cd7ff'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is engineered for the Secretary Division, balancing administrative precision with an "astro" thematic flair. The brand personality is professional, orderly, and visionary. It aims to evoke a sense of "organized exploration"—where the vastness of organizational data is navigated with the clarity of a star map.

The design style is **Corporate Modern with subtle Glassmorphism**. It utilizes deep, cosmic backgrounds contrasted against clean white surfaces and vibrant violet accents. High-quality whitespace ensures legibility, while translucent layers and soft gradients provide the "cosmic" depth requested, ensuring the UI feels expansive yet structured.

## Colors
The palette is rooted in the "Deep Space" primary blue, used for high-level navigation and grounding elements. The "Astro Purple" serves as the primary action color, providing a modern, energetic spark for buttons and active states.

- **Primary (Deep Space):** #1A1B3B — Used for headers, sidebars, and primary text.
- **Secondary (Astro Purple):** #7C5CFF — Used for primary CTAs, links, and focus states.
- **Accent (Nebula Blue):** #00D4FF — Used sparingly for success indicators and highlights.
- **Surface (Clean White):** #FFFFFF — The primary background for content cards to maintain high readability.
- **Background (Cosmic Tint):** #F8FAFC — A very light, cool grey to differentiate the background from card surfaces.

## Typography
This design system uses **Hanken Grotesk** as the primary typeface. Its contemporary grotesque DNA provides a sharp, professional look that remains friendly and highly legible. For technical data or administrative metadata, **JetBrains Mono** is used to provide a subtle "technical/log" aesthetic appropriate for a Secretary Division.

Headlines should use tighter letter spacing and heavier weights to anchor the page. Body text maintains a generous line height to facilitate long-form reading of minutes, reports, and documentation.

## Layout & Spacing
The system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

The layout philosophy centers on "Clustered Information," where related administrative tasks are grouped into distinct cards. Vertical rhythm is maintained through a 4px baseline grid. Large sections are separated by "Atmospheric Space" (48px - 80px) to prevent the professional density of secretarial work from becoming overwhelming. 

On mobile, margins compress to 16px, and multi-column card layouts stack vertically to maintain tap-target integrity.

## Elevation & Depth
The design system employs **Tonal Layers** combined with **Ambient Shadows**. 

1. **The Void (Level 0):** The base background, either solid `Deep Space` or `Cosmic Tint`.
2. **The Vessel (Level 1):** Primary content cards using `Clean White`. They feature a very soft, diffused shadow (15% opacity Astro Purple) to give a floating, weightless effect.
3. **The Focus (Level 2):** Modals and dropdowns, which use a subtle backdrop blur (12px) to simulate frosted glass, allowing the "cosmic" background colors to bleed through slightly.

Shadows should never be pure black; they are always tinted with the primary `Deep Space` or `Astro Purple` to maintain the thematic color harmony.

## Shapes
The shape language is **Rounded**, conveying friendliness and modern accessibility. 

Standard components (Cards, Inputs) use a 0.5rem (8px) radius. Larger containers or hero sections may use the 1.5rem (24px) radius to create a softer, more inviting enclosure. This avoids the harshness of sharp corners, aligning with the "modern and friendly" requirement.

## Components

### Buttons
Primary buttons are solid `Astro Purple` with white text. They feature a subtle outer glow on hover, simulating a light-emitting source in space. Secondary buttons use a `Deep Space` outline with a transparent fill.

### Interactive Cards
Cards are the workhorse of this system. They must feature a white background, 8px corner radius, and a 1px border in a very light purple tint. **Hover Effect:** On hover, the card should lift slightly (translate -4px Y) and the border color should transition to `Nebula Blue` with a soft glow effect.

### Input Fields
Inputs are clean with a light grey fill and a bottom-only 2px border that "activates" by filling with a gradient from `Astro Purple` to `Nebula Blue` when focused.

### Chips & Tags
Used for categorizing documents or status. These should use a semi-transparent version of the status color (e.g., 10% Purple fill with 100% Purple text) to maintain a "glassy" appearance without losing readability.

### Section Headers
Headers should always be accompanied by a small "Orbital" icon or a 4px thick vertical line in `Astro Purple` to the left of the text to signify a start-point in the layout navigation.