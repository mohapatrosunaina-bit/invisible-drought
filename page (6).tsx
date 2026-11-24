import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { WORKFLOW_13_PHASES, PANEL_METRICS } from "@/lib/constants/research";
import {
  Layers,
  Terminal,
  Code2,
  GitBranch,
  CheckCircle2,
  FileCode,
  ArrowRight,
  Server,
  Cpu,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reproducibility, GEE Workflows & Pipeline Architecture",
  description:
    "The 13 sequential workflow phases of The Invisible Drought research, Earth Engine ingestion parameters, Python GEE statistical modeling, and complete replication guide.",
};

export default function ReproducibilityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-vegetation">
            Open Science &amp; Replication
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 10 &bull; 13 Workflow Phases &amp; Analytical Pipeline
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Reproducibility &amp; Analytical Workflow
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          Complete replication documentation detailing the sequential 13-phase Earth observation and statistical pipeline, from raw satellite ingestion to population-averaged GEE modeling.
        </p>
      </div>

      {/* PIPELINE ARCHITECTURE NOTICE */}
      <div className="rounded-xl border border-drought-vegetation/40 bg-drought-vegetation/5 p-6 text-xs text-drought-textMuted leading-relaxed space-y-2">
        <div className="flex items-center gap-2 text-drought-vegetationLight font-mono font-semibold">
          <Layers className="h-4 w-4" />
          <span>Pipeline Framing Notice: Sequential Stages, Not Independent Experiments</span>
        </div>
        <p>
          The 13 phases below represent the sequential computational stages of a single cohesive research data pipeline. They describe how raw satellite telemetry was ingested, cleaned, spatially aggregated, converted to standardized LOYO anomalies, and modeled. They do <strong>not</strong> represent 13 disparate or uncoordinated experiments.
        </p>
      </div>

      {/* 13 SEQUENTIAL WORKFLOW PHASES */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
            Computational Architecture
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            The 13 Sequential Workflow Phases
          </h2>
        </div>

        <div className="space-y-4">
          {WORKFLOW_13_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-xl border border-drought-border bg-drought-surface p-5 transition-colors hover:border-drought-borderLight"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-drought-border/60 pb-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-drought-vegetation/15 font-mono text-xs font-bold text-drought-vegetationLight border border-drought-vegetation/40">
                    {phase.phase}
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-drought-text">
                      {phase.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="rounded bg-drought-bg/60 px-2 py-0.5 text-drought-textDim border border-drought-border">
                    Category: {phase.category}
                  </span>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                <div className="md:col-span-8 text-drought-textMuted leading-relaxed">
                  <p>{phase.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1 font-mono text-[11px] text-drought-vegetationLight">
                    {phase.toolsUsed.map((t) => (
                      <span key={t} className="rounded bg-drought-vegetation/10 px-1.5 py-0.5 border border-drought-vegetation/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 rounded bg-drought-bg/60 p-2.5 font-mono text-[10px] space-y-1.5 border border-drought-border/60">
                  <div>
                    <span className="text-drought-textDim">Inputs:</span>
                    <div className="text-drought-textMuted truncate">{phase.inputs.join(", ")}</div>
                  </div>
                  <div>
                    <span className="text-drought-textDim">Outputs:</span>
                    <div className="text-drought-highlight truncate">{phase.outputs.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE REPLICATION CODE SNIPPET (PYTHON / GEE) */}
      <section className="rounded-xl border border-drought-border bg-drought-secondary/90 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-drought-border pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-drought-waterLight" />
            <span className="font-mono text-xs uppercase tracking-wider text-drought-waterLight font-semibold">
              Replication Code &bull; Primary Exchangeable GEE in Python
            </span>
          </div>
          <span className="font-mono text-[11px] text-drought-textDim">
            statsmodels v0.14+
          </span>
        </div>

        <p className="text-xs text-drought-textMuted leading-relaxed">
          The primary statistical inference is estimated using population-averaged Generalized Estimating Equations with an exchangeable working correlation and categorical seasonal controls:
        </p>

        {/* Code block */}
        <div className="rounded-lg border border-drought-border bg-drought-bg p-4 font-mono text-xs text-drought-text leading-relaxed overflow-x-auto">
          <pre>{`import statsmodels.api as sm
import statsmodels.formula.api as smf
import pandas as pd
import numpy as np

# 1. Load cured association sample (918 observations, outages excluded)
df = pd.read_json("public/data/karnataka_district_season_observations.json")
df = df[~df["isExcludedOutage"]].copy()

# 2. Specify primary population-averaged GEE
# Binary outcome: isRootzoneStressed (sm_rootzone LOYO z <= -1)
# Predictor: isMismatchCandidate (NDVI <= -1 and EVI <= -1 and Rain >= -0.5)
# Cluster variable: districtId (27 historical clusters)
# Working correlation: Exchangeable (Equal correlation within district)
family = sm.families.Binomial(link=sm.families.links.Logit())
cov_struct = sm.cov_struct.Exchangeable()

model = smf.gee(
    formula="isRootzoneStressed ~ isMismatchCandidate + C(season, Treatment('Winter'))",
    groups="districtId",
    data=df,
    family=family,
    cov_struct=cov_struct
)
result = model.fit()

# 3. Extract Adjusted Odds Ratio and 95% Wald Confidence Interval
or_est = np.exp(result.params["isMismatchCandidate[T.True]"])
ci_lower = np.exp(result.conf_int().loc["isMismatchCandidate[T.True]", 0])
ci_upper = np.exp(result.conf_int().loc["isMismatchCandidate[T.True]", 1])
p_val = result.pvalues["isMismatchCandidate[T.True]"]

print(f"Primary Adjusted Odds Ratio: {or_est:.6f}") # Yields 5.452812
print(f"95% Wald CI: [{ci_lower:.6f}, {ci_upper:.6f}]") # Yields [2.946638, 10.090534]
print(f"p-value: {p_val:.6e}") # Yields 6.613699e-08`}</pre>
        </div>
      </section>

      {/* COMPUTATIONAL ENVIRONMENT SPECIFICATIONS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-drought-border bg-drought-surface p-5 space-y-2">
          <div className="flex items-center gap-2 text-drought-vegetationLight">
            <Cpu className="h-4 w-4" />
            <h4 className="font-serif text-sm font-semibold text-drought-text">
              Compute Infrastructure
            </h4>
          </div>
          <p className="text-xs text-drought-textDim leading-relaxed">
            Google Earth Engine API Python v0.1.380+ &bull; Cloud Storage Bucket extraction &bull; Local post-processing on Python 3.11 / x86_64 / arm64.
          </p>
        </div>

        <div className="rounded-xl border border-drought-border bg-drought-surface p-5 space-y-2">
          <div className="flex items-center gap-2 text-drought-waterLight">
            <Package className="h-4 w-4" />
            <h4 className="font-serif text-sm font-semibold text-drought-text">
              Core Python Libraries
            </h4>
          </div>
          <p className="text-xs text-drought-textDim leading-relaxed">
            <code>statsmodels==0.14.1</code>, <code>geopandas==0.14.2</code>, <code>pysal==24.1</code>, <code>scipy==1.12.0</code>, <code>numpy==1.26.4</code>, <code>shapely==2.0.2</code>.
          </p>
        </div>

        <div className="rounded-xl border border-drought-border bg-drought-surface p-5 space-y-2">
          <div className="flex items-center gap-2 text-drought-soilLight">
            <Server className="h-4 w-4" />
            <h4 className="font-serif text-sm font-semibold text-drought-text">
              Public Web Frontend
            </h4>
          </div>
          <p className="text-xs text-drought-textDim leading-relaxed">
            Next.js 14 App Router &bull; TypeScript &bull; Zero server secrets &bull; Tailored for production deployment on Vercel without external API credentials.
          </p>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/data"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Earth Observation Data Sources</span>
        </Link>
        <Link
          href="/limitations"
          className="flex items-center gap-1.5 text-drought-alertLight hover:underline font-semibold"
        >
          <span>Review All 15 Scientific Limitations &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
