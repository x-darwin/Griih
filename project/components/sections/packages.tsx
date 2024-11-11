"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const packages = [
  {
    name: "1-Year Plan",
    price: "$89.99",
    period: "/year",
    description: "Perfect for long-term entertainment",
    features: [
      "Full HD & 4K streaming",
      "Watch on 4 devices",
      "Unlimited downloads",
      "Ad-free experience",
      "Cancel anytime",
      "24/7 support",
    ],
    popular: false,
  },
  {
    name: "2-Year Plan",
    price: "$149.99",
    period: "/2 years",
    description: "Best value for serious streamers",
    features: [
      "Everything in 1-Year Plan",
      "Priority support",
      "Early access to new features",
      "Exclusive content",
      "Family sharing",
      "Premium audio quality",
    ],
    popular: true,
  },
];

export function PackagesSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-16" id="packages">
      <div className="container mx-auto px-4">
        <div ref={ref} className="animate-on-scroll space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the perfect streaming package for your entertainment needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`glassmorphism border-0 relative ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/payment">Choose Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}