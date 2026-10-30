import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath, pathToFileURL } from 'node:url';

// ponytail: Ensure long-term caching for static assets served directly through Node.js standalone
const originalCreateServer = http.createServer;
http.createServer = function (...args) {
  const server = originalCreateServer.apply(this, args);
  server.on('request', (req, res) => {
    const url = req.url?.split('?')[0] || '';
    if (
      url.startsWith('/images/') ||
      url.startsWith('/fonts/') ||
      url.startsWith('/docs/') ||
      /\.(webp|png|jpg|jpeg|svg|woff2|woff|ttf|css|js|ico|pdf)$/i.test(url)
    ) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (!url.startsWith('/keystatic') && !url.startsWith('/api/')) {
      // ponytail: Cache static HTML pages on CDN edge with quick revalidation, eliminating Document Request Latency
      res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
    }
  });
  return server;
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const entryFile = fs.existsSync(path.join(__dirname, 'dist', 'server', 'entry.mjs'))
  ? path.join(__dirname, 'dist', 'server', 'entry.mjs')
  : path.join(__dirname, 'server', 'entry.mjs');

await import(pathToFileURL(entryFile).href);

