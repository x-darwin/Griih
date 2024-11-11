"use client";

import Image from "next/image";

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
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-center text-lg md:text-xl font-semibold mb-8 md:mb-12 text-foreground">
            Trusted by Leading Entertainment Brands
          </h2>
          <div className="overflow-hidden">
            <div className="flex space-x-12 animate-infinite-scroll hover:pause">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="w-32 md:w-40 h-12 md:h-16 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex-shrink-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}