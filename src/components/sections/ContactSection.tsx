"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";

export function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    fleetSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);

    const subject = encodeURIComponent(
      `QUICKMATE Inquiry - ${formData.name || "Fleet Consultation"}${formData.company ? ` (${formData.company})` : ""}`
    );

    const bodyLines = [
      "Hello QUICKMATE Team,",
      "",
      `Name: ${formData.name || "N/A"}`,
      `Company: ${formData.company || "N/A"}`,
      `Email: ${formData.email || "N/A"}`,
      `Phone: ${formData.phone || "N/A"}`,
      `Fleet Size: ${formData.fleetSize || "N/A"}`,
      "",
      "Message:",
      formData.message || "I would like to explore QUICKMATE fleet solutions.",
      "",
      "---",
      "Sent from QUICKMATE website",
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:hello@quickmate.in?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
          <span>QUICKMATE / CONTACT</span>
          <span>01 &ndash; 06</span>
        </div>

        <div className="form-row">
          <label>
            NAME
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </label>
          <label>
            COMPANY
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
              placeholder="Company name"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            EMAIL
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label>
            PHONE
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="+91"
            />
          </label>
        </div>

        <label>
          NUMBER OF VEHICLES
          <select
            name="fleetSize"
            value={formData.fleetSize}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select fleet size
            </option>
            <option value="1-10">1&ndash;10 vehicles</option>
            <option value="11-50">11&ndash;50 vehicles</option>
            <option value="51-200">51&ndash;200 vehicles</option>
            <option value="200+">200+ vehicles</option>
          </select>
        </label>

        <label>
          MESSAGE
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What would you like to explore?"
            rows={3}
          />
        </label>

        <div className="form-submit">
          <button className="btn-lime" type="submit">
            {formSent ? "Message noted" : "Start a conversation"}
            {formSent ? (
              <Check aria-hidden="true" />
            ) : (
              <ArrowRight aria-hidden="true" />
            )}
          </button>
          <span>
            {formSent
              ? "Thank you. Please email us at hello@quickmate.in to continue the conversation."
              : "Fleet solutions \u2022 Partnerships \u2022 Technology"}
          </span>
        </div>
      </form>
    </section>
  );
}
