"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PaymentFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

interface Package {
  name: string;
  price: number;
  period: string;
}

const additionalFeatures = [
  { id: "4k", label: "4K Ultra HD", price: 9.99 },
  { id: "offline", label: "Offline Downloads", price: 4.99 },
  { id: "devices", label: "Additional Devices", price: 7.99 },
];

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [selectedPackage] = useState<Package>({
    name: "2-Year Plan",
    price: 149.99,
    period: "2 years",
  });
  const [couponCode, setCouponCode] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const calculateTotal = () => {
    let total = selectedPackage.price;
    selectedFeatures.forEach((feature) => {
      const additionalFeature = additionalFeatures.find((f) => f.id === feature);
      if (additionalFeature) {
        total += additionalFeature.price;
      }
    });
    // Apply coupon logic here if needed
    return total.toFixed(2);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
          <CardDescription>Review your selected package and options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>{selectedPackage.name}</span>
            <span>${selectedPackage.price}</span>
          </div>
          <div className="space-y-4">
            <Label>Additional Features</Label>
            {additionalFeatures.map((feature) => (
              <div key={feature.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={feature.id}
                    checked={selectedFeatures.includes(feature.id)}
                    onCheckedChange={(checked) => {
                      setSelectedFeatures(
                        checked
                          ? [...selectedFeatures, feature.id]
                          : selectedFeatures.filter((id) => id !== feature.id)
                      );
                    }}
                  />
                  <label htmlFor={feature.id} className="text-sm">
                    {feature.label} (+${feature.price})
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Label htmlFor="coupon">Coupon Code</Label>
            <div className="flex space-x-2">
              <Input
                id="coupon"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
              />
              <Button variant="outline">Apply</Button>
            </div>
          </div>
          <div className="pt-4 border-t">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={onSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Enter your payment information securely</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" size="lg">
              Pay ${calculateTotal()} Now
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              className="w-full"
            >
              <Icons.whatsapp className="mr-2 h-4 w-4" />
              Need help? Contact Support
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}