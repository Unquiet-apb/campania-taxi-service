import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const CANONICAL_HOST = 'www.campaniataxi.it';
const REDIRECT_HOSTS = new Set([
  'campaniataxi.it',
  'bnnkr560.up.railway.app'
]);

app.use((req, res, next) => {
  const host = (req.headers.host || '').split(':')[0].toLowerCase();

  if (REDIRECT_HOSTS.has(host)) {
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
  }

  return next();
});

// Serve static files
app.use(express.static(__dirname));

// Fallback to index.html for unknown routes
app.get('/{*path}', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Campania Taxi running on port ${PORT}`);
});
