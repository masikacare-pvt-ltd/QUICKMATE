"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Gauge,
  MapPin,
  Route as RouteIcon,
  ShieldCheck,
} from "lucide-react";
import { dataExperiences, type DataExperience } from "@/lib/data";
import { DecryptText } from "@/components/ui/DecryptText";
import { BorderBeam } from "@/components/ui/BorderBeam";

const iconMap = {
  MapPin: MapPin,
  RouteIcon: RouteIcon,
  Gauge: Gauge,
  Clock3: Clock3,
  ArrowRight: ArrowRight,
  ShieldCheck: ShieldCheck,
};

export function DataExplorer() {
  const [activeData, setActiveData] = useState<DataExperience>(
    dataExperiences[0]
  );

  const ActiveIcon = iconMap[activeData.iconName];

  return (
    <section className="data-section" id="data-demo">
      <div className="section-kicker">
        <span>05</span>
        <span>
          <DecryptText text="WHAT QUICKMATE SEES" />
        </span>
      </div>

      <div className="data-heading">
        <h2>
          SEE WHAT YOUR FLEET
          <br />
          <span>CAN&apos;T TELL YOU.</span>
        </h2>
        <p>
          Every signal tells part of the story.
          <br />
          Together, they make it clearer.
        </p>
      </div>

      <div className="data-explorer">
        {/* Desktop & Mobile Tab Selector */}
        <div
          className="data-selector"
          role="tablist"
          aria-label="Fleet data views"
        >
          {dataExperiences.map((item, index) => {
            const Icon = iconMap[item.iconName];
            const isSelected = activeData.id === item.id;
            return (
              <button
                key={item.id}
                className={`data-tab ${isSelected ? "active" : ""}`}
                id={`tab-${item.id}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls="data-panel"
                onClick={() => setActiveData(item)}
              >
                <span className="tab-num">0{index + 1}</span>
                <Icon aria-hidden="true" className="tab-icon" />
                <strong className="tab-label">{item.label}</strong>
                <ChevronRight aria-hidden="true" className="tab-arrow" />
              </button>
            );
          })}
        </div>

        {/* Live Interactive Visualization Panel */}
        <div
          className="data-panel tech-corner-brackets relative overflow-hidden"
          id="data-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeData.id}`}
        >
          <BorderBeam size={220} duration={9} colorFrom="var(--lime)" colorTo="#FF6A00" />
          <div className="data-panel-top">
            <span>
              <ActiveIcon aria-hidden="true" /> {activeData.label}
            </span>
            <span className="data-live">
              <i aria-hidden="true" /> LIVE DATA
            </span>
          </div>

          <div className={`demo-map demo-${activeData.id} relative overflow-hidden`}>
            {/* Animated scanning radar line */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25" aria-hidden="true">
              <div className="h-16 w-full bg-gradient-to-b from-transparent via-[var(--lime)]/30 to-transparent animate-[scanlineBeam_4s_linear_infinite]" />
            </div>

            <div className="map-grid" aria-hidden="true" />

            {/* Mode-Specific Interactive Visualizations */}
            {activeData.id === "location" && (
              <>
                <div className="map-road road-h" aria-hidden="true" />
                <div className="map-road road-v" aria-hidden="true" />
                <div className="map-road road-diag" aria-hidden="true" />
                <div className="map-route" aria-hidden="true" />
                <span className="map-place place-a">BERHAMPUR</span>
                <span className="map-place place-b">NH-16</span>
                <span className="map-place place-c">ODISHA</span>
                <div className="map-pin">
                  <MapPin aria-hidden="true" />
                  <span>104</span>
                </div>
                <div className="map-node node-a" aria-hidden="true" />
                <div className="map-node node-b" aria-hidden="true" />
              </>
            )}

            {activeData.id === "route" && (
              <div className="route-detail-visual flex flex-col justify-center h-full px-6">
                <div className="flex items-center justify-between text-[10px] font-mono text-[var(--lime)] mb-2">
                  <span>ORIGIN: BHUBANESWAR</span>
                  <span>DEST: BERHAMPUR</span>
                </div>
                <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden my-3">
                  <div className="h-full bg-[var(--lime)] w-3/4 rounded-full relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_var(--lime)]" />
                  </div>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-white/50">
                  <span>KM 000</span>
                  <span>KM 184 (CURRENT)</span>
                  <span>KM 240 (FINAL)</span>
                </div>
              </div>
            )}

            {activeData.id === "speed" && (
              <div className="speed-detail-visual flex flex-col items-center justify-center h-full">
                <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-[var(--lime)]/40 flex flex-col items-center justify-center bg-black/40 shadow-[0_0_24px_rgba(255,106,0,0.15)]">
                  <span className="text-3xl font-black font-mono text-white tracking-tight">62</span>
                  <span className="text-[10px] font-mono font-bold text-[var(--lime)] tracking-widest">KM / H</span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-[9px] font-mono text-white/60">
                  <span>LIMIT: 80 KM/H</span>
                  <span>&bull;</span>
                  <span className="text-[var(--lime)]">STABLE CRUISE</span>
                </div>
              </div>
            )}

            {activeData.id === "stoppages" && (
              <div className="stoppage-detail-visual flex flex-col justify-center h-full px-6">
                <div className="p-3 rounded border border-white/10 bg-black/50">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="text-[var(--lime)] font-bold">STOPPAGE #03</span>
                    <span>18 MIN DURATION</span>
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-white/60">
                    <div>LOCATION: BERHAMPUR FREIGHT HUB</div>
                    <div>ENGINE STATUS: OFF // BATTERY OK</div>
                  </div>
                </div>
              </div>
            )}

            {activeData.id === "journey" && (
              <div className="journey-detail-visual flex flex-col justify-center h-full px-6">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded border border-white/10 bg-black/40">
                    <span className="block text-[8px] font-mono text-white/50">ELAPSED TIME</span>
                    <strong className="text-sm font-mono text-white">3h 42m</strong>
                  </div>
                  <div className="p-2.5 rounded border border-white/10 bg-black/40">
                    <span className="block text-[8px] font-mono text-white/50">ESTIMATED ARRIVAL</span>
                    <strong className="text-sm font-mono text-[var(--lime)]">15:45 IST</strong>
                  </div>
                </div>
              </div>
            )}

            {activeData.id === "anomalies" && (
              <div className="anomaly-detail-visual flex flex-col items-center justify-center h-full px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold">
                  <ShieldCheck size={14} />
                  <span>ALL SENSORS NORMAL</span>
                </div>
                <p className="mt-2 text-center text-[10px] font-mono text-white/60 max-w-xs">
                  Zero abrupt lane shifts &bull; Vibration within baseline &bull; Route geofence verified
                </p>
              </div>
            )}

            <div className="map-readout">
              <small>{activeData.metric}</small>
              <strong>
                {activeData.value}
                {activeData.unit ? <small> {activeData.unit}</small> : null}
              </strong>
            </div>
          </div>

          <div className="data-panel-bottom">
            <span>{activeData.detail}</span>
            <span>
              VEHICLE 104 <ArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
