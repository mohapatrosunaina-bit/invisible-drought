import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SCIENTIFIC_LIMITATIONS_15, SPATIAL_DIAGNOSTICS } from "@/lib/constants/research";
import { ResidualMoransIDiagram } from "@/components/charts/ResidualMoransIDiagram";
import {
  ShieldAlert,
  AlertTriangle,
  Scale,
  Compass,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "15 Scientific Limitations & Research Boundaries",
  description:
    "Explicit, transparent documentation of all 15 scientific limitations, residual spatial autocorrelation, and inference boundaries of The Invisible Drought study.",
};

export default function LimitationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-alert/15 border-drought-alert/40 text-drought-alertLight">
            Scientific Transparency Standard
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 11 &bull; Epistemological Rigor &amp; Limitations
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Scientific Limitations &amp; Boundary of Claims
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          Scientific honesty is an intrinsic component of our research identity. Rather than concealing limitations, this page explicitly catalogs what was measured, what was derived, what was modeled, and what remains unvalidated.
        </p>
      </div>

      {/* EPISTEMOLOGICAL TAXONOMY: MEASURED VS DERIVED VS MODELLED VS INFERRED */}
      <section className="rounded-xl border border-drought-border bg-drought-secondary/90 p-6 sm:p-8 space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
            Epistemological Distinctions
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Separating Observation from Derivation and Inference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Measured */}
          <div className="rounded-lg border border-drought-border bg-drought-surface p-4 text-xs space-y-2">
            <span className="font-mono text-xs text-drought-waterLight font-bold uppercase tracking-wider">
              1. What Was Measured
            </span>
            <ul className="text-drought-textMuted space-y-1.5 leading-relaxed list-disc pl-4">
              <li>CHIRPS infrared thermal brightness &amp; rain gauge calibration.</li>
              <li>MODIS top-of-canopy spectral reflectances (Red, NIR, Blue).</li>
              <li>SMAP L-band satellite brightness temperatures.</li>
            </ul>
          </div>

          {/* Derived */}
          <div className="rounded-lg border border-drought-border bg-drought-surface p-4 text-xs space-y-2">
            <span className="font-mono text-xs text-drought-vegetationLight font-bold uppercase tracking-wider">
              2. What Was Derived
            </span>
            <ul className="text-drought-textMuted space-y-1.5 leading-relaxed list-disc pl-4">
              <li>MODIS NDVI and EVI vegetative greenness index ratios.</li>
              <li>District spatial mean seasonal accumulated rainfall (mm).</li>
              <li>LOYO standardized z-scores across the 9 study years.</li>
              <li>Binary mismatch candidate flags (40 flagged).</li>
            </ul>
          </div>

          {/* Modelled */}
          <div className="rounded-lg border border-drought-border bg-drought-surface p-4 text-xs space-y-2">
            <span className="font-mono text-xs text-drought-soilLight font-bold uppercase tracking-wider">
              3. What Was Modelled
            </span>
            <ul className="text-drought-textMuted space-y-1.5 leading-relaxed list-disc pl-4">
              <li>NASA SMAP L4 Catchment Land Surface Model hydrology.</li>
              <li>Volumetric root-zone soil moisture (0–100 cm depth).</li>
              <li>Population-averaged logistic GEE with seasonal controls.</li>
            </ul>
          </div>

          {/* Inferred / Unvalidated */}
          <div className="rounded-lg border border-drought-border bg-drought-surface p-4 text-xs space-y-2">
            <span className="font-mono text-xs text-drought-alertLight font-bold uppercase tracking-wider">
              4. What Remains Inferred
            </span>
            <ul className="text-drought-textMuted space-y-1.5 leading-relaxed list-disc pl-4">
              <li>Statistical association: Adjusted OR 5.453 (p &lt; 0.001).</li>
              <li><strong>Not validated:</strong> In-situ ground probe moisture.</li>
              <li><strong>Not validated:</strong> Farmer harvest yield impact.</li>
              <li><strong>Not validated:</strong> Causal physical direction.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 15 MANDATORY SCIENTIFIC LIMITATIONS */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-alertLight">
            Comprehensive Audit
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            The 15 Explicit Scientific Limitations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCIENTIFIC_LIMITATIONS_15.map((lim) => (
            <div
              key={lim.id}
              className="rounded-xl border border-drought-border bg-drought-surface/80 p-5 space-y-2 flex flex-col justify-between hover:border-drought-borderLight transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-drought-alert/15 font-mono text-[10px] font-bold text-drought-alertLight border border-drought-alert/30">
                    {lim.id}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-drought-textDim">
                    {lim.category}
                  </span>
                </div>
                <h3 className="font-serif text-sm font-semibold text-drought-text mt-2">
                  {lim.title}
                </h3>
                <p className="mt-1 text-xs text-drought-textMuted leading-relaxed">
                  {lim.description}
                </p>
              </div>

              <div className="pt-2 border-t border-drought-border/60 font-mono text-[10px] text-drought-textDim">
                Limitation #{lim.id} &bull; Research Integrity Boundary
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESIDUAL SPATIAL AUTOCORRELATION DEEP DIVE */}
      <section className="space-y-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-alert">
            Methodological Vulnerability
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Residual Spatial Autocorrelation: Moran&apos;s I = 0.3036
          </h2>
        </div>
        <ResidualMoransIDiagram />
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/reproducibility"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Reproducibility &amp; Pipeline</span>
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>About The Research Initiative &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
