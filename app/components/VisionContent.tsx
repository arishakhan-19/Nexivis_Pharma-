"use client";

import { useState } from "react";

export default function VisionContent() {
    const [activeTab, setActiveTab] = useState("philosophy");

    return (
        <div className="py-10 bg-white">

            {/* Top Navigation Tabs */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200 pb-1">
                    {[
                        { id: "philosophy", label: "Corporate Philosophy" },
                        { id: "mission", label: "Mission Statement Breakdown" },
                        { id: "key-values", label: "Key Values & Commitment" }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 text-lg font-medium transition-all relative ${activeTab === tab.id
                                ? "text-[var(--primary-blue)]"
                                : "text-gray-500 hover:text-[var(--primary-blue)]/70"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--primary-blue)] rounded-t-full"></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Sections */}
            <div className="min-h-[500px] transition-all duration-500">

                {/* 1. Core Philosophy Grid */}
                {activeTab === "philosophy" && (
                    <section className="max-w-7xl mx-auto px-6 animate-fade-in-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-4">Core Principles</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The foundational values that guide every decision and innovation at Nexivis Pharma.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Innovation",
                                    desc: "Constantly pushing boundaries to find newer, better ways to heal and care.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    )
                                },
                                {
                                    title: "Integrity",
                                    desc: "Upholding the highest ethical standards in every pill we manufacture and every partnership we build.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    )
                                },
                                {
                                    title: "Compassion",
                                    desc: "Putting patients first. We understand that behind every prescription is a life we touch.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    )
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:bg-[var(--primary-blue)] hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-[var(--primary-blue)] mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-emerald-50 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrow */}
                        <div className="flex justify-center mt-12">
                            <button onClick={() => setActiveTab("mission")} className="group flex items-center gap-2 text-[var(--primary-blue)] font-semibold hover:gap-4 transition-all">
                                Explore Our Mission
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </section>
                )}

                {/* 2. Mission Statement Breakdown (Replaces Process) */}
                {activeTab === "mission" && (
                    <section className="max-w-7xl mx-auto px-6 animate-fade-in-up">
                        <div className="bg-[var(--primary-blue)] rounded-3xl p-8 md:p-12 mb-16 text-white text-center shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold mb-4 opacity-90 uppercase tracking-widest">Our Mission</h2>
                                <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
                                    "To produce safe, effective, and affordable medicines while maintaining the highest ethical standards."
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8">
                                <div className="bg-white border-l-4 border-[var(--primary-blue)] pl-6 py-2">
                                    <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">Safe & Effective</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We prioritize patient safety above all. rigorous clinical testing and continuous monitoring ensure that every formulation delivers the intended therapeutic benefit without compromise.
                                    </p>
                                </div>
                                <div className="bg-white border-l-4 border-emerald-400 pl-6 py-2">
                                    <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">Affordability</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Healthcare is a right, not a privilege. We strive to optimize our manufacturing processes to keep costs down, making high-quality treatment accessible to everyone.
                                    </p>
                                </div>
                                <div className="bg-white border-l-4 border-[var(--primary-blue)] pl-6 py-2">
                                    <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">Ethical Standards</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Integrity guides our operations. From sourcing raw materials to marketing our products, we adhere to strict ethical codes and transparency.
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-full min-h-[400px] bg-gray-50 rounded-3xl p-8 flex flex-col justify-center border border-gray-100">
                                {/* Visual representation of Mission Pillars */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-[var(--primary-blue)]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--text-dark)]">Quality Assurance</h4>
                                            <p className="text-xs text-gray-500">Zero tolerance for defects</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ml-8">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[var(--primary-blue)]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--text-dark)]">Fair Pricing</h4>
                                            <p className="text-xs text-gray-500">Accessible to all</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-[var(--primary-blue)]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--text-dark)]">Compliance</h4>
                                            <p className="text-xs text-gray-500">Global regulatory standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center gap-4">
                            <button onClick={() => setActiveTab("philosophy")} className="text-gray-500 hover:text-[var(--primary-blue)] flex items-center gap-2 text-lg font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rotate-180"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                                Back
                            </button>
                            <button onClick={() => setActiveTab("key-values")} className="text-[var(--primary-blue)] font-semibold hover:gap-3 transition-all flex items-center gap-2 text-lg">
                                Key Values
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                            </button>
                        </div>
                    </section>
                )}

                {/* 3. Key Values & Commitment (Replaces Leadership) */}
                {activeTab === "key-values" && (
                    <section className="max-w-7xl mx-auto px-6 animate-fade-in-up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-6">Our Commitment & Values</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                We are driven by a singular purpose: to improve lives. This commitment is woven into the fabric of our organization through these core pillars.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Uncompromising Quality",
                                    desc: "We adhere to the strictest global standards, ensuring every product is safe, effective, and consistent.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    )
                                },
                                {
                                    title: "Patient Centricity",
                                    desc: "Our decisions are guided by what is best for the patient. Their well-being is our ultimate measure of success.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    )
                                },
                                {
                                    title: "Ethical Integrity",
                                    desc: "We conduct business with transparency and honesty, building trust with partners, providers, and patients.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                                    )
                                },
                                {
                                    title: "Continuous Innovation",
                                    desc: "We embrace change and leverage technology to develop newer, better solutions for healthcare challenges.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    )
                                },
                                {
                                    title: "Sustainability",
                                    desc: "We are committed to eco-friendly manufacturing practices that protect our planet for future generations.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    )
                                },
                                {
                                    title: "Global Reach",
                                    desc: "Expanding our footprint to ensure high-quality medicines are accessible to communities worldwide.",
                                    icon: (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                    )
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-emerald-50/50 border-l-4 border-[var(--primary-blue)] p-8 rounded-r-xl hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-16 h-16 mx-auto bg-[var(--primary-blue)] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                        <div className="w-8 h-8">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3 text-center">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-center text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button onClick={() => setActiveTab("mission")} className="text-gray-500 hover:text-[var(--primary-blue)] flex items-center gap-2 text-lg font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rotate-180"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                                Back to Mission
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
