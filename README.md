# 🌍 World Population Visualizer

A fully open-source, auto-updating world population visualization app using public data from [restcountries.com](https://restcountries.com).

Built with:
- 🧠 ChatGPT (OpenAI)
- 🧪 Python (Flask + requests)
- 📊 Chart.js for visualization
- ☁️ Hosted on Render

## 📦 Features
- Pulls data live from RestCountries API
- Displays country name, capital, population, flag, and region
- Toggle between dark/light mode
- Filter by continent
- Responsive design for mobile + desktop
- Daily auto-refresh via Render cron job

## 🚀 Live Services

| Service         | URL                                                  |
|------------------|-------------------------------------------------------|
| Frontend (Static Site) | `https://[your-static-site].onrender.com`        |
| API (Flask)      | `https://populationvisualizer.onrender.com/population` |

## 🛠️ Setup Instructions

Clone the repo and run locally:

```bash
git clone https://github.com/smitravitz/PopulationVisualizer.git
cd PopulationVisualizer
pip install -r requirements.txt

# Download and write population data
python fetch_world_population.py

# Serve API locally
python api_server.py
