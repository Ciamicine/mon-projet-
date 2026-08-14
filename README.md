# HydroMag - Premium Magnetic Water Bottles E-Commerce Site

A modern, high-performance e-commerce website for selling premium magnetic water bottles with phone attachment. Built with Next.js, React, Tailwind CSS, and Framer Motion for stunning animations and interactivity.

## 🚀 Features

### Frontend Experience
- **Spectacular Hero Section**: Eye-catching landing with animated gradients and floating elements
- **Interactive Product Gallery**: 4-column responsive grid with hover animations and favorites system
- **Testimonials Section**: Customer reviews with ratings and social proof
- **Comprehensive FAQ**: Accordion-style frequently asked questions with smooth animations
- **Newsletter Signup**: Email subscription with discount offer integration
- **Premium Navigation**: Fixed navigation with smooth scroll behavior
- **Responsive Design**: Mobile-first approach working flawlessly on all devices

### Animations & Effects
- Smooth Framer Motion animations throughout
- Gradient text effects and glass-morphism design
- Floating elements and parallax effects
- Interactive product cards with scale and shadow transforms
- Animated SVG elements and micro-interactions

### Integrations
- **Shopify MCP Integration**: Direct connection to Shopify store
- **Product Management**: Real-time product data from Shopify
- **Order Management**: Access to customer orders and data
- **Customer Management**: View and manage customer information

## 📋 Tech Stack

### Frontend
- **Next.js 14**: React framework for production
- **React 18**: UI component library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animation library
- **Lucide React**: Beautiful icon library

### Backend/Integration
- **Anthropic SDK**: Claude API integration
- **Axios**: HTTP client for API calls
- **Zustand**: Lightweight state management

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm
- Shopify store (optional, for full integration)
- Shopify access token (optional)

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd mon-projet-
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Shopify credentials:
```env
NEXT_PUBLIC_SHOPIFY_STORE=your-store.myshopify.com
SHOPIFY_ACCESS_TOKEN=your_access_token_here
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
mon-projet-/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Homepage
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── ProductGallery.tsx  # Product showcase
│   ├── Testimonials.tsx    # Customer reviews
│   ├── FAQ.tsx             # FAQ section
│   ├── Newsletter.tsx      # Email signup
│   └── Footer.tsx          # Footer
├── lib/
│   └── shopify.ts          # Shopify API client
├── styles/
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── .claude/
│   ├── settings.json       # Claude settings with 21st skills
│   └── claude.md           # Project documentation
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Design Features

### Color Palette
- **Primary**: Sky Blue (#0ea5e9)
- **Accent**: Pink/Magenta (#ec4899)
- **Secondary**: Purple (#8b5cf6)
- **Background**: Gradient from slate to sky

### Typography
- Clean, modern sans-serif stack
- Premium font rendering with antialiasing
- Responsive text sizing

### Animations
- Smooth scroll behavior
- Staggered component animations
- Hover state transitions
- Loading shimmer effects
- Floating and rotating elements

## 🛍️ Shopify Integration

The site includes built-in Shopify MCP integration for:

### Product Management
```typescript
// Fetch products
const products = await shopifyApi.getProducts(limit)

// Get single product
const product = await shopifyApi.getProductById(id)
```

### Collections
```typescript
// Fetch collections
const collections = await shopifyApi.getCollections(limit)
```

### Orders
```typescript
// Fetch orders
const orders = await shopifyApi.getOrders(limit)

// Get order details
const order = await shopifyApi.getOrderById(id)
```

### Customers
```typescript
// Fetch customers
const customers = await shopifyApi.getCustomers(limit)
```

### Store Info
```typescript
// Get shop information
const shop = await shopifyApi.getShopInfo()
```

## 🎯 21st.dev Skills Integration

This project includes integrated 21st.dev skills for:

- **21st-ai**: Generate and iterate on UI components
- **21st-cli-use**: Search and install components
- **21st-registry**: Publish components
- **21st-design-sync**: Sync design tokens
- **21st-ui-build**: Build production UI
- **21st-ui-explore**: Explore design directions
- **21st-ui-review**: Review and audit UI

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Optimizations

- Next.js image optimization
- Code splitting and lazy loading
- CSS minification via Tailwind
- Smooth animations with GPU acceleration
- Optimized bundle size

## 📄 Environment Variables

Required for Shopify integration:
- `NEXT_PUBLIC_SHOPIFY_STORE`: Your Shopify store URL
- `SHOPIFY_ACCESS_TOKEN`: Shopify API access token

Optional:
- `NEXT_PUBLIC_ANALYTICS_ID`: Analytics tracking ID

## 🔐 Security

- Environment variables for sensitive data
- No hardcoded credentials
- Secure Shopify API token handling
- CORS-safe API calls

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Shopify API Docs](https://shopify.dev/api/admin-rest)

## 🤝 Support

For issues or questions:
1. Check the FAQ section on the website
2. Review the code comments
3. Consult the documentation links above

## 📝 License

This project is part of the HydroMag brand and is proprietary.

---

**Built with ❤️ by Claude Code**
