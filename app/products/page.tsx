import Products from "../components/Products";

export default function ProductsPage() {
    return (
        <main>
            <div className="bg-emerald-50 py-12 md:py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)]">Our Products</h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-4">
                    Discover our range of high-quality pharmaceutical formulations designed for efficacy and safety.
                </p>
            </div>
            <Products />
        </main>
    );
}
