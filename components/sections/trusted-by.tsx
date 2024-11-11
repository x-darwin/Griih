"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const brands = [
  { name: "Netflix", logo: "/brands/netflix.svg" },
  { name: "Disney+", logo: "/brands/disney.svg" },
  { name: "HBO", logo: "/brands/hbo.svg" },
  { name: "Prime", logo: "/brands/prime.svg" },
  { name: "Hulu", logo: "/brands/hulu.svg" },
  { name: "Laliga", logo: "/brands/LaLiga.svg" },
  { name: "Premiere League", logo: "/brands/Premier_League.svg" },
  { name: "UEFA", logo: "/brands/UEFA_Champions_League.svg" },
  { name: "BEIN Sport", logo: "/brands/Bein_sport.svg" },
  { name: "ESPN", logo: "/brands/ESPN.svg" },  
];

export function TrustedBySection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-center text-lg md:text-xl font-semibold mb-6 md:mb-8 text-foreground">
            Trusted by Leading Entertainment Brands
          </h2>
          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll space-x-8">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="w-24 md:w-32 h-8 md:h-12 relative brightness-0 hover:scale-110 transition-all duration-300 flex-shrink-0"
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