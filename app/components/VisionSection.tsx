export default function VisionSection() {
    const cards = [
        {
            title: "Our Vision",
            desc: "To be a globally recognized pharmaceutical leader, dedicated to enhancing life through innovative and high-quality healthcare solutions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            title: "Our Mission",
            desc: "To produce safe, effective, and affordable medicines while maintaining the highest ethical standards in manufacturing and distribution.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            )
        },
        {
            title: "Core Values",
            desc: "Integrity, Innovation, Quality, and Customer Centricity are the pillars that drive every decision we make.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            )
        },
        {
            title: "Strategic Goal",
            desc: "Expanding our global footprint and therapeutic portfolio to address unmet medical needs across various specialties.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            )
        }
    ];

    return (
        <section id="vision" className="py-20 bg-white text-[var(--text-dark)] relative overflow-hidden">
            {/* Background decoration - Adjusted for white theme */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 opacity-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 opacity-50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-dark)]">
                        Our Vision & Mission
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Driving the future of healthcare with integrity and innovation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            /* Updated card styles: White layout, Green on hover */
                            className="bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-[var(--primary-blue)] shadow-sm hover:shadow-xl group"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="mb-4 text-[var(--primary-blue)] bg-emerald-50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-[var(--primary-blue)] transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[var(--text-dark)] group-hover:text-white transition-colors">{card.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-emerald-50 transition-colors">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
