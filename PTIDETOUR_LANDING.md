# PtiDétour Premium E-Commerce Landing Page

A luxurious, modern e-commerce landing page for **PtiDétour** — a 710ml insulated magnetic water bottle with integrated magnetic phone holder.

## 🎯 Project Overview

This is a complete, conversion-focused landing page built with React 19 and Vite, inspired by premium brands like Apple and Arc'teryx. The design emphasizes:

- **Hydration**: High-capacity insulated bottle
- **Magnetic Phone Convenience**: Integrated magnetic ring on cap
- **Premium Lifestyle**: Adventure and modern aesthetics

## 🏗️ Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Smooth, premium animations
- **Lucide React** - Minimal icon library
- **Plain CSS** - Clean, custom styling (no Tailwind)
- **Google Fonts** - Inter typeface (300, 400, 500, 600, 700)

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx       # Fixed navbar with scroll effect
│   ├── Hero.jsx         # Full-screen hero with video
│   ├── FeatureStrip.jsx # 4-column feature showcase
│   ├── ProductShowcase.jsx # Product details with cards
│   ├── LifestyleGallery.jsx # 4 lifestyle context cards
│   ├── MagneticFeature.jsx # Magnetic attachment feature
│   ├── Benefits.jsx      # 4 benefit cards
│   ├── Testimonials.jsx  # Customer reviews
│   ├── CTA.jsx          # Call-to-action section
│   ├── ProductCard.jsx  # Interactive product card
│   ├── Footer.jsx       # Footer with navigation
│   └── *.css           # Component-scoped styles
├── styles/
│   └── global.css       # Global typography and utilities
├── config.js           # Brand colors and content
├── App.jsx             # Main app component
└── main.jsx            # React entry point

index.html             # HTML entry point
vite.config.js         # Vite configuration
```

## 🎨 Brand Identity

### Colors
- **Deep Navy**: `#061326` - Primary dark background
- **Black**: `#050505` - Text and accents
- **White**: `#FFFFFF` - Light backgrounds
- **Off-White**: `#F7F7F5` - Cards and subtle backgrounds
- **Gold/Champagne**: `#C8A968` - Premium accent color
- **Light Gray**: `#EDEDED` - Borders and dividers

### Typography
- Font Family: **Inter** (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Responsive sizing with `clamp()` for fluid typography

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📱 Responsive Design

- **Desktop** (1024px+): Full 2-column layouts, generous spacing
- **Tablet** (768px - 1023px): Optimized multi-column grids
- **Mobile** (< 768px): Single-column layouts, full-width elements

All components are fully responsive with adaptive typography and spacing.

## ✨ Key Features

### Navbar
- Fixed transparent navbar that becomes blurred on scroll
- Desktop: Logo, centered nav links, action icons
- Mobile: Collapsible hamburger menu
- Smooth animations and hover effects

### Hero Section
- Full-screen (100vh) cinematic video background
- Animated text with staggered entrance
- Large product image on desktop, centered on mobile
- Primary and secondary CTA buttons

### Feature Strip
- 4-column grid showing key benefits
- Icons from Lucide React
- Hover effects with icon color change

### Product Showcase
- Large product image with subtle shadow
- 3 interactive feature cards
- Numbered cards with border animation on hover

### Lifestyle Gallery
- 4 lifestyle context cards (Hiking, Golf, Travel, Office)
- SVG placeholder images (replace with actual photography)
- Hover animations (zoom + lift)

### Magnetic Feature
- Dedicated dark section highlighting magnetic attachment
- Animated magnetic particles orbiting the ring
- 3 feature points with dot indicators

### Benefits
- 4 large benefit cards with emoji icons
- Hover effects with border and shadow
- Clean grid layout

### Testimonials
- 3 customer reviews with star ratings
- Social proof display (4.9/5 rating, +500 reviews)
- Card hover effects

### CTA Section
- Dark navy background with subtle overlay
- Large, compelling heading (pre-line whitespace)
- Primary white button

### Product Card
- Side-by-side layout (desktop) or stacked (mobile)
- Interactive color selector
- Quantity controls (increment/decrement)
- Add to cart and Buy now buttons
- Trust indicators (shipping, payment, returns)

### Footer
- 3-column layout with brand info and links
- Social media links with hover effects
- Copyright and scroll-to-top button

## 🎬 Animations

All animations use Framer Motion with premium easing:

- **Entrance animations**: Staggered fade and slide
- **Scroll animations**: Elements animate in on scroll
- **Hover effects**: Subtle scale and translate
- **Transitions**: Smooth 0.3s - 0.8s durations
- **Easing**: Custom cubic bezier `[0.16, 1, 0.3, 1]`

Animations are subtle and luxurious, not flashy or distracting.

## ⚙️ Configuration

All content, colors, and configuration is centralized in `src/config.js`:

```javascript
export const colors = {
  navyDark: '#061326',
  black: '#050505',
  // ...
}

export const content = {
  brand: { name: 'PtiDétour', ... },
  hero: { eyebrow: '...', heading: '...', ... },
  // ...
}
```

Update this file to modify:
- Brand colors
- Page text and headings
- Navigation links
- Product information
- Testimonials and reviews
- Pricing and features

## 🔍 Performance Optimizations

- **Lazy loading** for images
- **Compressed SVG** placeholders
- **Minimal JavaScript** - only essentials
- **CSS scoping** - component-scoped styles
- **Semantic HTML** for accessibility
- **Smooth scrolling** - CSS native
- **Optimized animations** - GPU-accelerated

## 📸 Image Placeholders

Current implementation uses SVG placeholders for:
- Product bottle images
- Lifestyle gallery cards
- Magnetic feature illustration

Replace these with actual high-quality photography:

1. **Product Images**: Professional product photography with studio lighting
2. **Lifestyle Cards**: Cinematic photography in real-world contexts
3. **Hero Video**: 4K cinematic video of bottle in use

## 🌐 Browser Support

- Chrome 90+
- Safari 14+
- Edge 90+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Customization

### Changing Colors

Edit `src/config.js`:
```javascript
export const colors = {
  gold: '#YOUR_COLOR_HEX',
  // ...
}
```

Then update CSS variables in component files.

### Updating Content

All text content is in `src/config.js` under the `content` object. Update strings there and they'll reflect across the site.

### Modifying Animations

Edit motion variants in component files. For example, in `Hero.jsx`:
```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, ... }
}
```

### Adding Products

The site is designed for a single product. To add multiple products:
1. Extend `config.js` with product array
2. Create a Products listing component
3. Add product detail pages

## 🔒 Security

- No sensitive data in frontend code
- Environment variables for API endpoints (not included)
- Secure form handling (implement backend)
- XSS protection through React's built-in escaping

## 🚢 Deployment

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Vercel
```bash
npm run build
# Connect repo to Vercel
```

### Self-hosted
```bash
npm run build
# Serve dist/ with any static server
```

## 📄 License

© 2026 PtiDétour. All rights reserved.

## 📧 Support

For questions or issues, contact: contact@ptidetour.ca

---

**Note**: This landing page is a template. Replace placeholder content, images, and videos with actual product information before deployment.
