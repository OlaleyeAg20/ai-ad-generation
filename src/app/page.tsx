import { CreateAd } from "@/components/create-ad";
import Footer from "@/components/footer";
import FeaturesSection from "@/components/key-features";
import Pricing from "@/components/pricing";
import { Newsletter } from "@/components/newsletter";
import { Faq } from "../components/faq";

export default function Home() {
  return (
    <main>
      <FeaturesSection />
      <Pricing />
      <CreateAd />
      <Faq />
      <Newsletter />
      <Footer />
    </main>
  );
}
