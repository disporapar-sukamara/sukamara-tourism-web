import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// ponytail: Automated image optimization for public/images on build; upgrade to Cloudinary/imgix if user uploads exceed 100MB
const PUBLIC_IMAGES = path.resolve('public/images');

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) return;

  const isCarousel = filePath.includes('/carousel/');
  const isBranding = filePath.includes('/branding/');
  const maxWidth = isCarousel ? 1280 : isBranding ? 400 : 640;
  const quality = isBranding ? 82 : isCarousel ? 74 : 75;

  try {
    const image = sharp(filePath);
    const meta = await image.metadata();

    // Skip SVGs or tiny icons
    if (!meta.width || meta.width <= maxWidth && ext === '.webp' && fs.statSync(filePath).size < 80 * 1024) {
      return;
    }

    const targetWebp = ext === '.webp' ? filePath : filePath.replace(/\.(jpe?g|png)$/i, '.webp');
    const prevSize = fs.existsSync(targetWebp) ? fs.statSync(targetWebp).size : Infinity;

    const pipeline = sharp(filePath)
      .resize({
        width: maxWidth,
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality, effort: 5 });

    const buffer = await pipeline.toBuffer();

    if (buffer.length < prevSize) {
      fs.writeFileSync(targetWebp, buffer);
      const saved = Math.round((prevSize === Infinity ? 0 : prevSize - buffer.length) / 1024);
      console.log(`[optimize-images] Optimized ${path.relative(PUBLIC_IMAGES, targetWebp)} (${Math.round(buffer.length / 1024)} KB${saved > 0 ? `, saved ${saved} KB` : ''})`);
    }
  } catch (err) {
    console.warn(`[optimize-images] Warning on ${path.basename(filePath)}:`, err.message);
  }
}

console.log('[optimize-images] Starting image optimization in public/images...');
await processDirectory(PUBLIC_IMAGES);
console.log('[optimize-images] Completed successfully.');
