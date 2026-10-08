import {
  Activity,
  Gauge,
  Layers3,
  Route as RouteIcon,
  Signal,
  Sparkles,
} from "lucide-react";
import { pipelineSteps } from "@/lib/data";
import { DecryptText } from "@/components/ui/DecryptText";

const iconMap = {
  RouteIcon: RouteIcon,
  Layers3: Layers3,
  Signal: Signal,
  Activity: Activity,
  Sparkles: Sparkles,
  Gauge: Gauge,
};

export function PipelineSection() {
  return (
    <section className="pipeline-section">
      <div className="pipeline-copy">
        <div className="section-kicker">
          <span>02</span>
          <span>
            <DecryptText text="ABOUT QUICKMATE" />
          </span>
        </div>
        <h2>
          FROM TRACKING
          <br />
          <span>TO UNDERSTANDING.</span>
        </h2>
        <p>
          QUICKMATE is an AIoT-powered fleet platform built for heavy vehicles.
          We combine dedicated in-vehicle IoT hardware with real-time data and
          intelligent software to help fleet owners understand what is happening
          on the road&mdash;not just where their vehicle is.
        </p>
        <p className="pipeline-goal">
          Make fleet operations safer, smarter and more efficient.
        </p>
      </div>

      <div className="pipeline-visual" aria-label="QUICKMATE fleet data pipeline">
        <div className="pipeline-track" aria-hidden="true">
          <span className="data-packet packet-a" />
          <span className="data-packet packet-b" />
        </div>
        {pipelineSteps.map(({ number, title, caption, id, iconName }, index) => {
          const IconComponent = iconMap[iconName];
          return (
            <div
              className={`pipeline-node ${index === pipelineSteps.length - 1 ? "last" : ""}`}
              key={id}
            >
              <span className="pipeline-number">{number}</span>
              <span className="pipeline-symbol">
                <IconComponent aria-hidden="true" />
              </span>
              <div>
                <strong>{title}</strong>
                <small>{caption}</small>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
