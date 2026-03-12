import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/sections/home/Hero";
import { BrandStatement } from "@/components/sections/home/BrandStatement";
import { RumShowcase } from "@/components/sections/home/RumShowcase";
import { TheSpirit } from "@/components/sections/home/TheSpirit";
import { HorizontalRumScroll } from "@/components/sections/home/HorizontalRumScroll";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTABanner } from "@/components/sections/home/CTABanner";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <BrandStatement />
      <RumShowcase />
      <TheSpirit />
      {typeof window !== 'undefined' && window.innerWidth >= 768 ? (
        <HorizontalRumScroll />
      ) : (
        <div className="bg-bg-mid py-20 px-6 text-center">
          <h2 className="font-display text-5xl text-primary-gold mb-4">SCROLL TO MEET THE CREW</h2>
          <p className="font-body text-cream">View our rums on desktop for the full experience, or check out the lineup above.</p>
        </div>
      )}
      <Manifesto />
      <Testimonials />
      <CTABanner />
    </PageTransition>
  );
}
