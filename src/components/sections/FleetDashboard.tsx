"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Gauge,
  Route as RouteIcon,
} from "lucide-react";
import { vehicles, type Vehicle } from "@/lib/data";

export function FleetDashboard() {
  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(vehicles[0]);

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

        <div className="console-summary">
          <div>
            <span>TOTAL VEHICLES</span>
            <strong>
              12 <small>ONLINE</small>
            </strong>
          </div>
          <div>
            <span>MOVING</span>
            <strong>08</strong>
          </div>
          <div>
            <span>STOPPED</span>
            <strong>02</strong>
          </div>
          <div>
            <span>IN TRANSIT</span>
            <strong>02</strong>
          </div>
          <div className="console-summary-date">
            FLEET STATUS
            <br />
            UPDATED JUST NOW
          </div>
        </div>

        <div className="console-body">
          <div className="console-map" aria-label="Interactive Fleet Map">
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

            <button
              className={`vehicle-marker marker-a ${activeVehicle.id === "104" ? "ring-1 ring-[var(--lime)]" : ""}`}
              onClick={() => setActiveVehicle(vehicles[0])}
              aria-label="Select vehicle 104"
            >
              <span>104</span>
              <i aria-hidden="true" />
            </button>
            <button
              className={`vehicle-marker marker-b ${activeVehicle.id === "108" ? "ring-1 ring-[var(--lime)]" : ""}`}
              onClick={() => setActiveVehicle(vehicles[1])}
              aria-label="Select vehicle 108"
            >
              <span>108</span>
              <i aria-hidden="true" />
            </button>
            <button
              className={`vehicle-marker marker-c ${activeVehicle.id === "112" ? "ring-1 ring-[var(--lime)]" : ""}`}
              onClick={() => setActiveVehicle(vehicles[2])}
              aria-label="Select vehicle 112"
            >
              <span>112</span>
              <i aria-hidden="true" />
            </button>

            <div className="map-legend">
              <i aria-hidden="true" /> MOVING{" "}
              <i aria-hidden="true" /> STOPPED
            </div>
          </div>

          <aside className="console-vehicles">
            <div className="vehicle-list-heading">
              <div>
                <span>ACTIVE VEHICLES</span>
                <small>Showing 3 of 12</small>
              </div>
              <button aria-label="More vehicles" type="button">
                <ChevronRight aria-hidden="true" />
              </button>
            </div>

            {vehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                className={`vehicle-row ${activeVehicle.id === vehicle.id ? "selected" : ""}`}
                onClick={() => setActiveVehicle(vehicle)}
                aria-pressed={activeVehicle.id === vehicle.id}
              >
                <span
                  className={`vehicle-status-dot ${vehicle.tone}`}
                  aria-hidden="true"
                />
                <span className="vehicle-id">
                  <strong>VEHICLE {vehicle.id}</strong>
                  <small>{vehicle.place}</small>
                </span>
                <span className="vehicle-speed">
                  <strong>
                    {vehicle.status === "Stopped"
                      ? "18 min"
                      : `${vehicle.speed} km/h`}
                  </strong>
                  <small>{vehicle.status.toUpperCase()}</small>
                </span>
              </button>
            ))}

            <div className="vehicle-focus">
              <div className="vehicle-focus-heading">
                <span>SELECTED VEHICLE</span>
                <b>#{activeVehicle.id}</b>
              </div>
              <div className="focus-telemetry">
                <span>
                  <Gauge aria-hidden="true" />
                  <strong>
                    {activeVehicle.status === "Stopped"
                      ? "0"
                      : activeVehicle.speed}
                    <small> km/h</small>
                  </strong>
                  <small>SPEED</small>
                </span>
                <span>
                  <RouteIcon aria-hidden="true" />
                  <strong>
                    {activeVehicle.distance}
                    <small> km</small>
                  </strong>
                  <small>DISTANCE</small>
                </span>
              </div>
              <div className="vehicle-health">
                <i aria-hidden="true" />{" "}
                {activeVehicle.tone === "watch"
                  ? "REVIEW STOPPAGE"
                  : "STATUS: NORMAL"}
              </div>
            </div>
          </aside>
        </div>

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
    </section>
  );
}
