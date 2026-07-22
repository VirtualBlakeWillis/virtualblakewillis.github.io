# Style Guide

> Derived exclusively from `HomePage.tsx`, `HeroSection.tsx`, and `Navigation.tsx`.

---

## Typography

### Fonts

| Role | Family | Notes |
|---|---|---|
| **Body / UI** | `'Open Sans', sans-serif` | Used everywhere by default |
| **Display accent** | `'Bungee', cursive` | Used for decorative words in large headings (e.g. *end‑to‑end.*, *Projects*, *Together.*) |

The base font size is `16px` (set on `html`).  
Font smoothing is enabled globally (`-webkit-font-smoothing: antialiased`).

---

### Type Scale

| Role | Element | Size | Weight | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| Hero headline | `h1` | `clamp(3rem, 5vw, 5.25rem)` | `700` | `1.05` | `-0.02em` | `#0a0a0a` |
| Section heading | `h2` | `clamp(2rem, 4vw, 3.5rem)` | `700` | `1.1` | `-0.02em` | `#0a0a0a` |
| Section heading (large CTA) | `h2` | `clamp(2.5rem, 5vw, 4.5rem)` | `700` | `1.05` | `-0.02em` | `#ffffff` (on dark bg) |
| Card title | `h3` | `1.25rem` | `700` | — | `-0.01em` | `#0a0a0a` |
| Body copy | `p` | `1rem` / `0.9rem` | `400` | `1.75` | — | `#555555` / `#666666` |
| Eyebrow / label | `p` / `span` | `11px` | `400` | — | `0.28em` | `#aaaaaa` / `#888888` |
| Nav brand | `a` | `14px` (desktop) · `15px` (mobile) | `600` | — | `-0.01em` | `#030213` |
| Nav links | `a` | `14px` | `400` (inactive) · `600` (active) | — | — | `#717182` (inactive) · `#030213` (active) |
| Button / pill CTA label | inline | `11px` | `600` | — | `0.2em` | varies by context |
| Stack hover label | `span` | `1.35rem` | `500` | — | `-0.01em` | `#444444` |

**Eyebrow labels** are always `text-transform: uppercase`.  
**Pill CTA labels** are always `text-transform: uppercase`.

---

## Color Palette

### Backgrounds

| Token | Value | Usage |
|---|---|---|
| Page background | `#fafafa` | Hero section, root page wrapper |
| Light off-white | `#f7f7f7` | Featured Work section |
| White | `#ffffff` | About preview section, nav pill, mobile drawer |
| Dark / CTA | `#0a0a0a` | CTA "Let's Work Together" section |

### Text

| Token | Value | Usage |
|---|---|---|
| Near-black | `#0a0a0a` / `#030213` | Primary headings, active nav, brand name |
| Subtext | `#555555` | Body copy (about section) |
| Subtext alt | `#666666` | Body copy (hero), card descriptions |
| Muted | `#888888` / `#aaaaaa` | Eyebrow labels, ghost link, dark-bg body text |
| Dimmed | `#717182` | Inactive nav links |
| Dark-bg muted | `#888888` | Body text on dark CTA section |
| Dark-bg eyebrow | `#555555` | Eyebrow on dark CTA section |

### UI / Interactive

| Token | Value | Usage |
|---|---|---|
| Primary button bg | `#111111` | Pill CTA (light bg) |
| Primary button hover | `#333333` | Pill CTA hover state |
| Inverted button bg | `#ffffff` | Pill CTA (dark bg) |
| Inverted button hover | `#e5e5e5` | Pill CTA hover on dark section |
| Tag / badge bg | `#f0f0f0` | Category pills on project cards |
| Tag / badge text | `#555555` | Category pills on project cards |

### Borders & Dividers

| Token | Value | Usage |
|---|---|---|
| Subtle divider | `#e5e5e5` | Section header underline, hero stack label top border |
| Card border | `#ebebeb` | Project cards |
| Nav pill border (inset) | `rgba(0,0,0,0.08)` | Desktop nav box-shadow inset ring |
| Mobile top bar border | `rgba(0,0,0,0.08)` | Bottom border on mobile nav bar |
| Mobile drawer border | `rgba(0,0,0,0.07)` | Mobile menu card border |
| Nav divider | `rgba(0,0,0,0.10)` | 1px separator between brand name and nav links |
| Mobile item divider | `rgba(0,0,0,0.06)` | Between each nav item row in mobile drawer |

---

## Spacing

| Context | Value |
|---|---|
| Section vertical padding | `py-32` (8rem top + bottom) |
| Section horizontal padding | `px-6` |
| Content max-width (wide) | `max-w-7xl` (80rem) |
| Content max-width (narrow) | `max-w-4xl` (56rem) |
| Card inner padding | `p-6` (1.5rem) |
| Card grid gap | `gap-8` (2rem) |
| Hero padding top | `14vh` |
| Hero left column padding | `px-10 pb-16` |
| Pill CTA padding | `12px 28px` |
| Nav desktop top offset | `1.25rem` |
| Nav link padding (desktop) | `12px 16px` |
| Nav brand padding (desktop) | `12px 20px` |
| Mobile nav bar padding | `14px 20px` |
| Mobile drawer offset from top | `64px` |
| Mobile drawer horizontal margin | `12px` (left + right) |
| Mobile drawer item padding | `14px 20px` |

---

## Borders & Radii

| Context | Value |
|---|---|
| Card border-radius | `14px` |
| Pill / full-circle border-radius | `9999px` |
| Desktop nav pill border-radius | `14px` |
| Mobile drawer border-radius | `14px` |
| Image card (hero stack) border-radius | `14px` |

---

## Shadows

| Context | Value |
|---|---|
| Project card | `0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)` |
| About image | `0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)` |
| Desktop nav pill | `0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(0,0,0,0.08)` |
| Mobile drawer | `0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)` |
| Hero image stack | `drop-shadow(0px 28px 56px rgba(0,0,0,0.18)) drop-shadow(0px 8px 16px rgba(0,0,0,0.10))` |
| Card image dark gradient overlay | `linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)` |

---

## Navigation

### Desktop (≥ `md`)
- Fixed, centered, floating pill (`position: fixed; top: 1.25rem`).
- Background: `rgba(255,255,255,0.92)` with `backdrop-filter: blur(20px)`.
- Brand name (`Blake Willis`) links to `/`, separated from nav items by a 1px vertical divider.
- Nav items: Home, Work, About, Contact, Login.
- Active link: `font-weight: 600`, color `#030213`.
- Inactive link: `font-weight: 400`, color `#717182`; hover transitions to `#030213` over `0.18s ease`.
- Entrance animation: slides in from `y: -80` to `y: 0` with `opacity 0 → 1` over `0.55s` using easing `[0.16, 1, 0.3, 1]`.

### Mobile (< `md`)
- Full-width top bar, `position: fixed`, with frosted glass background (`rgba(255,255,255,0.94)`, `blur(16px)`).
- Brand name on the left; hamburger icon (custom SVG) on the right.
- Open state shows `X` icon (`lucide-react`, size 22, strokeWidth 2).
- Dropdown drawer slides in from top (`y: -8 → 0`, `opacity 0 → 1`) with `duration: 0.2s`.
- Each nav item is full-width, separated by `rgba(0,0,0,0.06)` bottom borders (except the last).
- Clicking any link closes the drawer.

---

## Buttons & CTAs

### Pill Button (Primary — light background)
```
background: #111111
color: #ffffff
border-radius: 9999px
padding: 12px 28px
font-size: 11px
font-weight: 600
letter-spacing: 0.2em
text-transform: uppercase
transition: background 0.2s
hover background: #333333
```

### Pill Button (Inverted — dark background)
```
background: #ffffff
color: #111111
border-radius: 9999px
padding: 12px 28px
font-size: 11px
font-weight: 600
letter-spacing: 0.2em
text-transform: uppercase
transition: background 0.2s
hover background: #e5e5e5
```

### Ghost / Text Link CTA
```
color: #888888
font-size: 11px
font-weight: 600
letter-spacing: 0.2em
text-transform: uppercase
text-decoration: none
transition: color 0.15s
hover color: #0a0a0a
```

All primary CTAs pair with an `ArrowRight` icon (`lucide-react`, `size={14}`).

---

## Animation & Motion

All page animations use **Framer Motion** (`motion/react`).

| Context | Animation |
|---|---|
| Nav pill entrance | `y: -80 → 0`, `opacity: 0 → 1`, `duration: 0.55s`, ease `[0.16, 1, 0.3, 1]` |
| Mobile drawer | `opacity + y: -8 → 0`, `duration: 0.2s` |
| Section headings / text (scroll) | `opacity: 0 + y: 30 → 0`, `duration: 0.8s`, `viewport: once` |
| Cards (scroll reveal) | `opacity: 0 + y: 50 → 0`, `duration: 0.6s`, staggered by `index * 0.2s` |
| About columns (scroll reveal) | `opacity: 0 + x: ±50 → 0`, `duration: 0.8s` |
| Card hover | `y: -6` |
| Card image hover | `scale: 1.05`, `duration: 0.6s` |
| About image hover | `scale: 1.02`, `duration: 0.3s` |
| Hero image stack item | `transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Hero stack label swap | CSS keyframe slide (up or down), `duration: 0.28s`, `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |

### Hero Label Keyframes (defined in `index.css`)
```css
@keyframes hero-label-exit-up    { from { transform: translateY(0);     opacity: 1; } to { transform: translateY(-110%); opacity: 0; } }
@keyframes hero-label-enter-below { from { transform: translateY(110%);  opacity: 0; } to { transform: translateY(0);     opacity: 1; } }
@keyframes hero-label-exit-down  { from { transform: translateY(0);     opacity: 1; } to { transform: translateY(110%);  opacity: 0; } }
@keyframes hero-label-enter-above { from { transform: translateY(-110%); opacity: 0; } to { transform: translateY(0);    opacity: 1; } }
```

---

## Layout Patterns

### General
- **Two-column grid** (`grid md:grid-cols-2`) is the standard split for both the project card grid and the About section.
- **Max widths**: `max-w-7xl mx-auto` for most content; `max-w-4xl mx-auto` for the narrow CTA section.
- **Section padding**: uniform `py-32 px-6` across all homepage sections.

### Hero Section
- Two-column CSS grid (`gridTemplateColumns: "1fr 1fr"`), `min-height: 100vh`.
- Left column: text content, max-width `34rem`, `paddingTop: 14vh`.
- Right column: interactive image stack, centered, `paddingRight: 4rem`.

### Project Cards
- `borderRadius: 14px`, white background, subtle border + shadow.
- Image area: `height: 260px`, `overflow: hidden`, with a dark gradient overlay at the bottom.
- Content area: `p-6` padding with title → description → category tags stacked vertically.
- Category tags: pill shape (`borderRadius: 9999px`), `#f0f0f0` background, uppercase 10px text.

### Section Header Pattern
- Eyebrow label (uppercase, `11px`, muted color) above heading.
- Heading uses a mixed-font treatment: main words in **Open Sans 700**, one accent word in **Bungee 400**.
- Header block separated from content by a `1px solid #e5e5e5` bottom border with `paddingBottom: 2rem`.

---

## Background Colors by Section

| Section | Background |
|---|---|
| Hero | `#fafafa` |
| Featured Work | `#f7f7f7` |
| About Preview | `#ffffff` |
| CTA "Let's Work Together" | `#0a0a0a` |
