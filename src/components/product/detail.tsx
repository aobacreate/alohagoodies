import { type Product } from "@/lib/data";
import Image from "next/image";

type Props = {
  card: Product;
  onClose: () => void;
};

export default function DetailCard({ card, onClose }: Props) {
  return (
    <div className="w-[320px] max-w-[90vw]">
      <div
        className="
          relative
          flex flex-col items-center
          rounded-2xl p-4
          bg-white
          shadow-[0_8px_24px_rgba(0,0,0,0.15)]
        "
      >
        <div className="relative w-full max-w-[256px] aspect-square overflow-hidden">
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="mt-4 text-center text-base font-semibold">
          {card.name}
        </h1>

        <p className="mt-2 text-center text-base">￥{card.price}</p>

        <p className="mt-2 text-left text-sm text-gray-600 leading-relaxed max-w-[28ch]">
          {card.description}
        </p>
        <button
          onClick={onClose}
          className="
            rounded-full border mt-3 mb-2 px-4 py-2
            text-sm text-gray-600
            hover:bg-gray-100
          "
        >
          X
        </button>
      </div>
    </div>
  );
}
