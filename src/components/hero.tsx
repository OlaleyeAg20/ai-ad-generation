import { Arrowright } from "./icons/icon";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-4 items-center pt-[100px] overflow-auto">
      {/* Background Images */}
      <Image
        src="/images/videochat.png"
        alt="hero"
        width={150}
        height={150}
        className="absolute top-6 left-6 sm:top-12 sm:left-12 opacity-50"
      />
      <Image
        src="/images/Video.png"
        alt="hero"
        width={150}
        height={150}
        className="absolute top-6 right-6 sm:top-12 sm:right-12 opacity-50"
      />
      <Image
        src="/images/bgimage.png"
        alt="hero"
        width={200}
        height={200}
        className="absolute -top-10 sm:top-4 left-1/2 transform -translate-x-1/2 opacity-50"
      />

      {/* Content */}
      <h1 className="text-[32px] sm:text-[64px] font-[500] text-center max-w-[1058px]">
        Generate High-converting, Smarter Adverts in minutes{" "}
        <span>with AI</span>
      </h1>
      <p className="text-grey-900 text-[18px] sm:text-2xl text-center">
        Create compelling, high-converting ads to maximize ROI
      </p>
      <Button icon={<Arrowright />}>Generate New Ad</Button>

      {/* Image Carousel */}
      <div className="flex gap-2 overflow-auto py-8 w-full">
        <Image
          className="-rotate-4 rounded-2xl -translate-x-8 w-[200px] sm:w-[348px]"
          src="/images/anessa.jpg"
          alt="hero"
          width={348}
          height={420}
        />
        <Image
          className="-rotate-4 rounded-2xl -translate-x-8 w-[200px] sm:w-[348px]"
          src="/images/cream.jpg"
          alt="hero"
          width={348}
          height={420}
        />
        <Image
          className="-rotate-4 rounded-2xl -translate-x-8 w-[200px] sm:w-[348px]"
          src="/images/fanta.jpg"
          alt="hero"
          width={348}
          height={420}
        />
        <Image
          className="-rotate-4 rounded-2xl -translate-x-8 w-[200px] sm:w-[348px]"
          src="/images/image.jpg"
          alt="hero"
          width={348}
          height={420}
        />
        <Image
          className="-rotate-4 rounded-2xl -translate-x-8 w-[200px] sm:w-[348px]"
          src="/images/sprite.jpg"
          alt="hero"
          width={348}
          height={420}
        />
      </div>
    </section>
  );
}
