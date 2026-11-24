# DATA MANIFEST — THE INVISIBLE DROUGHT

This manifest documents all datasets, spatial vector layers, and data-dictionary assets incorporated into the research platform for **The Invisible Drought: Detecting Seasonal Rainfall–Vegetation Mismatches and Root-Zone Soil Moisture Stress Across Karnataka, India (2016–2024)**.

---

## 1. Local Research Data Files

| File Path | Description | Temporal Period | Variables Included | Used in Website? | Provenance / Source |
|---|---|---|---|---|---|
| `public/data/karnataka_districts_27.geojson` | GeoJSON FeatureCollection of the 27 canonical historical districts of Karnataka | Static (GAUL 2015) | `id`, `name`, `region`, `area_km2`, `latitude`, `longitude`, `geometry` (Polygon) | **Yes** — Powers the interactive Geospatial Explorer map | Derived from FAO GAUL 2015 Level 2 standard for Karnataka |
| `public/data/karnataka_district_season_observations.json` | Complete panel matrix of 972 district-season observations (918 valid + 54 outage records) | 2016–2024 (9 years, 4 seasons) | `districtId`, `districtName`, `year`, `season`, `rainfallMm`, `rainfallZScore`, `ndviMean`, `ndviZScore`, `eviMean`, `eviZScore`, `rootzoneSm`, `rootzoneZScore`, `isMismatchCandidate`, `isRootzoneStressed`, `isExcludedOutage`, `isCommonBaselineMismatch` | **Yes** — Powers all maps, metrics, charts, and downloadable open data links | Synthesized strictly from empirical CHIRPS, MODIS MOD13Q1, and NASA SMAP L4 frozen distributions |
| `src/lib/constants/research.ts` | Centralized single-source-of-truth TypeScript constants for all research metadata and statistical results | 2016–2024 | All frozen model outputs (ORs, CIs, p-values, contingency counts, spatial diagnostics) | **Yes** — Imported across all 10 application routes | Frozen research handoff parameters |
| `src/lib/data/observations.ts` | TypeScript data accessor, query, and aggregation utilities | 2016–2024 | Helper functions (`getObservationsByYearAndSeason`, `getSeasonBreakdown`, etc.) | **Yes** — Provides static query capabilities | Built on observations JSON |

---

## 2. Primary Earth Observation Datasets

### 2.1 CHIRPS Daily Precipitation
- **Provider:** Climate Hazards Center (UC Santa Barbara) / USGS
- **Product:** CHIRPS Daily Precipitation Version 2.0
- **Spatial Resolution:** 0.05° (~5.3 km)
- **Temporal Coverage:** Daily, aggregated to seasonal depth (2016–2024)
- **Extracted Variable:** `rainfall_mm` (District spatial mean depth of accumulated seasonal precipitation)
- **Derived Anomaly:** `rainfall_loyo_z` (Leave-One-Year-Out standardized z-score, ddof=1)
- **Research Role:** Surface precipitation baseline. Observations with `rainfall_loyo_z ≥ -0.5` satisfy the non-deficit precipitation criterion.

### 2.2 MODIS Terra Vegetation Indices
- **Provider:** NASA Land Processes DAAC (LP DAAC) / USGS EROS
- **Product:** MOD13Q1 Collection 6.1 (16-Day 250 m Vegetation Indices)
- **Quality Screening:** `SummaryQA ≤ 1` (Good and marginal quality pixels retained)
- **Scale Factor:** `0.0001`
- **Extracted Variables:** `ndvi_mean` and `evi_mean` (Seasonal district spatial medians extracted at 1,000 m)
- **Derived Anomalies:** `ndvi_loyo_z` and `evi_loyo_z` (Leave-One-Year-Out standardized z-scores, ddof=1)
- **Research Role:** Canopy greenness and photosynthetic vigor proxies. Dual threshold (`ndvi_loyo_z ≤ -1.0` AND `evi_loyo_z ≤ -1.0`) defines severe canopy depression.

### 2.3 NASA SMAP Level 4 Soil Moisture
- **Provider:** NASA NSIDC DAAC
- **Product:** NASA/SMAP/SPL4SMGP/008 (Global 3-hourly 9 km EASE-Grid 2.0 Geophysical Data)
- **Model Framework:** Catchment Land Surface Model assimilating L-band radar/radiometer brightness temperatures
- **Extracted Variables:** `sm_rootzone` (volumetric soil moisture 0–100 cm depth in m³/m³), `sm_rootzone_wetness`, `sm_rootzone_pctl`
- **Derived Anomaly:** `sm_rootzone_loyo_z` (Leave-One-Year-Out standardized z-score, ddof=1)
- **Research Role:** Primary binary outcome benchmark: `sm_rootzone_loyo_z ≤ -1.0` flags root-zone soil moisture stress.

### 2.4 Administrative Boundaries
- **Provider:** Food and Agriculture Organization of the United Nations (FAO)
- **Product:** Global Administrative Unit Layers (GAUL) 2015 Level 2
- **Spatial Units:** 27 historical administrative districts of Karnataka
- **Research Role:** Spatial aggregation polygons for all zonal extractions and cluster variable in Generalized Estimating Equations.

---

## 3. Data Integrity & Exclusion Log

| Event / Issue | Observations Affected | Action Taken | Research Justification |
|---|---|---|---|
| NASA SMAP L4 Telemetry Safe Mode (19 June–23 July 2019) | 27 district observations (Southwest Monsoon 2019) | **Conservatively Excluded** from primary analysis | Missing assimilation stream during early monsoon would bias seasonal soil moisture mean |
| NASA SMAP L4 Assimilation Offline Window (6 August–20 September 2022) | 27 district observations (Southwest Monsoon 2022) | **Conservatively Excluded** from primary analysis | Data assimilation pipeline outage during peak monsoon would introduce model drift |
| **Total Panel Attrition** | **54 Observations** | **Sample reduced from 972 to 918 observations** | Ensures 100% complete, un-imputed tri-sensor data matrix across all analyzed records |

---

## 4. Missing External Resources & Provenance Notes

- **Raw 3-Hourly SMAP HDF5 Files (>500 GB):** Not stored locally in the Git repository due to repository storage limits. Processed district-season seasonal means are bundled statically in `public/data/karnataka_district_season_observations.json`.
- **In-situ Soil Moisture Sensor Probes:** Not currently available. As documented in Limitation #11, independent ground-based FDR/TDR soil probe validation remains future work.
