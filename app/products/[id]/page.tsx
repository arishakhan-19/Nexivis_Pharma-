import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) return notFound();

    return (
        <main className="min-h-screen bg-emerald-50">
            <div className="bg-emerald-50 py-12 text-center">
                <p className="text-emerald-600 font-medium uppercase tracking-widest text-sm">
                    {product.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                    {product.name}
                </h1>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    {product.images.map((img, i) => (
                        <div key={i} className="relative w-full h-72 rounded-xl overflow-hidden shadow-md bg-white">
                            <Image
                                src={img}
                                alt={`${product.name} image ${i + 1}`}
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-emerald-700 mb-2">Composition</h2>
                        <p className="text-gray-700">{product.description}</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-emerald-700 mb-2">About</h2>
                        <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-emerald-700 mb-2">Category</h2>
                        <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium">
                            {product.category}
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return products.map((p) => ({ id: p.id }));
}