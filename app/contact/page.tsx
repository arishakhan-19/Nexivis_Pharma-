import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <main>
      <div className="bg-emerald-50 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)]">Contact Us</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-4">
          Reach out to us for inquiries, partnerships, or support.
        </p>
      </div>
      <ContactSection />
    </main>
  );
}
