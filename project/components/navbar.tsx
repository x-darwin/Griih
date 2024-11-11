"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Play className="h-6 w-6 text-white" />
            <span className="font-bold text-xl text-white">StreamVault</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/#features"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#faqs"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/#reviews"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Reviews
            </Link>
            <Button asChild variant="secondary" className="bg-white text-black hover:bg-gray-200">
              <Link href="/#packages">Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}