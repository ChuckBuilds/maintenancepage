# 🛠️ Modern Maintenance Page

A beautiful, responsive maintenance page built with React, Vite, and TailwindCSS. Perfect for displaying when your websites are down for maintenance or updates.

## ✨ Features

- **Modern Design**: Clean, glass-morphism UI with gradient backgrounds
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Elements**: 
  - Live clock that updates every second
  - Animated progress bar
  - Smooth fade-in animations
  - Pulsing maintenance icon
- **Professional**: Includes contact information and social media links
- **Fast**: Built with Vite for lightning-fast builds and development
- **SEO Optimized**: Proper meta tags and descriptions

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd maintenance-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

## 🌐 Deployment

### Option 1: Cloudflare Pages (Recommended)

1. **Push to GitHub**: 
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub account and select your repository

3. **Configure Build Settings**:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

4. **Deploy**: Click "Save and Deploy"

Your maintenance page will be live at `https://your-project-name.pages.dev`

### Option 2: GitHub Pages

1. **Add GitHub Pages dependency**:
```bash
npm install --save-dev gh-pages
```

2. **Add scripts to package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

### Option 3: Netlify

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account and select your repository

3. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

## 🎨 Customization

### Colors and Styling
Edit `src/index.css` to modify the gradient and glass effect:

```css
.maintenance-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Content
Modify `src/App.jsx` to change:
- Main heading and subtitle
- Contact email
- Social media links
- Progress percentage
- Company information

### Icons
Replace the maintenance icon SVG in the component with your own icon or logo.

## 📱 Responsive Design

The page is fully responsive and includes:
- Mobile-first design approach
- Flexible layouts that adapt to screen size
- Touch-friendly interactive elements
- Optimized typography for all devices

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you need help with deployment or customization, please open an issue on GitHub.

---

**Built with ❤️ using React, Vite, and TailwindCSS**
