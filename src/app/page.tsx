import { CreateAd } from "@/components/create-ad";
import Footer from "@/components/footer";
import FeaturesSection from "@/components/key-features";
import { Newsletter } from "@/components/newsletter";
import { Faq } from "../components/faq";

export default function Home() {
  return (
    <main>
      <FeaturesSection />
      <CreateAd />
      <Faq />
      <Newsletter />
      <Footer />
    </main>
  );
}
