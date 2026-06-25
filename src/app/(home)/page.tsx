import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="border-b border-neutral-800 bg-neutral-950 bg-grid-white/[0.03]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
