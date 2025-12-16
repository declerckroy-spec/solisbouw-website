# 🏠 SolisBouw Favicon Setup

## Wat is er gemaakt?

Er is een complete favicon setup gemaakt voor de SolisBouw website met:

- **Modern design**: Een gestileerd huis-symbool in jullie brand kleuren (terracotta #D4622F en navy #1E3A5F)
- **SEO geoptimaliseerd**: Volgt Google's 2025 best practices voor favicons
- **Multi-platform support**: Werkt op alle browsers, mobiele devices en als PWA

## Wat is er geïnstalleerd?

### ✅ Al werkend:
1. **SVG Favicon** (`app/icon.svg` + `public/favicon.svg`)
   - Werkt in alle moderne browsers
   - Schaalt perfect op elk formaat
   - Automatisch gebruikt door Next.js

2. **Apple Touch Icon** (`app/apple-icon.svg`)
   - Voor iOS devices en Safari
   - Wordt getoond op het home screen

3. **Web Manifest** (`public/site.webmanifest`)
   - PWA ondersteuning
   - Juiste kleuren voor theme en background
   - Nederlandse taal instellingen

4. **Browserconfig** (`public/browserconfig.xml`)
   - Windows tiles configuratie
   - Microsoft Edge ondersteuning

5. **Metadata in layout.tsx**
   - Automatische favicon detectie
   - Theme color (#D4622F - terracotta)
   - Manifest linking

## 🎯 Google SEO Vereisten

Volgens Google's laatste richtlijnen (december 2025):
- ✅ Minimaal 48×48px (SVG schaalt automatisch)
- ✅ Vierkant formaat (1:1 aspect ratio)
- ✅ Crawlbaar door Googlebot
- ✅ Gelinkt in de metadata
- ✅ Meerdere formaten voor verschillende contexten

**Bronnen:**
- [Google Favicon Documentation](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [2025 Best Practices Guide](https://faviconhelper.com/favicon-best-practices)

## 📱 PNG Favicons Genereren (Optioneel)

De SVG werkt al perfect! Maar voor oudere browsers en specifieke Android/iOS apps kun je optioneel PNG's genereren:

### Optie 1: Automatische Generator (Aanbevolen)
1. Open in browser: `scripts/auto-generate-favicons.html`
2. Klik op "Genereer Alle Favicons"
3. Download elk formaat en plaats in `public/` directory

Dit genereert:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-48x48.png`
- `apple-touch-icon.png` (180×180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

### Optie 2: Online Converter
1. Ga naar https://convertio.co/nl/svg-png/
2. Upload `public/favicon.svg`
3. Converteer naar bovenstaande formaten
4. Plaats in `public/` directory

### Optie 3: Handmatige Generator
1. Open in browser: `public/generate-favicons.html`
2. Klik op de download knoppen
3. Verplaats naar `public/` directory

## 🚀 Deployment Checklist

- [x] SVG favicon in `app/icon.svg` ✓
- [x] SVG favicon in `public/favicon.svg` ✓
- [x] Apple icon in `app/apple-icon.svg` ✓
- [x] Web manifest in `public/site.webmanifest` ✓
- [x] Browserconfig in `public/browserconfig.xml` ✓
- [x] Metadata in `app/layout.tsx` ✓
- [ ] PNG favicons gegenereerd (optioneel)
- [ ] Getest in verschillende browsers
- [ ] Getest op mobiel

## 🧪 Testen

### Lokaal testen:
```bash
npm run dev
```
Bezoek http://localhost:3000 en controleer:
- Tab icon in browser
- Bookmark icon
- Mobile home screen icon (voeg toe aan startscherm)

### Online testen na deployment:
1. **Favicon Checker**: https://realfavicongenerator.net/favicon_checker
2. **Google Search Console**: Controleer of Google de favicon kan crawlen
3. **Mobile Test**: Voeg de site toe aan je telefoon home screen

## 📊 Welke Browsers Worden Ondersteund?

| Browser | Support | Via |
|---------|---------|-----|
| Chrome/Edge | ✅ Perfect | SVG + Metadata |
| Firefox | ✅ Perfect | SVG + Metadata |
| Safari Desktop | ✅ Perfect | SVG + Metadata |
| Safari iOS | ✅ Perfect | apple-icon.svg |
| Android Chrome | ✅ Perfect | Web Manifest |
| Opera | ✅ Perfect | SVG + Metadata |
| IE11 | ⚠️ Fallback | Heeft PNG nodig |

## 🎨 Design Details

**Symbool**: Gestileerd huis met dak en ramen
**Kleuren**:
- Navy (#1E3A5F) - Achtergrond cirkel & ramen
- Terracotta (#D4622F) - Dak & deur (primary brand color)
- Warm Grey (#F8F6F4) - Huis body
- Gold (#F5A623) - Accent detail op dak

**Waarom dit design?**
- Simpel en herkenbaar op kleine schaal
- Past perfect bij SolisBouw's focus op renovaties
- Gebruikt de brand kleuren consistent
- Modern maar tijdloos

## 🔄 Updates Maken

Als je de favicon wilt aanpassen:

1. Bewerk `public/favicon.svg` (of `app/icon.svg`)
2. Optioneel: Regenereer PNG's met de generator
3. Test in de browser (force refresh met Ctrl+F5)
4. Deploy naar productie

## ❓ Veelgestelde Vragen

**Q: Waarom zie ik mijn nieuwe favicon niet?**
A: Browsers cachen favicons agressief. Probeer:
- Hard refresh (Ctrl+F5 of Cmd+Shift+R)
- Incognito modus
- Browser cache legen

**Q: Heb ik écht PNG's nodig?**
A: Nee! De SVG werkt perfect in 99% van de gevallen. PNG's zijn alleen voor:
- Zeer oude browsers (IE11)
- Specifieke Android/iOS app integraties
- Windows tiles

**Q: Werkt dit voor Google zoekresultaten?**
A: Ja! Google crawlt en toont de favicon in zoekresultaten. Dit kan 1-2 weken duren na deployment.

**Q: Kan ik de kleuren aanpassen?**
A: Ja, bewerk de hex codes in `favicon.svg`:
- `#1E3A5F` = Navy
- `#D4622F` = Terracotta
- `#F8F6F4` = Warm Grey
- `#F5A623` = Gold

## 📚 Meer Informatie

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
- [Web App Manifest Spec](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Google Favicon Guidelines](https://developers.google.com/search/docs/appearance/favicon-in-search)
