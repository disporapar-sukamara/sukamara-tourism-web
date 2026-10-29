import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const entryFile = fs.existsSync(path.join(__dirname, 'dist', 'server', 'entry.mjs'))
  ? path.join(__dirname, 'dist', 'server', 'entry.mjs')
  : path.join(__dirname, 'server', 'entry.mjs');

await import(pathToFileURL(entryFile).href);
