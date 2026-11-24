import React from "react";
import { ArrowDown, AlertOctagon, Filter, CheckCircle2, FileSpreadsheet } from "lucide-react";

export function SampleFlowDiagram() {
  return (
    <div className="rounded-xl border border-drought-border bg-drought-secondary/90 p-5 lg:p-6">
      <div className="border-b border-drought-border pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-drought-soil">
          Observation Sample Attrition & Cohort Flow
        </span>
        <h3 className="font-serif text-xl font-medium text-drought-text">
          Sample Derivation: From 972 Potential to 918 Analyzed Observations
        </h3>
        <p className="mt-0.5 text-xs text-drought-textMuted">
          Accounting for conservative SMAP L4 outage exclusions, candidate classification, and root-zone stress outcome cross-tabulation.
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center">
        {/* Step 1: Initial Panel */}
        <div className="w-full max-w-xl rounded-lg border border-drought-border bg-drought-surface p-3.5 text-center shadow-subtle">
          <div className="font-mono text-[10px] uppercase tracking-wider text-drought-textDim">
            Initial Possible Balanced Panel
          </div>
          <div className="font-serif text-2xl font-bold text-drought-text">
            972 Observations
          </div>
          <div className="font-mono text-xs text-drought-textMuted">
            27 Historical Districts × 9 Years (2016–2024) × 4 Meteorological Seasons
          </div>
        </div>

        {/* Down Arrow with Excluded Outages */}
        <div className="relative my-3 flex flex-col items-center">
          <ArrowDown className="h-6 w-6 text-drought-borderLight" />
          <div className="my-1 flex items-center gap-2 rounded-full border border-drought-alert/40 bg-drought-alert/10 px-3 py-1 text-xs text-drought-alertLight font-mono">
            <AlertOctagon className="h-3.5 w-3.5 shrink-0" />
            <span>Excluded: 54 SMAP L4 Data Assimilation Outage Observations</span>
          </div>
          <span className="text-[10px] font-mono text-drought-textDim text-center">
            (SW Monsoon 2019 [n=27] &amp; SW Monsoon 2022 [n=27] safe-mode periods)
          </span>
          <ArrowDown className="h-6 w-6 text-drought-borderLight mt-1" />
        </div>

        {/* Step 2: Final Analytic Sample */}
        <div className="w-full max-w-xl rounded-lg border border-drought-vegetation/50 bg-drought-vegetation/10 p-3.5 text-center shadow-glow-green">
          <div className="font-mono text-[10px] uppercase tracking-wider text-drought-vegetationLight">
            Final Association Analytic Sample
          </div>
          <div className="font-serif text-2xl font-bold text-drought-text">
            918 Valid Observations
          </div>
          <div className="font-mono text-xs text-drought-vegetationLight">
            100% Complete Tri-Sensor Data Matrix (CHIRPS + MODIS + SMAP L4)
          </div>
        </div>

        {/* Branch Arrow */}
        <div className="my-4 flex items-center justify-center">
          <ArrowDown className="h-6 w-6 text-drought-borderLight" />
        </div>

        {/* Step 3: Branching into Mismatch vs Non-Mismatch */}
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Mismatch Branch */}
          <div className="rounded-lg border border-drought-soil/60 bg-drought-surface p-4 text-center">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-soilLight">
              Mismatch Candidates (4.36%)
            </div>
            <div className="font-serif text-3xl font-bold text-drought-soilLight">
              40 Observations
            </div>
            <p className="mt-1 text-[11px] text-drought-textMuted">
              NDVI LOYO z ≤ -1 AND EVI LOYO z ≤ -1 AND Rainfall LOYO z ≥ -0.5
            </p>

            {/* Sub-breakdown of stress */}
            <div className="mt-4 border-t border-drought-border/60 pt-3 text-left text-xs font-mono">
              <div className="flex justify-between text-drought-alertLight font-semibold">
                <span>Root-Zone Stressed:</span>
                <span>25 (62.50%)</span>
              </div>
              <div className="flex justify-between text-drought-textDim mt-1">
                <span>Normal Moisture:</span>
                <span>15 (37.50%)</span>
              </div>
            </div>
          </div>

          {/* Non-Mismatch Branch */}
          <div className="rounded-lg border border-drought-border bg-drought-surface p-4 text-center">
            <div className="font-mono text-[10px] uppercase tracking-wider text-drought-textDim">
              Non-Mismatch Observations (95.64%)
            </div>
            <div className="font-serif text-3xl font-bold text-drought-text">
              878 Observations
            </div>
            <p className="mt-1 text-[11px] text-drought-textMuted">
              Does not meet all three mismatch conditions simultaneously
            </p>

            {/* Sub-breakdown of stress */}
            <div className="mt-4 border-t border-drought-border/60 pt-3 text-left text-xs font-mono">
              <div className="flex justify-between text-drought-textMuted">
                <span>Root-Zone Stressed:</span>
                <span>191 (21.75%)</span>
              </div>
              <div className="flex justify-between text-drought-textDim mt-1">
                <span>Normal Moisture:</span>
                <span>687 (78.25%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Summary Association Callout */}
        <div className="mt-5 w-full max-w-2xl rounded-lg border border-drought-border bg-drought-bg/60 p-4 text-xs leading-relaxed text-drought-textMuted">
          <div className="flex items-center justify-between border-b border-drought-border/60 pb-2 font-mono text-[11px]">
            <span className="text-drought-text font-semibold">Total Root-Zone Stress Events:</span>
            <span className="text-drought-alertLight font-bold">216 / 918 (23.53%)</span>
          </div>
          <p className="mt-2">
            <strong>Key Contrast:</strong> In the presence of a seasonal rainfall–vegetation mismatch, the raw root-zone stress rate was <strong>62.50%</strong> (25/40), compared to only <strong>21.75%</strong> (191/878) in its absence. Adjusting for district clusters and seasonal categories in the primary exchangeable GEE yields an <strong>Adjusted Odds Ratio of 5.453</strong> (95% CI 2.947–10.091, p = 6.61 × 10⁻⁸).
          </p>
        </div>
      </div>
    </div>
  );
}
