import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECT_METADATA, PANEL_METRICS, SEASONS_DATA } from "@/lib/constants/research";
import {
  Layers,
  Database,
  Calendar,
  Filter,
  Activity,
  ShieldAlert,
  ArrowRight,
  GitBranch,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research Methodology & Statistical Formulation",
  description:
    "Complete technical methodology, Earth observation pipelines, Leave-One-Year-Out (LOYO) anomaly mathematics, and GEE statistical specifications.",
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-vegetation">
            Technical Specification
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 6 &bull; Experimental Design &amp; Statistical Pipeline
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Research Methodology &amp; Mathematical Framework
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          Comprehensive documentation of satellite data ingestion, cloud-screening, Leave-One-Year-Out anomaly formulation, SMAP outage exclusions, and population-averaged Generalized Estimating Equation (GEE) models.
        </p>
      </div>

      {/* 6.1 DATA ACQUISITION & PROCESSING */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-water">
            Section 6.1
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Tri-Sensor Earth Observation Acquisition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CHIRPS Pipeline */}
          <div className="rounded-xl border border-drought-border bg-drought-secondary/90 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-drought-waterLight font-semibold">
                CHIRPS Daily V2.0
              </span>
              <span className="font-mono text-[10px] text-drought-textDim">0.05° Gridded</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-drought-text">
              Precipitation Processing
            </h3>
            <ul className="text-xs text-drought-textMuted space-y-2 leading-relaxed">
              <li>
                <strong>Daily Pentad Accumulation:</strong> Daily precipitation values are summed across the respective calendar months for each meteorological season.
              </li>
              <li>
                <strong>Spatial Reduce:</strong> District-level spatial mean depth is computed using FAO GAUL vector boundaries in Google Earth Engine.
              </li>
              <li className="rounded bg-drought-bg/60 p-2.5 font-mono text-[11px] text-drought-waterLight border border-drought-border/60">
                <strong>Crucial Definition:</strong> <code>rainfall_mm</code> represents the district spatial mean of seasonal accumulated rainfall depth, not total volumetric water.
              </li>
            </ul>
          </div>

          {/* MODIS Pipeline */}
          <div className="rounded-xl border border-drought-border bg-drought-secondary/90 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetationLight font-semibold">
                MODIS Terra MOD13Q1
              </span>
              <span className="font-mono text-[10px] text-drought-textDim">Collection 6.1</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-drought-text">
              Vegetation Index Processing
            </h3>
            <ul className="text-xs text-drought-textMuted space-y-2 leading-relaxed">
              <li>
                <strong>QA Summary Screening:</strong> Screened with <code>SummaryQA ≤ 1</code> to retain only good-quality and marginal-quality clear-sky observations.
              </li>
              <li>
                <strong>Scale Factor:</strong> Applied canonical scale factor of <code>0.0001</code> to raw integer DNs.
              </li>
              <li>
                <strong>Spatial Median Extraction:</strong> District-level extraction conducted at 1,000 m resolution using spatial medians to resist boundary pixel artifacts.
              </li>
              <li className="rounded bg-drought-bg/60 p-2.5 font-mono text-[11px] text-drought-vegetationLight border border-drought-border/60">
                <strong>Proxy Notice:</strong> NDVI and EVI are spectral vegetation greenness proxies, not direct measurements of crop yield or soil moisture.
              </li>
            </ul>
          </div>

          {/* SMAP L4 Pipeline */}
          <div className="rounded-xl border border-drought-border bg-drought-secondary/90 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-drought-soilLight font-semibold">
                NASA SMAP Level 4
              </span>
              <span className="font-mono text-[10px] text-drought-textDim">SPL4SMGP.008</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-drought-text">
              Root-Zone Moisture Extraction
            </h3>
            <ul className="text-xs text-drought-textMuted space-y-2 leading-relaxed">
              <li>
                <strong>Model-Data Assimilation:</strong> SMAP L4 assimilates L-band radar/radiometer brightness temperatures into the Catchment Land Surface Model forced by GEOS weather analysis.
              </li>
              <li>
                <strong>Variable:</strong> Primary variable is <code>sm_rootzone</code> representing volumetric soil moisture (0–100 cm depth) in m³/m³.
              </li>
              <li>
                <strong>Spatial Support:</strong> 9 km EASE-Grid 2.0 at 3-hourly temporal product frequency.
              </li>
              <li className="rounded bg-drought-bg/60 p-2.5 font-mono text-[11px] text-drought-soilLight border border-drought-border/60">
                <strong>Caveat:</strong> SMAP L4 is a geophysical data-assimilation model product, not in-situ probe ground truth.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6.3 & 6.4 SEASONAL DEFINITIONS & LOYO FORMULATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Seasonal Definitions */}
        <div className="lg:col-span-5 rounded-xl border border-drought-border bg-drought-surface p-6 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
            Section 6.3
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text">
            Meteorological Seasons
          </h2>
          <p className="text-xs text-drought-textMuted leading-relaxed">
            The annual climate of Karnataka is partitioned into four standardized meteorological observation seasons:
          </p>

          <div className="space-y-3 pt-2">
            {SEASONS_DATA.map((s) => (
              <div
                key={s.name}
                className="rounded-lg border border-drought-border bg-drought-bg/60 p-3 text-xs"
              >
                <div className="flex items-center justify-between font-semibold text-drought-text">
                  <span>{s.name}</span>
                  <span className="font-mono text-drought-highlight">{s.months}</span>
                </div>
                <p className="mt-1 text-drought-textDim text-[11px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LOYO Formula Box */}
        <div className="lg:col-span-7 rounded-xl border border-drought-vegetation/40 bg-drought-secondary/90 p-6 sm:p-8 space-y-5">
          <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetationLight">
            Section 6.4
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text">
            Leave-One-Year-Out (LOYO) Anomaly Construction
          </h2>
          <p className="text-xs sm:text-sm text-drought-textMuted leading-relaxed">
            Rather than calculating anomalies against a static pooled multi-year baseline that includes the target observation (which biases the baseline toward the anomaly), we implement a strict <strong>Leave-One-Year-Out (LOYO)</strong> standardization:
          </p>

          {/* Mathematical Formula Render */}
          <div className="rounded-lg border border-drought-border bg-drought-bg p-5 text-center font-mono">
            <div className="text-xs text-drought-textDim mb-2">Standardized LOYO Formulation:</div>
            <div className="text-lg sm:text-2xl text-drought-highlight font-semibold tracking-wide">
              z(i, s, y) = [x(i, s, y) − μ(i, s, −y)] / σ(i, s, −y)
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-drought-textMuted pt-2">
            <div>
              <span className="text-drought-text font-semibold">i:</span> District (1 to 27)
            </div>
            <div>
              <span className="text-drought-text font-semibold">s:</span> Season (1 to 4)
            </div>
            <div>
              <span className="text-drought-text font-semibold">y:</span> Target Observation Year (2016–2024)
            </div>
            <div>
              <span className="text-drought-text font-semibold">μ(i, s, −y):</span> Mean of the other 8 years
            </div>
            <div className="sm:col-span-2">
              <span className="text-drought-text font-semibold">σ(i, s, −y):</span> Sample standard deviation of the other 8 years (ddof = 1)
            </div>
          </div>

          <p className="text-xs text-drought-textDim leading-relaxed border-t border-drought-border/60 pt-3">
            <strong>Important Statistical Note:</strong> LOYO represents an empirical cross-validation reference window across the 2016–2024 satellite era, not a 30-year WMO climatological normal.
          </p>
        </div>
      </div>

      {/* 6.5 & 6.6 MISMATCH & ROOT-ZONE STRESS RULES */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-soil">
            Section 6.5 &amp; 6.6
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Operational Definitions &amp; Threshold Rules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mismatch Candidate Definition */}
          <div className="rounded-xl border border-drought-soil/60 bg-drought-surface p-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-soilLight font-semibold">
              The Mismatch Candidate Definition
            </span>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              A district-season observation is formally classified as a <strong>Rainfall–Vegetation Mismatch Candidate</strong> if and only if all three conditions are simultaneously satisfied:
            </p>

            <div className="rounded-lg border border-drought-border bg-drought-bg p-4 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-drought-vegetationLight">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>NDVI LOYO z-score ≤ −1.0</span>
              </div>
              <div className="text-[10px] text-drought-textDim pl-6">AND</div>
              <div className="flex items-center gap-2 text-drought-vegetationLight">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>EVI LOYO z-score ≤ −1.0</span>
              </div>
              <div className="text-[10px] text-drought-textDim pl-6">AND</div>
              <div className="flex items-center gap-2 text-drought-waterLight">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Rainfall LOYO z-score ≥ −0.5</span>
              </div>
            </div>

            <p className="text-xs text-drought-textMuted leading-relaxed">
              <strong>Interpretation:</strong> Both canopy greenness and enhanced vegetation vigor are unusually weak relative to the district-season baseline, while rainfall is not unusually depressed.
            </p>
          </div>

          {/* Root-Zone Stress Definition */}
          <div className="rounded-xl border border-drought-alert/60 bg-drought-surface p-6 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-alertLight font-semibold">
              Root-Zone Moisture Stress Outcome
            </span>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              The primary binary outcome variable in our Generalized Estimating Equations is defined based on NASA SMAP Level 4 data assimilation:
            </p>

            <div className="rounded-lg border border-drought-border bg-drought-bg p-4 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-drought-alertLight">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>SMAP sm_rootzone LOYO z-score ≤ −1.0</span>
              </div>
            </div>

            <p className="text-xs text-drought-textMuted leading-relaxed">
              <strong>Operational Definition:</strong> Represents volumetric root-zone soil moisture (0–100 cm depth) that is at least one sample standard deviation below its expected seasonal district mean.
            </p>

            <div className="rounded border border-drought-borderLight/60 bg-drought-bg/60 p-2.5 text-[11px] text-drought-textDim">
              <strong>Limitation Disclaimer:</strong> This threshold represents an operational research benchmark. It is not presented as a universally validated agronomic drought threshold.
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 SMAP OUTAGE HANDLING */}
      <section className="rounded-xl border border-drought-alert/40 bg-drought-secondary/90 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-drought-alertLight">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            Section 6.7 &bull; SMAP Data Assimilation Outage Curation
          </span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-light text-drought-text">
          Conservative Exclusion of 54 District Observations
        </h3>
        <p className="text-xs sm:text-sm text-drought-textMuted leading-relaxed max-w-3xl">
          NASA NSIDC documented two extended telemetry and assimilation interruptions during the study horizon:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="rounded border border-drought-border bg-drought-bg/60 p-3">
            <span className="text-drought-alertLight font-bold">Outage Period 1:</span>
            <div className="mt-1 text-drought-text">19 June 2019 – 23 July 2019</div>
            <div className="mt-1 text-drought-textDim">Season: Southwest Monsoon 2019 (27 districts excluded)</div>
          </div>
          <div className="rounded border border-drought-border bg-drought-bg/60 p-3">
            <span className="text-drought-alertLight font-bold">Outage Period 2:</span>
            <div className="mt-1 text-drought-text">6 August 2022 – 20 September 2022</div>
            <div className="mt-1 text-drought-textDim">Season: Southwest Monsoon 2022 (27 districts excluded)</div>
          </div>
        </div>

        <p className="text-xs text-drought-textMuted leading-relaxed pt-2">
          Rather than imputing missing root-zone values or relying on unassimilated model forecasts during these outage periods, <strong>all district records for Southwest Monsoon 2019 and 2022 were conservatively excluded</strong>. This reduces the initial panel of 972 observations to the cured analytic sample of <strong>918 observations</strong>.
        </p>
      </section>

      {/* 6.8 STATISTICAL MODEL SPECIFICATION */}
      <section className="rounded-xl border border-drought-border bg-drought-surface p-6 sm:p-8 space-y-5">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetation">
            Section 6.8
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Primary Statistical Inference: Population-Averaged Logistic GEE
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-drought-textMuted leading-relaxed">
            Because repeated seasonal observations within the same geographical district are not statistically independent, ordinary logistic regression would produce artificially narrow standard errors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-drought-textMuted">
          <div className="rounded border border-drought-border bg-drought-bg/60 p-3.5 space-y-1">
            <span className="text-drought-highlight font-semibold">Model Class:</span>
            <div className="text-drought-text">Generalized Estimating Equations (GEE)</div>
            <div className="text-[11px] text-drought-textDim">Family: Binomial &bull; Link: Logit</div>
          </div>

          <div className="rounded border border-drought-border bg-drought-bg/60 p-3.5 space-y-1">
            <span className="text-drought-highlight font-semibold">Clustering Structure:</span>
            <div className="text-drought-text">27 Historical District Clusters</div>
            <div className="text-[11px] text-drought-textDim">Cluster Variable: district_id (FAO GAUL Level 2)</div>
          </div>

          <div className="rounded border border-drought-border bg-drought-bg/60 p-3.5 space-y-1">
            <span className="text-drought-highlight font-semibold">Working Correlation:</span>
            <div className="text-drought-text">Exchangeable (Compound Symmetry)</div>
            <div className="text-[11px] text-drought-textDim">Equal correlation assumed across time within district</div>
          </div>

          <div className="rounded border border-drought-border bg-drought-bg/60 p-3.5 space-y-1">
            <span className="text-drought-highlight font-semibold">Covariates:</span>
            <div className="text-drought-text">Categorical Season Adjustment</div>
            <div className="text-[11px] text-drought-textDim">Accounts for baseline seasonal moisture differences</div>
          </div>
        </div>

        <div className="rounded border border-drought-vegetation/40 bg-drought-vegetation/5 p-4 text-xs leading-relaxed text-drought-text">
          <strong className="text-drought-vegetationLight">Reporting Standard:</strong> We report <strong>Adjusted Odds Ratios (Adjusted OR)</strong> with 95% Wald confidence intervals. Under the rare-event condition (drought anomalies occur in &lt;10% of observations), odds ratios closely approximate relative risk without relabeling them as risk ratios or prevalence ratios.
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/research"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Research Framework</span>
        </Link>
        <Link
          href="/findings"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>Explore All Empirical Findings &amp; Model Estimates &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
