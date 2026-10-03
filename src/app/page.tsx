import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { BehindTheBuildSection } from "@/components/sections/BehindTheBuildSection";
import { AutomationLabSection } from "@/components/sections/AutomationLabSection";
import { WorkbenchSection } from "@/components/sections/WorkbenchSection";
import { CommandCenterSection } from "@/components/sections/CommandCenterSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F5F5F3] selection:bg-[#E5A84B] selection:text-[#0B0B0C]">
      {/* 1. Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. What I Build */}
        <CapabilitiesSection />

        {/* 4. Featured Work */}
        <FeaturedWorkSection />

        {/* 5. Behind The Build */}
        <BehindTheBuildSection />

        {/* 6. Things I've Automated */}
        <AutomationLabSection />

        {/* 7. Developer Workbench */}
        <WorkbenchSection />

        {/* 8. Command Center */}
        <CommandCenterSection />

        {/* 9. How I Work */}
        <HowIWorkSection />

        {/* 10. About */}
        <AboutSection />

        {/* 11. Start a Project / Contact */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
