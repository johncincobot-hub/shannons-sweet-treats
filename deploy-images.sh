#!/bin/bash
# Shannon's Sweet Treats - Deploy Images to Website

cd ~/.openclaw/workspace/projects/shannons-sweet-treats

echo "🍭 Shannon's Sweet Treats - Deploying Images..."
echo ""

# Check if there are changes
if [[ -z $(git status -s website/images/) ]]; then
    echo "✅ No new images to deploy - everything is up to date!"
    exit 0
fi

# Show what's being deployed
echo "📸 New/changed images:"
git status -s website/images/
echo ""

# Add, commit, and push
git add website/images/
git commit -m "Update images: $(date '+%Y-%m-%d %H:%M')"
git push

echo ""
echo "🚀 Deployment complete!"
echo "⏳ Wait ~60 seconds for Cloudflare Pages to rebuild"
echo "🌐 Then visit: https://shannon.technicianb.com"
echo ""
