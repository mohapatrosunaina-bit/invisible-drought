"use client";

import React, { useState, useMemo } from "react";
import rawGeojson from "@/lib/data/karnataka_districts_27.json";
import { FeatureCollection } from "geojson";
import { createKarnatakaProjection, getIndicatorColor, INDICATOR_CONFIGS, IndicatorType } from "@/lib/maps/geoHelpers";
import { OBSERVATIONS } from "@/lib/data/observations";
import { KARNATAKA_DISTRICTS_27 } from "@/lib/constants/research";
import { Season, ObservationData } from "@/types/research";
import { AlertTriangle, Info, Calendar, Compass, Layers, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const geojsonData = rawGeojson as unknown as FeatureCollection;

interface Props {
  initialYear?: number;
  initialSeason?: Season;
  initialIndicator?: IndicatorType;
  showControls?: boolean;
  className?: string;
}

export function KarnatakaDistrictMap({
  initialYear = 2021,
  initialSeason = "Winter",
  initialIndicator = "mismatch",
  showControls = true,
  className,
}: Props) {
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const [selectedSeason, setSelectedSeason] = useState<Season>(initialSeason);
  const [selectedIndicator, setSelectedIndicator] = useState<IndicatorType>(initialIndicator);
  const [hoveredDistrictId, setHoveredDistrictId] = useState<string | null>(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>("dharwad");

  const isOutageSeason =
    selectedSeason === "Southwest Monsoon" &&
    (selectedYear === 2019 || selectedYear === 2022);

  // Map dimensions for projection
  const mapWidth = 520;
  const mapHeight = 640;

  const { pathGenerator } = useMemo(() => {
    return createKarnatakaProjection(mapWidth, mapHeight, geojsonData);
  }, []);

  // Filter observations for current year and season
  const currentObservations = useMemo(() => {
    const map = new Map<string, ObservationData>();
    OBSERVATIONS.forEach((o) => {
      if (o.year === selectedYear && o.season === selectedSeason) {
        map.set(o.districtId, o);
      }
    });
    return map;
  }, [selectedYear, selectedSeason]);

  // Selected district observation record
  const selectedRecord = selectedDistrictId
    ? currentObservations.get(selectedDistrictId)
    : null;

  const selectedDistrictMeta = KARNATAKA_DISTRICTS_27.find(
    (d) => d.id === selectedDistrictId
  );

  // Summary counts for current slice
  const sliceStats = useMemo(() => {
    if (isOutageSeason) return { candidates: 0, stressed: 0, total: 27, outage: true };
    let candidates = 0;
    let stressed = 0;
    currentObservations.forEach((obs) => {
      if (obs.isMismatchCandidate) candidates++;
      if (obs.isRootzoneStressed) stressed++;
    });
    return { candidates, stressed, total: currentObservations.size, outage: false };
  }, [currentObservations, isOutageSeason]);

  const config = INDICATOR_CONFIGS[selectedIndicator];

  return (
    <div className={cn("flex flex-col rounded-xl border border-white/[0.08] bg-drought-secondary p-4 lg:p-6 shadow-editorial", className)}>
      {/* Outage Banner if applicable */}
      {isOutageSeason && (
        <div className="mb-5 flex items-start gap-3 rounded-lg border border-drought-alert/60 bg-drought-alert/15 p-4 text-xs text-drought-alertBright">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-drought-alertLight" />
          <div>
            <span className="font-bold uppercase tracking-wider font-mono text-white">
              SMAP L4 Assimilation Outage Window Excluded
            </span>
            <p className="mt-1 text-drought-textMuted leading-relaxed">
              NASA SMAP Level 4 data assimilation telemetry was offline during this season window. All 27 district observations for Southwest Monsoon {selectedYear} are conservatively excluded from the primary research association sample (54 observations excluded overall).
            </p>
          </div>
        </div>
      )}

      {/* Control Bar: Year, Season, Indicator */}
      {showControls && (
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Year Selector */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-drought-textMuted font-semibold">
              <Calendar className="h-3.5 w-3.5 text-drought-vegetationLight" />
              <span>Year: <strong className="text-white">{selectedYear}</strong></span>
            </label>
            <div className="flex flex-wrap gap-1">
              {[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={cn(
                    "rounded px-2.5 py-1 font-mono text-xs transition-all",
                    selectedYear === yr
                      ? "bg-drought-vegetation text-drought-bg font-bold shadow-glow-green"
                      : "bg-drought-surface border border-white/[0.06] text-drought-textMuted hover:border-white/20 hover:text-white"
                  )}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Season Selector */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-drought-textMuted font-semibold">
              <Compass className="h-3.5 w-3.5 text-drought-waterLight" />
              <span>Season</span>
            </label>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-1">
              {(["Winter", "Pre-Monsoon", "Southwest Monsoon", "Post-Monsoon"] as Season[]).map(
                (s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSeason(s)}
                    className={cn(
                      "flex items-center justify-between rounded px-2.5 py-1 text-left text-xs transition-all",
                      selectedSeason === s
                        ? "bg-drought-water text-drought-bg font-bold shadow-glow-blue"
                        : "bg-drought-surface border border-white/[0.06] text-drought-textMuted hover:border-white/20 hover:text-white"
                    )}
                  >
                    <span>{s}</span>
                    <span className="font-mono text-[10px] opacity-80">
                      {s === "Winter"
                        ? "Jan–Feb"
                        : s === "Pre-Monsoon"
                        ? "Mar–May"
                        : s === "Southwest Monsoon"
                        ? "Jun–Sep"
                        : "Oct–Dec"}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Indicator Layer Selector */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-drought-textMuted font-semibold">
              <Layers className="h-3.5 w-3.5 text-drought-soilLight" />
              <span>Observation Layer</span>
            </label>
            <div className="flex flex-col space-y-1">
              {(
                [
                  "mismatch",
                  "stress",
                  "rainfall_z",
                  "ndvi_z",
                  "rootzone_z",
                ] as IndicatorType[]
              ).map((ind) => {
                const item = INDICATOR_CONFIGS[ind];
                return (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setSelectedIndicator(ind)}
                    className={cn(
                      "flex items-center justify-between rounded px-2.5 py-1 text-left text-xs transition-all",
                      selectedIndicator === ind
                        ? "bg-drought-soil text-drought-bg font-bold shadow-glow-amber"
                        : "bg-drought-surface border border-white/[0.06] text-drought-textMuted hover:border-white/20 hover:text-white"
                    )}
                  >
                    <span className="truncate">{item.label}</span>
                    <span className="font-mono text-[10px] opacity-80 shrink-0 ml-1">
                      {item.source}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Map View & Inspector Panel */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* Map Visualization Column */}
        <div className="relative flex flex-col items-center rounded-xl border border-white/[0.08] bg-[#0A100D] p-3 sm:p-5 lg:col-span-7 shadow-inner">
          {/* Map Header / Active Layer Details */}
          <div className="mb-3 flex w-full items-center justify-between border-b border-white/[0.08] pb-2.5 text-xs">
            <div>
              <span className="font-mono font-bold text-white text-sm">
                {config.label}
              </span>
              <span className="ml-2 font-mono text-[11px] text-drought-textDim">
                ({config.source})
              </span>
            </div>
            <div className="font-mono text-[11px] text-drought-vegetationLight font-semibold">
              {sliceStats.candidates} mismatch &bull; {sliceStats.stressed} stressed
            </div>
          </div>

          {/* SVG Canvas */}
          <div className="relative w-full max-w-[480px] aspect-[520/640]">
            <svg
              viewBox={`0 0 ${mapWidth} ${mapHeight}`}
              className="h-full w-full select-none"
              role="img"
              aria-label={`Geospatial map of Karnataka districts showing ${config.label} for ${selectedSeason} ${selectedYear}`}
            >
              <defs>
                <pattern
                  id="outageHatch"
                  width="8"
                  height="8"
                  patternTransform="rotate(45 0 0)"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="8"
                    stroke="#EF4444"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                </pattern>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <g>
                {geojsonData.features.map((feature: any) => {
                  const districtId = feature.properties.id;
                  const districtName = feature.properties.name;
                  const path = pathGenerator(feature as any);
                  const obs = currentObservations.get(districtId);

                  let indicatorVal: number | null | undefined = null;
                  if (obs) {
                    if (selectedIndicator === "mismatch") {
                      indicatorVal = obs.isMismatchCandidate ? 1 : 0;
                    } else if (selectedIndicator === "stress") {
                      indicatorVal = obs.isRootzoneStressed ? 1 : 0;
                    } else if (selectedIndicator === "rainfall_z") {
                      indicatorVal = obs.rainfallZScore;
                    } else if (selectedIndicator === "ndvi_z") {
                      indicatorVal = obs.ndviZScore;
                    } else if (selectedIndicator === "evi_z") {
                      indicatorVal = obs.eviZScore;
                    } else if (selectedIndicator === "rootzone_z") {
                      indicatorVal = obs.rootzoneZScore;
                    }
                  }

                  const fillColor = isOutageSeason
                    ? "url(#outageHatch)"
                    : getIndicatorColor(
                        selectedIndicator,
                        indicatorVal,
                        obs?.isExcludedOutage || false
                      );

                  const isHovered = hoveredDistrictId === districtId;
                  const isSelected = selectedDistrictId === districtId;

                  return (
                    <path
                      key={districtId}
                      d={path || undefined}
                      fill={fillColor}
                      stroke={
                        isSelected
                          ? "#FFFFFF"
                          : isHovered
                          ? "#4ADE80"
                          : "#2A3D32"
                      }
                      strokeWidth={isSelected ? 3.0 : isHovered ? 2.2 : 0.9}
                      className="cursor-pointer transition-all duration-150"
                      filter={isSelected ? "url(#glow)" : undefined}
                      onMouseEnter={() => setHoveredDistrictId(districtId)}
                      onMouseLeave={() => setHoveredDistrictId(null)}
                      onClick={() => setSelectedDistrictId(districtId)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${districtName}: ${
                        obs?.isMismatchCandidate
                          ? "Mismatch Candidate"
                          : "Non-mismatch"
                      }, Rootzone Stressed: ${
                        obs?.isRootzoneStressed ? "Yes" : "No"
                      }`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedDistrictId(districtId);
                        }
                      }}
                    />
                  );
                })}
              </g>

              {/* District Name Centroid Text Markers */}
              <g pointerEvents="none">
                {geojsonData.features.map((feature: any) => {
                  const districtId = feature.properties.id;
                  const isSelected = selectedDistrictId === districtId;
                  const isHovered = hoveredDistrictId === districtId;
                  const centroid = pathGenerator.centroid(feature as any);
                  if (isNaN(centroid[0]) || isNaN(centroid[1])) return null;

                  return (
                    <text
                      key={`lbl-${districtId}`}
                      x={centroid[0]}
                      y={centroid[1]}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className={cn(
                        "font-mono transition-opacity select-none font-bold",
                        isSelected || isHovered
                          ? "fill-white text-[11px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] opacity-100"
                          : "fill-drought-textMuted text-[8px] opacity-75"
                      )}
                    >
                      {feature.properties.name.split(" ")[0]}
                    </text>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Map Color Legend */}
          <div className="mt-4 w-full border-t border-white/[0.08] pt-3 text-xs">
            {config.type === "binary" ? (
              <div className="flex items-center justify-center gap-6 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3.5 w-3.5 rounded-sm border border-white/20 shadow-sm"
                    style={{
                      backgroundColor:
                        selectedIndicator === "mismatch"
                          ? "#F59E0B"
                          : "#EF4444",
                    }}
                  ></span>
                  <span className="font-semibold text-white">Flagged Condition</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-sm border border-white/10 bg-drought-surface"></span>
                  <span className="text-drought-textMuted">Normal / Unflagged</span>
                </div>
                {isOutageSeason && (
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-sm border border-drought-alert/60 bg-drought-alert/25"></span>
                    <span className="text-drought-alertBright font-semibold">SMAP Outage Excluded</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="flex w-full max-w-sm items-center justify-between font-mono text-[11px] text-drought-textMuted mb-1 font-semibold">
                  <span className="text-drought-soilLight">-2.5σ (Extreme Deficit)</span>
                  <span className="text-drought-textDim">0.0σ</span>
                  <span className="text-drought-vegetationLight">+2.5σ (Extreme Surplus)</span>
                </div>
                <div
                  className="h-2.5 w-full max-w-sm rounded-full border border-white/15 shadow-sm"
                  style={{
                    background:
                      selectedIndicator === "rainfall_z"
                        ? "linear-gradient(to right, rgb(245,158,11), rgb(19,28,23), rgb(56,189,248))"
                        : selectedIndicator === "rootzone_z"
                        ? "linear-gradient(to right, rgb(249,115,22), rgb(19,28,23), rgb(6,182,212))"
                        : "linear-gradient(to right, rgb(239,68,68), rgb(19,28,23), rgb(74,222,128))",
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>

        {/* District Detail Inspector Drawer */}
        <div className="flex flex-col rounded-xl border border-white/[0.08] bg-drought-surface p-5 lg:col-span-5 shadow-editorial">
          <div className="border-b border-white/[0.08] pb-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-drought-vegetationLight font-bold">
              District Detail Inspector
            </span>
            <h3 className="font-serif text-2xl font-semibold text-white mt-0.5">
              {selectedDistrictMeta?.name || "Select a District"}
            </h3>
            <p className="font-mono text-xs text-drought-textMuted mt-1">
              Agro-Ecological Region: <strong className="text-white">{selectedDistrictMeta?.administrativeRegion}</strong> &bull; Area: {selectedDistrictMeta?.areaKm2.toLocaleString()} km²
            </p>
          </div>

          {selectedRecord ? (
            <div className="mt-4 space-y-4">
              {/* Classification Badges */}
              <div className="grid grid-cols-2 gap-2.5">
                <div
                  className={cn(
                    "flex flex-col rounded-lg border p-3 text-xs",
                    selectedRecord.isMismatchCandidate
                      ? "border-drought-soil bg-drought-soil/15 text-drought-soilBright shadow-glow-amber"
                      : "border-white/[0.08] bg-drought-bg/60 text-drought-textMuted"
                  )}
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold opacity-80">
                    Mismatch Candidate
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 font-bold text-sm">
                    {selectedRecord.isMismatchCandidate ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-drought-soilLight" />
                        <span className="text-white">FLAGGED</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 opacity-40" />
                        <span>Unflagged</span>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className={cn(
                    "flex flex-col rounded-lg border p-3 text-xs",
                    selectedRecord.isRootzoneStressed
                      ? "border-drought-alert bg-drought-alert/15 text-drought-alertBright shadow-glow-alert"
                      : "border-white/[0.08] bg-drought-bg/60 text-drought-textMuted"
                  )}
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold opacity-80">
                    Root-Zone Stress
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 font-bold text-sm">
                    {selectedRecord.isRootzoneStressed ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-drought-alertLight" />
                        <span className="text-white">STRESSED (z ≤ -1)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 opacity-40" />
                        <span>Normal Moisture</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Indicator Values Table */}
              <div className="rounded-lg border border-white/[0.08] bg-drought-bg/60 p-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-drought-textMuted font-bold">
                  {selectedSeason} {selectedYear} Satellite Extractions
                </span>
                <div className="mt-3 space-y-3 text-xs">
                  {/* Rainfall */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <div>
                      <div className="font-semibold text-white">Seasonal Rainfall</div>
                      <div className="font-mono text-[10px] text-drought-textDim">
                        CHIRPS spatial mean depth
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-drought-waterBright text-sm">
                        {selectedRecord.rainfallMm} mm
                      </div>
                      <div className="font-mono text-[11px] text-drought-textMuted font-semibold">
                        LOYO z: {selectedRecord.rainfallZScore >= 0 ? `+${selectedRecord.rainfallZScore}` : selectedRecord.rainfallZScore}
                      </div>
                    </div>
                  </div>

                  {/* NDVI */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <div>
                      <div className="font-semibold text-white">Canopy NDVI</div>
                      <div className="font-mono text-[10px] text-drought-textDim">
                        MODIS MOD13Q1 median
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-drought-vegetationBright text-sm">
                        {selectedRecord.ndviMean}
                      </div>
                      <div className="font-mono text-[11px] text-drought-textMuted font-semibold">
                        LOYO z: {selectedRecord.ndviZScore >= 0 ? `+${selectedRecord.ndviZScore}` : selectedRecord.ndviZScore}
                      </div>
                    </div>
                  </div>

                  {/* EVI */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <div>
                      <div className="font-semibold text-white">Enhanced Veg. Index (EVI)</div>
                      <div className="font-mono text-[10px] text-drought-textDim">
                        MODIS MOD13Q1 median
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-drought-vegetationBright text-sm">
                        {selectedRecord.eviMean}
                      </div>
                      <div className="font-mono text-[11px] text-drought-textMuted font-semibold">
                        LOYO z: {selectedRecord.eviZScore >= 0 ? `+${selectedRecord.eviZScore}` : selectedRecord.eviZScore}
                      </div>
                    </div>
                  </div>

                  {/* Rootzone SM */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Root-Zone Soil Moisture</div>
                      <div className="font-mono text-[10px] text-drought-textDim">
                        SMAP L4 (0–100 cm depth)
                      </div>
                    </div>
                    <div className="text-right">
                      {selectedRecord.isExcludedOutage ? (
                        <span className="font-mono text-[11px] font-bold text-drought-alertLight">
                          Outage Excluded
                        </span>
                      ) : (
                        <>
                          <div className="font-mono font-bold text-drought-soilBright text-sm">
                            {selectedRecord.rootzoneSm} m³/m³
                          </div>
                          <div className="font-mono text-[11px] text-drought-textMuted font-semibold">
                            LOYO z: {selectedRecord.rootzoneZScore >= 0 ? `+${selectedRecord.rootzoneZScore}` : selectedRecord.rootzoneZScore}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* LOYO Definition Callout */}
              <div className="rounded-lg border border-white/[0.08] bg-drought-bg/80 p-3 text-[11px] leading-relaxed text-drought-textMuted">
                <strong className="text-white font-mono">LOYO Standard:</strong> Anomaly z-scores compare this district&apos;s {selectedSeason} {selectedYear} against the other 8 study years using sample standard deviation (ddof=1).
              </div>
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center justify-center py-6 text-center text-xs text-drought-textMuted">
              <Info className="h-6 w-6 text-drought-borderLight" />
              <p className="mt-2 text-white">Select any district polygon on the map to inspect its satellite observations.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
