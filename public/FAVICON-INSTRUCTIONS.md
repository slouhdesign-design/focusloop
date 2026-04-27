# Favicon Generation Instructions

## IMPORTANT: Generate favicons before deployment

The website currently has NO favicon. This will cause:
- Missing icon in browser tabs
- No home screen icon on mobile
- Incomplete professional appearance

## Quick Solution (5 minutes)

### Option 1: Use Online Generator (Recommended)
1. Visit: https://realfavicongenerator.net/
2. Upload: `src/assets/focusloop-logo.png`
3. Configure:
   - iOS: Check "Add a solid background color" → Use #FF5A5F (focusloop coral)
   - Android: Same background color
   - Desktop: Use default settings
4. Click "Generate favicons"
5. Download the package
6. Extract ALL files to this `public/` folder
7. Add the generated `<head>` tags to `src/routes/__root.tsx`

### Option 2: Manual Creation
If you have image editing software:

```
Required sizes:
├── favicon.ico (multi-resolution: 16x16, 32x32, 48x48)
├── favicon.svg (vector version - best quality)
├── apple-touch-icon.png (180x180 for iOS)
├── icon-192.png (192x192 for Android)
└── icon-512.png (512x512 for Android)
```

Save all files in this `public/` folder.

## After Generation

Add to `src/routes/__root.tsx` in the `<head>` section:

```tsx
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

## Verification

After deployment, test:
- Browser tab shows logo icon
- iOS: Add to home screen shows proper icon
- Android: Add to home screen shows proper icon

---
Generated: April 26, 2026
