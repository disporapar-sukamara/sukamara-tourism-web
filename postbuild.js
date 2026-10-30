import fs from 'node:fs';

fs.copyFileSync('index.js', 'dist/index.js');
fs.copyFileSync('package.json', 'dist/package.json');
if (fs.existsSync('public/.htaccess')) {
  fs.copyFileSync('public/.htaccess', 'dist/.htaccess');
  fs.copyFileSync('public/.htaccess', 'dist/client/.htaccess');
}

