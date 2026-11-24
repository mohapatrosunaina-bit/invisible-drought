import React from "react";
import Link from "next/link";
import { PROJECT_METADATA, PANEL_METRICS, PRIMARY_GEE_RESULT } from "@/lib/constants/research";
import { KarnatakaDistrictMap } from "@/components/maps/KarnatakaDistrictMap";
import { ThreeDimensionsDiagram } from "@/components/charts/ThreeDimensionsDiagram";
import { OddsRatioForestPlot } from "@/components/charts/OddsRatioForestPlot";
import { SampleFlowDiagram } from "@/components/charts/SampleFlowDiagram";
import {
  Compass,
  ArrowRight,
  Database,
  Layers,
  BarChart3,
  ShieldAlert,
  CloudRain,
  Leaf,
  Waves,
  Calendar,
  Globe2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-16 lg:space-y-24 pb-20">
      {/* 5.2 HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-gradient-to-b from-[#060A08] via-drought-bg to-drought-bg pt-12 pb-20 lg:pt-24 lg:pb-28">
        {/* Subtle Ambient Radial Lighting */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 25%, rgba(74, 222, 128, 0.15) 0%, transparent 60%),
                              radial-gradient(circle at 80% 60%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
                              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Metadata Pill Banner */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <span className="data-badge text-drought-highlight border-white/20">
              <Globe2 className="h-3.5 w-3.5 text-drought-vegetationLight" />
              <span>Karnataka, India</span>
            </span>
            <span className="data-badge text-white border-white/15">
              <Calendar className="h-3.5 w-3.5 text-drought-waterLight" />
              <span>2016–2024 (9 Years)</span>
            </span>
            <span className="data-badge text-white border-white/15">
              <Layers className="h-3.5 w-3.5 text-drought-soilLight" />
              <span>27 Historical Districts (GAUL 2015)</span>
            </span>
            <span className="data-badge text-drought-vegetationBright bg-drought-vegetation/20 border-drought-vegetation/50">
              <span>918 Analyzed Observations</span>
            </span>
            <span className="data-badge text-drought-waterBright bg-drought-water/20 border-drought-water/50">
              <span>CHIRPS × MODIS × SMAP L4</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
                THE INVISIBLE <br />
                <span className="font-normal italic text-drought-highlight drop-shadow-[0_2px_15px_rgba(253,224,71,0.2)]">
                  DROUGHT
                </span>
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-white italic font-light border-l-4 border-drought-soil pl-5 py-1">
                &ldquo;When rainfall tells one story, vegetation and soil may tell another.&rdquo;
              </p>

              <p className="text-base sm:text-lg text-drought-textMuted leading-relaxed max-w-2xl font-light">
                An exploratory satellite-based environmental research study investigating whether seasonal rainfall–vegetation mismatches coincide with root-zone soil-moisture stress across Karnataka, India.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/geospatial-explorer"
                  className="flex items-center gap-2.5 rounded-lg bg-drought-vegetation px-6 py-3 font-mono text-xs font-bold text-drought-bg transition-all hover:bg-drought-vegetationLight hover:shadow-glow-green"
                >
                  <Compass className="h-4 w-4" />
                  <span>Launch Geospatial Explorer</span>
                </Link>

                <Link
                  href="/findings"
                  className="flex items-center gap-2.5 rounded-lg border border-white/20 bg-drought-surface px-6 py-3 font-mono text-xs font-semibold text-white transition-all hover:border-white/40 hover:bg-drought-surfaceHover shadow-subtle"
                >
                  <BarChart3 className="h-4 w-4 text-drought-soilLight" />
                  <span>View Primary Findings</span>
                </Link>

                <Link
                  href="/methodology"
                  className="flex items-center gap-1.5 font-mono text-xs text-drought-textMuted hover:text-white transition-colors ml-2 font-medium"
                >
                  <span>Methodology</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Metric Callout Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/[0.12] bg-gradient-to-b from-[#16241E] to-drought-surface p-7 sm:p-8 shadow-editorial backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetationLight font-bold">
                  Primary Population-Averaged GEE Benchmark
                </span>

                <div className="mt-4 flex items-baseline gap-2.5">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-drought-highlight tracking-tight drop-shadow-[0_2px_12px_rgba(253,224,71,0.25)]">
                    OR 5.453
                  </span>
                  <span className="font-mono text-xs text-white/80 font-semibold">
                    (Adjusted Odds Ratio)
                  </span>
                </div>

                <div className="mt-2.5 font-mono text-xs text-white/90 font-medium">
                  95% Wald CI: [2.947, 10.091] &bull; <strong className="text-drought-vegetationBright">p = 6.61 × 10⁻⁸</strong>
                </div>

                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-drought-textMuted border-t border-white/[0.08] pt-5">
                  Observations characterized by rainfall–vegetation mismatches exhibited approximately <strong className="text-white">5.45 times the adjusted odds</strong> of concurrent SMAP L4 root-zone soil moisture stress compared with non-mismatch observations under the primary population-averaged GEE model adjusting for categorical seasons and district clustering.
                </p>

                {/* 3 Indicators Status */}
                <div className="mt-6 grid grid-cols-3 gap-2.5 border-t border-white/[0.08] pt-5 text-center">
                  <div className="rounded-lg bg-drought-bg/80 border border-white/[0.06] p-2.5">
                    <CloudRain className="h-5 w-5 mx-auto text-drought-waterBright" />
                    <div className="font-mono text-[10px] text-drought-textDim mt-1.5 uppercase tracking-wider">Precipitation</div>
                    <div className="font-mono text-xs text-drought-waterLight font-bold mt-0.5">z ≥ -0.5</div>
                  </div>
                  <div className="rounded-lg bg-drought-bg/80 border border-white/[0.06] p-2.5">
                    <Leaf className="h-5 w-5 mx-auto text-drought-vegetationBright" />
                    <div className="font-mono text-[10px] text-drought-textDim mt-1.5 uppercase tracking-wider">Vegetation</div>
                    <div className="font-mono text-xs text-drought-vegetationLight font-bold mt-0.5">z ≤ -1.0</div>
                  </div>
                  <div className="rounded-lg bg-drought-bg/80 border border-white/[0.06] p-2.5">
                    <Waves className="h-5 w-5 mx-auto text-drought-soilBright" />
                    <div className="font-mono text-[10px] text-drought-textDim mt-1.5 uppercase tracking-wider">Root-Zone</div>
                    <div className="font-mono text-xs text-drought-soilLight font-bold mt-0.5">z ≤ -1.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 RESEARCH OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-soilLight font-bold">
              The Scientific Problem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
              Precipitation alone does not tell the full hydrologic story.
            </h2>
            <p className="text-sm text-drought-textMuted leading-relaxed">
              Standard meteorological drought definitions rely predominantly on accumulated precipitation deficits. However, precipitation alone does not capture the complex interactions governing soil water retention, high atmospheric vapor pressure deficit (VPD), agricultural irrigation withdrawal, and sub-surface moisture recharge.
            </p>
            <p className="text-sm text-drought-textMuted leading-relaxed">
              A district may experience rainfall that appears climatologically normal, while remotely sensed vegetation canopy indices exhibit severe stress. This study investigates whether such anomalous disconnects systematically coincide with root-zone soil moisture stress.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-white/[0.1] bg-drought-secondary p-7 sm:p-9 shadow-editorial">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetationLight font-bold">
              Core Research Question
            </span>
            <blockquote className="mt-3 font-serif text-2xl sm:text-3xl text-white font-light leading-snug">
              &ldquo;Can seasonal rainfall–vegetation mismatches across Karnataka districts identify periods that coincide with root-zone soil-moisture stress?&rdquo;
            </blockquote>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/[0.08] pt-6 text-xs text-drought-textMuted">
              <div>
                <strong className="text-drought-highlight font-semibold text-sm block mb-1">What is Investigated:</strong>
                <p className="leading-relaxed">
                  Periods where vegetation condition is unusually depressed (NDVI &amp; EVI LOYO z ≤ -1) despite seasonal rainfall not being unusually low (Rainfall LOYO z ≥ -0.5).
                </p>
              </div>
              <div>
                <strong className="text-drought-highlight font-semibold text-sm block mb-1">What is Evaluated:</strong>
                <p className="leading-relaxed">
                  Statistical association with concurrent model/data-assimilation root-zone soil moisture stress (SMAP sm_rootzone LOYO z ≤ -1).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 RESEARCH AT A GLANCE (EXACT METRICS) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/[0.08] pb-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-drought-textDim font-bold">
            Key Empirical Parameters
          </span>
          <h2 className="font-serif text-3xl font-medium text-white mt-1">
            Research At A Glance
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/[0.08] bg-drought-surface p-5 hover:border-white/20 transition-all">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-textDim font-bold">
              Historical Districts
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              27
            </div>
            <div className="font-mono text-[11px] text-drought-textMuted mt-1">
              FAO GAUL 2015 Level 2
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-drought-surface p-5 hover:border-white/20 transition-all">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-textDim font-bold">
              Observation Horizon
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              9 Years
            </div>
            <div className="font-mono text-[11px] text-drought-textMuted mt-1">
              2016–2024 Window
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-drought-surface p-5 hover:border-white/20 transition-all">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-textDim font-bold">
              Meteorological Seasons
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              4 Seasons
            </div>
            <div className="font-mono text-[11px] text-drought-textMuted mt-1">
              Win, Pre, SWM, Post
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-drought-surface p-5 hover:border-white/20 transition-all">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-textDim font-bold">
              Initial Panel Potential
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              972
            </div>
            <div className="font-mono text-[11px] text-drought-textMuted mt-1">
              27 × 9 × 4 Observations
            </div>
          </div>

          <div className="rounded-xl border border-drought-vegetation/60 bg-drought-vegetation/15 p-5 shadow-glow-green">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-vegetationLight font-bold">
              Final Analytic Sample
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              918
            </div>
            <div className="font-mono text-[11px] text-drought-vegetationLight mt-1 font-semibold">
              54 SMAP outages excluded
            </div>
          </div>

          <div className="rounded-xl border border-drought-soil/60 bg-drought-soil/15 p-5 shadow-glow-amber">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-soilLight font-bold">
              Mismatch Candidates
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              40
            </div>
            <div className="font-mono text-[11px] text-drought-soilLight mt-1 font-semibold">
              4.36% of analyzed panel
            </div>
          </div>

          <div className="rounded-xl border border-drought-alert/60 bg-drought-alert/15 p-5 shadow-glow-alert">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-alertLight font-bold">
              Root-Zone Stress Events
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              216
            </div>
            <div className="font-mono text-[11px] text-drought-alertLight mt-1 font-semibold">
              SMAP sm_rootzone z ≤ -1
            </div>
          </div>

          <div className="rounded-xl border border-drought-water/60 bg-drought-water/15 p-5 shadow-glow-blue">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-waterLight font-bold">
              Earth Observation Datasets
            </div>
            <div className="font-serif text-4xl font-bold text-white mt-1">
              3
            </div>
            <div className="font-mono text-[11px] text-drought-waterLight mt-1 font-semibold">
              CHIRPS, MODIS, SMAP L4
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 THREE SCIENTIFIC DIMENSIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ThreeDimensionsDiagram />
      </section>

      {/* GEOSPATIAL EXPLORER PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-white/[0.08] pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetationLight font-bold">
              Interactive Geospatial Intelligence
            </span>
            <h2 className="font-serif text-3xl font-medium text-white mt-1">
              Karnataka District-Season Spatial Map
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-drought-textMuted">
              Inspect historical satellite observations across all 27 historical districts from 2016 to 2024.
            </p>
          </div>

          <Link
            href="/geospatial-explorer"
            className="mt-3 sm:mt-0 flex items-center gap-1.5 font-mono text-xs font-bold text-drought-vegetationLight hover:underline"
          >
            <span>Open Full Screen Explorer</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <KarnatakaDistrictMap initialYear={2021} initialSeason="Winter" initialIndicator="mismatch" />
      </section>

      {/* PRIMARY STATISTICAL FINDINGS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <OddsRatioForestPlot />
      </section>

      {/* SAMPLE ATTRITION FLOW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SampleFlowDiagram />
      </section>

      {/* SCIENTIFIC LIMITATIONS & TRANSPARENCY NOTICE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-drought-alert/60 bg-drought-secondary p-7 sm:p-9 shadow-editorial">
          <div className="flex items-start gap-5">
            <ShieldAlert className="h-7 w-7 text-drought-alertLight shrink-0 mt-1" />
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-drought-alertLight font-bold">
                Core Scientific Limitations &amp; Boundary of Claims
              </span>
              <h3 className="font-serif text-2xl font-light text-white">
                What this research establishes — and what it does not.
              </h3>
              <p className="text-sm text-drought-textMuted leading-relaxed">
                This study establishes a strong, statistically significant adjusted association (OR 5.453, p &lt; 0.001) between seasonal rainfall–vegetation mismatches and SMAP L4 root-zone soil moisture stress across Karnataka. However, rigorous scientific transparency requires stating its explicit boundaries:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="rounded-lg border border-white/[0.08] bg-drought-surface p-4">
                  <strong className="text-white block font-mono text-xs mb-1.5 font-bold">
                    1. No Causality
                  </strong>
                  Observational co-occurrence does not establish direction of physical causation between canopy indices and soil moisture.
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-drought-surface p-4">
                  <strong className="text-white block font-mono text-xs mb-1.5 font-bold">
                    2. No Crop Yield Claims
                  </strong>
                  NDVI and EVI are spectral vegetation proxies. The study does not measure farmer harvest losses or economic yield impact.
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-drought-surface p-4">
                  <strong className="text-white block font-mono text-xs mb-1.5 font-bold">
                    3. Residual Spatial Clustering
                  </strong>
                  Model residuals exhibit positive spatial autocorrelation (Moran&apos;s I = 0.3036, p = 0.0086), indicating spatial dependencies remain.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/limitations"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-drought-alertBright hover:underline"
                >
                  <span>Review all 15 explicit scientific limitations</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-b from-drought-surface to-drought-secondary p-8 sm:p-14 shadow-editorial">
          <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight font-bold">
            Explore The Complete Research Platform
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white mt-2 max-w-2xl mx-auto leading-tight">
            Transparent Data, Open Methodology, and Reproducible Code
          </h2>
          <p className="mt-4 text-sm text-drought-textMuted max-w-xl mx-auto leading-relaxed">
            Access the complete data dictionary, step-by-step statistical formulas, seasonal subgroup analyses, and the 13-phase workflow pipeline.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/methodology"
              className="rounded-lg bg-drought-vegetation px-6 py-3 font-mono text-xs font-bold text-drought-bg hover:bg-drought-vegetationLight transition-colors shadow-glow-green"
            >
              Explore Research Methodology
            </Link>
            <Link
              href="/data"
              className="rounded-lg border border-white/20 bg-drought-surface px-6 py-3 font-mono text-xs font-semibold text-white hover:bg-drought-surfaceHover hover:border-white/30 transition-colors shadow-subtle"
            >
              Browse Data Dictionary
            </Link>
            <Link
              href="/reproducibility"
              className="rounded-lg border border-white/20 bg-drought-surface px-6 py-3 font-mono text-xs font-semibold text-white hover:bg-drought-surfaceHover hover:border-white/30 transition-colors shadow-subtle"
            >
              Replication Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
