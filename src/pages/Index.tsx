import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-midnight text-sandstone min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
    </main>
    <Footer />
  </div>
);

export default Index;
