import { ArrowRight, ArrowUpRight } from "lucide-react";
import { differences } from "@/lib/data";

export function WhyQuickmate() {
  return (
    <section className="difference-section">
      <div className="section-kicker">
        <span>07</span>
        <span>WHY QUICKMATE</span>
      </div>

      <div className="difference-heading">
        <h2>
          BUILT
          <br />
          <span>DIFFERENTLY.</span>
        </h2>
        <p>Intelligence designed for the realities of heavy-vehicle operations.</p>
      </div>

      <div className="difference-list">
        {differences.map(({ number, title, copy }) => (
          <article className="difference-row" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <ArrowUpRight aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="question-shift">
        <div className="question-side">
          <small>TRADITIONAL GPS</small>
          <strong>
            WHERE
            <br />
            IS IT?
          </strong>
        </div>
        <ArrowRight aria-hidden="true" />
        <div className="question-side question-new">
          <small>QUICKMATE</small>
          <strong>
            WHAT IS
            <br />
            HAPPENING?
          </strong>
        </div>
      </div>
    </section>
  );
}
