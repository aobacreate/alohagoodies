import { type Product } from "@/lib/data";
import Image from "next/image";

type Props = {
  card: Product;
};

export default function ProductCard({ card }: Props) {
  return (
    <div className="mx-auto w-full max-w-[152px]">
    <div className="flex flex-col justify-start items-center rounded-2xl p-4
      shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div
        className="
          relative
          w-full
          max-w-[128px]
          aspect-square
          overflow-hidden
        "
      >
      <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover"
        />        
      </div>
      <h1 className="mt-4 text-center text-base font-semibold">{card.name}</h1>
      <p className="mt-2 mb-4 text-center text-base">￥{card.price}</p>
    </div>
    </div>
  );
}