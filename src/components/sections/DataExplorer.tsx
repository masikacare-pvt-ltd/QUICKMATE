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
        <span>WHAT QUICKMATE SEES</span>
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
          className="data-panel"
          id="data-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeData.id}`}
        >
          <div className="data-panel-top">
            <span>
              <ActiveIcon aria-hidden="true" /> {activeData.label}
            </span>
            <span className="data-live">
              <i aria-hidden="true" /> LIVE DATA
            </span>
          </div>

          <div className={`demo-map demo-${activeData.id}`}>
            <div className="map-grid" aria-hidden="true" />
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
