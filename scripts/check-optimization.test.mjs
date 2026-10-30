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

console.log('All performance self-checks passed successfully!');
