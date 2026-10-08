"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { DecryptText } from "@/components/ui/DecryptText";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-heading">
        <div className="section-kicker">
          <span>10</span>
          <span>
            <DecryptText text="GOOD TO KNOW" />
          </span>
        </div>
        <h2>
          QUESTIONS,
          <br />
          <span>ANSWERED.</span>
        </h2>
        <p>Clear answers about the platform and what it can do.</p>
      </div>

      <div className="faq-list">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openFaq === index;
          return (
            <article
              className={`faq-item ${isOpen ? "faq-open" : ""}`}
              key={question}
            >
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-btn-${index}`}
                onClick={() => toggleFaq(index)}
              >
                <span className="faq-number">0{index + 1}</span>
                <span>{question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className="faq-answer"
              >
                <p>{answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
