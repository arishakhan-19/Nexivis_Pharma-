import { products } from "../../data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        id: string;
    }
}
// Next.js 15+ changes params to be a Promise, so we need to await it.
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="bg-emerald-50 py-12 md:py-20 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-dark)] mb-4">{product.name}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto px-4">
                    {product.category}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Images Section */}
                    <div className="space-y-6">
                        <div className={`grid gap-4 ${product.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            {product.images.map((img, idx) => (
                                <div key={idx} className="relative h-80 w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <Image
                                        src={img}
                                        alt={`${product.name} view ${idx + 1}`}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">Product Description</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {product.longDescription || product.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-3">Key Features</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <svg className="w-5 h-5 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Premium Quality Formulation
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <svg className="w-5 h-5 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Clinically Tested
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <svg className="w-5 h-5 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    Available in blister packs
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6">
                            <Link
                                href="/contact"
                                className="inline-block bg-[var(--primary-blue)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--secondary-blue)] transition-colors shadow-lg hover:shadow-emerald-500/30"
                            >
                                Enquire Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-20">
                <Link href="/products" className="flex items-center gap-2 text-gray-500 hover:text-[var(--primary-blue)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Products
                </Link>
            </div>
        </main>
    );
}
