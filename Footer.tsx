import React from "react";
import Link from "next/link";
import { PROJECT_METADATA, PANEL_METRICS } from "@/lib/constants/research";
import { ShieldAlert, Database, FileText, ExternalLink, GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-drought-border bg-drought-secondary text-drought-textMuted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Research Framing Banner */}
        <div className="mb-10 rounded-lg border border-drought-alert/30 bg-drought-alert/5 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-drought-alertLight" />
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-drought-alertLight">
                Scientific Scope & Research Integrity Notice
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-drought-textMuted">
                This project represents an exploratory, observational, satellite-based environmental research study.
                It establishes statistical co-occurrence (adjusted odds ratios) between seasonal rainfall–vegetation
                mismatches and SMAP L4 root-zone soil moisture stress across Karnataka. It does <strong>not</strong> claim
                causality, agricultural yield forecasting, machine-learning prediction, or operational drought-warning status.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Links Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-1">
            <span className="font-serif text-lg font-medium text-drought-text">
              THE INVISIBLE DROUGHT
            </span>
            <p className="mt-2 text-xs leading-relaxed text-drought-textDim">
              An exploratory satellite investigation into hidden environmental stress across 27 historical districts of Karnataka, India (2016–2024).
            </p>
            <div className="mt-4 flex flex-col space-y-1 text-xs font-mono text-drought-textMuted">
              <div>Sample: {PANEL_METRICS.finalAnalyticSample} obs</div>
              <div>Districts: {PANEL_METRICS.totalDistricts} (GAUL 2015)</div>
              <div>Primary OR: 5.453 (p &lt; 0.001)</div>
            </div>
          </div>

          {/* Col 2: Research & Findings */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-drought-text">
              Research & Findings
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/research" className="hover:text-drought-vegetationLight transition-colors">
                  Research Framework & Objectives
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-drought-vegetationLight transition-colors">
                  Methodology & LOYO Formulation
                </Link>
              </li>
              <li>
                <Link href="/findings" className="hover:text-drought-vegetationLight transition-colors">
                  Empirical Results & GEE Models
                </Link>
              </li>
              <li>
                <Link href="/seasonal-analysis" className="hover:text-drought-vegetationLight transition-colors">
                  Seasonal Subgroup Dynamics
                </Link>
              </li>
              <li>
                <Link href="/geospatial-explorer" className="hover:text-drought-vegetationLight transition-colors">
                  Geospatial District Explorer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Data & Reproducibility */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-drought-text">
              Data & Transparency
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/data" className="hover:text-drought-waterLight transition-colors">
                  Earth Observation Datasets
                </Link>
              </li>
              <li>
                <Link href="/data#dictionary" className="hover:text-drought-waterLight transition-colors">
                  Variable Data Dictionary
                </Link>
              </li>
              <li>
                <Link href="/reproducibility" className="hover:text-drought-waterLight transition-colors">
                  13-Phase Research Pipeline
                </Link>
              </li>
              <li>
                <Link href="/limitations" className="hover:text-drought-alertLight transition-colors">
                  15 Explicit Scientific Limitations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-drought-text transition-colors">
                  About & Institutional Context
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Primary Datasets */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-drought-text">
              Earth Observations
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-drought-textDim">
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-drought-water"></span>
                <span>CHIRPS Daily 0.05° Rainfall</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-drought-vegetation"></span>
                <span>MODIS MOD13Q1 NDVI & EVI</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-drought-soil"></span>
                <span>NASA SMAP L4 sm_rootzone (9 km)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-drought-highlight"></span>
                <span>FAO GAUL 2015 Level 2 Districts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Suggested Citation & Copyright */}
        <div className="mt-10 border-t border-drought-border/60 pt-6">
          <div className="flex flex-col gap-4 text-xs text-drought-textDim sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} The Invisible Drought Research Project. Published for scientific review and educational exploration.
            </p>
            <div className="font-mono text-[11px] text-drought-textDim">
              Next.js &bull; TypeScript &bull; Tailored for Vercel Deployment
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
