"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const formData = new FormData(e.currentTarget);
            
            // Add current timestamp for created_at
            const { error } = await supabase.from("enquiries").insert([
                {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone") || null,
                    message: formData.get("message"),
                    created_at: new Date().toISOString(),
                }
            ]);

            if (error) {
                console.error("Supabase error:", error);
                throw error;
            }

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (err: any) {
            setErrorMessage(err.message || "An error occurred while submitting your inquiry.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
                                Get in <span className="text-emerald-600">Touch</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Have questions about our products or partnership opportunities? We are here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--text-dark)]">Address</h3>
                                    <p className="text-gray-600 mt-1">
                                        Hotgi Road Solapur, Maharashtra,<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--text-dark)]">Email</h3>
                                    <p className="text-gray-600 mt-1">info@nexivispharma.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--text-dark)]">Website</h3>
                                    <p className="text-gray-600 mt-1">www.nexivispharma.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                                <div className="bg-emerald-100 p-4 rounded-full text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-emerald-800">Message Sent!</h3>
                                <p className="text-gray-600">
                                    Thank you for reaching out. We will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {status === "error" && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200">
                                        {errorMessage}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                        placeholder="+1 (555) 000-0000"
                                        disabled={status === "loading"}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                        required
                                        disabled={status === "loading"}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-200 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
