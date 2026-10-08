import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import { signalIssues } from "@/lib/data";

export function OperationalBlindSpot() {
  return (
    <section className="intro-band" id="about">
      <div className="section-kicker">
        <span>01</span>
        <span>THE OPERATIONAL BLIND SPOT</span>
      </div>

      <div className="intro-layout">
        <h2>
          KNOWING WHERE
          <br />
          YOUR VEHICLE IS
          <br />
          <span>ISN&apos;T ENOUGH.</span>
        </h2>
        <div className="intro-copy">
          <p>
            Fleet owners often depend on phone calls, driver updates and basic
            GPS systems to understand what happens during a journey.
          </p>
          <Link className="text-link" href="#technology">
            There&apos;s a better way <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="signal-story">
        <div className="signal-road" aria-label="Delayed tracking demonstration">
          <div className="signal-road-line" />
          <div className="signal-truck">
            <span>104</span>
            <span className="truck-wheel" />
          </div>
          <i className="signal-miss miss-one" />
          <i className="signal-miss miss-two" />
          <i className="signal-miss miss-three" />
          <div className="signal-delay">
            <Clock3 aria-hidden="true" /> LAST UPDATE <b>18 MIN AGO</b>
          </div>
        </div>

        <div className="signal-issues">
          {signalIssues.map(({ number, title, description }) => (
            <div className="issue-row" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <div className="change-line">
        <span>QUICKMATE CHANGES THAT.</span>
        <span>
          FROM SIGNALS TO UNDERSTANDING <ArrowRight aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
