# Project File Structure - Wolaita Museum

## 📊 Complete Visual Structure

```
wolaita-museum/
│
├── 📄 package.json                    # Project configuration & dependencies
├── 📄 pnpm-lock.yaml                  # Locked dependency versions
├── 📄 vite.config.ts                  # Vite build configuration
├── 📄 postcss.config.mjs              # PostCSS configuration
├── 📄 README.md                       # Main documentation
├── 📄 SETUP_GUIDE.md                  # Quick setup instructions
├── 📄 TECH_GUIDE.md                   # Technology explanation
└── 📄 PROJECT_STRUCTURE.md            # This file!
│
├── 📁 src/                            # Source code (all your code lives here)
│   │
│   ├── 📁 app/                        # Main application folder
│   │   │
│   │   ├── 📄 App.tsx                 # Root React component
│   │   ├── 📄 routes.tsx              # All page routes configured here
│   │   │
│   │   ├── 📁 pages/                  # All 25+ page components
│   │   │   ├── 📄 Home.tsx            # Homepage with hero
│   │   │   ├── 📄 About.tsx           # About the museum
│   │   │   ├── 📄 Contact.tsx         # Contact form
│   │   │   │
│   │   │   ├── 🌟 Gifaataa.tsx        # New Year celebration
│   │   │   ├── 🌟 Dingguza.tsx        # Traditional cloth
│   │   │   ├── 📄 Marccuwaa.tsx       # Traditional currency
│   │   │   ├── 📄 WolaitaCalendar.tsx # Calendar system
│   │   │   │
│   │   │   ├── 📄 History.tsx         # Historical timeline
│   │   │   ├── 📄 Kings.tsx           # 50+ kings history
│   │   │   ├── 📄 HeritageSites.tsx   # Cultural landmarks
│   │   │   ├── 📄 TangibleHeritage.tsx    # Physical artifacts
│   │   │   ├── 📄 IntangibleHeritage.tsx  # Traditions
│   │   │   │
│   │   │   ├── 📄 Culture.tsx         # Daily life & customs
│   │   │   ├── 📄 Music.tsx           # Music & musicians
│   │   │   ├── 📄 Food.tsx            # Traditional cuisine
│   │   │   ├── 📄 Festivals.tsx       # Cultural celebrations
│   │   │   ├── 📄 LifeCeremonies.tsx  # Marriage & funeral
│   │   │   │
│   │   │   ├── 📄 Language.tsx        # Wolaitigna overview
│   │   │   ├── 📄 Dictionary.tsx      # Word translations
│   │   │   ├── 📄 Proverbs.tsx        # Traditional wisdom
│   │   │   ├── 📄 Sayings.tsx         # Common expressions
│   │   │   ├── 📄 Puzzles.tsx         # Riddles & brain teasers
│   │   │   │
│   │   │   ├── 📄 Gallery.tsx         # Photo gallery
│   │   │   ├── 📄 Tourism.tsx         # Travel information
│   │   │   ├── 📄 Accommodation.tsx   # Hotels & lodges
│   │   │   ├── 📄 Education.tsx       # Learning resources
│   │   │   └── 📄 NotablePeople.tsx   # Historical figures
│   │   │
│   │   └── 📁 components/             # Reusable UI components
│   │       │
│   │       ├── 📁 Features/           # Complex feature components
│   │       │   ├── 📄 ContactForm.tsx     # Form with validation
│   │       │   ├── 📄 GalleryGrid.tsx     # Masonry photo layout
│   │       │   └── 📄 Timeline.tsx        # Interactive timeline
│   │       │
│   │       ├── 📁 Layout/             # App structure components
│   │       │   ├── 📄 Layout.tsx          # Main wrapper
│   │       │   ├── 📄 Navbar.tsx          # Navigation header
│   │       │   ├── 📄 Footer.tsx          # Footer section
│   │       │   └── 📄 WolaitaLogo.tsx     # Custom logo SVG
│   │       │
│   │       ├── 📁 UI/                 # Custom reusable UI
│   │       │   ├── 📄 Hero.tsx            # Page hero sections
│   │       │   ├── 📄 Section.tsx         # Content sections
│   │       │   ├── 📄 Card.tsx            # Content cards
│   │       │   ├── 📄 ThemeToggle.tsx     # Dark/light toggle
│   │       │   ├── 📄 AlphabetSelector.tsx # A-Z filter
│   │       │   └── 📄 DingguazaStripe.tsx # Decorative stripe
│   │       │
│   │       ├── 📁 ui/                 # Shadcn/Radix components
│   │       │   ├── 📄 accordion.tsx
│   │       │   ├── 📄 alert-dialog.tsx
│   │       │   ├── 📄 avatar.tsx
│   │       │   ├── 📄 button.tsx
│   │       │   ├── 📄 card.tsx
│   │       │   ├── 📄 dialog.tsx
│   │       │   ├── 📄 dropdown-menu.tsx
│   │       │   ├── 📄 input.tsx
│   │       │   ├── 📄 tabs.tsx
│   │       │   └── [45+ more components]
│   │       │
│   │       └── 📁 figma/              # Figma-specific helpers
│   │           └── 📄 ImageWithFallback.tsx
│   │
│   └── 📁 styles/                     # Global styles
│       ├── 📄 index.css               # Main stylesheet (imports all)
│       ├── 📄 tailwind.css            # Tailwind imports
│       ├── 📄 theme.css               # Custom theme variables
│       └── 📄 fonts.css               # Font imports (Playfair, Inter)
│
├── 📁 node_modules/                   # Installed dependencies (auto-generated)
│   └── [1000+ packages]               # Don't edit this folder!
│
└── 📁 dist/                           # Production build (after pnpm build)
    ├── 📄 index.html                  # Entry HTML file
    └── 📁 assets/                     # Optimized JS, CSS, images
```

## 🎯 Key Files Explained

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Lists all dependencies, scripts, project info |
| `vite.config.ts` | Vite build tool configuration |
| `postcss.config.mjs` | CSS processing configuration |
| `pnpm-lock.yaml` | Locked versions (ensures consistency) |

### Application Files

| File | Purpose |
|------|---------|
| `src/app/App.tsx` | Root component that renders RouterProvider |
| `src/app/routes.tsx` | Defines all page routes (URLs) |
| `src/app/pages/*.tsx` | Individual page components |
| `src/app/components/` | Reusable UI pieces |

### Style Files

| File | Purpose |
|------|---------|
| `src/styles/index.css` | Main entry (imports others) |
| `src/styles/tailwind.css` | Tailwind CSS imports |
| `src/styles/theme.css` | Custom colors, fonts, spacing |
| `src/styles/fonts.css` | Google Fonts imports |

## 📝 Important Notes

### ✅ Files You Can Edit
- Anything in `src/app/pages/` - Page content
- Anything in `src/app/components/` - Components
- Files in `src/styles/` - Styling
- `README.md` - Documentation

### ⚠️ Files Generated (Don't Edit)
- `node_modules/` - Auto-installed packages
- `dist/` - Auto-generated build
- `pnpm-lock.yaml` - Auto-updated

### 🚫 Files Protected (System Files)
- `src/app/components/figma/ImageWithFallback.tsx`
- `pnpm-lock.yaml`

## 🔄 How Files Connect

### Startup Flow
```
1. Browser loads → index.html
2. index.html imports → src/main.tsx
3. main.tsx renders → src/app/App.tsx
4. App.tsx uses → src/app/routes.tsx
5. routes.tsx shows → Layout.tsx
6. Layout.tsx renders:
   - Navbar.tsx (top)
   - Current page component (middle)
   - Footer.tsx (bottom)
```

### Example: Visiting /gifaataa
```
Browser requests: http://localhost:5173/gifaataa
    ↓
Router checks routes.tsx
    ↓
Finds: { path: "gifaataa", Component: Gifaataa }
    ↓
Renders Layout with Gifaataa page
    ↓
Gifaataa.tsx displays:
    - Hero component
    - Section components
    - Content with Tailwind styling
```

## 🎨 Component Hierarchy

```
App.tsx
 └─ RouterProvider
     └─ Layout.tsx
         ├─ Navbar.tsx
         │   ├─ WolaitaLogo.tsx
         │   ├─ Navigation Links
         │   └─ ThemeToggle.tsx
         │
         ├─ Page Component (e.g., Gifaataa.tsx)
         │   ├─ Hero.tsx
         │   ├─ Section.tsx
         │   │   └─ Card.tsx
         │   └─ More sections...
         │
         └─ Footer.tsx
             ├─ Links
             └─ Social icons
```

## 📦 Package Categories

### Core Framework (Must Have)
```
react              # UI library
react-dom          # React for browsers
react-router       # Page routing
typescript         # Type checking
vite               # Build tool
```

### Styling (Design)
```
tailwindcss        # Utility CSS framework
@tailwindcss/vite  # Tailwind + Vite integration
tailwind-merge     # Merge classes utility
clsx               # Conditional classes
```

### UI Components (Pre-built)
```
@radix-ui/*        # 30+ accessible components
lucide-react       # 1000+ icons
motion             # Animations
```

### Utilities
```
next-themes        # Theme management
react-hook-form    # Forms
react-responsive-masonry  # Gallery layout
date-fns           # Date utilities
sonner             # Toast notifications
```

## 🗺️ Navigation Structure

```
Navbar (Top Navigation)
├─ Home (/)
├─ Gifaataa (/gifaataa) ⭐
├─ Dingguza (/dingguza) ⭐
├─ History (/history)
├─ Culture (/culture)
├─ Music (/music)
├─ Food (/food)
├─ Gallery (/gallery)
├─ Kings (Dropdown)
│  ├─ View All Kings (/kings)
│  ├─ Kawo Tona Gaga (/kings#kawo-tona-gaga)
│  └─ [7 more featured kings]
├─ Visit (Dropdown)
│  ├─ Plan Your Visit (/tourism)
│  ├─ Heritage Sites (/heritage-sites)
│  ├─ Tangible Heritage (/tangible-heritage)
│  ├─ Intangible Heritage (/intangible-heritage)
│  ├─ Where to Stay (/accommodation)
│  └─ Festivals (/festivals)
├─ Language & Wisdom (Dropdown)
│  ├─ Language (/language)
│  ├─ Dictionary (/dictionary)
│  ├─ Proverbs (/proverbs)
│  ├─ Sayings (/sayings)
│  └─ Puzzles (/puzzles)
├─ About (/about)
├─ Theme Toggle (Light/Dark/System)
└─ Contact (/contact) [Button]
```

## 💾 File Sizes (Approximate)

### Source Code
```
Total: ~5-10 MB (with node_modules: 200-500 MB)

src/app/pages/              ~500 KB  (25+ page files)
src/app/components/         ~800 KB  (60+ component files)
src/styles/                 ~50 KB   (4 CSS files)
node_modules/               ~300 MB  (Dependencies)
```

### Production Build (dist/)
```
Total: ~1-3 MB (Optimized!)

index.html                  ~5 KB
assets/index-[hash].js      ~500 KB (minified + gzipped)
assets/index-[hash].css     ~50 KB  (minified + gzipped)
images/                     ~500 KB (optimized)
```

## 🎓 Learning Path

### 1. Start Here (Easiest)
- Edit content in page files (`src/app/pages/Home.tsx`)
- Change colors in theme (`src/styles/theme.css`)
- Add text, images, sections

### 2. Next Level
- Create new pages
- Add routes
- Use existing components
- Customize styling

### 3. Advanced
- Create custom components
- Add new features
- Modify complex logic
- Optimize performance

## ✅ Quick Reference Checklist

### To Add New Page:
- [ ] Create `src/app/pages/NewPage.tsx`
- [ ] Import in `src/app/routes.tsx`
- [ ] Add route: `{ path: "new-page", Component: NewPage }`
- [ ] Add link in `Navbar.tsx`
- [ ] Add link in `Footer.tsx`

### To Edit Existing Page:
- [ ] Find page in `src/app/pages/`
- [ ] Open file in code editor
- [ ] Edit JSX content
- [ ] Save file
- [ ] Browser auto-refreshes

### To Change Colors:
- [ ] Open `src/styles/theme.css`
- [ ] Edit color variables
- [ ] Save file
- [ ] Colors update everywhere

### To Add Component:
- [ ] Create in `src/app/components/UI/`
- [ ] Import in page file
- [ ] Use: `<ComponentName />`

## 📞 Quick Help

**Can't find a file?**  
Use search (Ctrl+P in VS Code)

**Want to add images?**  
Place in page component, use Unsplash or import

**Need to change navigation?**  
Edit `src/app/components/Layout/Navbar.tsx`

**Want different fonts?**  
Edit `src/styles/fonts.css`

---

**Now you understand the complete project structure! 🎉**

Refer back to this anytime you need to find or edit a file.
