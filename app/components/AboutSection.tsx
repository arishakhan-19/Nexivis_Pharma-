export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)]">
                            About <span className="text-[var(--primary-blue)]">Nexivis</span>
                        </h2>
                        <div className="h-1 w-20 bg-[var(--accent-teal)] rounded-full"></div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            At Nexivis Pharma, we are dedicated to advancing global healthcare through innovation, quality, and integrity. Our mission is to provide accessible and effective pharmaceutical solutions that improve the quality of life for patients worldwide.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            With a strong focus on research and ethical manufacturing, we ensure that every product meets the highest standards of safety and efficacy. We believe in building trust through transparency and unwavering commitment to excellence.
                        </p>

                        <ul className="space-y-3 pt-4">
                            {[
                                "Research-Driven Approach",
                                "Commitment to Patient Safety",
                                "Global Healthcare Standards",
                                "Ethical Business Practices"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-[var(--primary-blue)] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual/Image Display - Full visibility, no text, no crop */}
                    <div className="relative h-auto rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
                        <img
                            src="/images/brands/image1_med.jpg"
                            alt="Nexivis Pharma Future"
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
