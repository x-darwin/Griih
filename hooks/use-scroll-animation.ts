"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small delay to ensure smooth animation
            setTimeout(() => {
              entry.target.classList.add("animate-fade-up");
            }, 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const elements = ref.current?.querySelectorAll(".animate-on-scroll") || [];
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      const elements = ref.current?.querySelectorAll(".animate-on-scroll") || [];
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return ref;
}