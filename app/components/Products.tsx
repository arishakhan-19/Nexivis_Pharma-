import Image from "next/image";
import Link from "next/link";

import { products } from "../data/products";

export default function Products() {
    return (
        <section id="products" className="py-20 md:py-28 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
                        Our <span className="text-[var(--primary-blue)]">Products</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        High-quality pharmaceutical formulations manufactured with precision and care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[var(--accent-teal)]"
                        >
                            {/* Image Container - Showing only the first image */}
                            <div className="relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-4">
                                <span className="inline-block px-3 py-1 bg-emerald-50 text-[var(--primary-blue)] text-xs font-semibold rounded-full mb-3">
                                    {product.category}
                                </span>
                                <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2 group-hover:text-[var(--primary-blue)] transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                    {product.description}
                                </p>

                                <Link
                                    href={`/products/${product.id}`}
                                    className="inline-flex items-center text-[var(--accent-teal)] font-semibold text-sm hover:text-[var(--primary-blue)] transition-colors"
                                >
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
