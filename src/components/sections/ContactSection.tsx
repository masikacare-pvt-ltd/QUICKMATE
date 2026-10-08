"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";

export function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);

    const subject = encodeURIComponent(
      `QUICKMATE Inquiry - ${formData.name || "Fleet Consultation"}`
    );

    const bodyLines = [
      "Hello QUICKMATE Team,",
      "",
      `Name: ${formData.name || "N/A"}`,
      `Email ID: ${formData.email || "N/A"}`,
      `Contact Number: ${formData.phone || "N/A"}`,
      "",
      "Message:",
      formData.message || "I would like to explore QUICKMATE fleet solutions.",
      "",
      "---",
      "Sent from QUICKMATE website",
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:query.quickmate@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formSent) {
      setFormSent(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <div className="section-kicker">
          <span>11</span>
          <span>START A CONVERSATION</span>
        </div>
        <h2>
          LET&apos;S TALK
          <br />
          <span>FLEET.</span>
        </h2>
        <p>
          Tell us a little about your fleet, your operation, or the partnership
          you have in mind.
        </p>
        <a className="contact-email" href="mailto:hello@quickmate.in">
          hello@quickmate.in <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="contact-location">
          <MapPin aria-hidden="true" />
          <span>ODISHA, INDIA</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-topline">
          <span>QUICKMATE / DIRECT INQUIRY</span>
          <span>01 &ndash; 04</span>
        </div>

        <div className="form-row">
          <label>
            NAME
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Your full name"
              required
            />
          </label>
          <label>
            EMAIL ID
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </label>
        </div>

        <label>
          CONTACT NUMBER
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="+91 98765 43210"
            required
          />
        </label>

        <label>
          MESSAGE
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What would you like to explore?"
            rows={4}
            required
          />
        </label>

        <div className="form-submit">
          <button className="btn-lime" type="submit">
            {formSent ? "Redirecting to Mail..." : "Start a conversation"}
            {formSent ? (
              <Check aria-hidden="true" />
            ) : (
              <ArrowRight aria-hidden="true" />
            )}
          </button>
          <span>
            {formSent ? (
              <>
                Opening email app... If it didn&apos;t open,{" "}
                <a
                  href={`mailto:query.quickmate@gmail.com?subject=${encodeURIComponent(
                    `QUICKMATE Inquiry - ${formData.name || "Fleet Consultation"}`
                  )}&body=${encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
                  )}`}
                  className="underline text-[var(--lime)] font-semibold"
                >
                  click here to email query.quickmate@gmail.com
                </a>
              </>
            ) : (
              "Fleet solutions \u2022 Partnerships \u2022 Technology"
            )}
          </span>
        </div>
      </form>
    </section>
  );
}
