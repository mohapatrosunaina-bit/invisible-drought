import React from "react";
import { SPATIAL_DIAGNOSTICS } from "@/lib/constants/research";
import { AlertTriangle, Compass, ShieldAlert } from "lucide-react";

export function ResidualMoransIDiagram() {
  return (
    <div className="rounded-xl border border-drought-alert/40 bg-drought-secondary/90 p-5 lg:p-6">
      <div className="border-b border-drought-border pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-drought-alert animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-drought-alertLight">
            Critical Spatial Diagnostic &amp; Limitation
          </span>
        </div>
        <h3 className="font-serif text-xl font-medium text-drought-text mt-1">
          Residual Spatial Autocorrelation: Moran&apos;s I = {SPATIAL_DIAGNOSTICS.residualMoransI.toFixed(6)}
        </h3>
        <p className="mt-0.5 text-xs text-drought-textMuted">
          Permutation testing reveals persistent positive spatial autocorrelation in model residuals across neighboring districts.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 items-center">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-3 lg:col-span-5">
          <div className="rounded-lg border border-drought-alert/50 bg-drought-alert/10 p-4 text-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-drought-alertLight">
              Residual Moran&apos;s I
            </span>
            <div className="font-mono text-3xl font-bold text-drought-alertLight mt-1">
              0.3036
            </div>
            <p className="font-mono text-[10px] text-drought-textDim mt-1">
              Expected value under null: E(I) = -0.0385
            </p>
          </div>

          <div className="rounded-lg border border-drought-alert/50 bg-drought-alert/10 p-4 text-center">
            <span className="font-mono text-[10px] uppercase tracking-wider text-drought-alertLight">
              Two-Sided Permutation p
            </span>
            <div className="font-mono text-3xl font-bold text-drought-alertLight mt-1">
              0.0086
            </div>
            <p className="font-mono text-[10px] text-drought-textDim mt-1">
              9,999 spatial weight permutations
            </p>
          </div>

          <div className="col-span-2 rounded-lg border border-drought-border bg-drought-surface p-3 font-mono text-xs text-drought-textMuted space-y-1">
            <div className="flex justify-between">
              <span>Spatial Weight Matrix:</span>
              <span className="text-drought-text">Queen Adjacency (1st Order)</span>
            </div>
            <div className="flex justify-between">
              <span>Standard Deviations from Null:</span>
              <span className="text-drought-alertLight">z = +2.64σ</span>
            </div>
            <div className="flex justify-between">
              <span>Residual Structure:</span>
              <span className="text-drought-alert">Positive Spatial Clustering</span>
            </div>
          </div>
        </div>

        {/* Limitation Explanation */}
        <div className="flex flex-col space-y-3 rounded-lg border border-drought-border bg-drought-bg/60 p-4 text-xs leading-relaxed text-drought-textMuted lg:col-span-7">
          <div className="flex items-start gap-2 text-drought-alertLight font-semibold">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>Why This Diagnostic Matters for Scientific Transparency</span>
          </div>

          <p>
            Standard district-clustered Generalized Estimating Equations (GEE) assume that observations within each district may be correlated over time, but that observations in different districts are statistically independent.
          </p>

          <p>
            The statistically significant positive Moran&apos;s I (I = 0.3036, p = 0.0086) directly demonstrates that this assumption is violated in practice: <strong>residuals cluster geographically across neighboring administrative borders</strong>.
          </p>

          <div className="rounded border border-drought-alert/30 bg-drought-alert/5 p-3 text-drought-text">
            <strong className="text-drought-alertLight">Methodological Transparency Statement:</strong> We do not claim that district clustering removed all spatial dependence. Future extensions must implement a fully specified spatial-temporal Gaussian Markov Random Field (GMRF) or Bayesian continuous-space SPDE model.
          </div>
        </div>
      </div>
    </div>
  );
}
