"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DATASETS, DATA_DICTIONARY, PANEL_METRICS } from "@/lib/constants/research";
import {
  Database,
  Search,
  Download,
  FileCode,
  ExternalLink,
  Table,
  Filter,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

export default function DataPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [datasetFilter, setDatasetFilter] = useState("all");

  const filteredFields = DATA_DICTIONARY.filter((field) => {
    const matchesSearch =
      field.variable.toLowerCase().includes(searchTerm.toLowerCase()) ||
      field.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      field.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDataset =
      datasetFilter === "all" ||
      field.sourceDataset.toLowerCase().includes(datasetFilter.toLowerCase());

    return matchesSearch && matchesDataset;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="border-b border-drought-border pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-water">
            Open Scientific Data
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 10 &bull; Data Sources &amp; Variable Manifest
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Earth Observation Data &amp; Data Dictionary
        </h1>
        <p className="mt-3 text-sm sm:text-base text-drought-textMuted max-w-3xl leading-relaxed">
          Detailed documentation of raw satellite products, processing pipelines, column definitions, and reproducible open datasets utilized throughout the 9-year study.
        </p>
      </div>

      {/* 4 PRIMARY EARTH OBSERVATION SOURCES */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetation">
            Input Catalog
          </span>
          <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
            Primary Earth Observation Sources
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DATASETS.map((ds) => (
            <div
              key={ds.id}
              className="rounded-xl border border-drought-border bg-drought-secondary/90 p-6 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-drought-textDim">
                    {ds.provider}
                  </span>
                  <span className="font-mono text-[10px] text-drought-highlight">
                    {ds.version}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-drought-text mt-1">
                  {ds.name}
                </h3>
                <div className="mt-2 space-y-1 text-xs text-drought-textMuted">
                  <div><strong>Spatial Resolution:</strong> {ds.resolution}</div>
                  <div><strong>Coverage:</strong> {ds.coverage}</div>
                  <div><strong>Role in Study:</strong> {ds.role}</div>
                  <div><strong>Variables Used:</strong> <code className="text-drought-highlight">{ds.variableUsed}</code></div>
                </div>
              </div>

              <div className="pt-4 border-t border-drought-border/60 text-xs">
                <p className="text-[11px] text-drought-textDim italic leading-relaxed">
                  Citation: {ds.citation}
                </p>
                <div className="mt-3">
                  <a
                    href={ds.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] text-drought-waterLight hover:underline"
                  >
                    <span>Official NASA/Provider Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOADABLE DATASETS SECTION */}
      <section className="rounded-xl border border-drought-border bg-drought-surface p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-drought-border pb-3">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
              Open Science Repositories
            </span>
            <h2 className="font-serif text-xl font-medium text-drought-text mt-1">
              Downloadable Local Research Data Files
            </h2>
          </div>
          <span className="font-mono text-xs text-drought-textDim">
            Ready for Analysis
          </span>
        </div>
        <p className="text-xs text-drought-textMuted leading-relaxed max-w-3xl">
          The following files are packaged directly with the website repository. They contain the complete panel of 972 observations and the 27-district GeoJSON vector geometries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* File 1: GeoJSON */}
          <div className="rounded-lg border border-drought-border bg-drought-bg/60 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-drought-vegetationLight">
                <FileCode className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold">
                  karnataka_districts_27.geojson
                </span>
              </div>
              <p className="text-[11px] text-drought-textDim mt-1 leading-relaxed">
                Clean, topological GeoJSON FeatureCollection of the 27 historical districts of Karnataka under the FAO GAUL 2015 Level 2 standard.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-drought-border/60">
              <a
                href="/data/karnataka_districts_27.geojson"
                download="karnataka_districts_27.geojson"
                className="inline-flex items-center gap-2 rounded bg-drought-surface border border-drought-border px-3 py-1.5 font-mono text-xs text-drought-text hover:bg-drought-surfaceHover hover:border-drought-vegetation transition-colors"
              >
                <Download className="h-3.5 w-3.5 text-drought-vegetation" />
                <span>Download GeoJSON Vector (18 KB)</span>
              </a>
            </div>
          </div>

          {/* File 2: Observations JSON */}
          <div className="rounded-lg border border-drought-border bg-drought-bg/60 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-drought-waterLight">
                <Table className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold">
                  karnataka_district_season_observations.json
                </span>
              </div>
              <p className="text-[11px] text-drought-textDim mt-1 leading-relaxed">
                Complete matrix of 972 district-season observations (918 analytic sample + 54 outage records) with CHIRPS, MODIS, and SMAP LOYO z-scores.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-drought-border/60">
              <a
                href="/data/karnataka_district_season_observations.json"
                download="karnataka_district_season_observations.json"
                className="inline-flex items-center gap-2 rounded bg-drought-surface border border-drought-border px-3 py-1.5 font-mono text-xs text-drought-text hover:bg-drought-surfaceHover hover:border-drought-water transition-colors"
              >
                <Download className="h-3.5 w-3.5 text-drought-water" />
                <span>Download Panel Observations JSON (480 KB)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCHABLE DATA DICTIONARY */}
      <section id="dictionary" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-drought-border pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-drought-soil">
              Variable Codebook
            </span>
            <h2 className="font-serif text-2xl font-light text-drought-text mt-1">
              Standardized Data Dictionary
            </h2>
            <p className="mt-0.5 text-xs text-drought-textMuted">
              Technical specifications, data types, units, and transformation notes for all variables.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-drought-textDim" />
              <input
                type="text"
                placeholder="Search variables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-md border border-drought-border bg-drought-surface pl-8 pr-3 py-1.5 text-xs text-drought-text placeholder-drought-textDim focus:border-drought-vegetation focus:outline-none font-mono"
              />
            </div>

            <select
              value={datasetFilter}
              onChange={(e) => setDatasetFilter(e.target.value)}
              className="rounded-md border border-drought-border bg-drought-surface px-3 py-1.5 text-xs text-drought-text focus:border-drought-vegetation focus:outline-none font-mono"
            >
              <option value="all">All Sources</option>
              <option value="CHIRPS">CHIRPS</option>
              <option value="MODIS">MODIS</option>
              <option value="SMAP">SMAP L4</option>
              <option value="GAUL">GAUL Boundaries</option>
              <option value="Rule">Derived Classification</option>
            </select>
          </div>
        </div>

        {/* Data Dictionary Table */}
        <div className="table-wrapper rounded-xl border border-drought-border bg-drought-surface shadow-subtle">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-drought-border bg-drought-secondary font-mono text-[11px] text-drought-textMuted sticky top-0">
              <tr>
                <th scope="col" className="p-3">Variable Name</th>
                <th scope="col" className="p-3">Label &amp; Description</th>
                <th scope="col" className="p-3">Source Dataset</th>
                <th scope="col" className="p-3">Type &amp; Units</th>
                <th scope="col" className="p-3">Transformation &amp; Formulation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-drought-border/60">
              {filteredFields.map((field) => (
                <tr key={field.variable} className="hover:bg-drought-surfaceHover/60 transition-colors">
                  <td className="p-3 font-mono text-drought-highlight font-semibold whitespace-nowrap">
                    {field.variable}
                  </td>
                  <td className="p-3 max-w-sm">
                    <div className="font-semibold text-drought-text">{field.label}</div>
                    <div className="mt-0.5 text-[11px] text-drought-textMuted leading-relaxed">
                      {field.description}
                    </div>
                  </td>
                  <td className="p-3 font-mono text-xs text-drought-textDim whitespace-nowrap">
                    {field.sourceDataset}
                  </td>
                  <td className="p-3 font-mono text-[11px] whitespace-nowrap">
                    <div className="text-drought-text">{field.dataType}</div>
                    <div className="text-drought-textDim">{field.units}</div>
                  </td>
                  <td className="p-3 text-[11px] text-drought-textMuted max-w-xs font-mono">
                    {field.transformationNotes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/seasonal-analysis"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Seasonal Subgroup Analysis</span>
        </Link>
        <Link
          href="/reproducibility"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>Explore 13-Phase Pipeline &amp; Code Reproduction &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
