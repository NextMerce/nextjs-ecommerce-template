import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";
import { getProducts } from "@/lib/medusa/products";

export const metadata: Metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "Single product detail demo.",
};

const ShopDetailsPage = async () => {
  // Fetch the first product so the shop-details demo URL (no handle) also
  // reflects live Medusa data instead of falling back to whatever happens
  // to be cached in the visitor's localStorage.
  const [firstProduct] = await getProducts({ limit: 1 });
  return (
    <main>
      <ShopDetails initialProduct={firstProduct} />
    </main>
  );
};

export default ShopDetailsPage;
