import CatalogueApp from "./CatalogueApp";
import { fetchProducts } from "./actions";

export const metadata = {
  title: "Product Order Catalogue | Nexivis Pharma",
  description: "Browse our medical product catalogue and submit an inquiry seamlessly.",
};

export default async function CataloguePage() {
  const products = await fetchProducts();

  return <CatalogueApp initialProducts={products} />;
}
