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
      <HorizontalRumScroll />
      <Manifesto />
      <Testimonials />
      <CTABanner />
    </PageTransition>
  );
}
