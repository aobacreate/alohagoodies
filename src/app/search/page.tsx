"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { categoryMap, type CategoryMap, type Product } from "@/lib/data";
import { useState } from "react";
import CategoryCards from "@/components/category/CategoryCards";
import DetailCard from "@/components/product/detail";

export default function Search() {
  
  const [selectedCard, setSelectedCard] = useState<Product | null>(null);

  const handleSelectCard = (card: Product) => {
    setSelectedCard(card);
  };

  type CategoryKey = keyof typeof categoryMap;
  const categoryKeys = Object.keys(categoryMap) as CategoryKey[];

  const [checkedMap, setCheckedMap] = useState<Record<CategoryKey, boolean>>(
  () =>
    categoryKeys.reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<CategoryKey, boolean>)
  );

 const activeCategories = (Object.keys(checkedMap) as CategoryKey[])
  .filter((key) => checkedMap[key])
  .map((key) => ({
    key,
    ...categoryMap[key],
  }));

  return (
    <>
      <Header title="Search" />
      {/* checkbox */}
      <div className="w-full px-4 md:flex md:justify-center mt-8 mb-8">
        <div className="flex flex-col items-start space-y-2 md:w-[260px]">
        {categoryKeys.map((key) => (
          <label
            key={key}
            className="flex items-center gap-2 text-sm"
          >
            <input
              type="checkbox"
              checked={checkedMap[key]}
              onChange={() =>
                setCheckedMap((prev) => ({
                  ...prev,
                  [key]: !prev[key],
                }))
              }
            />
            <span>{key}</span>
          </label>
        ))}
        </div>
      </div>
      {/* categories */}  
      {activeCategories.map((category) => (
        <CategoryCards 
          key={category.key} 
          title={category.key} 
          products={category.products}
          onSelectCard={handleSelectCard} 
        />
      ))}
      {/* ===== Overlay ===== */}
      {selectedCard && (
        <div
          className="
            fixed inset-0 z-40
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