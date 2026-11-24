import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECT_METADATA, PANEL_METRICS } from "@/lib/constants/research";
import { ThreeDimensionsDiagram } from "@/components/charts/ThreeDimensionsDiagram";
import {
  Compass,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Target,
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research Framework & Theoretical Foundations",
  description:
    "Core research question, theoretical framing, multi-indicator paradigm, and positioning of The Invisible Drought project.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-vegetation">
            Project Identity &amp; Scope
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 1 &bull; Research Positioning
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Research Framework &amp; Problem Formulation
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          {PROJECT_METADATA.fullTitle}
        </p>
      </div>

      {/* Core Question & Theoretical Framing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <section className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-soil">
              The Research Premise
            </span>
            <h2 className="font-serif text-2xl font-light text-drought-text">
              Drought is not always visible on the surface.
            </h2>
            <p className="text-xs sm:text-sm text-drought-textMuted leading-relaxed">
              In conventional monitoring, drought is frequently diagnosed through rainfall indices (such as the Standardized Precipitation Index, SPI). However, surface precipitation tells an incomplete story:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-drought-textMuted list-disc pl-5">
              <li>
                <strong>Lagged Soil Storage:</strong> Surface rainfall can run off rapidly without replenishing deep root-zone columns (0–100 cm depth) if high evaporative demand or compacted soil crusts prevail.
              </li>
              <li>
                <strong>Atmospheric Evaporative Demand:</strong> Elevated vapor pressure deficit (VPD) can induce vegetative stomatal closure and canopy wilting even during periods of near-normal seasonal precipitation.
              </li>
              <li>
                <strong>Sub-Surface Depletion:</strong> Prolonged groundwater drawdown from tubewell irrigation can decouple deeper root-zone hydrology from superficial monsoon showers.
              </li>
            </ul>
          </section>

          {/* Prominent Research Question Box */}
          <div className="rounded-xl border border-drought-vegetation/40 bg-drought-vegetation/5 p-6 shadow-glow-green">
            <div className="flex items-center gap-2 text-drought-vegetationLight">
              <HelpCircle className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                Core Research Question
              </span>
            </div>
            <p className="mt-2 font-serif text-xl sm:text-2xl text-drought-text font-light italic leading-snug">
              &ldquo;{PROJECT_METADATA.primaryQuestion}&rdquo;
            </p>
          </div>

          <section className="space-y-3">
            <h3 className="font-serif text-xl font-light text-drought-text">
              Operational Hypothesis
            </h3>
            <p className="text-xs sm:text-sm text-drought-textMuted leading-relaxed">
              We hypothesize that district-season observations exhibiting anomalously weak vegetative canopy condition (NDVI ≤ -1.0 and EVI ≤ -1.0) while seasonal rainfall remains non-depressed (Rainfall ≥ -0.5) reflect underlying sub-surface moisture limitations that are detectable via satellite-assimilated root-zone soil moisture (SMAP sm_rootzone ≤ -1.0).
            </p>
          </section>
        </div>

        {/* Right Positioning Guide */}
        <div className="lg:col-span-5 rounded-xl border border-drought-border bg-drought-secondary/90 p-6 space-y-6">
          <div className="border-b border-drought-border pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
              Strict Scientific Positioning
            </span>
            <h3 className="font-serif text-lg font-medium text-drought-text mt-1">
              Scope of Claims
            </h3>
            <p className="text-xs text-drought-textDim mt-1">
              To preserve academic integrity, this study defines exact positive and negative positioning boundaries.
            </p>
          </div>

          {/* What it IS */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-drought-vegetationLight font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-drought-vegetation" />
              What This Research IS:
            </span>
            <ul className="space-y-1.5 text-xs text-drought-textMuted pl-5 list-disc leading-relaxed">
              <li>An exploratory, observational, satellite-based retrospective study.</li>
              <li>A district-season analytical framework for assessing rainfall–vegetation mismatches.</li>
              <li>A population-averaged GEE statistical evaluation of co-occurrence with root-zone moisture stress.</li>
              <li>A transparent examination of 27 historical districts over a 9-year study window (2016–2024).</li>
            </ul>
          </div>

          {/* What it is NOT */}
          <div className="space-y-2 pt-3 border-t border-drought-border/60">
            <span className="font-mono text-xs text-drought-alertLight font-semibold flex items-center gap-1.5">
              <XCircle className="h-4 w-4 text-drought-alert" />
              What This Research IS NOT:
            </span>
            <ul className="space-y-1.5 text-xs text-drought-textMuted pl-5 list-disc leading-relaxed">
              <li>A validated drought prediction or forecasting system.</li>
              <li>A real-time drought warning service.</li>
              <li>A causal discovery or physical mechanistic demonstration.</li>
              <li>A crop-yield or farmer economic loss model.</li>
              <li>A machine-learning forecasting engine.</li>
              <li>An operational agricultural decision-support tool.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tri-Sensor Dimensions */}
      <ThreeDimensionsDiagram />

      {/* Defensible Novelty & Contribution */}
      <div className="rounded-xl border border-drought-border bg-drought-surface p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-drought-highlight" />
          <h2 className="font-serif text-2xl font-light text-drought-text">
            Defensible Research Contribution &amp; Novelty
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-drought-textMuted leading-relaxed">
          We do <strong>not</strong> claim that combining rainfall, vegetation, and soil moisture is an unprecedented concept; multi-sensor drought monitoring has a substantial history in remote sensing literature.
        </p>
        <p className="text-xs sm:text-sm text-drought-textMuted leading-relaxed">
          Instead, the defensible contribution of this project lies in:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs text-drought-textMuted">
          <div className="rounded border border-drought-border bg-drought-bg/60 p-4 space-y-1.5">
            <strong className="text-drought-highlight font-mono block">
              1. Transparent Operational Mismatch Rule
            </strong>
            Formulating an explicit, reproducible dual-vegetation (NDVI &amp; EVI) and rainfall anomaly threshold to isolate periods where canopy vigor decouples from precipitation.
          </div>
          <div className="rounded border border-drought-border bg-drought-bg/60 p-4 space-y-1.5">
            <strong className="text-drought-highlight font-mono block">
              2. Robust Leave-One-Year-Out (LOYO) Formulation
            </strong>
            Avoiding self-referencing baseline bias by cross-validating standardized z-scores against the other 8 study years.
          </div>
          <div className="rounded border border-drought-border bg-drought-bg/60 p-4 space-y-1.5">
            <strong className="text-drought-highlight font-mono block">
              3. Rigorous Outage Curation
            </strong>
            Explicit, documented exclusion of 54 district observations during known NASA SMAP L4 telemetry/assimilation safe modes.
          </div>
          <div className="rounded border border-drought-border bg-drought-bg/60 p-4 space-y-1.5">
            <strong className="text-drought-highlight font-mono block">
              4. Complete Model Diagnostic Honesty
            </strong>
            Reporting not just headline exchangeable GEE results, but also working-independence, AR(1) temporal sensitivity, finite-sample t-reference, cluster bootstrapping, and residual spatial autocorrelation.
          </div>
        </div>
      </div>

      {/* Next Step Links */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Back to Overview</span>
        </Link>
        <Link
          href="/methodology"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>Explore Detailed Methodology &amp; Mathematical Formulations &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
