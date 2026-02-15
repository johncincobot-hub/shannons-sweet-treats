# 📸 Shannon's Sweet Treats - Image Organization

This folder contains all images and assets for the website, organized by page.

---

## 📁 Folder Structure

```
images/
├── home/          🏠 Homepage images (hero, features)
├── products/      🍫 Product photos (chocolates, gift boxes)
├── about/         👩‍🍳 About Shannon photos (workspace, Shannon photos)
├── order/         📋 Order page images (if needed)
├── contact/       📬 Contact page images (if needed)
└── shared/        🌐 Shared images (logo, icons, backgrounds)
```

---

## 🎨 How to Add/Edit Images

### 1. **Open in Finder**
- Press `⌘ Cmd + Shift + G` in Finder
- Paste: `~/.openclaw/workspace/projects/shannons-sweet-treats/website/images`
- Press Enter
- **Bookmark this location** for easy access!

### 2. **Drop Images into the Right Folder**
- **Homepage hero?** → `home/`
- **New product photo?** → `products/`
- **Photo of Shannon?** → `about/`
- **Logo or icon?** → `shared/`

### 3. **Name Your Files**
Use descriptive names:
- ✅ Good: `dark-chocolate-truffles.jpg`, `shannon-workshop.jpg`
- ❌ Bad: `IMG_1234.jpg`, `photo.jpg`

### 4. **Deploy Changes**
Open Terminal and run:
```bash
cd ~/.openclaw/workspace/projects/shannons-sweet-treats
git add website/images/
git commit -m "Add new product photos"
git push
```

Or just ask Johnny5: "Deploy Shannon's Sweet Treats images"

---

## 📐 Image Guidelines

### **Recommended Sizes:**
- **Hero images:** 1920x1080px (landscape)
- **Product photos:** 800x800px (square)
- **About photos:** 1200x800px (landscape)
- **Icons/logos:** 512x512px (square, PNG with transparency)

### **File Formats:**
- **Photos:** JPG (smaller file size)
- **Logos/icons:** PNG (transparency support)
- **Graphics:** SVG (scales perfectly)

### **Optimization:**
- Keep file sizes under 500KB per image
- Use tools like ImageOptim (Mac app) to compress before uploading

---

## 🔄 Quick Workflow

1. **Edit photos** in your favorite app (Photos, Photoshop, etc.)
2. **Export/save** to the appropriate folder
3. **Run deploy command** (or ask Johnny5)
4. **Wait ~60 seconds** for Cloudflare Pages to deploy
5. **Refresh the website** - your images are live!

---

## 🖼️ Using Images in HTML

### **Absolute paths (from images folder):**
```html
<!-- Homepage hero -->
<img src="images/home/hero-chocolates.jpg" alt="Chocolates">

<!-- Product photo -->
<img src="images/products/dark-truffles.jpg" alt="Dark Chocolate Truffles">

<!-- About page -->
<img src="images/about/shannon-portrait.jpg" alt="Shannon">

<!-- Shared logo -->
<img src="images/shared/logo.png" alt="Shannon's Sweet Treats">
```

---

## 📦 Current Images

**Already in use:**
- `hero-chocolates.jpg` - Homepage hero (currently in root)
- `assortment.jpg` - Product assortment
- `truffles.jpg` - Truffle closeup
- `shannon.jpg` - Shannon portrait
- `packaging.jpg` - Gift box packaging

**Bulk photos:** 100+ product photos (numbered files) - can be organized into `products/` folder as needed.

---

## 🆘 Need Help?

Ask Johnny5:
- "Show me the images folder"
- "Deploy Shannon's images"
- "Organize the product photos"
- "Add this image to the products page"

---

**Happy editing! 🍭✨**
