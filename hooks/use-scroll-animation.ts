"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = ref.current?.querySelectorAll(".animate-on-scroll") || [];
    elements.forEach((element) => {
      observer.observe(element);
    });

    const currentRef = ref.current;

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll(".animate-on-scroll");
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return ref;
}