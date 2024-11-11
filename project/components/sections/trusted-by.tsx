"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

const brands = [
  { name: "Netflix", logo: "/brands/netflix.svg" },
  { name: "Disney+", logo: "/brands/disney.svg" },
  { name: "HBO", logo: "/brands/hbo.svg" },
  { name: "Prime", logo: "/brands/prime.svg" },
  { name: "Hulu", logo: "/brands/hulu.svg" },
];

export function TrustedBySection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div ref={ref} className="animate-on-scroll">
          <h2 className="text-center text-xl font-semibold mb-8 text-muted-foreground">
            Trusted by Leading Entertainment Brands
          </h2>
          <div className="glassmorphism p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}