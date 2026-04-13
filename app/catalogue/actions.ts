"use server";
import { products as siteProducts } from '../data/products';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const pat = process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!pat || !baseId || pat === "patYOUR_PERSONAL_ACCESS_TOKEN_HERE") {
    // Return site products as dummy data
    return siteProducts.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description,
      category: p.category,
      imageUrl: p.images[0] || "https://via.placeholder.com/150"
    }));
  }

  try {
    const res = await fetch(`https://api.airtable.com/v0/${baseId}/Products`, {
      headers: {
        Authorization: `Bearer ${pat}`
      },
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      // Missing table or permissions - failing silently to allow fallback 
      // console.log("Airtable DB not setup for products, falling back to local products.");
      return siteProducts.map(p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        category: p.category,
        imageUrl: p.images[0] || "https://via.placeholder.com/150"
      }));
    }

    const data = await res.json();
    return data.records.map((record: any) => ({
      id: record.id,
      name: record.fields.Name || "Unknown",
      description: record.fields.Description || "",
      category: record.fields.Category || "Other",
      imageUrl: record.fields.Image && record.fields.Image.length > 0 ? record.fields.Image[0].url : "https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?w=500&q=80"
    }));
  } catch (error) {
    console.error("Airtable fetch error:", error);
    return [];
  }
}

export async function submitInquiry(cart: { productId: string, quantity: number, name: string }[], userDetails: { fullName: string, pharmacyName: string, whatsapp: string, email: string }) {
  const pat = process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!pat || !baseId || pat === "patYOUR_PERSONAL_ACCESS_TOKEN_HERE") {
    console.log("Mock submission:", { cart, userDetails });
    // Simulate network delay
    await new Promise(r => setTimeout(r, 1000));
    return { success: true };
  }

  try {
    const productsString = cart.map(item => `${item.quantity}x ${item.name}`).join(", ");
    const records = [{
      fields: {
        "Name": userDetails.fullName,
        "Company": userDetails.pharmacyName,
        "Phone": userDetails.whatsapp,
        "Email": userDetails.email,
        "Products_Ordered": productsString
      }
    }];

    const res = await fetch(`https://api.airtable.com/v0/${baseId}/Orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${pat}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ records })
    });

    if (!res.ok) {
      console.error("Failed to submit to Airtable", await res.text());
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Airtable submission error:", error);
    return { success: false };
  }
}
