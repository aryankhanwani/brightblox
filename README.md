# BrightBlox - Web3 Career Blueprint

A modern Next.js application for the Web3 Career Blueprint landing page, converted from the original HTML version.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive design** optimized for all devices
- **Scroll animations** and parallax effects
- **SEO optimized** with proper metadata

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── PainPoints.tsx
    ├── SolutionOverview.tsx
    ├── VideoSection.tsx
    ├── LeadMagnet.tsx
    ├── Testimonials.tsx
    ├── CourseBreakdown.tsx
    ├── Certification.tsx
    ├── Pricing.tsx
    ├── FAQ.tsx
    ├── FinalCTA.tsx
    ├── Footer.tsx
    └── ScrollAnimations.tsx
```

## Key Features

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance
- Next.js optimization
- Image optimization
- Code splitting
- Fast loading times

### SEO
- Proper meta tags
- Semantic HTML
- Open Graph support
- Structured data ready

## Deployment

The app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**

For Vercel deployment:
```bash
npm run build
```

## Customization

### Colors
The color scheme can be customized in the Tailwind config or by updating the CSS custom properties.

### Content
All content is easily editable in the component files.

### Styling
Uses Tailwind CSS with custom utilities for the Web3 theme.

## License

Private project - All rights reserved.