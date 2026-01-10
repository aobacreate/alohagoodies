import { type Category } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Props = {
  card: Category;
};

export default function CategoryCard({ card }: Props) {
  return (
    <div className="mx-auto w-full max-w-[340px]">
    <div className="flex flex-col justify-start items-center rounded-2xl p-4
      shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div
        className="
          relative
          w-full
          max-w-[200px]
          aspect-square
          overflow-hidden
        "
      >
      <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />        
      </div>
      <h1 className="mt-4 text-center text-xl font-semibold">{card.title}</h1>
      <p className="mt-2 mb-4 text-center text-base">{card.description}</p>
      <Link href={`/${card.slug}`}>
        <button className="
          px-8
          py-2
          text-white
          bg-[var(--color-text-primary)]
          rounded-2xl
        ">
          VIEW
        </button>
      </Link>
    </div>
    </div>
  );
}

