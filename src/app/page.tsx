import { CreateAd } from "@/components/create-add";
import FeaturesSection from "@/components/key-features";
import NewsletterComponent from "@/components/newsletter";
import { Faq } from "../components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <FeaturesSection />
      <CreateAd />
      <Faq />
      <NewsletterComponent />
      <Footer />
    </main>
  );
}
