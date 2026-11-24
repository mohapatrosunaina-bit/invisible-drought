# PROJECT ARCHITECTURE — THE INVISIBLE DROUGHT

A comprehensive guide to the engineering architecture, component hierarchy, design system, and data flow of the research website for **The Invisible Drought**.

---

## 1. Technology Stack

- **Framework:** Next.js 14 (App Router, Server Components by default, Client Components for interactive UI)
- **Language:** TypeScript 5.6 (Strict type checking, end-to-end data schemas)
- **Styling:** Tailwind CSS 3.4 (Custom editorial scientific dark palette)
- **Icons:** Lucide React
- **Visualization:** D3 Geo (Cartographic projection) & Recharts (Statistical diagrams)
- **Deployment Target:** Vercel (Production zero-backend static/hybrid architecture)

---

## 2. Directory Layout

```
src/
├── app/
│   ├── layout.tsx                # Root layout: SkipLink, Navbar, Metadata, Footer
│   ├── page.tsx                  # Homepage: Hero, overview, at a glance, 3 dimensions, map preview, findings summary
│   ├── research/page.tsx         # Route /research: Theoretical framing, questions, positioning
│   ├── methodology/page.tsx      # Route /methodology: Acquisition, LOYO formulas, GEE specifications
│   ├── geospatial-explorer/page.tsx # Route /geospatial-explorer: Full GIS map explorer
│   ├── findings/page.tsx         # Route /findings: Primary OR 5.453, forest plots, sensitivity models
│   ├── seasonal-analysis/page.tsx# Route /seasonal-analysis: 4-season breakdown, winter coupling, non-winter persistence
│   ├── data/page.tsx             # Route /data: Earth observation catalog, searchable dictionary, downloads
│   ├── reproducibility/page.tsx  # Route /reproducibility: 13-phase workflow pipeline & replication code
│   ├── limitations/page.tsx      # Route /limitations: 15 mandatory limitations & Moran's I spatial diagnostic
│   ├── about/page.tsx            # Route /about: Institutional background, editable investigator fields, citation
│   ├── not-found.tsx             # Custom 404 handler
│   ├── robots.ts                 # Standard robots.txt generator
│   ├── sitemap.ts                # XML sitemap index
│   └── globals.css               # Editorial CSS variables, container queries, accessible tables
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx            # Sticky header with active links & mobile menu drawer
│   ├── layout/
│   │   ├── Footer.tsx            # Academic research footer with citation & disclaimer
│   │   └── SkipLink.tsx          # Screen reader accessibility skip-to-content anchor
│   ├── maps/
│   │   └── KarnatakaDistrictMap.tsx # Interactive D3-projected SVG map with layer switching & district drawer
│   └── charts/
│       ├── OddsRatioForestPlot.tsx  # Log-scale forest plot with GEE, t-reference, AR(1), bootstrap
│       ├── SeasonalCandidateChart.tsx # 4-season candidate distribution & stress rate progress bars
│       ├── SampleFlowDiagram.tsx   # Attrition flowchart: 972 potential -> 54 outages -> 918 valid -> 40 candidates
│       ├── CommonBaselineContingency.tsx # 2x2 matrix comparing LOYO vs Common-Baseline
│       ├── ResidualMoransIDiagram.tsx # Moran's I = 0.3036 spatial autocorrelation diagnostic card
│       ├── LeaveOneDistrictOutPlot.tsx # 27 district deletion sensitivity bounds (4.695 to 5.958)
│       └── ThreeDimensionsDiagram.tsx # Tri-sensor conceptual framework card
├── lib/
│   ├── constants/
│   │   └── research.ts           # Single source of truth for all research constants & numbers
│   ├── data/
│   │   ├── observations.ts       # Typed accessors and query utilities
│   │   ├── generate_geojson.py   # Python generator for 27-district GeoJSON
│   │   └── generate_observations.py # Python generator for panel observations matrix
│   ├── maps/
│   │   └── geoHelpers.ts         # D3 Mercator projection & continuous/binary color interpolation
│   └── utils/
│       └── cn.ts                 # Tailwind merge and clsx utility
└── types/
    └── research.ts               # Core TypeScript interfaces: Season, DistrictInfo, ObservationData, etc.

public/
├── data/
│   ├── karnataka_districts_27.geojson              # 27 Karnataka historical districts (GAUL 2015)
│   └── karnataka_district_season_observations.json # 972 district-season-year observations
```

---

## 3. Design System & Editorial Palette

The visual design system implements an editorial scientific aesthetic, avoiding SaaS landing-page cliches:

- **Background:** `#0B100E` (Deep forest-black slate)
- **Secondary Background:** `#121A16` (Deep charcoal green)
- **Surface:** `#18221C` (Subtle muted olive-charcoal)
- **Surface Hover:** `#202D25`
- **Border:** `#28382F` / Light: `#384E42`
- **Primary Text:** `#F0F0E8` (Warm academic ivory)
- **Secondary Text:** `#A6B1A8` (Muted silver-sage)
- **Vegetation Green:** `#8BAF72` / Light: `#A8CE8E`
- **Water Blue:** `#6D9EBA` / Light: `#8EC1DD`
- **Soil Amber:** `#C69B65` / Light: `#E0B783`
- **Alert Red:** `#C56E63` / Light: `#DD877C`

### Typography Hierarchy
- **Headings & Display:** Newsreader / Georgia editorial serif (`font-serif`)
- **Body & Controls:** Inter / system sans-serif (`font-sans`)
- **Metrics, Coordinates, Values:** JetBrains Mono (`font-mono`, `font-variant-numeric: tabular-nums`)

---

## 4. Geospatial Architecture & Zero-Secret Vector Mapping

Rather than relying on third-party vector tile services (which require external API tokens, map licenses, and Earth Engine authentication for visitors), the platform utilizes **direct D3 Mercator GeoJSON projection**:

1. **Topology:** `public/data/karnataka_districts_27.geojson` defines the 27 historical district polygons under FAO GAUL 2015 Level 2.
2. **Projection:** `d3-geo` projects spherical geographic coordinates (WGS84 `[lon, lat]`) to a 520 × 640 SVG viewBox fitted to Karnataka's bounds:
   - Longitude: 73.83°E to 78.49°E
   - Latitude: 11.62°N to 18.30°N
3. **Rendering:** Pure React SVG vector paths with zero WebGL crashes, instant SSR hydration, crisp HiDPI vector outlines, and keyboard accessibility (`tabIndex={0}`, ARIA labels).
4. **Color Ramps:** Scientifically sensible ramps:
   - Rainfall: Amber/Brown (Deficit) &rarr; Neutral Slate &rarr; Water Blue (Surplus)
   - Vegetation: Dry Ochre (Deficit) &rarr; Neutral Slate &rarr; Lush Green (Surplus)
   - Soil Moisture: Burnt Earth (Deficit) &rarr; Neutral Slate &rarr; Hydrologic Teal (Surplus)
   - Mismatch: Amber flag (`#C69B65`)
   - Root-Zone Stress: Alert Red flag (`#C56E63`)

---

## 5. Statistical Data Flow & Integrity Invariants

All statistical values, formulas, sample sizes, and model estimates are declared in `src/lib/constants/research.ts` as the **Single Source of Truth**:

- Initial Panel: 972 observations
- Excluded Outages: 54 observations (SW Monsoon 2019 & 2022)
- Analyzed Sample: 918 observations
- Mismatch Candidates: 40 observations
- Root-Zone Stress: 216 observations
- Primary GEE Odds Ratio: 5.453 [2.947–10.091], p = 6.61 × 10⁻⁸
- Working Independence: OR 6.578 [3.419–12.657], p = 1.69 × 10⁻⁸
- Conservative t-reference (df=26): OR 5.453 [2.860–10.398], p ≈ 0.000012
- Cluster Bootstrap Median: OR 6.629 [3.378–13.678]
- Temporal AR(1) GEE: OR 2.587 [1.350–4.960], p = 0.004194
- Leave-One-District-Out Bounds: 4.695 to 5.958
- Seasonal Subgroups: Winter (22 candidates, 72.7% stressed, OR 9.268), Pre-Monsoon (12 candidates, 50% stressed), SW Monsoon (6 candidates, 50% stressed), Post-Monsoon (0 candidates), Excluding Winter (OR ≈ 2.923)
- Common-Baseline Contingency: 34 Both, 2 CB only, 6 LOYO only, 876 Neither (OR 11.210)
- Residual Moran's I: 0.303637, 2-sided permutation p = 0.0086
