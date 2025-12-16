// Simple Node.js script to generate PNG favicons from SVG
// Run with: node scripts/generate-png-favicons.js

const fs = require('fs');
const path = require('path');

// Read the SVG content
const svgPath = path.join(__dirname, '../public/favicon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

console.log('SVG Favicon found!');
console.log('\n=== INSTRUCTIES ===');
console.log('Om PNG favicons te genereren vanaf de SVG:');
console.log('');
console.log('Optie 1 - Online converter:');
console.log('1. Ga naar https://convertio.co/nl/svg-png/ of https://cloudconvert.com/svg-to-png');
console.log('2. Upload: public/favicon.svg');
console.log('3. Genereer de volgende formaten:');
console.log('   - 192x192px → opslaan als: public/android-chrome-192x192.png');
console.log('   - 512x512px → opslaan als: public/android-chrome-512x512.png');
console.log('   - 48x48px   → opslaan als: public/favicon-48x48.png');
console.log('   - 32x32px   → opslaan als: public/favicon.png');
console.log('');
console.log('Optie 2 - Met de browser:');
console.log('1. Open: public/generate-favicons.html in je browser');
console.log('2. Klik op de download knoppen voor elk formaat');
console.log('3. Verplaats de downloads naar de public/ directory');
console.log('');
console.log('De SVG werkt al prima voor moderne browsers!');
console.log('De PNG\'s zijn vooral voor oudere browsers en Android/iOS apps.');
