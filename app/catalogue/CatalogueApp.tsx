"use client";

import React, { useState, useMemo } from "react";
import { Product, submitInquiry } from "./actions";

// Icons inline to prevent dependency issues
const ShoppingCart = ({ size = 24, className = "" }: { size?: number, className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>);
const Minus = ({ size = 24, className = "" }: { size?: number, className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/></svg>);
const Plus = ({ size = 24, className = "" }: { size?: number, className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>);
const X = ({ size = 24, className = "" }: { size?: number, className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const CheckCircle2 = ({ className = "" }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>);

export default function CatalogueApp({ initialProducts }: { initialProducts: Product[] }) {
  const [products] = useState<Product[]>(initialProducts);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [pharmacyName, setPharmacyName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const cartTotalItems = useMemo(() => {
    return Object.values(cart).reduce((acc, qty) => acc + qty, 0);
  }, [cart]);

  const cartItemsData = useMemo(() => {
    return Object.entries(cart)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const product = products.find((p) => p.id === id);
        return {
          productId: id,
          name: product?.name || "Unknown",
          quantity: qty,
        };
      });
  }, [cart, products]);

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = Math.max(0, current + delta);
      const newCart = { ...prev };
      if (next === 0) {
        delete newCart[productId];
      } else {
        newCart[productId] = next;
      }
      return newCart;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsapp) return;

    setIsSubmitting(true);
    const result = await submitInquiry(cartItemsData, {
      fullName,
      pharmacyName,
      whatsapp,
      email,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setCart({});
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <CheckCircle2 className="w-20 h-20 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Sent!</h2>
          <p className="text-gray-600 mb-6">
            We will contact you on WhatsApp shortly.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setIsModalOpen(false);
              setFullName("");
              setPharmacyName("");
              setWhatsapp("");
              setEmail("");
            }}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition-colors"
          >
            Back to Catalogue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-teal-700 text-white sticky top-0 z-20 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl items-center font-bold tracking-wide">Nexivis Catalogue</h1>
        </div>
        
        {/* Categories Horizontal Scroll */}
        <div className="bg-white border-b overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 px-4 py-3 min-w-max max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col space-y-3 border-t border-gray-100 pt-4">
          {filteredProducts.map((product) => {
            const qty = cart[product.id] || 0;
            return (
              <div key={product.id} className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-between border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base sm:text-lg">{product.name}</h3>
                  </div>
                </div>
                  
                <div className="flex-shrink-0 ml-4">
                  {qty === 0 ? (
                    <button
                      onClick={() => handleUpdateQuantity(product.id, 1)}
                      className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-5 py-2 rounded-lg font-bold text-sm hover:bg-emerald-100 transition-colors"
                    >
                      ADD
                    </button>
                  ) : (
                    <div className="flex items-center space-x-3 bg-emerald-700 text-white rounded-lg p-1 shadow-sm w-[100px] justify-between">
                      <button
                        onClick={() => handleUpdateQuantity(product.id, -1)}
                        className="p-1 rounded hover:bg-emerald-600 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold text-sm w-4 text-center">{qty}</span>
                      <button
                        onClick={() => handleUpdateQuantity(product.id, 1)}
                        className="p-1 rounded hover:bg-emerald-600 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No products found in this category.
          </div>
        )}
      </main>

      {/* Floating Bottom Bar */}
      {cartTotalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-transparent z-30 pointer-events-none">
          <div className="max-w-4xl mx-auto">
            <div className="bg-teal-800 text-white rounded-2xl shadow-xl p-4 flex items-center justify-between pointer-events-auto">
              <div>
                <p className="text-xs text-teal-100 opacity-80 uppercase tracking-wider mb-0.5">Inquiry Cart</p>
                <p className="font-bold">{cartTotalItems} item{cartTotalItems > 1 ? "s" : ""} selected</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-teal-800 px-5 py-2.5 rounded-xl font-bold flex items-center space-x-2 hover:bg-teal-50 transition-colors"
              >
                <span>View Summary</span>
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto transform animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b sticky top-0 bg-white z-10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="p-5">
              <div className="space-y-4 mb-8">
                {cartItemsData.map((item) => (
                  <div key={item.productId} className="flex items-center justify-between text-sm">
                    <span className="text-gray-800 font-medium">
                      {item.quantity} x {item.name}
                    </span>
                    <div className="flex items-center space-x-2 border rounded-lg overflow-hidden">
                      <button onClick={() => handleUpdateQuantity(item.productId, -1)} className="p-1.5 hover:bg-gray-100 text-gray-600">
                        <Minus size={14} />
                      </button>
                      <span className="w-4 text-center font-semibold text-gray-700">{item.quantity}</span>
                      <button onClick={() => handleUpdateQuantity(item.productId, 1)} className="p-1.5 hover:bg-gray-100 text-gray-600">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">Contact Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      placeholder="Dr. John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Pharmacy / Company Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      placeholder="City Care Pharmacy"
                      value={pharmacyName}
                      onChange={(e) => setPharmacyName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      placeholder="+1 234 567 8900"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || cartTotalItems === 0}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold py-3.5 rounded-xl transition-colors mt-6 shadow-md"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
