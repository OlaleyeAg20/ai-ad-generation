"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Nunito } from "next/font/google";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export default function Page() {
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
      toast.success("Thank you for joining!", {
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
    <section
      className={clsx(
        "w-full py-16 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden"
      )}
    >
      <div className="max-w-[756px] w-full flex flex-col gap-8 mx-auto text-center relative">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#290029] font-extrabold text-[64px] leading-[76px]">
            Generate Stunning Ad campaign with AI
          </h1>
          <p className="text-[#5F5F5F] text-[20px] font-medium leaidng-7">
            Our AI platform creates high-converting ads tailored to your brand
            in seconds. Save time, boost engagement, and scale your marketing
            effortlessly
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[80%] mx-auto flex-col items-center"
        >
          <div className="h-5  text-red-500 text-xs self-start">
            {error && <p>{error}</p>}
          </div>
          <div className="flex w-full flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="bg-white rounded-xs outline-none border-none text-black focus:border-ring"
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              className="bg-[#CF54CF] text-white hover:bg-[#CF54CF]/80 w-full sm:w-auto"
            >
              Subscribe Now
            </Button>
          </div>
        </form>
      </div>

      <div className="max-w-[1152px] w-full mx-auto mt-16 mb-[83px] rounded-[12px] bg-[#F2F2F2] h-[720px]">
        <video>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
