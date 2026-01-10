"use client";
import { useState } from "react";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TagLine from "@/components/common/TagLine";
import ProductCard from "@/components/product/card";
import DetailCard from "@/components/product/detail";
import { accessoriesText, type SectionText } from "@/lib/data";
import { accessoriesProducts, type Product } from "@/lib/data";

export default function Accesories() {
  const [selectedCard, setSelectedCard] = useState<Product | null>(null);

  return (
    <>
      <Header title="Accesories" />
      <TagLine section={accessoriesText} />
      <div className="mx-auto w-full max-w-[340px] md:max-w-[720px] px-2 space-y-4 mt-8 mb-16">
        <div className="grid gap-x-2 gap-y-8 grid-cols-2 md:grid-cols-4">
        {accessoriesProducts.map((card) => (
          <div
            key={card.name}
            onClick={() => setSelectedCard(card)}
            className="cursor-pointer"
          >
           <ProductCard card={card} />
          </div>
        ))}
        </div>
      </div>
      
      {/* ===== Overlay ===== */}
      {selectedCard && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40
          "
          onClick={() => setSelectedCard(null)}
        >
          {/* クリック伝播防止 */}
          <div onClick={(e) => e.stopPropagation()}>
            <DetailCard card={selectedCard} onClose={() => setSelectedCard(null)}/>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
