import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SEASONS_DATA } from "@/lib/constants/research";
import { SeasonalCandidateChart } from "@/components/charts/SeasonalCandidateChart";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sun,
  CloudRain,
  Snowflake,
  Wind,
  Info,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Seasonal Dynamics & Phenological Stratification",
  description:
    "Seasonal breakdown of rainfall–vegetation mismatches across Karnataka: Winter coupling (OR 9.268), Pre-Monsoon stress, and non-winter persistence (OR 2.923).",
};

export default function SeasonalAnalysisPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-water">
            Phenological Analysis
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 8.7 &bull; Seasonal Stratification &amp; Dynamics
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Seasonal Dynamics &amp; Subgroup Analysis
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          How rainfall–vegetation mismatches behave across the annual cycle in Karnataka: uncovering why 55% of all candidates concentrate in Winter, and proving the association remains robust when Winter is excluded.
        </p>
      </div>

      {/* Main Interactive Seasonal Chart */}
      <SeasonalCandidateChart />

      {/* 4 SEASONS DEEP DIVE CARDS */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
            Agro-Climatic Cycle
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Phenological Behavior by Meteorological Season
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Winter */}
          <div className="rounded-xl border border-drought-border bg-drought-surface p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-drought-border pb-3">
              <div className="flex items-center gap-2 text-drought-highlight">
                <Snowflake className="h-5 w-5" />
                <h3 className="font-serif text-lg font-medium text-drought-text">
                  Winter (January–February)
                </h3>
              </div>
              <span className="font-mono text-xs text-drought-soilLight font-bold">
                22 Candidates &bull; 72.7% Stressed
              </span>
            </div>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              Winter coincides with the agricultural <em>Rabi</em> season. Total rainfall during this window is climatologically minimal (~8.5 mm statewide mean).
            </p>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              Because rainfall is already low, even minor precipitation satisfies the non-deficit criterion (z ≥ -0.5), while residual soil moisture from the monsoon depletes rapidly. This produces a stark coupling: <strong>16 of the 22 winter candidates</strong> exhibited severe concurrent root-zone stress.
            </p>
            <div className="rounded bg-drought-bg/60 p-2.5 font-mono text-[11px] text-drought-vegetationLight border border-drought-border/60">
              Winter-Only Subgroup GEE: Adjusted OR 9.268 (95% CI: 3.567–24.079, p = 4.87 × 10⁻⁶)
            </div>
          </div>

          {/* Pre-Monsoon */}
          <div className="rounded-xl border border-drought-border bg-drought-surface p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-drought-border pb-3">
              <div className="flex items-center gap-2 text-drought-soil">
                <Sun className="h-5 w-5" />
                <h3 className="font-serif text-lg font-medium text-drought-text">
                  Pre-Monsoon (March–May)
                </h3>
              </div>
              <span className="font-mono text-xs text-drought-soilLight font-bold">
                12 Candidates &bull; 50.0% Stressed
              </span>
            </div>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              Characterized by soaring surface temperatures and escalating atmospheric vapor pressure deficits (VPD). Convective thunderstorms provide localized showers.
            </p>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              Isolated showers can raise seasonal rainfall depth above the anomaly threshold while high evaporative demand quickly depletes the topsoil and starves the root zone, yielding 12 mismatch candidates, of which 6 (50%) exhibited root-zone stress.
            </p>
            <div className="rounded bg-drought-bg/60 p-2.5 font-mono text-[11px] text-drought-soilLight border border-drought-border/60">
              Thermal Stress Factor: Canopy greenness constrained by thermal heat units and soil crusting.
            </div>
          </div>

          {/* Southwest Monsoon */}
          <div className="rounded-xl border border-drought-border bg-drought-surface p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-drought-border pb-3">
              <div className="flex items-center gap-2 text-drought-water">
                <CloudRain className="h-5 w-5" />
                <h3 className="font-serif text-lg font-medium text-drought-text">
                  Southwest Monsoon (June–September)
                </h3>
              </div>
              <span className="font-mono text-xs text-drought-waterLight font-bold">
                6 Candidates &bull; 50.0% Stressed
              </span>
            </div>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              The primary rainfall season accounting for over 70% of Karnataka&apos;s annual water volume and driving <em>Kharif</em> crop establishment.
            </p>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              Only 6 candidates emerged across 7 analyzed seasons (2019 and 2022 excluded due to outages). Persistent monsoon rain usually maintains high canopy greenness and saturated root zones, making mismatches rare.
            </p>
            <div className="rounded bg-drought-bg/60 p-2.5 font-mono text-[11px] text-drought-waterLight border border-drought-border/60">
              Sample Note: 189 valid district-season observations analyzed (54 outage records excluded).
            </div>
          </div>

          {/* Post-Monsoon */}
          <div className="rounded-xl border border-drought-border bg-drought-surface p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-drought-border pb-3">
              <div className="flex items-center gap-2 text-drought-vegetation">
                <Wind className="h-5 w-5" />
                <h3 className="font-serif text-lg font-medium text-drought-text">
                  Post-Monsoon (October–December)
                </h3>
              </div>
              <span className="font-mono text-xs text-drought-textDim font-bold">
                0 Candidates &bull; 0% Stressed
              </span>
            </div>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              Transition phase driven by the Northeast retreating monsoon, bringing vital cyclonic showers to southern and eastern districts.
            </p>
            <p className="text-xs text-drought-textMuted leading-relaxed">
              Zero observations met the mismatch criteria. Canopy greenness remained in tight physical equilibrium with surface moisture during this season throughout all 9 study years.
            </p>
            <div className="rounded bg-drought-bg/60 p-2.5 font-mono text-[11px] text-drought-textDim border border-drought-border/60">
              Phenological Baseline: Full hydrological and canopy coupling across all 243 observations.
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUDING WINTER SUBGROUP ANALYSIS */}
      <section className="rounded-xl border border-drought-border bg-drought-secondary/90 p-6 sm:p-8 space-y-4">
        <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetation">
          Subgroup Invariance Check
        </span>
        <h2 className="font-serif text-2xl font-light text-drought-text">
          Does the Mismatch Association Persist Outside of Winter?
        </h2>
        <p className="text-xs sm:text-sm text-drought-textMuted leading-relaxed max-w-3xl">
          A critical question for research reviewers is whether the primary headline finding is solely an artifact of dry winter conditions. To answer this directly, we fitted a stratified GEE model strictly excluding all Winter observations:
        </p>

        <div className="rounded-lg border border-drought-vegetation/40 bg-drought-vegetation/10 p-5 font-mono text-xs space-y-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-drought-text font-bold text-sm">
              Excluding-Winter Subgroup GEE (Pre-Monsoon + SW Monsoon + Post-Monsoon):
            </span>
            <span className="font-serif text-2xl font-bold text-drought-highlight">
              Adjusted OR ≈ 2.923
            </span>
          </div>
          <div className="text-drought-textMuted">
            95% Wald CI: [1.180, 7.241] &bull; p ≈ 0.0205
          </div>
        </div>

        <p className="text-xs text-drought-textMuted leading-relaxed pt-1">
          <strong>Conclusion:</strong> Even after completely eliminating all 22 winter candidates and all 243 winter observations, the adjusted odds ratio remains positive and statistically significant (OR ≈ 2.923, p ≈ 0.0205). This verifies that the rainfall–vegetation mismatch phenomenon captures genuine soil moisture stress across the broader agricultural calendar.
        </p>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/findings"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Primary Statistical Findings</span>
        </Link>
        <Link
          href="/data"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>Explore Earth Observation Datasets &amp; Data Dictionary &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
