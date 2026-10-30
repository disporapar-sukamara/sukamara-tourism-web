import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath, pathToFileURL } from 'node:url';

// ponytail: Ensure optimal edge & browser caching headers without full web server overhead
const originalSetHeader = http.ServerResponse.prototype.setHeader;
http.ServerResponse.prototype.setHeader = function (name, value) {
  if (typeof name === 'string' && name.toLowerCase() === 'cache-control') {
    const url = this.req?.url?.split('?')[0] || '';
    if (
      url.startsWith('/images/') ||
      url.startsWith('/fonts/') ||
      url.startsWith('/docs/') ||
      /\.(webp|png|jpg|jpeg|svg|woff2|woff|ttf|css|js|ico|pdf)$/i.test(url)
    ) {
      return originalSetHeader.call(this, name, 'public, max-age=31536000, immutable');
    }
    if (!url.startsWith('/keystatic') && !url.startsWith('/api/')) {
      return originalSetHeader.call(this, name, 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
    }
  }
  return originalSetHeader.call(this, name, value);
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const entryFile = fs.existsSync(path.join(__dirname, 'dist', 'server', 'entry.mjs'))
  ? path.join(__dirname, 'dist', 'server', 'entry.mjs')
  : path.join(__dirname, 'server', 'entry.mjs');

await import(pathToFileURL(entryFile).href);

