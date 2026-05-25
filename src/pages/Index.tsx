import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionAbout from "@/components/SectionAbout";
import SectionCrossFlow from "@/components/SectionCrossFlow";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-midnight text-sandstone min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <SectionAbout />
      <SectionCrossFlow />
    </main>
    <Footer />
  </div>
);

export default Index;
