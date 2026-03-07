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

                <div className="space-y-16">
                    {["ANTI-INFECTIVE & ANTI-ALLERGIC", "ANALGESIC & ANTIPYRETICS", "GASTROPROTECTIVE"].map((category) => {
                        const categoryProducts = products.filter(p => p.category === category);

                        if (categoryProducts.length === 0) return null;

                        return (
                            <div key={category} className="space-y-8">
                                {/* Category Header */}
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[var(--primary-blue)] to-blue-600 shadow-md">
                                    <div className="absolute inset-0 bg-white/10 opacity-50 pattern-grid"></div>
                                    <h3 className="relative z-10 py-3 text-center text-xl md:text-2xl font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                                        {category}
                                    </h3>
                                </div>

                                {/* Product Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {categoryProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[var(--accent-teal)] flex flex-col"
                                        >
                                            {/* Image Container - Box Focused */}
                                            <Link href={`/products/${product.id}`} className="block relative h-64 w-full bg-white rounded-xl overflow-hidden mb-6 cursor-pointer">
                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-4 hover:scale-110 transition-transform duration-500"
                                                />
                                            </Link>

                                            {/* Content */}
                                            <div className="px-2 pb-4 text-center mt-auto">
                                                <Link href={`/products/${product.id}`}>
                                                    <h3 className="text-2xl font-bold text-[var(--accent-teal)] mb-2 group-hover:text-[var(--primary-blue)] transition-colors cursor-pointer">
                                                        {product.name}
                                                    </h3>
                                                </Link>
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                                                    Tablets / Capsules
                                                </div>
                                                <p className="text-gray-500 mb-6 text-sm leading-relaxed line-clamp-2">
                                                    {product.description}
                                                </p>

                                                <Link
                                                    href={`/products/${product.id}`}
                                                    className="inline-flex items-center text-white bg-[var(--primary-blue)] px-6 py-2 rounded-full font-semibold text-sm hover:bg-[var(--accent-teal)] transition-colors shadow-md"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
