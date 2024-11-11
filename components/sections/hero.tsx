"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const ref = useScrollAnimation();

  return (
    <section className="pt-20 md:pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-on-scroll space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  Your Ultimate
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  Entertainment Hub
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Access premium content, exclusive releases, and unlimited streaming with StreamVault. Experience entertainment like never before.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/#packages">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="animate-on-scroll lg:ml-auto relative w-full h-[300px] md:h-[400px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-full blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/10 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1000"
                  alt="Streaming Entertainment"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}