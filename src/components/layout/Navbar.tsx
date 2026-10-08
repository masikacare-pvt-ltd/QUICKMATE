"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, PhoneCall } from "lucide-react";
import { navigation } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPastHero =
        window.scrollY > 24 ||
        (window.location.hash !== "" && window.location.hash !== "#home");
      setScrolled(isPastHero);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  // Body scroll locking and Escape key handling for mobile drawer
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
        role="banner"
      >
        <Link
          href="#home"
          className="wordmark"
          onClick={closeMenu}
          aria-label="QUICKMATE home"
        >
          <Image
            src="/assets/quickmate-logo.jpeg"
            alt="QUICKMATE logo"
            width={32}
            height={32}
            className="rounded-full object-cover border border-[var(--lime)]"
          />
          <span>QUICKMATE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          aria-label="Desktop navigation"
        >
          <Link href="#home">Home</Link>
          {navigation.map(({ label, id }) => (
            <Link key={id} href={`#${id}`}>
              {label}
            </Link>
          ))}
          <Link href="#contact">Contact</Link>
        </nav>

        <a href="#contact" className="header-cta">
          Talk to us <ArrowUpRight aria-hidden="true" />
        </a>

        {/* Mobile Menu Trigger Button (min 44x44px target) */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Full-Height Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${menuOpen ? "drawer-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <Link
            href="#home"
            className="wordmark"
            onClick={closeMenu}
            aria-label="QUICKMATE home"
          >
            <Image
              src="/assets/quickmate-logo.jpeg"
              alt="QUICKMATE logo"
              width={28}
              height={28}
              className="rounded-full object-cover border border-[var(--lime)]"
            />
            <span>QUICKMATE</span>
          </Link>
          <button
            type="button"
            className="mobile-drawer-close"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile navigation links">
          <Link href="#home" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">00</span>
            <span className="mobile-nav-text">Home</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          {navigation.map(({ label, id }, index) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              <span className="mobile-nav-num">0{index + 1}</span>
              <span className="mobile-nav-text">{label}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
          <Link href="#contact" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">07</span>
            <span className="mobile-nav-text">Contact</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-lime mobile-drawer-cta"
          >
            <PhoneCall size={16} aria-hidden="true" />
            <span>Talk to Us</span>
          </a>
          <div className="mobile-drawer-meta">
            <span>ODISHA, INDIA</span>
            <span>AIoT FLEET INTELLIGENCE</span>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
