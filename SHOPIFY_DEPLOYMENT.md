# 🚀 HydroMag Shopify Theme Deployment Guide

## Overview

This guide shows how to deploy the HydroMag premium theme to your Shopify store.

## Prerequisites

1. **Shopify Store**: You need an active Shopify store (any plan)
2. **Shopify CLI**: Install from https://shopify.dev/docs/themes/tools/cli/install
3. **Git**: For version control
4. **Access Token**: Generate from Shopify Admin

## Step 1: Install Shopify CLI

```bash
# macOS
brew install shopify-cli

# Linux
curl -fsSL https://raw.githubusercontent.com/Shopify/shopify-cli/main/scripts/install.sh | bash

# Windows (using npm)
npm install -g @shopify/cli
```

## Step 2: Authenticate with Shopify

```bash
# Login to your Shopify account
shopify login --shop your-store.myshopify.com

# You'll be prompted to open a browser and authenticate
```

## Step 3: Clone the Theme

```bash
cd shopify-theme/

# Test the theme locally
shopify theme dev

# This will start a local development server
# Open the preview link in your browser
```

## Step 4: Push to Shopify

```bash
# Publish the theme to your store
shopify theme push

# Or publish as a new theme without replacing the current one
shopify theme push --unpublished

# To publish and activate it immediately
shopify theme push --live
```

## Step 5: Customize in Shopify Admin

1. Go to your Shopify Admin
2. Navigate to Online Store > Themes
3. Find "HydroMag Premium" theme
4. Click "Customize"
5. Use the theme editor to:
   - Change colors
   - Upload your product images
   - Customize text and content
   - Adjust sections

## Theme Structure

```
shopify-theme/
├── config/
│   └── settings_schema.json      # Theme settings
├── layout/
│   └── theme.liquid              # Main layout
├── sections/
│   ├── hero.liquid               # Hero section
│   └── featured-products.liquid  # Product showcase
├── snippets/
│   ├── header.liquid             # Navigation
│   └── footer.liquid             # Footer
├── assets/
│   ├── theme.css                 # Styles
│   └── theme.js                  # Scripts
└── templates/
    └── index.json                # Homepage template
```

## Customization

### Colors

Edit `config/settings_schema.json` to add color settings:

```json
{
  "type": "color",
  "id": "color_primary",
  "label": "Primary Color",
  "default": "#0ea5e9"
}
```

### Fonts

Add font pickers in the same file:

```json
{
  "type": "font_picker",
  "id": "font_heading",
  "label": "Heading Font"
}
```

### Products

The theme uses Shopify's built-in product collections. Just add products to your Shopify store and they'll appear in the gallery automatically.

## Deployment Options

### Option 1: Manual Shopify CLI (Recommended)

```bash
shopify theme push --live
```

### Option 2: GitHub Integration

1. Connect your GitHub repo to Shopify
2. Enable auto-deploy on pushes
3. Changes deploy automatically

### Option 3: Shopify App Store

Package the theme for distribution on the Shopify App Store.

## Local Development

### Watch Files and Auto-Reload

```bash
shopify theme dev
```

This enables:
- Live reload on file changes
- Console preview in browser
- Full theme customization in real-time

### Test on Different Devices

Access the preview on your phone:
```
https://your-store.myshopify.com?preview_theme_id=THEME_ID
```

## Performance Optimization

1. **Image Optimization**: Use Shopify's built-in image optimization
2. **CSS Minification**: Included in production
3. **Lazy Loading**: Enable for product images
4. **CDN**: Shopify automatically serves via CDN

## SEO Configuration

1. **Title Tags**: Auto-generated from page titles
2. **Meta Descriptions**: Set in page settings
3. **Structured Data**: Shopify adds schema automatically
4. **Sitemap**: Generated automatically

## Security

- All forms go through Shopify's secure processing
- PCI compliance handled by Shopify
- No customer data stored in theme files
- SSL enabled by default

## Support

For issues:

1. Check Shopify Theme Documentation: https://shopify.dev/themes
2. Shopify Community: https://community.shopify.com
3. Shopify Support: https://support.shopify.com

## Next Steps

1. Push the theme to Shopify
2. Customize colors and content
3. Add your products
4. Set up shipping and payment
5. Configure email notifications
6. Launch your store!

## Tips

- Always test changes in preview before publishing
- Keep backups of your theme
- Use version control (Git) for all changes
- Test on mobile devices
- Monitor theme performance

---

**Your HydroMag theme is production-ready and uses industry-best practices!** 🚀
