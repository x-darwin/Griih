"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const ref = useScrollAnimation();

  return (
    <section className="pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className="animate-on-scroll space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Your Ultimate
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Entertainment Hub
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Access premium content, exclusive releases, and unlimited streaming with StreamVault. Experience entertainment like never before.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/#packages">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div ref={ref} className="animate-on-scroll lg:ml-auto relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
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