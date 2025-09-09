# WebDesk AI - Statische Website

Een volledig statische HTML/CSS/JavaScript versie van de WebDesk AI website, geoptimaliseerd voor GitHub Pages hosting.

## 🚀 Features

- **Volledig Responsief**: Werkt perfect op alle apparaten
- **AI-Gedreven Design**: Moderne, professionele uitstraling
- **Snelle Laadtijden**: Geoptimaliseerd voor prestaties
- **SEO Vriendelijk**: Proper meta tags en semantische HTML
- **Interactieve Elementen**: Smooth scrolling, animaties, en hover effecten
- **Contact Formulier**: Werkend contact formulier met validatie
- **WhatsApp Integratie**: Floating WhatsApp chat button
- **Bedankt Pagina**: Dedicated thank you page na form submission

## 📁 Bestandsstructuur

```
/
├── index.html          # Hoofdpagina
├── bedankt.html        # Bedankt pagina
├── styles.css          # Alle CSS styling
├── script.js           # JavaScript functionaliteit
├── README.md           # Deze documentatie
└── assets/             # Afbeeldingen en andere assets
    ├── WebDesnk AI.png
    ├── New banner.png
    └── ...
```

## 🛠 Installatie & Gebruik

### GitHub Pages Deployment

1. **Fork of Clone** deze repository
2. **Upload bestanden** naar je GitHub repository
3. **Ga naar Settings** > Pages in je repository
4. **Selecteer source**: Deploy from a branch
5. **Kies branch**: main (of master)
6. **Kies folder**: / (root)
7. **Save** en wacht tot deployment compleet is

### Lokale Development

1. **Clone de repository**:
   ```bash
   git clone [repository-url]
   cd webdesk-ai-static
   ```

2. **Start een lokale server**:
   ```bash
   # Met Python
   python -m http.server 8000
   
   # Met Node.js (http-server)
   npx http-server
   
   # Met PHP
   php -S localhost:8000
   ```

3. **Open in browser**: `http://localhost:8000`

## 🎨 Customization

### Kleuren Aanpassen
Hoofdkleuren zijn gedefinieerd in `styles.css`:
```css
:root {
  --primary-color: #F4C430;
  --secondary-color: #ff8c00;
  --text-color: #111827;
  --background-color: #ffffff;
}
```

### Content Wijzigen
- **Teksten**: Bewerk direct in `index.html` en `bedankt.html`
- **Afbeeldingen**: Vervang bestanden in de root directory
- **Contact Info**: Update in footer en contact sectie

### Formulier Integratie
Het contact formulier is voorbereid voor integratie met:
- **Netlify Forms**
- **Formspree**
- **EmailJS**
- **Custom PHP backend**

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimalisaties

- **Minified CSS**: Gecomprimeerde stylesheets
- **Optimized Images**: WebP formaat waar mogelijk
- **Lazy Loading**: Images laden on-demand
- **Debounced Scroll**: Geoptimaliseerde scroll events
- **CSS Animations**: Hardware-accelerated transforms

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📞 Contact Integraties

### WhatsApp
```javascript
// WhatsApp link format
https://wa.me/31645830810
```

### Email
```html
<a href="mailto:hallo@webdeskai.nl">hallo@webdeskai.nl</a>
```

### Telefoon
```html
<a href="tel:+31645830810">+31 6 45830810</a>
```

## 🚀 Deployment Opties

### GitHub Pages (Gratis)
- Automatische SSL
- Custom domain support
- CDN distributie

### Netlify (Gratis tier)
- Form handling
- Serverless functions
- Branch previews

### Vercel (Gratis tier)
- Edge network
- Analytics
- Performance insights

## 📈 SEO Optimalisaties

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Schema Markup**: Structured data
- **Sitemap**: XML sitemap gegenereerd
- **Robots.txt**: Search engine instructies

## 🔒 Security

- **HTTPS**: Verplicht voor alle verbindingen
- **Content Security Policy**: XSS bescherming
- **Form Validation**: Client-side en server-side
- **Sanitized Inputs**: Veilige data handling

## 📊 Analytics

Voeg Google Analytics toe:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Afbeeldingen laden niet
- Controleer bestandspaden
- Zorg voor juiste case-sensitivity
- Verificeer bestandsformaten

### Formulier werkt niet
- Check form action URL
- Valideer required fields
- Test JavaScript console voor errors

### Styling problemen
- Clear browser cache
- Check CSS syntax
- Valideer HTML structure

## 📝 Licentie

Dit project is gelicenseerd onder de MIT License.

## 🤝 Contributing

1. Fork het project
2. Maak een feature branch
3. Commit je wijzigingen
4. Push naar de branch
5. Open een Pull Request

## 📞 Support

Voor vragen of ondersteuning:
- **Email**: hallo@webdeskai.nl
- **Telefoon**: +31 6 45830810
- **WhatsApp**: [Chat starten](https://wa.me/31645830810)

---

**WebDesk AI** - AI-Gedreven Websites voor Onverslaanbare Prijzen