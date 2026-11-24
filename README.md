# THE INVISIBLE DROUGHT

> **Detecting Seasonal Rainfall–Vegetation Mismatches and Root-Zone Soil Moisture Stress Across Karnataka, India: An Exploratory District-Season Analysis (2016–2024)**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

---

## 1. Research Overview

**The Invisible Drought** is an exploratory satellite-based research platform investigating relationships between surface precipitation, remotely sensed vegetation canopy conditions, and root-zone soil moisture stress across Karnataka, India.

Traditional drought monitoring often assesses environmental stress predominantly through rainfall deficits. However, precipitation alone does not fully describe deeper soil-water availability or canopy stress. A district may experience climatologically normal seasonal rainfall, while remotely sensed vegetation indicators exhibit severe weakness.

This research investigates that specific condition:
**Can seasonal rainfall–vegetation mismatches identify periods that coincide with concurrent root-zone soil-moisture stress?**

### Key Empirical Parameters & Results
- **Geographic Scope:** 27 historical districts of Karnataka, India (FAO GAUL 2015 Level 2)
- **Temporal Horizon:** 2016–2024 (9 consecutive years, 4 meteorological seasons)
- **Initial Balanced Panel:** 972 observations (27 districts × 9 years × 4 seasons)
- **Data Assimilation Outage Exclusion:** 54 observations conservatively removed (SW Monsoon 2019 & SW Monsoon 2022) due to documented NASA SMAP L4 telemetry and assimilation outages
- **Final Association Sample:** 918 observations
- **Mismatch Candidates:** 40 observations (NDVI LOYO z ≤ -1.0 AND EVI LOYO z ≤ -1.0 AND Rainfall LOYO z ≥ -0.5)
- **Primary Population-Averaged GEE Result:**
  - **Adjusted Odds Ratio (OR):** **`5.453`** (Exact: `5.452812`)
  - **95% Wald Confidence Interval:** **`2.947 – 10.091`** (Exact: `[2.946638, 10.090534]`)
  - **p-value:** **`6.61 × 10⁻⁸`** (Exact: `6.613699e-8`)
- **Interpretation:** Mismatch observations had approximately 5.45 times the adjusted odds of concurrent SMAP L4 root-zone stress compared with non-mismatch observations under the primary model adjusting for categorical seasons and district clustering.

---

## 2. Research Positioning & Boundaries

This research is strictly positioned as an **exploratory, observational, satellite-based environmental study**. 

It does **NOT** constitute:
- A validated drought prediction or forecasting system.
- A real-time drought warning service.
- A causal discovery or physical mechanistic demonstration.
- A crop-yield or agricultural loss prediction model.
- A machine-learning forecasting platform.
- An operational agricultural decision-support tool.

---

## 3. Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components by default)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing, complete research schemas)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Scientific editorial dark palette: `#0B100E`, `#121A16`, `#18221C`, `#8BAF72`, `#6D9EBA`, `#C69B65`, `#C56E63`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Geospatial & Visualizations:** [D3 Geo](https://d3js.org/d3-geo) (Cartographic projection) & [Recharts](https://recharts.org/) (Statistical diagrams)
- **Deployment:** Vercel (Zero-backend, zero-secret static/hybrid deployment)

---

## 4. Website Information Architecture

| Route | Content & Visual Components |
|---|---|
| `/` | **Homepage:** Hero narrative, research question, at a glance metrics, 3 dimensions, interactive map preview, headline GEE findings |
| `/research` | **Research Framework:** Epistemological framing, core questions, multi-indicator paradigm, defensible novelty |
| `/methodology` | **Methodology:** CHIRPS, MODIS, SMAP L4 pipelines, FAO GAUL 2015 boundaries, LOYO mathematical formulas, GEE specifications |
| `/geospatial-explorer` | **Geospatial Explorer:** Interactive Karnataka 27-district vector map, year/season/indicator controls, district drawer, agro-ecological zones |
| `/findings` | **Findings & Models:** Primary exchangeable GEE, forest plot, working independence, t-reference, cluster bootstrap, AR(1), LODO, Moran's I |
| `/seasonal-analysis` | **Seasonal Dynamics:** 4-season breakdown (Winter 22 candidates, Pre-Monsoon 12, SWM 6, Post-Monsoon 0), winter coupling (OR 9.268), non-winter persistence (OR 2.923) |
| `/data` | **Data & Codebook:** Earth observation catalog, searchable data dictionary, direct downloads for GeoJSON and panel observations |
| `/reproducibility` | **Reproducibility:** 13 sequential workflow phases, Python replication script, compute environment specifications |
| `/limitations` | **15 Limitations:** Explicit scientific limitations, Measured vs Derived vs Modelled vs Inferred, Moran's I (I = 0.3036, p = 0.0086) |
| `/about` | **About & Citation:** Institutional background, editable investigator fields, suggested academic citation, BibTeX |

---

## 5. Getting Started

### Prerequisites
- Node.js `v18.17.0` or higher (Node v20+ recommended)
- npm `v9+` or pnpm / yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/mohapatrosunaina-bit/invisible-drought.git
cd invisible-drought

# Install dependencies
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:3000 in your browser
```

### Production Build
```bash
npm run build
npm run start
```

---

## 6. Earth Observation Datasets

1. **CHIRPS Daily Precipitation (V2.0):** 0.05° gridded daily rainfall aggregated to seasonal district spatial mean depth (mm).
2. **MODIS Terra MOD13Q1 (Collection 6.1):** 16-day 250 m composites quality-screened (`SummaryQA ≤ 1`) and extracted at 1,000 m district spatial medians for NDVI and EVI.
3. **NASA SMAP Level 4 (SPL4SMGP.008):** 9 km EASE-Grid 2.0 Catchment Land Surface Model assimilation of volumetric root-zone soil moisture (0–100 cm depth).
4. **FAO GAUL 2015 Level 2:** Vector polygons for the 27 historical administrative districts of Karnataka.

---

## 7. Git Remotes Configuration

The project is synchronized with both primary and secondary remotes:
- **Origin:** `https://github.com/mohapatrosunaina-bit/invisible-drought.git`
- **Secondary:** `https://github.com/heynbharath/invisible-drought.git`

```bash
git push -u origin main
git push -u secondary main
```

---

## 8. Suggested Academic Citation

```bibtex
@misc{invisibledrought2024,
  author = {{The Invisible Drought Research Initiative}},
  title  = {Detecting Seasonal Rainfall--Vegetation Mismatches and Root-Zone Soil Moisture Stress Across Karnataka, India: An Exploratory District-Season Analysis},
  year   = {2024},
  howpublished = {\\url{https://invisible-drought.vercel.app}},
  note   = {Exploratory satellite-based research study using CHIRPS, MODIS, and NASA SMAP Level 4}
}
```

---

## 9. License

Content and data documentation are licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). Source code is licensed under the MIT License.
