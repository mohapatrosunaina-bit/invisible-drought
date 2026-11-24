# DEPLOYMENT GUIDE — THE INVISIBLE DROUGHT

Step-by-step instructions for deploying **The Invisible Drought** research website to GitHub and Vercel.

---

## 1. Pre-Deployment Verification

The project is structured as a zero-backend, high-performance Next.js application. It requires:
- **No external database connection** (all observations are bundled locally in `public/data/`).
- **No Google Earth Engine credentials or API keys** in the frontend.
- **No private environment variables** required for production builds.

### Local Quality Assurance Check
Before deploying, execute the standard production build verification:

```bash
# 1. Clean build cache and verify dependencies
npm install

# 2. Compile TypeScript and run Next.js production build
npm run build

# 3. Test the compiled production bundle locally
npm run start
```

---

## 2. GitHub Remote Synchronization

The project is configured to push to both designated GitHub remotes:
1. `https://github.com/mohapatrosunaina-bit/invisible-drought.git`
2. `https://github.com/heynbharath/invisible-drought.git`

### Command Sequence:
```bash
# Verify configured remotes
git remote -v

# Stage all project files
git add .

# Create semantic release commit
git commit -m "feat: complete production-ready research platform for The Invisible Drought"

# Push to primary remote
git push -u origin main

# Push to secondary remote
git push -u secondary main
```

---

## 3. Deploying to Vercel

### Option A: Automatic Deployment via Vercel GitHub Integration (Recommended)
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard).
2. Click **"Add New..." &rarr; "Project"**.
3. Select the repository: `mohapatrosunaina-bit/invisible-drought` (or `heynbharath/invisible-drought`).
4. In the Project Configuration:
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `./`
   - **Build Command:** `next build` (or leave default)
   - **Output Directory:** `.next` (or leave default)
   - **Install Command:** `npm install` (or leave default)
   - **Environment Variables:** None required.
5. Click **"Deploy"**.
6. Vercel will build the project and output a production URL (e.g., `https://invisible-drought.vercel.app`).

### Option B: Deploying via Vercel CLI
```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Run deployment from the workspace root
vercel --prod
```

---

## 4. Post-Deployment Verification Checklist

1. **Verify Routes:**
   - `/` (Homepage & Hero)
   - `/research` (Framing & Questions)
   - `/methodology` (Data acquisition & LOYO formulas)
   - `/geospatial-explorer` (Interactive Karnataka map & district drawer)
   - `/findings` (Primary GEE OR 5.453 & forest plots)
   - `/seasonal-analysis` (4-season breakdown & progress bars)
   - `/data` (Searchable data dictionary & download links)
   - `/reproducibility` (13 workflow phases & replication code)
   - `/limitations` (15 explicit limitations & Moran's I)
   - `/about` (Institutional background & citation)
2. **Verify Map Interactions:**
   - Change year (2016–2024), season, and observation layer.
   - Confirm SW Monsoon 2019 and 2022 show the SMAP Outage banner.
   - Click district polygons and verify the detail drawer updates.
3. **Verify File Downloads:**
   - Test clicking "Download GeoJSON Vector" on `/data`.
   - Test clicking "Download Panel Observations JSON" on `/data`.
4. **Verify SEO & Accessibility:**
   - Confirm `<title>` and `<meta name="description">` are present on all pages.
   - Check keyboard Tab navigation through skip link and navigation bar.
