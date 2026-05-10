import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ShopDetails from "@/components/ShopDetails";
import {
  getAllProductHandles,
  getProductByHandle,
} from "@/lib/medusa/products";

type PageProps = {
  params: Promise<{ handle: string }>;
};

export async function generateStaticParams() {
  const handles = await getAllProductHandles();
  return handles.map((handle) => ({ handle }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) {
    return {
      title: "Shop Details | NextCommerce",
    };
  }
  return {
    title: `${product.title} | NextCommerce`,
    description: product.title,
  };
}

const ShopDetailsByHandlePage = async ({ params }: PageProps) => {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) {
    notFound();
  }
  // We pass the live product as a prop. ShopDetails uses it where possible;
  // the rest of its rich UI (storage/sim/color pickers) is template-only and
  // remains as-is per the directive's "don't restructure components" rule.
  return (
    <main>
      <ShopDetails initialProduct={product} />
    </main>
  );
};

export default ShopDetailsByHandlePage;
