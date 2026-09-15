# Wolaita Museum - Digital Cultural Heritage Platform

A premium, museum-quality digital platform dedicated to preserving and promoting the rich cultural legacy, history, and traditions of the Wolaita people of Ethiopia.

![Wolaita Museum](https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&h=400&fit=crop)

## 🎯 Project Overview

This is a comprehensive static website built with modern web technologies, featuring:
- **25+ pages** covering all aspects of Wolaita culture
- **Museum-quality design** with warm Ethiopian earth tones
- **Interactive features** including timeline, gallery, and language tools
- **Fully responsive** mobile-first design
- **Dark/Light mode** with system preference detection
- **WCAG 2.1 AA accessibility** compliant

## 🛠️ Technology Stack

### Core Framework
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 6.3.5** - Build tool and development server
- **React Router 7.13.0** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Material-UI (MUI)** - React component library
- **Lucide React** - Icon library
- **Motion (Framer Motion)** - Animation library

### Key Libraries
- **react-responsive-masonry** - Gallery masonry layout
- **recharts** - Data visualization (if needed)
- **react-hook-form** - Form management
- **next-themes** - Theme management (dark/light mode)
- **sonner** - Toast notifications
- **react-helmet-async** - SEO meta tags

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **PostCSS** - CSS processing

## 📁 Project Structure

```
wolaita-museum/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Features/        # Specific feature components
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── GalleryGrid.tsx
│   │   │   │   └── Timeline.tsx
│   │   │   ├── Layout/          # Layout components
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── WolaitaLogo.tsx
│   │   │   ├── UI/              # Custom UI components
│   │   │   │   ├── AlphabetSelector.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── DingguazaStripe.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Section.tsx
│   │   │   │   └── ThemeToggle.tsx
│   │   │   └── ui/              # Shadcn/Radix UI components
│   │   │       └── [50+ reusable components]
│   │   ├── pages/               # All page components
│   │   │   ├── Home.tsx
│   │   │   ├── Gifaataa.tsx    # Wolaita New Year
│   │   │   ├── Dingguza.tsx    # Traditional Cloth
│   │   │   ├── Kings.tsx       # 50+ Kings History
│   │   │   ├── Music.tsx
│   │   │   ├── Food.tsx
│   │   │   ├── Language.tsx
│   │   │   ├── Dictionary.tsx
│   │   │   ├── Proverbs.tsx
│   │   │   ├── Sayings.tsx
│   │   │   ├── Puzzles.tsx
│   │   │   └── [15+ more pages]
│   │   ├── App.tsx             # Root component
│   │   └── routes.tsx          # Route configuration
│   └── styles/
│       ├── index.css           # Main styles
│       ├── fonts.css           # Font imports
│       ├── theme.css           # Theme variables
│       └── tailwind.css        # Tailwind config
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── README.md
```

## 📄 Pages Included

### Cultural Treasures
- **Gifaataa** - Wolaita New Year celebration
- **Dingguza** - Traditional & cultural cloth
- **Marccuwaa** - Traditional currency
- **Wolaita Calendar** - Traditional calendar system
- **50+ Kings** - Complete royal lineage

### Heritage & History
- **History** - Interactive timeline
- **Heritage Sites** - Natural & cultural landmarks
- **Tangible Heritage** - Physical artifacts
- **Intangible Heritage** - Traditions & practices
- **Life Ceremonies** - Marriage & funeral customs

### Language & Wisdom
- **Language** - Wolaitigna language overview
- **Dictionary** - Wolaita-English translations
- **Proverbs** - Traditional wisdom
- **Sayings** - Common expressions
- **Puzzles & Riddles** - Traditional brain teasers

### Culture & Life
- **Culture & Daily Life** - Everyday traditions
- **Music & Musicians** - Traditional & modern music
- **Food & Cuisine** - Traditional dishes
- **Festivals** - Cultural celebrations
- **Notable People** - Historical figures

### Visit & Explore
- **Tourism** - Travel guide
- **Accommodation** - Where to stay
- **Gallery** - Photo collection
- **Education** - Learning resources
- **About** - About the platform
- **Contact** - Get in touch

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your computer:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **pnpm** (Package Manager)
   - Install globally: `npm install -g pnpm`
   - Verify installation: `pnpm --version`

3. **Git** (Optional, for version control)
   - Download from: https://git-scm.com/

4. **Code Editor** (Recommended)
   - Visual Studio Code: https://code.visualstudio.com/
   - Or any text editor of your choice

### Installation Steps

1. **Download the Project**
   
   If you're in Figma Make, you can export the project. Otherwise, ensure you have all the project files in a folder called `wolaita-museum`.

2. **Open Terminal/Command Prompt**
   
   Navigate to the project directory:
   ```bash
   cd path/to/wolaita-museum
   ```

3. **Install Dependencies**
   
   Run this command to install all required packages:
   ```bash
   pnpm install
   ```
   
   This will install all dependencies listed in `package.json`. It may take a few minutes.

4. **Start Development Server**
   
   Once installation is complete, start the development server:
   ```bash
   pnpm dev
   ```

5. **View in Browser**
   
   Open your browser and go to:
   ```
   http://localhost:5173
   ```
   
   The website should now be running locally!

### Build for Production

To create a production-ready build:

```bash
pnpm build
```

This creates an optimized build in the `dist` folder, ready for deployment.

## 🎨 Design System

### Colors

The platform uses warm Ethiopian earth tones:

- **Primary**: Orange/Amber tones (`orange-800`, `amber-600`)
- **Wolaita Identity Colors**: 
  - Red (`#DC2626`)
  - Yellow (`#EAB308`)
  - Black (`#1C1917`)
- **Neutrals**: Stone palette (`stone-50` to `stone-900`)

### Typography

- **Display/Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Key Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

2. **Dark Mode**
   - Three-option toggle: Light / Dark / System
   - Persists user preference

3. **Accessibility**
   - WCAG 2.1 AA compliant
   - Semantic HTML
   - Keyboard navigation
   - Screen reader friendly

4. **Animations**
   - Smooth page transitions
   - Interactive hover states
   - Motion-based animations using Framer Motion

## 🔧 Common Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Add a new package
pnpm add <package-name>

# Remove a package
pnpm remove <package-name>
```

## 📦 Key Dependencies Explained

- **react-router** - Handles all page navigation
- **motion** - Smooth animations and transitions
- **next-themes** - Dark/light mode implementation
- **react-responsive-masonry** - Gallery masonry layout
- **lucide-react** - Beautiful icons throughout the site
- **@radix-ui/** - Accessible, unstyled component primitives
- **react-hook-form** - Contact form validation
- **sonner** - Toast notifications (if needed)
- **tailwind-merge** & **class-variance-authority** - Dynamic className utilities

## 🌐 Deployment Options

### Static Hosting (Recommended)

Since this is a static React app, you can deploy it to:

1. **Vercel** (Recommended)
   - Visit: https://vercel.com
   - Connect your Git repository
   - Automatic deployments on push
   - Free tier available

2. **Netlify**
   - Visit: https://netlify.com
   - Drag and drop `dist` folder
   - Or connect Git repository
   - Free tier available

3. **GitHub Pages**
   - Free hosting via GitHub
   - Requires GitHub repository

4. **AWS S3 + CloudFront**
   - Scalable, professional hosting
   - Requires AWS account

### Deployment Steps (Vercel Example)

1. Build the project: `pnpm build`
2. Sign up at https://vercel.com
3. Click "New Project"
4. Import your Git repository
5. Vercel auto-detects Vite
6. Click "Deploy"
7. Your site is live! 🎉

## 🖼️ Image Assets

The platform uses images from:
- **Unsplash API** - High-quality stock photos
- **Figma Assets** - Custom images and patterns (Dingguza pattern)

Note: Some images use the `figma:asset` scheme which is specific to Figma Make. When deploying independently, you may need to replace these with actual image files or URLs.

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags via react-helmet-async
- Descriptive page titles
- Alt text for images
- Clean URL structure

## 🤝 Contributing

To modify or extend the platform:

1. Create new pages in `src/app/pages/`
2. Add routes in `src/app/routes.tsx`
3. Update navigation in `src/app/components/Layout/Navbar.tsx`
4. Add components in `src/app/components/`
5. Follow existing code patterns

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Optimized bundle size with code splitting
- Lazy loading for images
- Efficient React Router setup
- Fast development server (Vite)
- Production builds are minified and optimized

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   # Or change port in vite.config.ts
   ```

2. **Dependencies not installing**
   ```bash
   # Clear cache and reinstall
   pnpm store prune
   rm -rf node_modules
   pnpm install
   ```

3. **Build errors**
   ```bash
   # Check Node.js version
   node --version  # Should be v18+
   
   # Try clearing cache
   rm -rf node_modules .vite
   pnpm install
   ```

## 📞 Support

For questions or issues:
- Review this README thoroughly
- Check package documentation
- Consult React, Vite, and Tailwind CSS official docs

## 📄 License

This project is created for the Wolaita cultural heritage community.

## 🙏 Acknowledgments

- Wolaita community and cultural custodians
- All contributors to the open-source libraries used
- Ethiopian cultural heritage preservation efforts

---

**Built with ❤️ for the Wolaita people of Ethiopia**

**Last Updated**: March 6, 2026
