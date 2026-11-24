import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { KarnatakaDistrictMap } from "@/components/maps/KarnatakaDistrictMap";
import { KARNATAKA_DISTRICTS_27, PANEL_METRICS } from "@/lib/constants/research";
import { Compass, Info, Layers, MapPin, Database, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Geospatial Explorer — Karnataka 27 Districts",
  description:
    "Interactive district-season remote sensing map of Karnataka across 27 historical districts (2016–2024). Explore rainfall, NDVI, EVI, root-zone soil moisture, and mismatch classifications.",
};

export default function GeospatialExplorerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
      {/* Header */}
      <div className="border-b border-drought-border pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="data-badge bg-drought-surface border-drought-border text-drought-vegetation">
            Interactive GIS Platform
          </span>
          <span className="font-mono text-xs text-drought-textDim">
            PART 7 &bull; Spatial Analysis
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-drought-text">
          Geospatial District Explorer
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-drought-textMuted max-w-3xl leading-relaxed">
          Interactive visualization of the 27 historical districts of Karnataka (FAO GAUL 2015 Level 2). Select observation years, meteorological seasons, and multi-sensor indicator layers to inspect district anomalies and mismatch classifications.
        </p>
      </div>

      {/* Main Interactive Map Canvas */}
      <KarnatakaDistrictMap
        initialYear={2021}
        initialSeason="Winter"
        initialIndicator="mismatch"
        showControls={true}
      />

      {/* Administrative Agro-Ecological Zones Reference Table */}
      <section className="rounded-xl border border-drought-border bg-drought-secondary/90 p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-drought-border pb-3">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-drought-highlight">
              Regional Geography
            </span>
            <h2 className="font-serif text-xl font-medium text-drought-text">
              The 27 Historical Districts Across 6 Agro-Ecological Zones
            </h2>
          </div>
          <span className="font-mono text-xs text-drought-textDim">
            FAO GAUL 2015 Level 2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            {
              zone: "Northern Dry Zone",
              districts: ["Bidar", "Gulbarga (Kalaburagi)", "Bijapur (Vijayapura)", "Bagalkot", "Raichur", "Koppal", "Gadag"],
              color: "text-drought-soilLight",
              desc: "Arid to semi-arid Deccan plateau; shallow black soils and high evapotranspiration.",
            },
            {
              zone: "Central Dry Zone",
              districts: ["Bellary (Ballari)", "Chitradurga", "Davanagere", "Tumkur (Tumakuru)"],
              color: "text-drought-highlight",
              desc: "Rain shadow belt; recurrent seasonal precipitation deficits and dryland farming.",
            },
            {
              zone: "Southern Dry Zone",
              districts: ["Mysore (Mysuru)", "Mandya", "Chamarajanagar", "Bangalore Rural", "Bangalore Urban", "Kolar"],
              color: "text-drought-vegetationLight",
              desc: "Cauvery river basin and southern tableland; mixed rainfed and tank-irrigated agriculture.",
            },
            {
              zone: "Transitional Zone",
              districts: ["Belgaum (Belagavi)", "Dharwad", "Haveri"],
              color: "text-drought-waterLight",
              desc: "Ecological boundary between the moist Western Ghats and eastern semi-arid plains.",
            },
            {
              zone: "Hilly Zone (Malnad)",
              districts: ["Shimoga (Shivamogga)", "Chikmagalur (Chikkamagaluru)", "Hassan", "Kodagu"],
              color: "text-drought-vegetation",
              desc: "Western Ghats montane rainforests and plantation crops; dense perennial canopies.",
            },
            {
              zone: "Coastal Zone (Karavali)",
              districts: ["Uttara Kannada", "Udupi", "Dakshina Kannada"],
              color: "text-drought-water",
              desc: "Narrow Arabian Sea coastal littoral; heavy Southwest Monsoon orographic rainfall.",
            },
          ].map((z) => (
            <div
              key={z.zone}
              className="rounded-lg border border-drought-border bg-drought-surface/60 p-4 text-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className={`font-serif text-sm font-semibold ${z.color}`}>
                  {z.zone}
                </span>
                <span className="font-mono text-[10px] text-drought-textDim">
                  {z.districts.length} districts
                </span>
              </div>
              <p className="text-[11px] text-drought-textDim leading-relaxed">
                {z.desc}
              </p>
              <div className="font-mono text-[11px] text-drought-textMuted pt-1 flex flex-wrap gap-1">
                {z.districts.map((d) => (
                  <span key={d} className="rounded bg-drought-bg/60 px-1.5 py-0.5 border border-drought-border/40">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between border-t border-drought-border pt-6 text-xs font-mono">
        <Link
          href="/methodology"
          className="flex items-center gap-1.5 text-drought-textDim hover:text-drought-text"
        >
          <span>&larr; Methodology &amp; LOYO Formulas</span>
        </Link>
        <Link
          href="/findings"
          className="flex items-center gap-1.5 text-drought-vegetationLight hover:underline font-semibold"
        >
          <span>Explore Statistical Findings &amp; Odds Ratios &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
