# Starbucks Clone — SPEC.md

## 1. Concept & Vision

A modern, immersive Italiano experience that captures the brand's iconic green identity and premium coffee culture. The site feels like stepping into a Italiano — warm, inviting, with that distinctive green-and-cream palette. Smooth animations, rich imagery, and micro-interactions make browsing feel as satisfying as your first sip.

## 2. Design Language

### Aesthetic Direction
Inspired by Starbucks' actual brand — sophisticated yet approachable, with botanical and coffee-inspired organic shapes. Clean layouts with generous whitespace punctuated by bold hero imagery.

### Color Palette
- **Primary (Starbucks Green):** `#00704A`
- **Secondary (Dark Green):** `#1E3932`
- **Accent (Gold):** `#C4A962`
- **Background Light:** `#F7F7F7`
- **Background Cream:** `#F3F1E9`
- **Text Primary:** `#1E3932`
- **Text Secondary:** `#5C5C5C`
- **White:** `#FFFFFF`

### Typography
- **Headings:** `Playfair Display` (serif, elegant) — for hero text and section titles
- **Body/UI:** `DM Sans` (clean sans-serif) — for navigation, buttons, body text
- **Fallback:** Georgia, system-ui

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px
- Border radius: 16px (cards), 50px (buttons/pills), 50% (avatars)

### Motion Philosophy
- **Page load:** Staggered fade-up reveals (opacity 0→1, translateY 20px→0, 600ms ease-out, 100ms stagger)
- **Scroll animations:** Elements animate on scroll-into-view via Intersection Observer
- **Hover states:** Scale 1.02 with shadow lift (200ms ease-out)
- **Buttons:** Subtle scale down on click (0.98), color transitions (150ms)
- **Navigation:** Smooth backdrop blur on scroll

### Visual Assets
- **Icons:** Lucide React icons (consistent 24px stroke-width 1.5)
- **Images:** Unsplash coffee/cafe photography for hero and menu items
- **Decorative:** Subtle dot patterns, organic blob shapes as background accents

## 3. Layout & Structure

### Pages/Sections (Single Page Application feel)

1. **Navigation Bar** (fixed, glass-morphism on scroll)
   - Logo (left)
   - Nav links: Menu, Rewards, Gift Cards (center)
   - Sign In / Join Now buttons (right)
   - Mobile: Hamburger menu with slide-out drawer

2. **Hero Section**
   - Large full-width banner with featured promotion
   - Bold headline with Playfair Display
   - CTA button with hover animation
   - Background: rich coffee imagery with gradient overlay

3. **Categories Section**
   - 4-card grid: Drinks, Food, At Home, Merchandise
   - Hover lift effect with shadow
   - Icon + title + subtle arrow

4. **Featured Drinks Carousel**
   - Horizontal scroll of drink cards
   - Each card: image, name, description, price, "Add to Order" button
   - Smooth scroll with snap points

5. **Rewards Teaser Section**
   - Split layout: text left, visual right
   - "Join the rewards program" messaging
   - Join button with gold accent

6. **Seasonal/Footer Section**
   - Newsletter signup
   - Footer links grid (About, Careers, Social Impact, etc.)
   - Social media icons
   - Copyright

### Responsive Strategy
- Desktop: Full layouts as described
- Tablet (768px): 2-column grids, adjusted spacing
- Mobile (480px): Single column, hamburger nav, stacked layouts

## 4. Features & Interactions

### Navigation
- Logo click → scroll to top
- Nav links smooth-scroll to sections
- On scroll past 50px: nav gains backdrop-blur, subtle shadow
- Mobile hamburger: opens full-height drawer from right, backdrop overlay

### Hero
- Auto-advances every 6 seconds (dots indicator)
- Manual dot navigation
- CTA button: hover → background lightens, scale up slightly

### Category Cards
- Hover: translateY -8px, box-shadow increases, icon color shifts to gold
- Click: scrolls to relevant section (Menu)

### Featured Drinks
- Horizontal scroll with CSS scroll-snap
- Drag-to-scroll on desktop (cursor: grab)
- "Add to Order" button: shows brief "Added!" confirmation state (1.5s), then resets

### Rewards Section
- Parallax-lite: background image moves at 0.5x scroll speed
- Button hover: background shifts to gold gradient

### Footer
- Newsletter input: focus state expands width, green border
- Submit: button text changes to "Subscribed!" with checkmark
- Social icons: hover scale 1.1, color to brand green

## 5. Component Inventory

### Button (Primary)
- Default: `#00704A` bg, white text, 50px border-radius, 16px 32px padding
- Hover: `#1E3932` bg, scale 1.02
- Active: scale 0.98
- Disabled: 50% opacity, cursor not-allowed

### Button (Secondary/Ghost)
- Default: transparent bg, `#00704A` border, `#00704A` text
- Hover: `#00704A` bg, white text

### Card (Drink)
- Default: white bg, 16px border-radius, subtle shadow
- Hover: translateY -4px, shadow increases
- Contains: image (16:9), title, description (2 lines max), price, CTA button

### Card (Category)
- Default: cream bg, centered icon + text
- Hover: green border appears, icon turns gold

### Input (Newsletter)
- Default: white bg, light gray border, 50px border-radius
- Focus: green border, subtle glow

### Navigation Link
- Default: `#1E3932` text
- Hover: `#00704A` text, underline animation (width 0→100%)

### Mobile Drawer
- Full height, white bg, slides from right (transform translateX 100%→0)
- Close X button top-right
- Nav links stacked vertically, large touch targets

## 6. Technical Approach

### Stack
- **HTML5** + **CSS3** (custom properties, flexbox, grid, animations)
- **Vanilla JavaScript** (ES6+, modules pattern)
- Single `index.html` file with embedded styles and script

### Architecture
- Semantic HTML sections for each major area
- CSS custom properties for theming
- JavaScript module pattern:
  - `Navigation` — scroll effects, mobile menu toggle
  - `Hero` — auto-advance, dot navigation
  - `ScrollAnimations` — Intersection Observer for reveal effects
  - `Drinks` — add to order interaction
  - `Newsletter` — form submission handling

### Key Implementation Details
- Intersection Observer for scroll-triggered animations (threshold: 0.15)
- CSS scroll-snap for drinks carousel
- `prefers-reduced-motion` media query respected
- Lazy loading for images below the fold

### External Resources
- Google Fonts: Playfair Display (700), DM Sans (400, 500, 700)
- Lucide Icons via CDN
- Unsplash images (specific curated URLs)
