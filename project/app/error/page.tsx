"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  const ref = useScrollAnimation();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div ref={ref} className="animate-on-scroll max-w-xl mx-auto">
          <Card className="glassmorphism border-0">
            <CardHeader className="text-center">
              <XCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h1 className="text-3xl font-bold">Oops! Something went wrong</h1>
              <p className="text-muted-foreground">
                We encountered an error processing your request. Please try again later.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <Button asChild>
                  <Link href="/">Return Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}