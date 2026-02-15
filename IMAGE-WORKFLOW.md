# 🖼️ Shannon's Sweet Treats - Image Management Guide

Easy workflow for adding and updating website images!

---

## 🚀 Quick Start

### **Option 1: Use Desktop Shortcut (Easiest!)**

1. **Open "Shannon's Images" folder on your Desktop**
   - It's a shortcut to the images folder
   - Double-click to open in Finder

2. **Drag & drop images into the right subfolder:**
   - `home/` - Homepage images
   - `products/` - Product photos
   - `about/` - About Shannon photos
   - `order/` - Order page images
   - `contact/` - Contact page images
   - `shared/` - Logos, icons, shared graphics

3. **Deploy to website:**
   - Open Terminal
   - Run: `bash ~/Desktop/"Shannon's Images"/../deploy-images.sh`
   - Or ask Johnny5: "Deploy Shannon's images"

### **Option 2: Finder Go-To**

1. Press `⌘ Cmd + Shift + G` in Finder
2. Paste: `~/.openclaw/workspace/projects/shannons-sweet-treats/website/images`
3. Press Enter
4. **Bookmark this location** (⌘ Cmd + D)

---

## 📁 Folder Organization

```
Shannon's Images/
├── home/          🏠 Homepage hero, features
├── products/      🍫 Chocolate photos, gift boxes
├── about/         👩‍🍳 Shannon photos, workspace
├── order/         📋 Order form images
├── contact/       📬 Contact page images
└── shared/        🌐 Logo, icons, backgrounds
```

---

## 🎨 Image Best Practices

### **File Naming**
- ✅ `dark-chocolate-truffles.jpg`
- ✅ `shannon-workshop-2024.jpg`
- ✅ `gift-box-pink.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo.jpg`

### **Recommended Sizes**
| Type | Size | Format |
|------|------|--------|
| Hero images | 1920x1080px | JPG |
| Product photos | 800x800px | JPG |
| About photos | 1200x800px | JPG |
| Logos/icons | 512x512px | PNG |

### **File Size**
- Keep under 500KB per image
- Use ImageOptim (Mac app) to compress
- Or use Preview → Export → Reduce Quality

---

## 🔄 Deployment Workflow

### **Method 1: Terminal Command**
```bash
cd ~/.openclaw/workspace/projects/shannons-sweet-treats
bash deploy-images.sh
```

### **Method 2: Ask Johnny5**
Just message:
- "Deploy Shannon's images"
- "Push Shannon's new photos"
- "Update Shannon's website images"

### **Method 3: Manual Git**
```bash
cd ~/.openclaw/workspace/projects/shannons-sweet-treats
git add website/images/
git commit -m "Add new product photos"
git push
```

---

## 🌐 After Deployment

1. **Wait ~60 seconds** for Cloudflare Pages to rebuild
2. **Visit:** https://shannon.technicianb.com
3. **Hard refresh** if needed: `⌘ Cmd + Shift + R`
4. **Your images are live!** 🎉

---

## 💡 Pro Tips

### **Batch Editing**
1. Edit multiple photos in Photos app or Photoshop
2. Export all at once to the appropriate folder
3. Run one deploy command
4. All images go live together

### **Image Optimization**
Download free tools:
- **ImageOptim** - Compress without losing quality
- **Preview (built-in)** - Resize and reduce quality
- **Squash** - Batch image compression

### **Testing Locally**
Before deploying, you can preview changes:
```bash
cd ~/.openclaw/workspace/projects/shannons-sweet-treats/website
python3 -m http.server 8085
```
Visit: http://localhost:8085

---

## 📝 Example Workflows

### **Adding New Product Photos**
1. Take/edit photos of new chocolates
2. Export to `Shannon's Images/products/`
3. Name: `milk-chocolate-hearts.jpg`, `dark-truffles-valentines.jpg`
4. Run: `bash deploy-images.sh`
5. Wait 60 seconds
6. Photos appear on products page!

### **Updating Homepage Hero**
1. Create new hero image (1920x1080px)
2. Save to `Shannon's Images/home/hero-spring-2026.jpg`
3. Update `index.html` to reference new image
4. Deploy
5. New hero is live!

### **Adding About Page Photos**
1. Take photos of workspace or Shannon making chocolates
2. Export to `Shannon's Images/about/`
3. Deploy
4. Add to About page HTML

---

## 🆘 Troubleshooting

### **Images not showing after deploy?**
- Hard refresh: `⌘ Cmd + Shift + R`
- Check file path in HTML matches folder structure
- Verify image uploaded to correct folder

### **File too large?**
- Use ImageOptim to compress
- Or Preview → Export → Reduce quality to 80%

### **Can't find images folder?**
- Look for "Shannon's Images" on Desktop
- Or press `⌘ Cmd + Shift + G` and paste path from above

---

## 📞 Need Help?

Ask Johnny5:
- "Show me Shannon's images folder"
- "How do I add product photos?"
- "Deploy these new images"
- "Organize the chocolate photos"

---

**Happy image editing! 🍭📸✨**
