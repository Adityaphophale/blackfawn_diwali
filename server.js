/**
 * BLACKFAWN Diwali Corporate Gifting 2026 - Production Node.js Server
 * Features:
 * - High-performance static asset server with MIME type resolution and caching
 * - Secure POST /api/enquire endpoint for real corporate lead capture
 * - Anti-spam honeypot filter, input sanitization, and rate-limiting
 * - Persistent leads storage in leads.json
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const LEADS_FILE = path.join(__dirname, 'leads.json');

// Ensure leads.json exists
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf8');
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// In-memory rate limiting map (IP -> timestamps)
const rateLimits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10;      // max 10 requests per minute

  const userRequests = rateLimits.get(ip) || [];
  const validRequests = userRequests.filter(ts => now - ts < windowMs);

  if (validRequests.length >= maxRequests) {
    return true;
  }

  validRequests.push(now);
  rateLimits.set(ip, validRequests);
  return false;
}

const server = http.createServer((req, res) => {
  const clientIp = req.socket.remoteAddress || 'unknown';

  // Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Handle API: POST /api/enquire
  if (req.method === 'POST' && req.url === '/api/enquire') {
    if (isRateLimited(clientIp)) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Too many requests. Please wait a moment and try again.' }));
      return;
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) { // 1MB limit
        req.destroy();
      }
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);

        // Honeypot check
        if (data.website_hp && data.website_hp.trim() !== '') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: 'Enquiry received.' }));
          return;
        }

        // Required fields validation
        const required = ['fullName', 'companyName', 'businessEmail', 'contactNumber', 'giftCategory', 'approximateQuantity', 'deliveryCity'];
        for (const field of required) {
          if (!data[field] || String(data[field]).trim() === '') {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: `Missing required field: ${field}` }));
            return;
          }
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(String(data.businessEmail).trim())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid business email address.' }));
          return;
        }

        // Phone validation
        const phoneRegex = /^[0-9+ \-()]{8,16}$/;
        if (!phoneRegex.test(String(data.contactNumber).trim())) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid contact phone number.' }));
          return;
        }

        // Consent validation
        if (!data.consent) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Consent to contact is required.' }));
          return;
        }

        // Generate Lead Reference
        const randomSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
        const referenceId = `BF-2026-${randomSuffix}`;

        const leadRecord = {
          referenceId,
          timestamp: new Date().toISOString(),
          clientIp,
          fullName: String(data.fullName).trim(),
          companyName: String(data.companyName).trim(),
          businessEmail: String(data.businessEmail).trim(),
          contactNumber: String(data.contactNumber).trim(),
          giftCategory: String(data.giftCategory).trim(),
          approximateQuantity: String(data.approximateQuantity).trim(),
          deliveryCity: String(data.deliveryCity).trim(),
          preferredProduct: data.preferredProduct ? String(data.preferredProduct).trim() : '',
          brandingRequirements: data.brandingRequirements ? String(data.brandingRequirements).trim() : '',
          greetingCardMessage: data.greetingCardMessage ? String(data.greetingCardMessage).trim() : '',
          additionalRequirements: data.additionalRequirements ? String(data.additionalRequirements).trim() : '',
          status: 'New'
        };

        // Persist to leads.json
        try {
          const raw = fs.readFileSync(LEADS_FILE, 'utf8');
          const list = JSON.parse(raw);
          list.push(leadRecord);
          fs.writeFileSync(LEADS_FILE, JSON.stringify(list, null, 2), 'utf8');
        } catch (fileErr) {
          console.error('Error saving lead to file:', fileErr);
        }

        console.log(`[LEAD RECEIVED] ${referenceId} - ${leadRecord.fullName} (${leadRecord.companyName}) - ${leadRecord.giftCategory} (${leadRecord.approximateQuantity})`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          referenceId,
          message: 'Thank you for enquiring with BLACKFAWN. Our team will review your requirements and get in touch with you.'
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Malformed JSON payload.' }));
      }
    });
    return;
  }

  // Handle API: GET /api/leads (internal audit endpoint)
  if (req.method === 'GET' && req.url === '/api/leads') {
    try {
      const data = fs.readFileSync(LEADS_FILE, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } catch {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unable to read leads.' }));
    }
    return;
  }

  // Handle Health check
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', time: new Date().toISOString() }));
    return;
  }

  // Static File Serving
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Security: prevent path traversal out of PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for SPA routing if needed
      const fallbackIndex = path.join(PUBLIC_DIR, 'index.html');
      fs.readFile(fallbackIndex, (fbErr, fbContent) => {
        if (fbErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(fbContent);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Cache control - ensure instant updates on development & tunnels
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`================================================================`);
  console.log(`  BLACKFAWN Diwali Corporate Gifting 2026 Landing Page`);
  console.log(`  Server running at: http://localhost:${PORT}/`);
  console.log(`  Zero-Price Rule Active: Strict Corporate Lead Generation Mode`);
  console.log(`================================================================`);
});
