"use client";

import { Icons } from "@/components/icons";

export function PaymentCardIcons() {
  return (
    <div className="flex justify-center items-center space-x-6">
      <div className="relative w-12 h-12">
        <Icons.visa className="w-full h-full text-[#1434CB]" />
      </div>
      <div className="relative w-12 h-12">
        <Icons.mastercard className="w-full h-full text-[#EB001B]" />
      </div>
      <div className="relative w-12 h-12">
        <Icons.creditCard className="w-full h-full text-muted-foreground" />
      </div>
    </div>
  );
}