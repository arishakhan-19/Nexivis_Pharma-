import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Products from "./components/Products";
import VisionSection from "./components/VisionSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <Products />
      <VisionSection />
      <ContactSection />
    </main>
  );
}
