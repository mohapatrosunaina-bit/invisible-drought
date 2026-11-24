import React from "react";
import { COMMON_BASELINE_CONTINGENCY } from "@/lib/constants/research";
import { Check, X, ShieldAlert, GitCompare } from "lucide-react";

export function CommonBaselineContingency() {
  return (
    <div className="rounded-xl border border-drought-border bg-drought-secondary/90 p-5 lg:p-6">
      <div className="border-b border-drought-border pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
          Sensitivity Specification Benchmark
        </span>
        <h3 className="font-serif text-xl font-medium text-drought-text">
          LOYO Cross-Validation vs. Fixed Common-Baseline Contingency
        </h3>
        <p className="mt-0.5 text-xs text-drought-textMuted">
          Evaluating cross-tabulation agreement and model sensitivity between Leave-One-Year-Out (LOYO) and 9-year Pooled Common-Baseline anomalies.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
        {/* 2x2 Contingency Table */}
        <div className="lg:col-span-7">
          <div className="overflow-x-auto rounded-lg border border-drought-border bg-drought-surface">
            <table className="w-full text-center text-xs">
              <caption className="sr-only">
                Cross-tabulation comparing Leave-One-Year-Out and Common-Baseline Mismatch Classifications
              </caption>
              <thead>
                <tr className="border-b border-drought-border bg-drought-bg/60 font-mono text-[11px] text-drought-textMuted">
                  <th scope="col" className="p-3 text-left">
                    LOYO Specification
                  </th>
                  <th scope="col" className="p-3 text-drought-highlight">
                    Common-Baseline Flagged
                  </th>
                  <th scope="col" className="p-3 text-drought-textDim">
                    Common-Baseline Normal
                  </th>
                  <th scope="col" className="p-3 text-drought-text font-semibold">
                    Row Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-drought-border/60 font-mono">
                {/* LOYO Flagged */}
                <tr>
                  <th scope="row" className="p-3 text-left font-semibold text-drought-soilLight">
                    LOYO Flagged (Candidate)
                  </th>
                  <td className="p-3 bg-drought-vegetation/10 text-drought-vegetationLight font-bold text-sm">
                    34
                    <div className="text-[10px] text-drought-textDim font-normal font-sans">
                      Concordant Flag
                    </div>
                  </td>
                  <td className="p-3 text-drought-alertLight font-medium">
                    6
                    <div className="text-[10px] text-drought-textDim font-normal font-sans">
                      LOYO Only
                    </div>
                  </td>
                  <td className="p-3 font-bold text-drought-text">
                    40
                  </td>
                </tr>

                {/* LOYO Normal */}
                <tr>
                  <th scope="row" className="p-3 text-left font-normal text-drought-textMuted">
                    LOYO Normal (Non-Candidate)
                  </th>
                  <td className="p-3 text-drought-waterLight font-medium">
                    2
                    <div className="text-[10px] text-drought-textDim font-normal font-sans">
                      Common-Baseline Only
                    </div>
                  </td>
                  <td className="p-3 bg-drought-bg/40 text-drought-text font-bold text-sm">
                    876
                    <div className="text-[10px] text-drought-textDim font-normal font-sans">
                      Concordant Normal
                    </div>
                  </td>
                  <td className="p-3 font-bold text-drought-text">
                    878
                  </td>
                </tr>

                {/* Column Totals */}
                <tr className="border-t-2 border-drought-border bg-drought-bg/60 font-semibold text-drought-text">
                  <th scope="row" className="p-3 text-left font-mono text-xs">
                    Column Total
                  </th>
                  <td className="p-3 text-drought-highlight font-mono">36</td>
                  <td className="p-3 text-drought-textDim font-mono">882</td>
                  <td className="p-3 text-drought-vegetationLight font-mono">918</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Metric Highlights */}
          <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-drought-textDim px-1">
            <span>Overall Agreement: <strong>910 / 918 (99.13%)</strong></span>
            <span>Cohen&apos;s Kappa: <strong>0.887</strong></span>
          </div>
        </div>

        {/* Narrative & Model Comparison */}
        <div className="flex flex-col space-y-4 rounded-lg border border-drought-border bg-drought-bg/60 p-4 text-xs leading-relaxed text-drought-textMuted lg:col-span-5">
          <div>
            <h4 className="font-serif text-sm font-semibold text-drought-text">
              Why LOYO is the Primary Specification
            </h4>
            <p className="mt-1">
              Under a common baseline, the target observation year is included in calculating the 9-year mean and standard deviation. This self-inclusion artificially attenuates severe anomalies (because extreme years pull the reference mean toward themselves).
            </p>
            <p className="mt-2">
              LOYO eliminates this self-referencing bias by comparing each target year strictly against the remaining 8 years.
            </p>
          </div>

          <div className="border-t border-drought-border/60 pt-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-drought-highlight">
              Estimator Sensitivity Comparison
            </span>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between rounded bg-drought-surface p-2 font-mono text-xs">
                <span>Primary LOYO GEE:</span>
                <span className="font-bold text-drought-vegetationLight">
                  OR 5.453 (2.95–10.09)
                </span>
              </div>
              <div className="flex items-center justify-between rounded bg-drought-surface p-2 font-mono text-xs">
                <span>Common-Baseline GEE:</span>
                <span className="font-bold text-drought-highlight">
                  OR 11.210 (5.96–21.09)
                </span>
              </div>
            </div>
          </div>

          <div className="rounded border border-drought-borderLight/60 bg-drought-surface/80 p-2 text-[11px] text-drought-textDim">
            <strong className="text-drought-text">Scientific Honesty Note:</strong> Although the common-baseline model yields an even larger adjusted odds ratio (11.210, p = 6.56 × 10⁻¹⁴), we uphold the more conservative LOYO estimate (5.453) as the study&apos;s primary benchmark.
          </div>
        </div>
      </div>
    </div>
  );
}
