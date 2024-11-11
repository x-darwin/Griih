"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Zap, Heart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Bank-grade encryption and 99.9% uptime guarantee for uninterrupted streaming.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-fast servers ensure smooth streaming without buffering.",
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-500",
  },
  {
    icon: Heart,
    title: "User-Friendly",
    description: "Intuitive interface designed for the best user experience.",
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you anytime.",
    gradient: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-500",
  },
];

export function WhyChooseUsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" id="why-choose-us">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div ref={ref} className="animate-on-scroll space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Why Choose StreamVault?
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference with our premium features and unmatched service quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "group relative rounded-xl backdrop-blur-sm",
                  "p-8 transition-all duration-300 hover:scale-105"
                )}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className={cn(
                  "absolute inset-0 rounded-xl bg-gradient-to-br opacity-20",
                  feature.gradient
                )} />
                
                <div className="relative space-y-4">
                  <div className={cn(
                    "h-14 w-14 rounded-xl flex items-center justify-center",
                    "bg-gradient-to-br shadow-lg",
                    feature.gradient
                  )}>
                    <feature.icon className={cn("h-7 w-7", feature.iconColor)} />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}