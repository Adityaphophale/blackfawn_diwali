import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

console.log('Building BLACKFAWN Diwali Corporate Gifting 2026 for production...');

// Clean existing dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Ensure dist directory exists
fs.mkdirSync(distDir, { recursive: true });

// Copy all assets from public/ to dist/
fs.cpSync(srcDir, distDir, { recursive: true });

console.log('Build completed successfully! Static output created in dist/');
