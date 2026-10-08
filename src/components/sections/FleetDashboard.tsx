"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Gauge,
  Route as RouteIcon,
  ShieldCheck,
  AlertTriangle,
  X,
} from "lucide-react";
import { vehicles, type Vehicle } from "@/lib/data";

export function FleetDashboard() {
  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(vehicles[0]);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setActiveVehicle(vehicle);
    setSheetOpen(true);
  };

  return (
    <section className="dashboard-section" id="dashboard">
      <div className="dashboard-intro">
        <div className="section-kicker">
          <span>06</span>
          <span>LIVE FLEET VIEW</span>
        </div>
        <h2>
          YOUR FLEET.
          <br />
          <span>ONE VIEW.</span>
        </h2>
        <p>Everything important, in one place.</p>
      </div>

      <div className="fleet-console">
        {/* Console Topbar */}
        <div className="console-topbar">
          <div className="console-brand">
            <span className="console-brandmark" aria-hidden="true">
              Q
            </span>
            <span>
              QUICKMATE <small>FLEET OPERATIONS</small>
            </span>
          </div>
          <div className="console-live">
            <i aria-hidden="true" /> SYSTEM LIVE <span>&bull;</span> ODISHA, IN
          </div>
          <div className="console-avatar" aria-hidden="true">
            QM
          </div>
        </div>

        {/* Console Summary Bar */}
        <div className="console-summary">
          <div className="summary-total">
            <span>TOTAL FLEET</span>
            <strong>
              12 <small>ONLINE</small>
            </strong>
          </div>
          <div className="summary-stat">
            <span>MOVING</span>
            <strong>08</strong>
          </div>
          <div className="summary-stat">
            <span>STOPPED</span>
            <strong>02</strong>
          </div>
          <div className="summary-stat">
            <span>IN TRANSIT</span>
            <strong>02</strong>
          </div>
          <div className="console-summary-date">
            FLEET STATUS
            <br />
            UPDATED JUST NOW
          </div>
        </div>

        {/* Console Body: Map + Vehicle List */}
        <div className="console-body">
          <div className="console-map relative overflow-hidden" aria-label="Interactive Fleet Map">
            {/* Animated Radar Scanning Beam */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25" aria-hidden="true">
              <div className="h-20 w-full bg-gradient-to-b from-transparent via-[var(--lime)]/30 to-transparent animate-[scanlineBeam_5s_linear_infinite]" />
            </div>

            <div className="console-map-grid" aria-hidden="true" />
            <div className="console-map-road console-road-a" aria-hidden="true" />
            <div className="console-map-road console-road-b" aria-hidden="true" />
            <div className="console-map-road console-road-c" aria-hidden="true" />
            <div className="console-map-road console-road-d" aria-hidden="true" />

            <svg
              className="console-route-svg"
              viewBox="0 0 600 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M35 295 C108 242 108 203 188 208 S267 113 352 148 S433 218 493 147 S551 97 588 58" />
              <path
                className="route-dash"
                d="M35 295 C108 242 108 203 188 208 S267 113 352 148 S433 218 493 147 S551 97 588 58"
              />
            </svg>

            <span className="console-map-label map-label-a">BHUBANESWAR</span>
            <span className="console-map-label map-label-b">BERHAMPUR</span>
            <span className="console-map-label map-label-c">NH-16</span>

            {/* Interactive Vehicle Markers on Map */}
            <button
              className={`vehicle-marker marker-a ${activeVehicle.id === "104" ? "selected-marker" : ""}`}
              onClick={() => handleSelectVehicle(vehicles[0])}
              aria-label="Select vehicle 104"
            >
              <span>104</span>
              <i aria-hidden="true" />
            </button>
            <button
              className={`vehicle-marker marker-b ${activeVehicle.id === "108" ? "selected-marker" : ""}`}
              onClick={() => handleSelectVehicle(vehicles[1])}
              aria-label="Select vehicle 108"
            >
              <span>108</span>
              <i aria-hidden="true" />
            </button>
            <button
              className={`vehicle-marker marker-c ${activeVehicle.id === "112" ? "selected-marker" : ""}`}
              onClick={() => handleSelectVehicle(vehicles[2])}
              aria-label="Select vehicle 112"
            >
              <span>112</span>
              <i aria-hidden="true" />
            </button>

            <div className="map-legend">
              <i aria-hidden="true" /> MOVING{" "}
              <i aria-hidden="true" className="legend-stop" /> STOPPED
            </div>
          </div>

          {/* Vehicles List & Selected Telemetry Panel */}
          <aside className="console-vehicles">
            <div className="vehicle-list-heading">
              <div>
                <span>ACTIVE VEHICLES</span>
                <small>Select to view live telemetry</small>
              </div>
              <span className="vehicle-count-chip">3 of 12</span>
            </div>

            {/* Vehicle Touch-Friendly List */}
            <div className="vehicle-rows-container">
              {vehicles.map((vehicle) => {
                const isSelected = activeVehicle.id === vehicle.id;
                return (
                  <button
                    key={vehicle.id}
                    className={`vehicle-row ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSelectVehicle(vehicle)}
                    aria-pressed={isSelected}
                  >
                    <span
                      className={`vehicle-status-dot ${vehicle.tone}`}
                      aria-hidden="true"
                    />
                    <div className="vehicle-id">
                      <strong>VEHICLE {vehicle.id}</strong>
                      <small>{vehicle.place}</small>
                    </div>
                    <div className="vehicle-speed">
                      <strong>
                        {vehicle.status === "Stopped"
                          ? "18 min"
                          : `${vehicle.speed} km/h`}
                      </strong>
                      <small>{vehicle.status.toUpperCase()}</small>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Vehicle Focus Telemetry Card (Desktop / Tablet view) */}
            <div className="vehicle-focus tech-corner-brackets">
              <div className="vehicle-focus-heading">
                <span>FOCUSED TELEMETRY</span>
                <b>VEHICLE #{activeVehicle.id}</b>
              </div>

              <div className="focus-telemetry">
                <div className="telemetry-box">
                  <Gauge size={16} aria-hidden="true" />
                  <div>
                    <strong>
                      {activeVehicle.status === "Stopped" ? "0" : activeVehicle.speed}
                      <small> km/h</small>
                    </strong>
                    <small>SPEED</small>
                  </div>
                </div>

                <div className="telemetry-box">
                  <RouteIcon size={16} aria-hidden="true" />
                  <div>
                    <strong>
                      {activeVehicle.distance}
                      <small> km</small>
                    </strong>
                    <small>DISTANCE</small>
                  </div>
                </div>
              </div>

              <div className={`vehicle-health ${activeVehicle.tone === "watch" ? "health-watch" : ""}`}>
                {activeVehicle.tone === "watch" ? (
                  <>
                    <AlertTriangle size={13} aria-hidden="true" />
                    <span>ANOMALY: UNEXPECTED STOPPAGE (18m)</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={13} aria-hidden="true" />
                    <span>SYSTEM HEALTH: OPTIMAL (ON ROUTE)</span>
                  </>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Console Footer */}
        <div className="console-footer">
          <span>
            <i aria-hidden="true" /> ROUTE: NH-16
          </span>
          <span>LAST SYNC &nbsp; 00:04 AGO</span>
          <span>
            QUICKMATE FLEET OVERVIEW <ArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </div>

      <p className="dashboard-disclaimer">
        Illustrative product preview &bull; Fleet figures shown are sample interface content.
      </p>

      {/* Mobile Telemetry Bottom Sheet (Slide-up modal for thumb operation on mobile) */}
      <div
        className={`vehicle-bottom-sheet ${sheetOpen ? "sheet-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={`Vehicle ${activeVehicle.id} Telemetry`}
      >
        <div
          className="sheet-backdrop"
          onClick={() => setSheetOpen(false)}
          aria-hidden="true"
        />
        <div className="sheet-content tech-corner-brackets">
          <div
            className="sheet-handle"
            aria-hidden="true"
            onClick={() => setSheetOpen(false)}
          >
            <span />
          </div>
          <div className="sheet-header">
            <div>
              <span className="sheet-tag">LIVE TELEMETRY // QUICKMATE FLEET</span>
              <h3>VEHICLE #{activeVehicle.id}</h3>
              <p>{activeVehicle.place}</p>
            </div>
            <button
              type="button"
              className="sheet-close"
              onClick={() => setSheetOpen(false)}
              aria-label="Close vehicle details"
            >
              <X size={20} />
            </button>
          </div>

          <div className="sheet-grid">
            <div className="sheet-metric">
              <span className="metric-label">STATUS</span>
              <strong className={`metric-value status-${activeVehicle.status.toLowerCase().replace(" ", "-")}`}>
                {activeVehicle.status.toUpperCase()}
              </strong>
            </div>
            <div className="sheet-metric">
              <span className="metric-label">SPEED</span>
              <strong className="metric-value">
                {activeVehicle.status === "Stopped" ? "0" : activeVehicle.speed} <small>km/h</small>
              </strong>
            </div>
            <div className="sheet-metric">
              <span className="metric-label">ROUTE</span>
              <strong className="metric-value">NH-16</strong>
            </div>
            <div className="sheet-metric">
              <span className="metric-label">DISTANCE</span>
              <strong className="metric-value">
                {activeVehicle.distance} <small>km</small>
              </strong>
            </div>
          </div>

          <div className={`sheet-health ${activeVehicle.tone === "watch" ? "health-watch" : ""}`}>
            {activeVehicle.tone === "watch" ? (
              <>
                <AlertTriangle size={16} aria-hidden="true" />
                <div>
                  <strong>ANOMALY DETECTED</strong>
                  <p>Unexpected stoppage (18 min) &bull; Flagged for operational review</p>
                </div>
              </>
            ) : (
              <>
                <ShieldCheck size={16} aria-hidden="true" />
                <div>
                  <strong>SYSTEM HEALTH: OPTIMAL</strong>
                  <p>Sub-second telemetry uplink steady &bull; Route on track</p>
                </div>
              </>
            )}
          </div>

          <button
            type="button"
            className="sheet-dismiss-btn btn-lime"
            onClick={() => setSheetOpen(false)}
          >
            Dismiss Details
          </button>
        </div>
      </div>
    </section>
  );
}
