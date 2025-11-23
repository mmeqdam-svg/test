# Athath Jeddah - Used Furniture Buying Service

## Overview
This is a React + Vite + TypeScript website for a used furniture buying service in Jeddah, Saudi Arabia. The website is in Arabic (RTL layout) and provides information about buying various types of used furniture including bedroom sets, living room furniture, kitchen appliances, and more.

## Tech Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **SEO**: react-helmet-async

## Project Structure
```
├── public/           # Static assets (images, icons, sitemap, robots.txt)
├── src/
│   ├── components/   # Reusable React components (Header, ContactButtons, Footer, etc.)
│   ├── data/         # Blog posts data with SEO metadata
│   ├── pages/        # Page components (HomePage, BlogPage, PostPage, ContactPage, etc.)
│   ├── utils/        # Utility functions (slugify)
│   ├── App.tsx       # Main app component with client-side routing
│   ├── main.tsx      # App entry point
│   └── routes.ts     # Route definitions
├── tools/            # Build scripts (sitemap generation, image optimization)
└── vite.config.ts    # Vite configuration
```

## Development Setup
The app runs on port 5000 with host 0.0.0.0 to work with Replit's proxy system.

### Running the App
- **Development**: `npm run dev` (runs on http://0.0.0.0:5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

### Scripts
- `npm run generate:sitemap` - Generates sitemap.xml
- `npm run optimize:images` - Optimizes images using Sharp
- `npm run lint` - Runs ESLint

## Deployment
The app is configured for static deployment:
- Build command: `npm run build`
- Output directory: `dist`
- Deployment type: Static

## Features
- Client-side routing (custom implementation with English URL slugs)
- RTL (Right-to-Left) layout for Arabic content
- SEO-optimized with:
  - Article Schema (JSON-LD) for blog posts
  - Open Graph tags for social sharing
  - Twitter Card tags
  - Meta tags and canonical URLs
  - Sitemap and robots.txt
- Blog with 4 comprehensive articles (1000+ words each):
  1. دليل شامل لشراء غرف النوم المستعملة في جدة 2025
  2. أفضل أسعار شراء الكنب المستعمل في جدة - دليل 2025
  3. شراء المكيفات المستعملة في جدة - دليل الأسعار والأنواع
  4. 5 أخطاء تجنبها عند بيع أثاثك المستعمل في جدة
- Contact buttons (WhatsApp + Phone) with aria-labels
- Footer component with NAP (Name, Address, Phone)
- Responsive design with Tailwind CSS
- Privacy and Terms pages
- Blog articles with featured images and author information
- Accessibility improvements (aria-labels, semantic HTML)

## Recent Changes (November 23, 2025)

### Blog & Content
- ✅ Added 4 comprehensive blog articles (1000+ words each)
- ✅ Each article includes pricing tables, tips, and FAQs
- ✅ Post type updated with: titleTag, metaDescription, author, dates, keywords, image, imageAlt

### SEO Optimization
- ✅ Article Schema (JSON-LD) with complete BlogPosting structure
- ✅ Open Graph tags: og:title, og:description, og:image, og:image:alt, og:url, og:site_name, og:locale
- ✅ Twitter Card tags: twitter:card, twitter:title, twitter:description, twitter:image
- ✅ Article-specific tags: published_time, modified_time, author, section, tags

### UI/Design Improvements
- ✅ BlogPage redesigned with grid layout (3 columns on large screens)
- ✅ Featured images (16:9 aspect ratio) on blog cards
- ✅ PostPage with professional typography and styling
- ✅ Article metadata display (category, date, author)
- ✅ Call-to-Action sections in blog pages

### Accessibility
- ✅ aria-labels on ContactButtons (WhatsApp, Phone)
- ✅ aria-hidden on decorative icons
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H1 unique per page)

### Meta & Configuration
- ✅ Updated HomePage Meta Description with action-oriented text
- ✅ font-display: swap for web fonts (already in index.html)
- ✅ Local Business Schema in index.html
- ✅ Canonical URLs on all pages

## Data Model
Blog posts now include:
```typescript
type Post = {
  id: string;
  title: string;
  slug: string;
  titleTag: string; // SEO Title (max 60 chars)
  metaDescription: string; // SEO Description (max 160 chars)
  excerpt: string;
  content: string;
  category: string;
  datePublished: string; // ISO 8601
  dateModified: string; // ISO 8601
  author: string;
  keywords: string[];
  image: string; // Featured image URL
  imageAlt: string; // Alt text for image
}
```

## Next Steps (Optional Future Enhancements)
1. Add 6-11 more blog articles (target: 10-15 total)
2. Create service landing pages:
   - Furniture moving services
   - Office furniture buying
   - Appliances buying
   - Air conditioners buying
   - Apartment liquidation
3. Build admin CMS dashboard for blog management
4. Auto-update sitemap.xml on content changes
5. Implement image optimization pipeline
6. Add Lighthouse performance monitoring

## Testing
- All pages have exactly one H1 tag
- All internal links use client-side routing
- Blog articles display properly formatted content
- Featured images load with lazy loading
- SEO tags present and valid
- RTL layout working correctly
- Responsive design verified

## Contact Info
- **Business Name**: أثاث جدة (Athath Jeddah)
- **Phone**: 0559781023
- **WhatsApp**: 0559781023
- **Location**: جدة, المملكة العربية السعودية
- **Website**: athath-jeddah-sa.com
