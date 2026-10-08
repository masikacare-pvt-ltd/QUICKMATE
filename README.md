# QUICKMATE

> **Smarter Fleets. Quicker Decisions.**  
> AIoT-Powered Intelligent Fleet Management Platform for Heavy Vehicles.

---

## Overview

QUICKMATE is a production-grade fleet telematics and intelligence platform built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

It turns heavy vehicles into connected, intelligent assets with real-time route tracing, live data telemetry streams, interactive dashboards, and in-vehicle IoT hardware integration.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 & Kinetic Telemetry Design System
- **Icons**: Lucide React
- **Typography**: Space Grotesk, Manrope, JetBrains Mono (`next/font/google`)
- **Animations**: CSS Keyframes + Micro-interactions

---

## Project Structure

```
QUICKMATE/
├── public/
│   ├── assets/
│   │   ├── quickmate-device.png
│   │   └── quickmate-highway.jpg
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── BrandMoment.tsx
│   │   │   ├── ClosingSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── DataExplorer.tsx
│   │   │   ├── DeviceSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── FleetDashboard.tsx
│   │   │   ├── FounderSection.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── OperationalBlindSpot.tsx
│   │   │   ├── PipelineSection.tsx
│   │   │   ├── PurposeSection.tsx
│   │   │   └── WhyQuickmate.tsx
│   │   └── ui/
│   │       └── Button.tsx
│   └── lib/
│       ├── data.ts
│       └── utils.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Production Build

```bash
npm run build
npm run start
```