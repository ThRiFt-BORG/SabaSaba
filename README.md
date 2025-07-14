Saba Saba 2025 Fatalities Dashboard
Overview
This web GIS dashboard visualizes fatalities from the Saba Saba 2025 protests in Kenya. It features a choropleth map showing deaths per county (e.g., Kiambu: 8) using a Blues color ramp (0, 1–2, 3–4, 5–6, 7–8 fatalities). A sidebar summarizes 38 fatalities, ≥130 injuries, 14 confirmed gunshot deaths, and demographics (4 female, 2 children), with a pie chart for demographic distribution. Interactive pop-ups provide county details and source links. The project aims to raise awareness of human rights impacts with a neutral, ethical presentation.
View Live Dashboard

Tools and Plugins

Tools: QGIS, DataPlotly, QGIS2Web
Plugins/Libraries: DataPlotly, QGIS2Web
Tags: Spatial Analysis, Choropleth Map, Human Rights, Web GIS, Kenya

Data Sources

KNCHR 3rd Update (July 8–12, 2025): Official fatality and injury data.
Media: The Star, Daily Nation, Citizen TV, NTV Kenya, Nation Africa.
Social Media: Facebook, Instagram.
Note: Gunshot deaths are partially verified.

Project Structure

index.html: Main dashboard file.
images/Demo_pie.png: Demographic pie chart.
resources/: OpenLayers, QGIS2Web scripts, and styles.
layers/: Kenya and county GeoJSON data.
styles/: Choropleth styling (Blues ramp).

How to View Locally

Clone the repository:git clone https://github.com/your-username/saba-saba-2025-dashboard.git


Open index.html in a browser.
Ensure images/, resources/, layers/, and styles/ are in the same directory.

Ethical Statement
This project uses aggregate data to respect privacy, credits all sources, and maintains a neutral tone to honor the sensitivity of human rights data. For inquiries, contact info@knchr.org.
Author
Peter Kimani Ndungu
