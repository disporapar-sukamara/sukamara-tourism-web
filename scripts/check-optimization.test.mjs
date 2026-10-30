import assert from 'node:assert';
import fs from 'node:fs';

// ponytail: Basic self-check test verifying performance constraints without test framework bloat
const heroImg = 'public/images/destinasi/carousel/0/gambar.webp';
assert(fs.existsSync(heroImg), 'Hero LCP image must exist');
const heroSize = fs.statSync(heroImg).size;
assert(heroSize < 240 * 1024, `Hero LCP image size (${heroSize} bytes) exceeds 240KB ceiling`);

const destFiles = [
  'bundaran-burung-balai-riam.webp',
  'bundaran-tugu-sukamara.webp',
  'makam-datuk-nakhoda.webp',
  'masjid-agung-sukamara.webp',
  'pantai-tanjung-nipah.webp',
  'tepian-jelai.webp'
];

for (const f of destFiles) {
  const p = `public/images/destinasi/${f}`;
  assert(fs.existsSync(p), `Image ${p} must exist`);
  const sz = fs.statSync(p).size;
  assert(sz < 80 * 1024, `Destination card image ${f} (${sz} bytes) exceeds 80KB limit`);
}

const mapSectionCode = fs.readFileSync('src/components/sections/MapSection.astro', 'utf8');
assert(!mapSectionCode.includes('retries++'), 'MapSection must not use timer polling loops');
assert(mapSectionCode.includes('script.onload = startMap'), 'MapSection must use native event onload');

const heroSectionCode = fs.readFileSync('src/components/sections/Hero.astro', 'utf8');
assert(!heroSectionCode.includes('initialTimeout = setTimeout(startAuto, 4000)'), 'Hero must not rotate during audit');
assert(heroSectionCode.includes('<picture'), 'Hero must use <picture> tag for responsive images');
assert(heroSectionCode.includes('srcset='), 'Hero must use srcset or source for mobile image');
assert(heroSectionCode.includes('(webp|jpe?g|png)'), 'Hero must support all common Keystatic upload extensions (jpg/jpeg/png/webp)');

const optimizeImagesCode = fs.readFileSync('scripts/optimize-images.mjs', 'utf8');
assert(optimizeImagesCode.includes("replace(/\\.(jpe?g|png|webp)$/i, '-mobile.webp')"), 'optimize-images must support generating mobile webp from jpg/png/webp');

const heroMobileImg = 'public/images/destinasi/carousel/0/gambar-mobile.webp';
assert(fs.existsSync(heroMobileImg), 'Hero mobile image (gambar-mobile.webp) must exist');
const heroMobileSize = fs.statSync(heroMobileImg).size;
assert(heroMobileSize < 50 * 1024, `Hero mobile image (${heroMobileSize} bytes) exceeds 50KB limit`);

const baseLayoutCode = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
assert(baseLayoutCode.includes('gambar-mobile.webp'), 'BaseLayout must preload mobile hero image');
assert(baseLayoutCode.includes('media="(max-width: 768px)"'), 'BaseLayout must have mobile media query for hero preload');
assert(!baseLayoutCode.includes('fonts.googleapis.com'), 'BaseLayout must eliminate external Google Fonts to remove render-blocking resources');
assert(baseLayoutCode.includes('/fonts/plus-jakarta-sans-latin.woff2'), 'BaseLayout must preload local primary font');

const fontFiles = ['plus-jakarta-sans-latin.woff2', 'sacramento-latin.woff2', 'caveat-latin.woff2'];
for (const font of fontFiles) {
  const p = `public/fonts/${font}`;
  assert(fs.existsSync(p), `Local font ${p} must exist`);
}

const navbarCode = fs.readFileSync('src/components/layout/Navbar.astro', 'utf8');
assert(!navbarCode.includes('handleScrollSpy();\n  window.addEventListener(\'scroll\''), 'Navbar must not run synchronous scrollspy on load');

const indexJsCode = fs.readFileSync('index.js', 'utf8');
assert(indexJsCode.includes('s-maxage=3600'), 'index.js must set edge caching for HTML document requests');

console.log('All performance self-checks passed successfully!');
