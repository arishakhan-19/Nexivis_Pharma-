import { supabase } from "@/lib/supabase";

export default async function ProductsPage() {
    const { data: products, error } = await supabase
        .from("products")
        .select("*");

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div style={{ padding: "40px" }}>
            <h1>Products From Database</h1>

            {products?.map((product) => (
                <div key={product.id} style={{ marginBottom: "20px" }}>
                    <h2>{product.name}</h2>
                    <p>{product.short_description}</p>
                </div>
            ))}
        </div>
    );
}
