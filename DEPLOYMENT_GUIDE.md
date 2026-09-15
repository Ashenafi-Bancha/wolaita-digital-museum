# Deployment Guide - Wolaita Museum

## 🌐 Publishing Your Website to the Internet

After building locally, you'll want to deploy (publish) your website online so anyone can visit it. This guide covers multiple deployment options.

## 🎯 Quick Decision Guide

| Platform | Best For | Cost | Difficulty |
|----------|----------|------|------------|
| **Vercel** | Easiest, best performance | Free | ⭐ Easy |
| **Netlify** | Drag & drop simplicity | Free | ⭐ Easy |
| **GitHub Pages** | Free with GitHub | Free | ⭐⭐ Medium |
| **CloudFlare Pages** | Fast global CDN | Free | ⭐⭐ Medium |

**Recommendation:** Start with **Vercel** - it's the easiest and offers excellent performance for free.

---

## 🚀 Option 1: Vercel (Recommended)

### Why Vercel?
✅ Easiest deployment  
✅ Automatic HTTPS  
✅ Global CDN (super fast)  
✅ Automatic deployments from Git  
✅ Free tier (generous limits)  
✅ Custom domains  

### Deployment Steps

#### Method A: Deploy from Git (Recommended)

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create Git Repository**
   ```bash
   # In your project folder
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Push to GitHub**
   - Create new repository on GitHub
   - Follow GitHub's instructions to push your code

4. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Wait 1-2 minutes
   - Done! ✅

5. **Your Site is Live!**
   - URL: `your-project-name.vercel.app`
   - Automatic HTTPS enabled
   - Updates automatically when you push to GitHub

#### Method B: Deploy via CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd wolaita-museum

# Build the project
pnpm build

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? wolaita-museum
# - Directory? ./
# - Build settings? (Press enter for defaults)

# Done! Your site is live
```

### Custom Domain on Vercel
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your domain
5. Update DNS records (Vercel provides instructions)

---

## 🌟 Option 2: Netlify

### Why Netlify?
✅ Very easy drag & drop  
✅ Automatic HTTPS  
✅ Form handling (useful for contact form)  
✅ Free tier  
✅ Custom domains  

### Deployment Steps

#### Method A: Drag & Drop (Easiest)

1. **Build Your Project**
   ```bash
   pnpm build
   ```
   This creates a `dist/` folder

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Sign up for free
   - Go to "Sites"
   - Drag the `dist/` folder onto the upload area
   - Wait 30 seconds
   - Done! ✅

3. **Your Site is Live!**
   - URL: `random-name-12345.netlify.app`
   - Can change to custom name in settings

#### Method B: Connect Git Repository

1. **Push Code to GitHub** (like Vercel Method A, steps 1-3)

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect to GitHub
   - Select repository
   - Build settings:
     - Build command: `pnpm build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Done! ✅

### Custom Domain on Netlify
1. Go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Follow DNS setup instructions

---

## 📄 Option 3: GitHub Pages

### Why GitHub Pages?
✅ Free hosting with GitHub  
✅ Easy if you use GitHub  
✅ Good for open-source projects  

### Requirements
- GitHub account
- Project in GitHub repository

### Deployment Steps

1. **Install gh-pages Package**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Update package.json**
   Add homepage and deploy scripts:
   ```json
   {
     "homepage": "https://yourusername.github.io/wolaita-museum",
     "scripts": {
       "build": "vite build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   Add base URL:
   ```typescript
   export default defineConfig({
     base: '/wolaita-museum/',
     plugins: [react(), tailwindcss()],
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   pnpm build
   pnpm deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository on GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Save

6. **Your Site is Live!**
   - URL: `https://yourusername.github.io/wolaita-museum`

### Custom Domain on GitHub Pages
1. Add `CNAME` file in `public/` folder with your domain
2. Update domain DNS records
3. Enable HTTPS in GitHub Pages settings

---

## ☁️ Option 4: Cloudflare Pages

### Why Cloudflare Pages?
✅ Fastest global CDN  
✅ Unlimited bandwidth (free)  
✅ Automatic HTTPS  
✅ DDoS protection  

### Deployment Steps

1. **Push Code to GitHub** (see Vercel Method A, steps 1-3)

2. **Deploy to Cloudflare Pages**
   - Go to https://pages.cloudflare.com
   - Sign up/login
   - Click "Create a project"
   - Connect GitHub account
   - Select repository
   - Build settings:
     - Build command: `pnpm build`
     - Build output directory: `dist`
   - Click "Save and Deploy"
   - Done! ✅

3. **Your Site is Live!**
   - URL: `wolaita-museum.pages.dev`
   - Custom domain available in settings

---

## 💰 Other Hosting Options

### AWS S3 + CloudFront
- **Cost:** Pay-as-you-go (~$1-5/month for small sites)
- **Difficulty:** Advanced
- **Best for:** Large traffic, enterprise

### Azure Static Web Apps
- **Cost:** Free tier available
- **Difficulty:** Medium
- **Best for:** Microsoft ecosystem

### Firebase Hosting
- **Cost:** Free tier (10GB storage, 360MB/day bandwidth)
- **Difficulty:** Medium
- **Best for:** Google ecosystem integration

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Code builds successfully (`pnpm build`)
- [ ] All pages load correctly locally
- [ ] Images load properly
- [ ] Navigation works
- [ ] Dark/light mode works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Contact form validates
- [ ] All links work
- [ ] SEO meta tags added

## 🔧 Build Configuration

### Environment Variables
If you need environment variables (API keys, etc.):

Create `.env` file:
```
VITE_API_KEY=your_key_here
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

**Important:** Never commit `.env` to Git! Add to `.gitignore`:
```
.env
.env.local
```

### For Production
In deployment platform, add environment variables:
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Build & deploy → Environment
- Others: Check platform documentation

---

## 🌍 Custom Domain Setup

### 1. Buy a Domain
Purchase from:
- **Namecheap** - https://namecheap.com
- **Google Domains** - https://domains.google
- **GoDaddy** - https://godaddy.com
- **Cloudflare** - https://cloudflare.com

Example: `wolaitamuseum.com` (~$10-15/year)

### 2. Configure DNS

#### For Vercel:
Add these DNS records at your domain registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

### 3. Add Domain in Platform
- Go to your hosting platform
- Add custom domain
- Wait for DNS propagation (up to 48 hours, usually 1-2 hours)
- HTTPS automatically enabled

---

## 📊 Analytics (Optional)

### Google Analytics
1. Create account at https://analytics.google.com
2. Get tracking ID
3. Add to your site using react-helmet-async:

```tsx
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </script>
      </Helmet>
      {/* Rest of app */}
    </>
  );
}
```

### Vercel Analytics
Built-in analytics available on Vercel (free on Pro plan)

---

## 🐛 Common Deployment Issues

### Issue: 404 on Page Refresh
**Problem:** SPA routing issue  
**Solution:** Configure redirects

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify:** Create `public/_redirects`:
```
/* /index.html 200
```

### Issue: Images Not Loading
**Problem:** Incorrect image paths  
**Solution:** Use relative paths or import images

### Issue: Build Fails
**Problem:** Type errors or missing dependencies  
**Solution:**
```bash
# Check build locally first
pnpm build

# Fix TypeScript errors
# Install missing dependencies
pnpm install
```

### Issue: White Screen
**Problem:** JavaScript errors  
**Solution:** Check browser console (F12) for errors

---

## 🎯 Post-Deployment Checklist

After deployment:

- [ ] Visit your live site
- [ ] Test all pages load
- [ ] Test navigation
- [ ] Test on mobile
- [ ] Test dark/light mode
- [ ] Test contact form
- [ ] Check browser console for errors
- [ ] Test in different browsers
- [ ] Check page load speed
- [ ] Verify HTTPS works
- [ ] Test custom domain (if added)

---

## 🚀 Continuous Deployment

With Git-based deployment (Vercel, Netlify, etc.):

1. Make code changes locally
2. Commit: `git commit -am "Update homepage"`
3. Push: `git push origin main`
4. Automatic deployment starts
5. Site updates in 1-2 minutes
6. Done! ✅

---

## 📈 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. **Code Splitting**
   - Already done with Vite
   - Lazy load components if needed

3. **Minimize Bundle Size**
   ```bash
   # Analyze bundle
   pnpm add -D vite-plugin-bundle-analyzer
   ```

### After Deployment

1. **Test Performance**
   - Google PageSpeed Insights
   - https://pagespeed.web.dev/
   - Enter your URL

2. **Monitor**
   - Uptime Robot - https://uptimerobot.com
   - Pingdom - https://pingdom.com

---

## 💡 Pro Tips

1. **Use Git** - Always use version control
2. **Test Locally** - Build and preview before deploying
3. **Environment Variables** - Don't commit secrets
4. **Custom Domain** - More professional
5. **Analytics** - Track visitors
6. **CDN** - Already included with Vercel/Netlify
7. **Caching** - Automatically handled
8. **Backups** - Git is your backup

---

## 🎓 Next Steps After Deployment

1. **Share Your Site**
   - Social media
   - Wolaita community
   - Friends and family

2. **SEO Optimization**
   - Submit to Google Search Console
   - Create sitemap
   - Add meta descriptions

3. **Monitoring**
   - Set up uptime monitoring
   - Configure analytics
   - Monitor performance

4. **Iterate**
   - Gather feedback
   - Make improvements
   - Deploy updates

---

## ✅ Summary

**Easiest Path:**
1. Build: `pnpm build`
2. Go to https://vercel.com
3. Sign up with GitHub
4. Import repository
5. Deploy
6. Done! ✨

**Your site is now live for the world to see!**

For technical details, see **TECH_GUIDE.md**  
For setup instructions, see **SETUP_GUIDE.md**  
For project structure, see **PROJECT_STRUCTURE.md**
