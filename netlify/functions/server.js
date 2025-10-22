const serverless = require('serverless-http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');

const app = express();
app.use(express.json());

// CORS simple
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Fichier de stockage temporaire (os.tmpdir() — attention : stockage éphémère)
const storageFile = path.join(os.tmpdir(), 'visitor-count.json');

function readCount() {
  try {
    const data = fs.readFileSync(storageFile, 'utf8');
    const j = JSON.parse(data);
    return Number(j.count) || 0;
  } catch (e) {
    return 0;
  }
}
function writeCount(c) {
  try {
    fs.writeFileSync(storageFile, JSON.stringify({ count: c }), 'utf8');
  } catch (e) { /* ignore */ }
}

// Endpoint d'exemple : incrémente et retourne le compteur
app.get('/visitor', (req, res) => {
  let count = readCount();
  count = count + 1;
  writeCount(count);
  res.json({ count, timestamp: Date.now() });
});

// Endpoint de test
app.get('/hello', (req, res) => {
  res.json({ message: 'Express via Netlify Functions' });
});

module.exports.handler = serverless(app);
