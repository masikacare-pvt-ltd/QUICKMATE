import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OperationalBlindSpot } from "@/components/sections/OperationalBlindSpot";
import { BrandMoment } from "@/components/sections/BrandMoment";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DeviceSection } from "@/components/sections/DeviceSection";
import { DataExplorer } from "@/components/sections/DataExplorer";
import { FleetDashboard } from "@/components/sections/FleetDashboard";
import { WhyQuickmate } from "@/components/sections/WhyQuickmate";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <OperationalBlindSpot />
        <BrandMoment />
        <PipelineSection />
        <HowItWorks />
        <DeviceSection />
        <DataExplorer />
        <FleetDashboard />
        <WhyQuickmate />
        <PurposeSection />
        <FounderSection />
        <FAQSection />
        <ClosingSection />
        <ContactSection />
      </main>
      <Footer />

      <Link className="mobile-contact" href="#contact" aria-label="Talk to QUICKMATE">
        Talk to QUICKMATE <ArrowUpRight aria-hidden="true" />
      </Link>
    </>
  );
}
