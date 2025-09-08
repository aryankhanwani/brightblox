# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Deploy from the project directory**:
```bash
cd brightblox-nextjs
vercel
```

3. **Follow the prompts** and your app will be deployed!

## Alternative Deployment Options

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Railway
1. Connect your GitHub repository
2. Railway will automatically detect Next.js
3. Deploy with one click

### AWS Amplify
1. Connect your repository
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

## Environment Variables

No environment variables are required for this project, but you can add them in your deployment platform's settings if needed.

## Build Optimization

The project is already optimized with:
- Next.js automatic code splitting
- Image optimization
- CSS optimization
- Bundle analysis ready

## Performance

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Custom Domain

After deployment, you can add a custom domain in your hosting platform's settings.
