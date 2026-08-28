---
name: CyclicStock PRO
description: Multi-center cyclic inventory counting — mobile floor + desktop command
colors:
  bg-base: "#060a14"
  bg-surface: "rgba(15, 23, 42, 0.70)"
  bg-surface-elevated: "rgba(30, 41, 59, 0.78)"
  primary: "#3b82f6"
  primary-hover: "#2563eb"
  secondary: "#6366f1"
  success: "#10b981"
  warning: "#f59e0b"
  danger: "#ef4444"
  info: "#06b6d4"
  text-primary: "#f8fafc"
  text-secondary: "#94a3b8"
  text-muted: "#64748b"
  border-subtle: "rgba(255, 255, 255, 0.10)"
  border-glass: "rgba(255, 255, 255, 0.14)"
  border-glass-specular: "rgba(255, 255, 255, 0.24)"
typography:
  display:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Inter', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.5px"
  mono:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "26px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  card:
    backgroundColor: "rgba(17, 24, 39, 0.85)"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input:
    backgroundColor: "{colors.bg-surface-elevated}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: CyclicStock PRO

## Overview

**Creative North Star: "The Warehouse Command"**

CyclicStock lives where industrial operations meet precise digital control. The visual language makes no distinction between the supervisor at a desktop and the counter on the warehouse floor — both see the same uncompromising dark chrome, the same sharp-edged panels, the same electric blue that marks every action worth taking. This is a screen built to be used, not admired. Ornamentation is zero. Utility is everything.

The system carries a deep navy base (`#0a0f1d`) that creates the illusion of depth without shadows, and uses glowing halos — reserved strictly for interactive and accent elements — to signal interactivity without decoration. Glass-panel overlays on cards provide a sense of layering without visual noise. The result is a UI that feels authoritative under harsh warehouse lighting and equally sharp on a high-res desktop monitor.

Typography stays in its lane: Outfit owns brand identity and headings, Inter owns all readable body copy and UI text, and JetBrains Mono owns every numeric value, SKU, and barcode string — because in this domain, misreading a digit is a real operational error.

**Key Characteristics:**
- Deep navy backgrounds with blue/indigo ambient glow subtly reinforcing brand without interfering with data legibility
- Electric blue (`#3b82f6`) as the single action color; indigo (`#6366f1`) as a secondary only in brand contexts
- Glassmorphic card surfaces with `backdrop-filter: blur` providing depth without shadows at rest
- All interactive states expressed through glow halos, not shadow lifts
- JetBrains Mono mandatory for all numeric/identifier data
- Dark mode canonical; light mode exists but the product was designed dark-first

## Colors

The palette is deep-space industrial: near-black backgrounds, one electric action color, and a semantic palette of green/amber/red/cyan for operational states.

### Primary
- **Electric Blue** (`#3b82f6`): The single action signal. Used on all primary CTAs, active navigation states, focus borders, and the brand logo gradient. Appears as a glow halo (`rgba(59, 130, 246, 0.35)`) under accent elements on hover.
- **Deep Action Blue** (`#2563eb`): Hover/pressed state of the primary. Never used at rest.

### Secondary
- **Indigo** (`#6366f1`): Brand reinforcement — the brand logo gradient end-point and decorative background radial glows only. Never used on interactive controls.

### Tertiary
- **Cyan** (`#06b6d4`): Informational states and status indicators that are neither success nor warning.

### Neutral
- **Void Navy** (`#0a0f1d`): Page base. The darkest layer.
- **Surface Navy** (`#111827`): Card and panel background base.
- **Elevated Navy** (`#1e293b`): Elevated surfaces, inputs, dropdowns, and modal containers.
- **Near-White** (`#f8fafc`): Primary text on dark. Never pure white.
- **Slate Mid** (`#94a3b8`): Secondary text — labels, meta, placeholders.
- **Slate Low** (`#64748b`): Muted text — disabled states, tertiary info.
- **Ghost Border** (`rgba(255, 255, 255, 0.08)`): The only border style at rest. 1px, always.

### Semantic
- **Operational Green** (`#10b981`): Success, confirmed counts, matching quantities.
- **Alert Amber** (`#f59e0b`): Warnings, discrepancies, quantities requiring review.
- **Error Red** (`#ef4444`): Critical errors, rejected actions, critical stock mismatches.

**The One Accent Rule.** Electric Blue is the only color that moves. Every CTA, every focus ring, every active indicator uses Electric Blue. Indigo, Cyan, and the semantic palette are static state signals. No button, input, or navigation element uses a non-blue accent.

**The Ghost Border Rule.** Borders are always `1px solid rgba(255,255,255,0.08)`. No border is thicker, colored, or bolder — visual separation comes from background contrast, not line weight.

## Typography

**Display / Brand Font:** Outfit (sans-serif, geometric)
**Body / UI Font:** Inter (humanist sans, system-stack fallback)
**Data / Code Font:** JetBrains Mono (monospace)

**Character:** Outfit's rounded geometry softens CyclicStock's industrial edge just enough to feel like a product rather than a terminal. Inter's high x-height ensures legibility at the small sizes dictated by data-dense warehouse UIs. JetBrains Mono enforces operational precision wherever a number or code appears — reading a barcode wrong has a real cost.

### Hierarchy
- **Display** (Outfit 700, 1.35rem, letter-spacing -0.5px): Brand name in the top navbar and login screen.
- **Headline** (Outfit 600, 1.1rem): Section headers, panel titles, modal titles.
- **Title** (Inter 600, 0.95rem): Card titles, list group headers.
- **Body** (Inter 400, 0.875rem, line-height 1.5): All readable UI copy, input labels, menu items.
- **Label** (Inter 600, 0.75rem, letter-spacing 0.5px): Status pills, badge text, button text, tab labels.
- **Mono** (JetBrains Mono 400–600, 0.875rem): All SKUs, barcodes, numeric counts, quantity fields, cycle IDs.

**The Mono Rule.** Every numeric value that carries operational meaning — quantity counted, expected quantity, SKU code, barcode string — renders in JetBrains Mono. Mixing Inter and Mono for numbers in the same data row is prohibited.

## Layout

The app is a single-page shell with role-conditional view switching (login → floor counter view or supervisor dashboard). No multi-page routing.

**Container:** max-width 1540px, `padding: 16px 24px 48px`, centered.
**Vertical rhythm:** `gap: 20px` between major sections; `gap: 16px` within card internals.
**Grid:** supervisor panels use CSS grid with auto-fill columns; floor counter views are single-column, full-bleed.
**Density:** compact for supervisor (data tables, stat grids); spacious for floor counter (large tap targets ≥44px, oversized input fields for gloved hands).
**Breakpoint behavior:** at ≤768px, the navbar collapses to icon-only, panels stack to single column, and the barcode scanner view takes over the full viewport.
**Mobile constraints:** `user-scalable=no`, `touch-action: manipulation` on all interactive elements, `overscroll-behavior: none` to prevent iOS bounce interfering with scanner gestures.

## Elevation & Depth

This system is **hybrid**: surfaces at rest are flat (no shadow). Depth is created through background-color layering (`--bg-base` → `--bg-surface` → `--bg-surface-elevated`) and `backdrop-filter: blur(12px)` on card overlays. Shadows activate only as a response to interactive states.

### Shadow Vocabulary
- **Ambient low** (`0 2px 4px rgba(0,0,0,0.2)`): Subtle resting shadow for cards that must lift above `--bg-base` without glassmorphism.
- **Ambient mid** (`0 8px 20px rgba(0,0,0,0.3)`): Navbar, modals, and major card containers.
- **Ambient high** (`0 16px 36px rgba(0,0,0,0.4)`): Drawers, bottom sheets, overlays.
- **Primary Glow** (`0 0 25px rgba(59,130,246,0.35)`): Hover/active state on primary buttons and brand logo only.
- **Success Glow** (`0 0 20px rgba(16,185,129,0.3)`): Positive outcome confirmations.
- **Warning Glow** (`0 0 20px rgba(245,158,11,0.3)`): Discrepancy alerts.
- **Danger Glow** (`0 0 20px rgba(239,68,68,0.3)`): Error states.

**The Flat-By-Default Rule.** Surfaces at rest carry no shadow. A glow halo signals interactivity or a live state. An ambient shadow signals elevation. The two are never combined on the same element at rest.

## Shapes

**Form language:** gently but consistently rounded. No hard right angles anywhere in the interface; no pill shapes except status badges and filters.

- **Small radius** (6px): Badges, status pills, `PRO` tag, small chips, tag inputs.
- **Medium radius** (10px): Buttons, form inputs, select dropdowns, table cells with individual shape.
- **Large radius** (16px): Cards, modals, navbars, scanner viewfinder, major containers.
- **Extra-large radius** (24px): Login card, camera overlay, bottom sheets on mobile.

**The No-Sharp Rule.** Nothing in the interface uses `border-radius: 0` except horizontal dividers and progress bars. Even utility elements carry the minimum `--radius-sm`.

## Components

### Buttons
- **Shape:** Medium radius (10px)
- **Primary:** Electric Blue (`#3b82f6`) background, white text, padding `10px 20px`. On hover: Deep Action Blue (`#2563eb`) + primary glow halo.
- **Secondary / Ghost:** Transparent background, Slate Mid (`#94a3b8`) text, `1px solid rgba(255,255,255,0.08)` border.
- **Danger:** Error Red (`#ef4444`) background variant; same shape and padding as primary.
- **Icon buttons:** 36–44px square, medium radius, ghost style. Never smaller than 44px on mobile.
- **Transition:** `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)` on all state changes.

### Cards / Containers
- **Corner style:** Large radius (16px)
- **Background:** `rgba(17, 24, 39, 0.85)` with `backdrop-filter: blur(12px)` — the glassmorphic layer
- **Border:** `1px solid rgba(255, 255, 255, 0.08)` always
- **Shadow strategy:** Ambient mid at rest; never a glow unless the card itself represents an active/selected state
- **Internal padding:** `24px`

### Inputs / Fields
- **Style:** `--bg-surface-elevated` (`#1e293b`) background, `--radius-md` (10px), `1px solid rgba(255,255,255,0.08)` border at rest
- **Focus:** border shifts to Electric Blue (`#3b82f6`), primary glow halo (`box-shadow: 0 0 0 3px rgba(59,130,246,0.2)`)
- **Error state:** border shifts to Error Red (`#ef4444`), danger glow
- **Disabled:** opacity 0.5, cursor not-allowed
- **Quantity inputs (floor counter):** oversized — minimum height 56px, font JetBrains Mono 600 1.5rem

### Status Pills / Badges
- **Shape:** small radius (6px)
- **Style:** filled background using semantic color at 15–20% opacity, text at full semantic color
- **Examples:** `rgba(16,185,129,0.15)` background + `#10b981` text for "Completado"; `rgba(245,158,11,0.15)` + `#f59e0b` for "Pendiente"
- **Never outlined** (no border): fill conveys state; borders would duplicate the Ghost Border system

### Navigation
- **Top navbar:** glassmorphic card (`backdrop-filter: blur(12px)`), large radius (16px), 1px ghost border, ambient-mid shadow. `z-index: 10000`.
- **Active tab:** Electric Blue text + Electric Blue bottom border indicator (2px solid).
- **Mobile:** collapses to icon-only pills at ≤768px; tab labels hide, icons remain.

### Barcode Scanner Viewfinder (Signature Component)
The camera/scanner overlay is the most distinctive component in the system. A full-viewport dark overlay with a centered rectangular "aim frame" cut from it using a radial clip or CSS outline trick. The frame corners use Electric Blue accent marks (not a full border). A scanning animation — a horizontal blue line sweeping top-to-bottom with `0.2s cubic-bezier(0.4,0,0.2,1)` ease — confirms the scanner is active. The frame must be ≥280×180px on mobile and never compete with the camera feed for brightness.

## Do's and Don'ts

### Do:
- **Do** use JetBrains Mono for every SKU, barcode string, quantity, and numeric data value — always, without exception.
- **Do** express interactive state through glow halos (Electric Blue `rgba(59,130,246,0.35)`) and never through shadow lifts at rest.
- **Do** keep tap targets at ≥44×44px on all floor-counter controls; 36px is acceptable only for supervisor-only desktop controls.
- **Do** use `rgba(255,255,255,0.08)` as the only border style. One weight, one opacity, always 1px.
- **Do** apply `backdrop-filter: blur(12px)` on all floating surfaces (cards, modals, navbar) to reinforce the layered depth model.
- **Do** use semantic colors (green/amber/red) strictly for their operational meaning; never reuse them decoratively.

### Don't:
- **Don't** add a shadow to a surface that is not elevated above another surface. Glow ≠ elevation.
- **Don't** use Outfit (heading font) for body copy or data values — it loses legibility at small sizes and blurs the type hierarchy.
- **Don't** use colored borders (`border-left`, `border-right` accent stripes) on cards, list items, or alerts. Status is conveyed by the semantic fill badge, not a border stripe.
- **Don't** use gradient text. Weight and scale carry emphasis.
- **Don't** render a barcode, SKU, quantity, or cycle ID in Inter or Outfit — Mono is non-negotiable.
- **Don't** add decorative animations to the supervisor view. Motion is reserved for the scanner line and state transitions only.
- **Don't** use light mode as the design authority — the system was designed dark-first; the light theme is an accommodation, not the reference.
