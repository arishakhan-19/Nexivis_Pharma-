import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <main>
      <div className="bg-emerald-50 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)]">Who We Are</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-4">
          Nexivis Pharma is a leader in ethical pharmaceutical manufacturing.
        </p>
      </div>
      <AboutSection />
    </main>
  );
}