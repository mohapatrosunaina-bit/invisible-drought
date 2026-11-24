import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  PANEL_METRICS,
  PRIMARY_GEE_RESULT,
  MODEL_ESTIMATES,
  COMMON_BASELINE_CONTINGENCY,
  SPATIAL_DIAGNOSTICS,
} from "@/lib/constants/research";
import { OddsRatioForestPlot } from "@/components/charts/OddsRatioForestPlot";
import { SeasonalCandidateChart } from "@/components/charts/SeasonalCandidateChart";
import { CommonBaselineContingency } from "@/components/charts/CommonBaselineContingency";
import { ResidualMoransIDiagram } from "@/components/charts/ResidualMoransIDiagram";
import { LeaveOneDistrictOutPlot } from "@/components/charts/LeaveOneDistrictOutPlot";
import {
  BarChart3,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Info,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Empirical Results, GEE Odds Ratios & Sensitivity Analysis",
  description:
    "Primary findings of The Invisible Drought research: Adjusted Odds Ratio 5.453 (p = 6.61 × 10⁻⁸), model sensitivities, seasonal subgroups, and spatial diagnostics.",
};

export default function FindingsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-vegetation">
            Statistical Inference
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 8 &bull; Empirical Findings &amp; Diagnostics
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Results &amp; Empirical Findings
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          Exhaustive presentation of the primary population-averaged GEE model, cluster robustness checks, leave-one-district-out bounds, seasonal subgroup stratifications, and spatial autocorrelation diagnostics.
        </p>
      </div>

      {/* 8.1 PRIMARY HEADLINE RESULT HERO CARD */}
      <section className="rounded-xl border border-drought-vegetation/50 bg-gradient-to-br from-drought-surface via-drought-secondary to-drought-bg p-6 sm:p-8 shadow-editorial">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-drought-border/60 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetationLight font-semibold">
              Primary Headline Result &bull; Population-Averaged Exchangeable GEE
            </span>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-serif text-4xl sm:text-6xl font-bold text-drought-highlight">
                OR 5.453
              </span>
              <span className="font-mono text-sm text-drought-textMuted">
                [95% Wald CI: 2.947–10.091]
              </span>
              <span className="font-mono text-sm font-semibold text-drought-vegetationLight">
                p = 6.61 × 10⁻⁸
              </span>
            </div>
            <div className="font-mono text-xs text-drought-textDim">
              Exact Point Estimate: 5.452812 &bull; Wald 95% CI: [2.946638, 10.090534] &bull; p: 6.613699 × 10⁻⁸
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 font-mono text-xs">
            <div className="rounded-lg border border-drought-border bg-drought-bg/60 p-3 text-center">
              <span className="text-drought-textDim text-[10px] uppercase">Analytic Sample</span>
              <div className="font-bold text-drought-text text-lg">918</div>
              <span className="text-[10px] text-drought-textDim">54 Outages Excluded</span>
            </div>
            <div className="rounded-lg border border-drought-border bg-drought-bg/60 p-3 text-center">
              <span className="text-drought-textDim text-[10px] uppercase">Mismatch Candidates</span>
              <div className="font-bold text-drought-soilLight text-lg">40</div>
              <span className="text-[10px] text-drought-textDim">4.36% of sample</span>
            </div>
            <div className="rounded-lg border border-drought-border bg-drought-bg/60 p-3 text-center">
              <span className="text-drought-textDim text-[10px] uppercase">Root-Zone Stressed</span>
              <div className="font-bold text-drought-alertLight text-lg">216</div>
              <span className="text-[10px] text-drought-textDim">23.53% of sample</span>
            </div>
          </div>
        </div>

        {/* Rigorous Interpretation Statement */}
        <div className="mt-6 space-y-3 text-xs sm:text-sm text-drought-text leading-relaxed">
          <p>
            <strong>Scientific Interpretation:</strong> District-season observations meeting the rainfall–vegetation mismatch criteria had approximately <strong>5.45 times the adjusted odds</strong> of concurrent NASA SMAP L4 root-zone soil moisture stress compared with non-mismatch observations under the primary population-averaged GEE model adjusting for categorical seasons and district clustering.
          </p>
          <div className="rounded border border-drought-border bg-drought-bg/60 p-3 text-xs text-drought-textMuted font-mono">
            <strong>Reporting Protocol:</strong> Always refer to this estimate as an <em>adjusted odds ratio</em>. The observational framework establishes empirical co-occurrence; it does <strong>not</strong> prove that the mismatch caused root-zone stress.
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE FOREST PLOT */}
      <section className="space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-water">
            Sections 8.2, 8.3, 8.4, 8.6
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Model Robustness &amp; Sensitivity Comparisons
          </h2>
        </div>
        <OddsRatioForestPlot />
      </section>

      {/* DETAILED SENSITIVITY TABLE */}
      <section className="space-y-4">
        <h3 className="font-serif text-xl font-medium text-drought-text">
          Detailed Sensitivity Model Specifications
        </h3>

        <div className="overflow-x-auto rounded-xl border border-drought-border bg-drought-surface">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-drought-border bg-drought-secondary font-mono text-[11px] text-drought-textMuted">
              <tr>
                <th scope="col" className="p-3">Model Specification</th>
                <th scope="col" className="p-3">Adjusted OR</th>
                <th scope="col" className="p-3">95% Confidence Interval</th>
                <th scope="col" className="p-3">p-value</th>
                <th scope="col" className="p-3">Interpretation &amp; Methodological Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-drought-border/60 font-mono">
              {/* Primary Exchangeable */}
              <tr className="bg-drought-vegetation/5">
                <td className="p-3 font-semibold text-drought-vegetationLight">
                  Primary Exchangeable GEE
                </td>
                <td className="p-3 font-bold text-drought-highlight">5.453</td>
                <td className="p-3 text-drought-text">2.947 – 10.091</td>
                <td className="p-3 text-drought-vegetationLight">6.61 × 10⁻⁸</td>
                <td className="p-3 font-sans text-drought-textMuted text-[11px]">
                  Primary headline benchmark adjusting for season and district clustering.
                </td>
              </tr>

              {/* Working-Independence */}
              <tr>
                <td className="p-3 text-drought-text">
                  Working-Independence GEE
                </td>
                <td className="p-3 font-bold text-drought-text">6.578</td>
                <td className="p-3 text-drought-textMuted">3.419 – 12.657</td>
                <td className="p-3 text-drought-textMuted">1.69 × 10⁻⁸</td>
                <td className="p-3 font-sans text-drought-textMuted text-[11px]">
                  Assumes working independence across district observations.
                </td>
              </tr>

              {/* Conservative t-reference */}
              <tr>
                <td className="p-3 text-drought-text">
                  Conservative t-Reference (Exchangeable)
                </td>
                <td className="p-3 font-bold text-drought-text">5.453</td>
                <td className="p-3 text-drought-textMuted">2.860 – 10.398</td>
                <td className="p-3 text-drought-textMuted">≈ 0.000012</td>
                <td className="p-3 font-sans text-drought-textMuted text-[11px]">
                  Inference referenced to t-distribution with df=26 (27 clusters - 1).
                </td>
              </tr>

              {/* Cluster Bootstrap */}
              <tr>
                <td className="p-3 text-drought-text">
                  District Cluster Bootstrap (Pooled Logit)
                </td>
                <td className="p-3 font-bold text-drought-text">6.629 (Median)</td>
                <td className="p-3 text-drought-textMuted">3.378 – 13.678</td>
                <td className="p-3 text-drought-textDim">—</td>
                <td className="p-3 font-sans text-drought-textMuted text-[11px]">
                  1,000 cluster resamples of pooled logit model (not GEE coefficient bootstrap).
                </td>
              </tr>

              {/* Temporal AR(1) */}
              <tr className="bg-drought-alert/5">
                <td className="p-3 font-semibold text-drought-alertLight">
                  Temporal AR(1) GEE
                </td>
                <td className="p-3 font-bold text-drought-alertLight">2.587</td>
                <td className="p-3 text-drought-text">1.350 – 4.960</td>
                <td className="p-3 text-drought-alertLight">0.004194</td>
                <td className="p-3 font-sans text-drought-textMuted text-[11px]">
                  Attenuates materially, indicating sensitivity to within-district temporal correlation.
                </td>
              </tr>

              {/* Common Baseline */}
              <tr>
                <td className="p-3 text-drought-highlight">
                  Common-Baseline Sensitivity
                </td>
                <td className="p-3 font-bold text-drought-highlight">11.210</td>
                <td className="p-3 text-drought-textMuted">5.959 – 21.087</td>
                <td className="p-3 text-drought-textMuted">6.56 × 10⁻¹⁴</td>
                <td className="p-3 font-sans text-drought-textMuted text-[11px]">
                  Fixed pooled baseline reference. LOYO remains the scientific primary standard.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8.5 LEAVE-ONE-DISTRICT-OUT INFLUENCE CHECK */}
      <section className="space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetation">
            Section 8.5
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Cluster Leverage: Leave-One-District-Out Analysis
          </h2>
        </div>
        <LeaveOneDistrictOutPlot />
      </section>

      {/* 8.7 SEASONAL SUBGROUP ANALYSIS */}
      <section className="space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-soil">
            Section 8.7
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Seasonal Subgroup Dynamics
          </h2>
        </div>
        <SeasonalCandidateChart />
      </section>

      {/* 8.8 COMMON BASELINE CONTINGENCY */}
      <section className="space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
            Section 8.8
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Common-Baseline vs. LOYO Contingency Analysis
          </h2>
        </div>
        <CommonBaselineContingency />
      </section>

      {/* 8.9 RESIDUAL SPATIAL AUTOCORRELATION LIMITATION */}
      <section className="space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-alert">
            Section 8.9
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Spatial Autocorrelation Diagnostic &amp; Scientific Honesty
          </h2>
        </div>
        <ResidualMoransIDiagram />
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/geospatial-explorer"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Geospatial Explorer</span>
        </Link>
        <Link
          href="/seasonal-analysis"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>Explore Detailed Seasonal Analysis &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
