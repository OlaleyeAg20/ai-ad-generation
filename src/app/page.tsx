import { CreateAd } from "@/components/create-ad";
import Footer from "@/components/footer";
import FeaturesSection from "@/components/key-features";
import { Newsletter } from "@/components/newsletter";
import Pricing from "@/components/pricing";
import { Faq } from "../components/faq";

export default function Home() {
  return (
    <main>
      <FeaturesSection />
      <CreateAd />
      <Pricing />
      <Faq />
      <Newsletter />
      <Footer />
    </main>
  );
}
