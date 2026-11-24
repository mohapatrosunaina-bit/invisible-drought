import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, ShieldAlert, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-full bg-drought-alert/10 p-4 border border-drought-alert/30 text-drought-alertLight mb-6">
        <ShieldAlert className="h-8 w-8" />
      </div>

      <span className="font-mono text-xs uppercase tracking-wider text-drought-alertLight">
        404 &bull; Coordinate Not Located
      </span>

      <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-light text-drought-text">
        Observation Out of Bounds
      </h1>

      <p className="mt-3 text-sm text-drought-textMuted max-w-md leading-relaxed">
        The requested research route or dataset coordinate could not be identified within the analytical catalog of The Invisible Drought.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded bg-drought-vegetation px-4 py-2 font-mono text-xs font-semibold text-drought-bg hover:bg-drought-vegetationLight transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <Link
          href="/geospatial-explorer"
          className="flex items-center gap-2 rounded border border-drought-border bg-drought-surface px-4 py-2 font-mono text-xs text-drought-text hover:bg-drought-surfaceHover transition-colors"
        >
          <Compass className="h-3.5 w-3.5 text-drought-vegetation" />
          <span>Geospatial Explorer</span>
        </Link>
      </div>
    </div>
  );
}
