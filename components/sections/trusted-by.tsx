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
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-center text-lg md:text-xl font-semibold mb-6 md:mb-8 text-foreground">
            Trusted by Leading Entertainment Brands
          </h2>
          <div className="glassmorphism p-4 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 items-center justify-items-center">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="w-24 md:w-32 h-8 md:h-12 relative brightness-0 hover:scale-110 transition-all duration-300"
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