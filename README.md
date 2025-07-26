# Saba Saba 2025 Fatalities Dashboard

An interactive web-based mapping dashboard documenting fatalities and injuries during the Saba Saba protests in Kenya (July 8-12, 2025).

##  Overview

This dashboard visualizes the human cost of the Saba Saba 2025 protests across Kenyan counties, providing a comprehensive view of casualties with geographical context and demographic breakdowns.

### Key Statistics
- **Total Fatalities:** 38
- **Total Injuries:** ≥130
- **Gunshot Deaths:** 14
- **Children Affected:** 2 (5.26%)
- **Gender Distribution:** 84.21% Male, 10.53% Female

##  Features

### Interactive Map
- **County-level visualization** with color-coded fatality rates
- **Hover effects** for detailed county information  
- **Popup windows** displaying fatality counts and media links
- **Responsive design** for desktop and mobile devices

### Data Visualization
- **Pie chart** showing demographic distribution of casualties
- **Color-coded choropleth map** indicating fatality intensity by county
- **Integrated media links** to news coverage and social media reports

### Information Panel
- **Real-time statistics** sidebar with key metrics
- **Media coverage links** from credible news sources
- **Source attribution** to KNCHR and media outlets
- **Contact information** for further inquiries

##  Technical Stack

### Frontend Technologies
- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES6)** - Interactive functionality

### Mapping & Visualization Libraries
- **Leaflet.js** - Interactive mapping framework
- **Chart.js** - Pie chart for demographic data
- **qgis2web** - QGIS to web conversion tools
- **GeoJSON** - Spatial data format for county boundaries

### Additional Libraries
- **Leaflet plugins:**
  - `L.Control.Layers.Tree` - Layer control
  - `leaflet.rotatedMarker` - Marker rotation
  - `leaflet.pattern` - Pattern fills
  - `leaflet-hash` - URL hash for map state
  - `leaflet.photon` - Geocoding search
- **Autolinker.js** - Automatic URL linking
- **rbush & labelgun** - Label collision detection

##  Project Structure

```
saba-saba-dashboard/
├── index.html              # Main application file
├── css/                    # Stylesheets
│   ├── leaflet.css
│   ├── L.Control.Layers.Tree.css
│   ├── qgis2web.css
│   ├── fontawesome-all.min.css
│   └── leaflet.photon.css
├── js/                     # JavaScript libraries
│   ├── leaflet.js
│   ├── L.Control.Layers.Tree.min.js
│   ├── leaflet.rotatedMarker.js
│   ├── leaflet.pattern.js
│   ├── leaflet-hash.js
│   ├── Autolinker.min.js
│   ├── rbush.min.js
│   ├── labelgun.min.js
│   ├── labels.js
│   ├── leaflet.photon.js
│   └── qgis2web_expressions.js
├── data/                   # GeoJSON data files
│   ├── Kenya_0.js         # Kenya country boundary
│   └── KenyanCounties_1.js # County boundaries with fatality data
└── README.md              # This file
```

## Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saba-saba-dashboard.git
   cd saba-saba-dashboard
   ```

2. **Serve locally** (choose one method):
   
   **Option A: Python HTTP Server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Node.js HTTP Server**
   ```bash
   npx http-server
   ```
   
   **Option C: Live Server (VS Code Extension)**
   - Install Live Server extension
   - Right-click `index.html` → "Open with Live Server"

3. **Access the dashboard**
   - Open browser to `http://localhost:8000`
   - The interactive map will load automatically

### Deployment

**GitHub Pages:**
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Access via `https://yourusername.github.io/saba-saba-dashboard`

**Netlify:**
1. Connect GitHub repository to Netlify
2. Auto-deploy on commits
3. Custom domain support available

##  Data Sources

### Primary Sources
- **Kenya National Commission on Human Rights (KNCHR)** - 3rd Update (July 8-12, 2025)
- **Verified media reports** from credible news outlets
- **Social media documentation** with verification

### Media Coverage Links
- [The Star - Kiambu Families Mourn](https://www.the-star.co.ke/news/2025-07-08-kiambu-families-mourn-6-killed-in-saba-saba-protests)
- [Nation Africa - 10 Deaths, 29 Injuries](https://nation.africa/kenya/news/saba-saba-ten-deaths-29-injuries-reported-during-protests--5109780)
- [NTV Kenya - 12-Year-Old Girl Killed](https://ntvkenya.co.ke/news/saba-saba-death-12-year-old-girl-killed-by-bullet-inside-family-home-in-kiambu/)
- Additional verified social media sources

##  Design Features

### Color Coding System
- **White:** 0 fatalities
- **Light Pink:** 1-2 fatalities
- **Medium Pink:** 3-4 fatalities
- **Dark Pink:** 5-6 fatalities
- **Red:** 7-8 fatalities

### Responsive Design
- Mobile-optimized sidebar
- Scalable map interface
- Touch-friendly interactions
- Accessible color contrasts

##  Contributing

We welcome contributions to improve this dashboard:

### How to Contribute
1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/improvement`)
3. **Commit changes** (`git commit -am 'Add new feature'`)
4. **Push to branch** (`git push origin feature/improvement`)
5. **Submit Pull Request**

### Contribution Guidelines
- Verify data sources before adding new information
- Maintain consistent code formatting
- Test across multiple browsers
- Update documentation for new features
- Respect sensitive nature of the data

### Data Updates
- Cross-reference with official KNCHR reports
- Include credible media source links
- Maintain demographic accuracy
- Timestamp all updates

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Data Sensitivity Notice

This dashboard contains sensitive information about human casualties. The data is presented for:
- **Educational purposes**
- **Human rights documentation**
- **Public awareness**
- **Accountability and transparency**

Please handle and share this information responsibly.

## 📞 Contact & Support

### Data Inquiries
- **Kenya National Commission on Human Rights**
- Email: [info@knchr.org](mailto:info@knchr.org)

### Technical Support
- **GitHub Issues:** Report bugs and feature requests
- **Project Maintainer:** [Your Name](mailto:your.email@example.com)

### Media & Press
For media inquiries about this visualization, please contact KNCHR directly.

##  Acknowledgments

- **Kenya National Commission on Human Rights (KNCHR)** for comprehensive data collection
- **Journalists and media outlets** for on-ground reporting
- **Civil society organizations** documenting human rights violations
- **Families and communities** affected by these events
- **Open source community** for mapping and visualization tools

---

**Last Updated:** July 26, 2025  
**Data Source:** KNCHR 3rd Update (July 8-12, 2025)  
**Dashboard Version:** 1.0
