"use client";

import { Icons } from "@/components/icons";

export function PaymentCardIcons() {
  return (
    <div className="flex justify-center space-x-4">
      <Icons.visa className="h-8 w-8" />
      <Icons.mastercard className="h-8 w-8" />
      <Icons.creditCard className="h-8 w-8" />
    </div>
  );
}