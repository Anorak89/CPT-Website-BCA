# BCA CPT Website

Bergen County Academies Competitive Programming Team website built with Next.js.

## 🚀 Deployment to GitHub Pages

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

3. **Your site will be available at:**
   ```
   https://[your-username].github.io/CPT-Website-BCA/
   ```

### Manual Deployment:

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build and export static files
npm run export

# The static files will be in the 'out' directory
# Upload the contents of 'out' to your web server
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## ✅ Features

- ✅ Static export ready for GitHub Pages
- ✅ Responsive design
- ✅ Dark theme
- ✅ Fast and optimized
- ✅ SEO friendly
- ✅ Automatic deployment via GitHub Actions

## 📁 Project Structure

- `src/app/` - Application pages
- `src/components/` - Reusable components
- `src/assets/` - Images and assets
- `public/` - Static files
- `.github/workflows/` - GitHub Actions workflow

## 🔧 Configuration

The site is configured for static export in `next.config.mjs`:
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages
- `images: { unoptimized: true }` - Disables image optimization for static export