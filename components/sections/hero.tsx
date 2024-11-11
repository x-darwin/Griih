"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left relative">
            {/* Animated Button */}
            <div className="absolute -top-14 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0">
              <div className="animate-[tada_1s_ease-in-out_infinite]">
                <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-full p-3">
                  <div className="bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-full p-2">
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
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
              <Button size="lg" className="h-14 px-8 text-base" asChild>
                <Link href="/#packages">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                <Link href="/#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="lg:ml-auto relative w-full h-[400px] md:h-[600px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden h-full">
                <Image
                  src="/tv-transparent.png"
                  alt="Smart TV Display"
                  fill
                  className="object-contain scale-110 hover:scale-105 transition-transform duration-500"
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