"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const validationResult = newsletterSchema.safeParse({ email });
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }

    try {
      console.log("Subscribing:", email);
      toast.success("Thank you for subscribing!", {
        description: "You'll receive the latest updates in your inbox.",
        duration: 3000,
      });
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Failed to subscribe", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <div
      className="relative flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/newsoverlay.svg')",
        backgroundColor: "#1E1E1E",
        backgroundBlendMode: "multiply",
        minHeight: "300px",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 w-full text-center flex flex-col gap-8 max-w-2xl">
        <h3 className="text-lg font-semibold leading-[36px] md:text-[28px] text-white">
          Subscribe to our newsletter for the latest trends,
          <br className="hidden sm:block" />
          AI-powered advert strategies and exclusive offers
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[80%] mx-auto flex-col items-center"
        >
          <div className="flex w-full flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="bg-white p-4 rounded-[6px] outline-none border border-[#CF54CF] text-black focus:border-ring text-[18px] font-semibold leading-7  max-w-[433px]"
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              className="bg-[#CF54CF] text-white hover:bg-[#CF54CF]/80 w-full sm:w-auto"
            >
              Subscribe Now
            </Button>
          </div>
          {error && (
            <div className="pt-2  text-red-500 self-start">
              {<p>{error}</p>}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
