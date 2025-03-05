import FeaturesSection from "@/components/key-features";
import { Faq } from "../components/faq";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <Faq/>
    </main>
  );
}
