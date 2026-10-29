import fs from 'node:fs';

fs.copyFileSync('index.js', 'dist/index.js');
fs.copyFileSync('package.json', 'dist/package.json');
