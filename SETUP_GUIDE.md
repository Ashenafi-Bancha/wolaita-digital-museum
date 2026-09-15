# Quick Start Guide - Wolaita Museum Platform

## 📥 How to Download and Run Locally

### Step 1: Download the Code

**From Figma Make:**
1. In Figma Make, look for an "Export" or "Download" option
2. Download all project files as a ZIP
3. Extract the ZIP to a folder on your computer (e.g., `wolaita-museum`)

### Step 2: Install Required Software

You need to install these tools (one-time setup):

#### A. Install Node.js (Required)
1. Go to: https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Run the installer
4. Follow installation steps (use default settings)
5. Verify: Open terminal/command prompt and type:
   ```bash
   node --version
   ```
   Should show: `v18.x.x` or higher

#### B. Install pnpm (Required Package Manager)
1. Open terminal/command prompt
2. Run this command:
   ```bash
   npm install -g pnpm
   ```
3. Verify installation:
   ```bash
   pnpm --version
   ```
   Should show version number

#### C. Install Code Editor (Recommended)
- **Visual Studio Code**: https://code.visualstudio.com/
- Free, powerful, and beginner-friendly

### Step 3: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- OR search for "Command Prompt" in Start menu

**Mac:**
- Press `Cmd + Space`
- Type "Terminal" and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### Step 4: Navigate to Project Folder

In the terminal, type:
```bash
cd path/to/wolaita-museum
```

Example (Windows):
```bash
cd C:\Users\YourName\Downloads\wolaita-museum
```

Example (Mac/Linux):
```bash
cd ~/Downloads/wolaita-museum
```

### Step 5: Install Dependencies

Once you're in the project folder, run:
```bash
pnpm install
```

**What happens:**
- Downloads and installs all required packages
- May take 2-5 minutes depending on internet speed
- Creates a `node_modules` folder with all dependencies

### Step 6: Start the Website

After installation completes, run:
```bash
pnpm dev
```

**What happens:**
- Starts a local development server
- Website runs on your computer
- You'll see a message like:
  ```
  VITE v6.3.5  ready in 500 ms
  
  ➜  Local:   http://localhost:5173/
  ```

### Step 7: View in Browser

1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Go to: **http://localhost:5173**
3. The Wolaita Museum website should load! 🎉

## 🎨 What You Can Do Now

### View the Website
- Navigate through all 25+ pages
- Test dark/light mode toggle
- View on mobile by resizing browser
- Test all interactive features

### Edit the Code
1. Open the project folder in Visual Studio Code
2. Make changes to any files
3. Save the file
4. Browser automatically refreshes with changes!

### Stop the Server
In the terminal, press: `Ctrl + C`

### Restart the Server
```bash
pnpm dev
```

## 📁 Important Files to Know

```
wolaita-museum/
├── src/app/pages/          # Edit page content here
│   ├── Home.tsx           # Homepage
│   ├── Gifaataa.tsx       # Gifaataa page
│   ├── Music.tsx          # Music page
│   └── [other pages]
├── src/app/components/     # Reusable components
│   ├── Layout/
│   │   ├── Navbar.tsx     # Top navigation
│   │   └── Footer.tsx     # Footer section
│   └── UI/                # UI components
├── src/styles/            # Styling files
│   ├── theme.css         # Colors and themes
│   └── fonts.css         # Font imports
├── package.json          # Dependencies list
└── README.md            # Full documentation
```

## 🛠️ Common Commands Cheat Sheet

```bash
# Install dependencies (first time only)
pnpm install

# Start development server
pnpm dev

# Stop server
Ctrl + C (in terminal)

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🚀 Next Steps: Deploy to Internet

Once you're happy with the site locally, deploy it online:

### Option 1: Vercel (Easiest)
1. Go to https://vercel.com
2. Sign up (free)
3. Click "New Project"
4. Upload your project
5. Click "Deploy"
6. Done! You get a URL like: `wolaita-museum.vercel.app`

### Option 2: Netlify
1. Go to https://netlify.com
2. Sign up (free)
3. Run `pnpm build` in terminal
4. Drag the `dist` folder to Netlify
5. Done! Your site is live

## ❓ Troubleshooting

### Problem: "command not found: pnpm"
**Solution:** pnpm not installed. Run:
```bash
npm install -g pnpm
```

### Problem: "Port 5173 already in use"
**Solution:** Another app is using the port.
- Close other development servers
- Or change port in `vite.config.ts`

### Problem: Page shows blank/errors
**Solution:**
1. Check browser console (F12 → Console tab)
2. Make sure all dependencies installed: `pnpm install`
3. Try clearing cache: Delete `node_modules` and `.vite`, then `pnpm install`

### Problem: npm/pnpm commands don't work
**Solution:** Node.js not installed properly
1. Restart computer after installing Node.js
2. Verify: `node --version` should show v18+

## 📞 Need Help?

1. Read the full README.md in the project folder
2. Check documentation:
   - React: https://react.dev/
   - Vite: https://vitejs.dev/
   - Tailwind CSS: https://tailwindcss.com/
3. Google error messages
4. Stack Overflow community

## ✅ Success Checklist

- [ ] Node.js installed (v18+)
- [ ] pnpm installed
- [ ] Project folder downloaded/extracted
- [ ] Navigated to project in terminal
- [ ] Ran `pnpm install` successfully
- [ ] Ran `pnpm dev` successfully
- [ ] Website loads at http://localhost:5173
- [ ] Can navigate between pages
- [ ] Dark/light mode works

---

**Congratulations! You now have the Wolaita Museum running locally! 🎉**

For detailed information, see the main **README.md** file.
