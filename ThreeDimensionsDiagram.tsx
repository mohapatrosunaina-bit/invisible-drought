import React from "react";
import { CloudRain, Leaf, Waves, AlertTriangle, ArrowRight } from "lucide-react";

export function ThreeDimensionsDiagram() {
  return (
    <div className="rounded-xl border border-drought-border bg-drought-secondary/90 p-5 lg:p-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetation">
          Tri-Sensor Observation Framework
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-drought-text mt-1">
          The Three Scientific Dimensions
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-drought-textMuted leading-relaxed">
          Traditional drought assessments often focus solely on rainfall deficit. This research integrates surface precipitation, canopy greenness, and deep root-zone soil moisture into a unified district-season investigative framework.
        </p>
      </div>

      {/* 3 Interconnected Dimension Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Dimension 1: Rainfall */}
        <div className="flex flex-col rounded-lg border border-drought-water/40 bg-drought-surface p-5 hover:border-drought-water transition-colors shadow-subtle group">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-drought-waterLight">
              Dimension 01
            </span>
            <div className="p-2 rounded-md bg-drought-water/10 text-drought-waterLight">
              <CloudRain className="h-5 w-5" />
            </div>
          </div>

          <h4 className="font-serif text-lg font-medium text-drought-text group-hover:text-drought-waterLight transition-colors">
            Precipitation Flux
          </h4>
          <span className="font-mono text-xs text-drought-textDim mt-0.5">
            CHIRPS Daily 0.05° Resolution
          </span>

          <p className="mt-3 text-xs text-drought-textMuted leading-relaxed flex-1">
            Measures the district spatial mean accumulated rainfall (mm). Under the mismatch rule, we require rainfall LOYO z-score ≥ -0.5, ensuring that surface precipitation is not unusually depressed.
          </p>

          <div className="mt-4 pt-3 border-t border-drought-border/60 font-mono text-[11px] text-drought-waterLight">
            Variable: rainfall_loyo_z ≥ -0.5
          </div>
        </div>

        {/* Dimension 2: Vegetation */}
        <div className="flex flex-col rounded-lg border border-drought-vegetation/40 bg-drought-surface p-5 hover:border-drought-vegetation transition-colors shadow-subtle group">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-drought-vegetationLight">
              Dimension 02
            </span>
            <div className="p-2 rounded-md bg-drought-vegetation/10 text-drought-vegetationLight">
              <Leaf className="h-5 w-5" />
            </div>
          </div>

          <h4 className="font-serif text-lg font-medium text-drought-text group-hover:text-drought-vegetationLight transition-colors">
            Vegetation Condition
          </h4>
          <span className="font-mono text-xs text-drought-textDim mt-0.5">
            MODIS Terra MOD13Q1 V061 (NDVI &amp; EVI)
          </span>

          <p className="mt-3 text-xs text-drought-textMuted leading-relaxed flex-1">
            Measures canopy greenness and photosynthetic vigor proxies. Dual thresholding (NDVI ≤ -1.0 AND EVI ≤ -1.0) ensures that vegetative depression is genuine and robust against atmospheric interference.
          </p>

          <div className="mt-4 pt-3 border-t border-drought-border/60 font-mono text-[11px] text-drought-vegetationLight">
            Variables: ndvi_loyo_z ≤ -1.0 &amp; evi_loyo_z ≤ -1.0
          </div>
        </div>

        {/* Dimension 3: Root-Zone Soil Moisture */}
        <div className="flex flex-col rounded-lg border border-drought-soil/40 bg-drought-surface p-5 hover:border-drought-soil transition-colors shadow-subtle group">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-drought-soilLight">
              Dimension 03
            </span>
            <div className="p-2 rounded-md bg-drought-soil/10 text-drought-soilLight">
              <Waves className="h-5 w-5" />
            </div>
          </div>

          <h4 className="font-serif text-lg font-medium text-drought-text group-hover:text-drought-soilLight transition-colors">
            Root-Zone Soil Moisture
          </h4>
          <span className="font-mono text-xs text-drought-textDim mt-0.5">
            NASA SMAP Level 4 (SPL4SMGP.008)
          </span>

          <p className="mt-3 text-xs text-drought-textMuted leading-relaxed flex-1">
            Model/data-assimilation estimated volumetric soil moisture in the deeper 0–100 cm depth soil column. Operational stress benchmark defined as sm_rootzone LOYO z-score ≤ -1.0.
          </p>

          <div className="mt-4 pt-3 border-t border-drought-border/60 font-mono text-[11px] text-drought-soilLight">
            Benchmark: sm_rootzone_loyo_z ≤ -1.0
          </div>
        </div>
      </div>

      {/* Synthesis / The Mismatch Hypothesis */}
      <div className="mt-8 rounded-lg border border-drought-highlight/30 bg-drought-highlight/5 p-5 text-center">
        <span className="font-mono text-[10px] uppercase tracking-wider text-drought-highlight font-semibold">
          The Central Research Synthesis
        </span>
        <h4 className="font-serif text-lg font-medium text-drought-text mt-1">
          When Rainfall Tells One Story, Deeper Soil May Tell Another
        </h4>
        <p className="mt-2 text-xs sm:text-sm text-drought-textMuted max-w-3xl mx-auto leading-relaxed">
          If rainfall is normal (Rainfall z ≥ -0.5) but vegetation is anomalously weak (NDVI &amp; EVI z ≤ -1.0), does this flag a period of concurrent root-zone soil moisture exhaustion? Under our primary model, such mismatch candidates have <strong>5.45 times the adjusted odds</strong> of concurrent root-zone stress (Adjusted OR 5.453, 95% CI 2.947–10.091, p = 6.61 × 10⁻⁸).
        </p>
      </div>
    </div>
  );
}
