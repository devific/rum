import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

export function BrandStatement() {
  return (
    <section className="w-full overflow-hidden bg-bg-dark pt-12">
      <MarqueeStrip text="PEX RUM ✦ DISTILLED WILD ✦ BOTTLED WEIRDER ✦ SMALL BATCH ✦ 100% CANE SPIRIT ✦ AGED IN OAK ✦" />
      <MarqueeStrip text="PEX RUM ✦ DISTILLED WILD ✦ BOTTLED WEIRDER ✦ SMALL BATCH ✦ 100% CANE SPIRIT ✦ AGED IN OAK ✦" reverse className="mt-1" />
    </section>
  );
}
