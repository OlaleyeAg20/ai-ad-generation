import { CreateAd } from "@/components/create-ad";
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
    </main>
  );
}
