export default function ContactSection() {
    return (
        <section id="contact" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
                                Get in <span className="text-[var(--primary-blue)]">Touch</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Have questions about our products or partnership opportunities? We are here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-50 p-3 rounded-full text-[var(--primary-blue)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--text-dark)]">Headquarters</h3>
                                    <p className="text-gray-600 mt-1">
                                        Plot No. 75, Bramhadev Nagar,<br />
                                        Hotagi Road, Solapur 413006, MH, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-50 p-3 rounded-full text-[var(--primary-blue)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--text-dark)]">Email</h3>
                                    <p className="text-gray-600 mt-1">info@nexivispharma.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <form
                            className="space-y-6"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--primary-blue)] text-white font-bold py-4 rounded-lg hover:bg-[var(--secondary-blue)] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
