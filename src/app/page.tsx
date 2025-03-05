import { CreateAd } from "@/components/create-add";
import FeaturesSection from "@/components/key-features";
import NewsletterComponent from "@/components/newsletter";
import { Faq } from "../components/faq";

export default function Home() {
  return (
    <main>
      <FeaturesSection />
      <CreateAd />
      <Faq />
      <NewsletterComponent />
    </main>
  );
}
