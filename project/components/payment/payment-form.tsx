"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

interface PaymentFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (234) 567-8900"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="card">Card Number</Label>
          <Input
            id="card"
            placeholder="4242 4242 4242 4242"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input
              id="expiry"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="password"
              maxLength={4}
              placeholder="123"
              required
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Pay Now
      </Button>

      <div className="text-center">
        <Button
          variant="outline"
          type="button"
          onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          className="mt-4"
        >
          <Icons.whatsapp className="mr-2 h-4 w-4" />
          Need help? Contact Support
        </Button>
      </div>
    </form>
  );
}