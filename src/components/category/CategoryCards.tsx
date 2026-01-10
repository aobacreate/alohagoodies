"use client";

import ProductCard from "@/components/product/card";
import { type Product } from "@/lib/data";

type Props = {
  title: string;
  products: Product[];
  onSelectCard: (card: Product) => void; 
}


export default function CategoryCards({title, products, onSelectCard}: Props) {
  const displayTitle = title
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");
  
  return (
    <div className="mx-auto w-full max-w-[340px] md:max-w-[720px] px-2 space-y-4 mt-8 mb-16">
      {/* カテゴリタイトル */}
      <h2 className="text-lg font-semibold text-center">
        {displayTitle}
      </h2>
      <div className="grid gap-x-2 gap-y-8 grid-cols-2 md:grid-cols-4">
      {products.map((card) => (
        <div
          key={card.name}
          className="cursor-pointer"
          onClick={() => onSelectCard(card)}
        >
          <ProductCard card={card} />
        </div>
      ))}
      </div>
    </div> 
  );
}