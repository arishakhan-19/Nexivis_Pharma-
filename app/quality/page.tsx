import QualitySection from "../components/QualitySection";

export default function QualityPage() {
  return (
    <main>
      <div className="bg-[var(--primary-blue)] py-12 md:py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Quality First</h1>
        <p className="text-emerald-50 mt-4 max-w-2xl mx-auto px-4">
          We adhere to the strictest global standards to ensure patient safety.
        </p>
      </div>
      <QualitySection />
    </main>
  );
}
