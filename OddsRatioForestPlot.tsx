"use client";

import React, { useState } from "react";
import { MODEL_ESTIMATES } from "@/lib/constants/research";
import { ModelEstimate } from "@/types/research";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function OddsRatioForestPlot() {
  const [selectedModel, setSelectedModel] = useState<ModelEstimate>(MODEL_ESTIMATES[0]);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredModels = MODEL_ESTIMATES.filter((m) => {
    if (filterCategory === "all") return true;
    return m.category === filterCategory;
  });

  const minVal = 0.8;
  const maxVal = 26.0;

  const getLogPosition = (val: number) => {
    const minLog = Math.log(minVal);
    const maxLog = Math.log(maxVal);
    const valLog = Math.log(Math.max(minVal, Math.min(maxVal, val)));
    return ((valLog - minLog) / (maxLog - minLog)) * 100;
  };

  const nullLinePos = getLogPosition(1.0);

  return (
    <div className="rounded-xl border border-white/[0.08] bg-drought-secondary p-5 lg:p-6 shadow-editorial">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-drought-vegetationLight font-bold">
            Statistical Inference Forest Plot
          </span>
          <h3 className="font-serif text-2xl font-semibold text-white mt-0.5">
            Adjusted Odds Ratios &amp; Robustness Comparisons
          </h3>
          <p className="mt-1 text-xs text-drought-textMuted">
            Primary population-averaged GEE model versus sensitivity and subgroup specifications.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {[
            { id: "all", label: "All Models" },
            { id: "primary", label: "Primary" },
            { id: "sensitivity", label: "Sensitivity" },
            { id: "seasonal", label: "Seasonal" },
            { id: "specification", label: "Specification" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilterCategory(cat.id)}
              className={cn(
                "rounded-md px-3 py-1 font-semibold transition-all",
                filterCategory === cat.id
                  ? "bg-drought-vegetation text-drought-bg shadow-glow-green"
                  : "bg-drought-surface border border-white/[0.08] text-drought-textMuted hover:border-white/20 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Forest Plot Area */}
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[620px]">
          {/* Axis Scale Header */}
          <div className="relative mb-2 h-7 border-b border-white/[0.08] text-[11px] font-mono text-drought-textDim font-bold">
            <span className="absolute -translate-x-1/2 text-drought-alertLight" style={{ left: `${getLogPosition(1.0)}%` }}>
              1.0 (Null)
            </span>
            <span className="absolute -translate-x-1/2" style={{ left: `${getLogPosition(2.0)}%` }}>
              2.0
            </span>
            <span className="absolute -translate-x-1/2" style={{ left: `${getLogPosition(5.0)}%` }}>
              5.0
            </span>
            <span className="absolute -translate-x-1/2" style={{ left: `${getLogPosition(10.0)}%` }}>
              10.0
            </span>
            <span className="absolute -translate-x-1/2" style={{ left: `${getLogPosition(20.0)}%` }}>
              20.0
            </span>
          </div>

          {/* Model Rows */}
          <div className="relative space-y-3.5 py-2">
            {/* Dotted Vertical Null Reference Line (OR = 1.0) */}
            <div
              className="absolute top-0 bottom-0 z-0 w-px border-r-2 border-dashed border-drought-alert/70 pointer-events-none"
              style={{ left: `${nullLinePos}%` }}
            />

            {filteredModels.map((model) => {
              const leftPos = getLogPosition(model.ciLower);
              const rightPos = getLogPosition(model.ciUpper);
              const centerPos = getLogPosition(model.oddsRatio);
              const isSelected = selectedModel.id === model.id;

              return (
                <div
                  key={model.id}
                  onClick={() => setSelectedModel(model)}
                  className={cn(
                    "group relative z-10 flex cursor-pointer flex-col rounded-lg border p-3.5 transition-all",
                    isSelected
                      ? "border-drought-vegetationLight bg-drought-surface shadow-glow-green"
                      : "border-white/[0.08] bg-drought-bg/80 hover:border-white/20 hover:bg-drought-surface"
                  )}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      {model.isPrimary && (
                        <span className="rounded bg-drought-vegetation px-2 py-0.5 font-mono text-[10px] font-bold text-drought-bg shadow-sm">
                          PRIMARY
                        </span>
                      )}
                      <span className="font-bold text-white text-sm group-hover:text-drought-highlight transition-colors">
                        {model.name}
                      </span>
                    </div>

                    <div className="font-mono text-xs">
                      <span className="font-bold text-drought-highlight text-sm">
                        OR {model.oddsRatio.toFixed(3)}
                      </span>
                      <span className="text-drought-textMuted ml-2 font-medium">
                        [95% CI: {model.ciLower.toFixed(3)}–{model.ciUpper.toFixed(3)}]
                      </span>
                      {model.pValueFormatted && (
                        <span className="text-drought-vegetationBright ml-2 font-semibold">
                          p = {model.pValueFormatted}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Horizontal Bar Graphic */}
                  <div className="relative h-6 w-full">
                    {/* Confidence Interval Line */}
                    <div
                      className={cn(
                        "absolute top-1/2 h-1 -translate-y-1/2 rounded transition-colors shadow-sm",
                        model.isPrimary
                          ? "bg-drought-vegetationLight"
                          : model.id === "temporal-ar1"
                          ? "bg-drought-alertLight"
                          : "bg-drought-waterLight"
                      )}
                      style={{
                        left: `${leftPos}%`,
                        width: `${rightPos - leftPos}%`,
                      }}
                    />

                    {/* Left Cap */}
                    <div
                      className="absolute top-1/2 h-3.5 w-1 -translate-y-1/2 bg-white rounded-full shadow-sm"
                      style={{ left: `${leftPos}%` }}
                    />

                    {/* Right Cap */}
                    <div
                      className="absolute top-1/2 h-3.5 w-1 -translate-y-1/2 bg-white rounded-full shadow-sm"
                      style={{ left: `${rightPos}%` }}
                    />

                    {/* Point Estimate Diamond/Square */}
                    <div
                      className={cn(
                        "absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 transition-transform group-hover:scale-125 border-2 border-white shadow-md",
                        model.isPrimary
                          ? "bg-drought-vegetationLight shadow-glow-green"
                          : model.id === "temporal-ar1"
                          ? "bg-drought-alertLight shadow-glow-alert"
                          : "bg-drought-waterLight shadow-glow-blue"
                      )}
                      style={{ left: `${centerPos}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Model Detailed Inspector */}
      {selectedModel && (
        <div className="mt-5 rounded-lg border border-white/[0.08] bg-drought-surface p-4">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-drought-vegetationLight" />
            <div className="text-xs">
              <span className="font-mono uppercase tracking-wider text-drought-textDim font-bold">
                Model Specification &amp; Diagnostic Note
              </span>
              <h4 className="mt-0.5 font-serif text-base font-semibold text-white">
                {selectedModel.name}
              </h4>
              <p className="mt-1 leading-relaxed text-drought-textMuted">
                {selectedModel.description}
              </p>
              {selectedModel.interpretationNotes && (
                <div className="mt-2.5 rounded-md border border-white/[0.1] bg-drought-bg/60 p-3 text-drought-highlight font-sans text-xs leading-relaxed">
                  <strong className="text-white">Scientific Takeaway:</strong> {selectedModel.interpretationNotes}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
