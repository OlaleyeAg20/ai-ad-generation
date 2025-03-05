import { CreateAd } from "@/components/create-ad";
import Footer from "@/components/footer";
import FeaturesSection from "@/components/key-features";
import Pricing from "@/components/pricing";
import { Newsletter } from "@/components/newsletter";
import { Faq } from "../components/faq";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <CreateAd />
      <Pricing />
      <Faq />
      <Newsletter />
      <Footer />
    </main>
  );
}
