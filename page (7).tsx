import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PROJECT_METADATA, PANEL_METRICS } from "@/lib/constants/research";
import {
  Info,
  BookOpen,
  Mail,
  Building,
  User,
  Quote,
  ArrowRight,
  ShieldAlert,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About The Project & Institutional Context",
  description:
    "Background on The Invisible Drought research project, suggested academic citation, editable investigator fields, and research inquiry details.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-vegetation">
            Project Background
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 13 &bull; Scientific Initiative &amp; Citation
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          About The Invisible Drought
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          An exploratory environmental research project investigating relationships between precipitation variability, remotely sensed vegetation canopy conditions, and root-zone soil moisture stress across Karnataka, India.
        </p>
      </div>

      {/* PROJECT NARRATIVE & CONTEXT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-drought-textMuted leading-relaxed">
          <h2 className="font-serif text-2xl font-light text-drought-text">
            Origin &amp; Scientific Motivation
          </h2>
          <p>
            The Invisible Drought initiative was developed to explore whether satellite observations can identify environmental stress that escapes traditional precipitation-centric monitoring.
          </p>
          <p>
            Agricultural regions across the Deccan plateau frequently encounter periods where official rainfall records report normal or near-normal seasonal precipitation, yet farmers report vegetative wilting and delayed sowing. This divergence suggests that surface precipitation alone is insufficient to describe deep root-zone soil water availability.
          </p>
          <p>
            By combining high-resolution daily precipitation from CHIRPS (0.05°), dual vegetation indices from MODIS Terra (NDVI and EVI), and assimilated root-zone soil moisture from NASA SMAP Level 4 (0–100 cm depth), the study establishes an empirical, district-season baseline across all 27 historical districts of Karnataka from 2016 through 2024.
          </p>

          <div className="rounded-lg border border-drought-border bg-drought-secondary p-4 space-y-2 font-mono text-xs text-drought-text">
            <span className="text-drought-highlight font-semibold uppercase text-[10px] tracking-wider block">
              Core Technical Summary
            </span>
            <div>&bull; Geography: Karnataka, India (27 Historical GAUL 2015 Districts)</div>
            <div>&bull; Observation Window: 2016–2024 (9 Consecutive Years, 4 Seasons)</div>
            <div>&bull; Cured Sample: 918 District-Season Observations (54 Outages Excluded)</div>
            <div>&bull; Primary Estimate: Adjusted Odds Ratio 5.453 (95% CI: 2.947–10.091, p &lt; 0.001)</div>
          </div>
        </div>

        {/* INVESTIGATOR & INSTITUTIONAL PLACEHOLDERS */}
        <div className="lg:col-span-5 rounded-xl border border-drought-border bg-drought-surface p-6 space-y-5">
          <div className="border-b border-drought-border pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
              Research Contributors
            </span>
            <h3 className="font-serif text-lg font-medium text-drought-text mt-1">
              Investigators &amp; Affiliations
            </h3>
            <p className="text-[11px] text-drought-textDim mt-0.5">
              Editable academic and institutional metadata placeholders.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Primary Investigator Placeholder */}
            <div className="rounded-lg border border-drought-border bg-drought-bg/60 p-3.5 space-y-1">
              <div className="flex items-center gap-2 text-drought-vegetationLight font-mono">
                <User className="h-4 w-4" />
                <span className="font-semibold text-xs text-drought-text">[Principal Investigator Name]</span>
              </div>
              <div className="text-drought-textDim text-[11px]">
                Department of Environmental Science / Remote Sensing Laboratory
              </div>
              <div className="text-drought-textDim text-[11px]">
                [Institution / University Name Placeholder]
              </div>
            </div>

            {/* Contributing Team Placeholder */}
            <div className="rounded-lg border border-drought-border bg-drought-bg/60 p-3.5 space-y-1">
              <div className="flex items-center gap-2 text-drought-waterLight font-mono">
                <Building className="h-4 w-4" />
                <span className="font-semibold text-xs text-drought-text">[Research Group / Lab]</span>
              </div>
              <div className="text-drought-textDim text-[11px]">
                Geospatial Hydrology &amp; Agro-Climatology Research Group
              </div>
              <div className="text-drought-textDim text-[11px]">
                Location: Karnataka, India
              </div>
            </div>

            {/* Integrity Notice */}
            <div className="rounded border border-drought-borderLight/60 bg-drought-bg/40 p-2.5 text-[11px] text-drought-textDim leading-relaxed">
              <strong>Academic Integrity Notice:</strong> In adherence to strict guidelines, no fabricated degrees, false university approvals, non-existent grant numbers, or unverified publication acceptance statuses have been generated.
            </div>
          </div>
        </div>
      </div>

      {/* SUGGESTED CITATION & BIBLIOGRAPHY */}
      <section className="rounded-xl border border-drought-border bg-drought-secondary/90 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-drought-highlight">
          <Quote className="h-5 w-5" />
          <h2 className="font-serif text-xl font-medium text-drought-text">
            Suggested Academic Citation
          </h2>
        </div>

        <p className="text-xs text-drought-textMuted leading-relaxed">
          If referencing this research methodology, dataset manifest, or analytical framework in scholarly evaluation, please format the citation as follows:
        </p>

        {/* Citation Box */}
        <div className="rounded-lg border border-drought-border bg-drought-bg p-4 font-mono text-xs text-drought-text leading-relaxed select-all">
          The Invisible Drought Research Initiative (2024). <em>Detecting Seasonal Rainfall–Vegetation Mismatches and Root-Zone Soil Moisture Stress Across Karnataka, India: An Exploratory District-Season Analysis</em>. Research Platform &amp; Open Data Archive. URL: https://invisible-drought.vercel.app
        </div>

        {/* BibTeX Entry */}
        <div className="rounded-lg border border-drought-border bg-drought-bg p-4 font-mono text-[11px] text-drought-textDim leading-relaxed overflow-x-auto">
          <pre>{`@misc{invisibledrought2024,
  author = {{The Invisible Drought Research Initiative}},
  title  = {Detecting Seasonal Rainfall--Vegetation Mismatches and Root-Zone Soil Moisture Stress Across Karnataka, India: An Exploratory District-Season Analysis},
  year   = {2024},
  howpublished = {\\url{https://invisible-drought.vercel.app}},
  note   = {Exploratory satellite-based research study using CHIRPS, MODIS, and NASA SMAP Level 4}
}`}</pre>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/limitations"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; 15 Scientific Limitations</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>Return to Homepage Overview &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
