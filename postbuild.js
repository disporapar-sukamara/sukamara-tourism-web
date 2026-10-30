import fs from 'node:fs';

fs.copyFileSync('index.js', 'dist/index.js');
fs.copyFileSync('package.json', 'dist/package.json');
if (fs.existsSync('public/.htaccess')) {
  fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
  fs.copyFileSync('public/.htaccess', 'dist/client/.htaccess');
}

// ponytail: Ensure caching headers even when Hostinger starts server/entry.mjs directly
const entryPath = 'dist/server/entry.mjs';
if (fs.existsSync(entryPath)) {
  let content = fs.readFileSync(entryPath, 'utf8');
  if (!content.includes('_origCS')) {
    const target = 'import http from "node:http";';
    const hook = `import http from "node:http";\nconst _origCS = http.createServer;\nhttp.createServer = function (...args) {\n  const s = _origCS.apply(this, args);\n  s.on('request', (req, res) => {\n    const u = req.url?.split('?')[0] || '';\n    if (\n      u.startsWith('/images/') ||\n      u.startsWith('/fonts/') ||\n      u.startsWith('/docs/') ||\n      /\\.(webp|png|jpg|jpeg|svg|woff2|woff|ttf|css|js|ico|pdf)$/i.test(u)\n    ) {\n      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');\n    }\n  });\n  return s;\n};\n`;
    content = content.replace(target, hook);
    fs.writeFileSync(entryPath, content, 'utf8');
  }
}


