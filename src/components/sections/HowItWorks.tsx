import {
  Activity,
  ArrowUpRight,
  Crosshair,
  Radio,
  Signal,
} from "lucide-react";
import { processSteps } from "@/lib/data";
import { DecryptText } from "@/components/ui/DecryptText";

const iconMap = {
  Radio: Radio,
  Crosshair: Crosshair,
  Signal: Signal,
  Activity: Activity,
  ArrowUpRight: ArrowUpRight,
};

export function HowItWorks() {
  return (
    <section className="journey-section" id="how-it-works">
      <div className="section-kicker">
        <span>03</span>
        <span>
          <DecryptText text="HOW QUICKMATE WORKS" />
        </span>
      </div>

      <div className="journey-heading">
        <h2>
          ONE VEHICLE.
          <br />
          ONE DEVICE.
          <br />
          <span>COMPLETE VISIBILITY.</span>
        </h2>
        <p>One continuous journey from road signals to clearer decisions.</p>
      </div>

      <div className="journey-rail">
        <div className="journey-progress" aria-hidden="true" />
        {processSteps.map(({ number, title, description, iconName }) => {
          const IconComponent = iconMap[iconName];
          return (
            <article className="journey-step" key={number}>
              <div className="journey-node">
                <span className="journey-index">{number}</span>
                <span className="journey-icon">
                  <IconComponent aria-hidden="true" />
                </span>
              </div>
              <div className="journey-body">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="journey-end" aria-hidden="true">
        <span>VEHICLE</span>
        <i />
        <span>DEVICE</span>
        <i />
        <span>NETWORK</span>
        <i />
        <span>DATA</span>
        <i />
        <span>INTELLIGENCE</span>
        <i />
        <span>DASHBOARD</span>
      </div>
    </section>
  );
}
