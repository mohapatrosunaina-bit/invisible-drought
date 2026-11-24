"use client";

import React from "react";
import { SEASONS_DATA } from "@/lib/constants/research";
import { Clock, Info } from "lucide-react";

export function SeasonalCandidateChart() {
  const chartData = [
    {
      season: "Winter",
      months: "Jan–Feb",
      candidates: 22,
      stressed: 16,
      notStressed: 6,
      stressRate: 72.73,
      context: "Dry season following post-monsoon. Highest frequency of mismatches coinciding with deep root-zone exhaustion.",
    },
    {
      season: "Pre-Monsoon",
      months: "Mar–May",
      candidates: 12,
      stressed: 6,
      notStressed: 6,
      stressRate: 50.0,
      context: "Intense heat and evaporative deficit prior to monsoon onset.",
    },
    {
      season: "Southwest Monsoon",
      months: "Jun–Sep",
      candidates: 6,
      stressed: 3,
      notStressed: 3,
      stressRate: 50.0,
      context: "Primary rainfall period. Only 6 candidates detected across 7 analysed monsoon years (2019 & 2022 excluded).",
    },
    {
      season: "Post-Monsoon",
      months: "Oct–Dec",
      candidates: 0,
      stressed: 0,
      notStressed: 0,
      stressRate: 0.0,
      context: "Retreating monsoon rains replenish surface and root-zone moisture; zero mismatch criteria met.",
    },
  ];

  const maxVal = 24;

  return (
    <div className="rounded-xl border border-drought-border bg-drought-secondary/90 p-5 lg:p-6">
      <div className="border-b border-drought-border pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-drought-water">
          Seasonal Stratification Analysis
        </span>
        <h3 className="font-serif text-xl font-medium text-drought-text">
          Distribution of Mismatch Candidates & Moisture Stress Rates
        </h3>
        <p className="mt-0.5 text-xs text-drought-textMuted">
          Examination of how the 40 rainfall–vegetation mismatch observations are distributed across Karnataka&apos;s four meteorological seasons.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Visual Bar Breakdown */}
        <div className="space-y-4">
          {chartData.map((d) => {
            const stressedPct = d.candidates > 0 ? (d.stressed / maxVal) * 100 : 0;
            const notStressedPct = d.candidates > 0 ? (d.notStressed / maxVal) * 100 : 0;

            return (
              <div
                key={d.season}
                className="rounded-lg border border-drought-border/80 bg-drought-surface/60 p-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-drought-text">{d.season}</span>
                    <span className="ml-2 font-mono text-[10px] text-drought-textDim">
                      ({d.months})
                    </span>
                  </div>
                  <div className="font-mono text-xs">
                    <span className="font-bold text-drought-soilLight">
                      {d.candidates} candidates
                    </span>
                    {d.candidates > 0 && (
                      <span className="text-drought-alertLight ml-2">
                        {d.stressRate.toFixed(1)}% stressed
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="mt-2.5 relative h-4 w-full overflow-hidden rounded bg-drought-bg border border-drought-border/60">
                  {d.candidates > 0 ? (
                    <div className="flex h-full w-full">
                      {/* Stressed portion (Red) */}
                      <div
                        className="h-full bg-drought-alert transition-all"
                        style={{ width: `${(d.stressed / d.candidates) * 100}%` }}
                        title={`${d.stressed} stressed`}
                      />
                      {/* Non-stressed portion (Muted Amber) */}
                      <div
                        className="h-full bg-drought-soil/60 transition-all"
                        style={{ width: `${(d.notStressed / d.candidates) * 100}%` }}
                        title={`${d.notStressed} non-stressed`}
                      />
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center text-[10px] font-mono text-drought-textDim">
                      0 candidates observed
                    </div>
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-drought-textDim">
                  <span>Stressed: {d.stressed}</span>
                  <span>Non-Stressed: {d.notStressed}</span>
                  <span>Total Panel Obs: 243 (or 189)</span>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-center gap-6 font-mono text-xs pt-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-drought-alert"></span>
              <span className="text-drought-text">Concurrent Root-Zone Stress (z ≤ -1)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-drought-soil/60"></span>
              <span className="text-drought-textMuted">Normal Root-Zone Moisture</span>
            </div>
          </div>
        </div>

        {/* Narrative & Statistical Takeaways */}
        <div className="flex flex-col justify-between rounded-lg border border-drought-border bg-drought-bg/60 p-4">
          <div className="space-y-4 text-xs text-drought-textMuted leading-relaxed">
            <div>
              <h4 className="font-serif text-sm font-semibold text-drought-text">
                1. The Winter Concentration Phenomenon
              </h4>
              <p className="mt-1">
                More than half of all mismatch candidates (22 out of 40, or 55%) occurred during the Winter season (January–February). Of these 22 candidates, 16 exhibited severe concurrent root-zone soil-moisture stress (72.73%).
              </p>
              <div className="mt-1.5 font-mono text-[11px] text-drought-vegetationLight">
                Winter-Only GEE: Adjusted OR 9.268 (95% CI: 3.567–24.079, p = 4.87 × 10⁻⁶)
              </div>
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold text-drought-text">
                2. Persistence Beyond Winter Dynamics
              </h4>
              <p className="mt-1">
                To confirm the phenomenon was not solely an artifact of dry winter months, a subgroup analysis excluding winter was fitted across Pre-Monsoon, Southwest Monsoon, and Post-Monsoon.
              </p>
              <div className="mt-1.5 font-mono text-[11px] text-drought-waterLight">
                Excluding-Winter GEE: Adjusted OR ~2.923 (95% CI: 1.180–7.241, p ≈ 0.0205)
              </div>
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold text-drought-text">
                3. Post-Monsoon Absence
              </h4>
              <p className="mt-1">
                Zero mismatch candidates were observed in Post-Monsoon (October–December). Retreating monsoon rains replenish surface soils and keep vegetation greenness coupled with surface moisture.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded border border-drought-borderLight/60 bg-drought-surface p-2.5 text-[11px] text-drought-textDim">
            <span className="font-semibold text-drought-text">Interpretation Caveat:</span> Subgroup evaluations remain exploratory given small positive cell counts within individual seasonal strata.
          </div>
        </div>
      </div>
    </div>
  );
}
