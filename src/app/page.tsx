import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TagLine from "@/components/common/TagLine";
import { homeText, type SectionText, categories } from "@/lib/data";
import CategoryCard from "@/components/category/card";

export default function Home() {
  return (
    <>
      <Header title="" />
      <TagLine section={homeText} />

      <h1 className="mt-8 mb-5 text-center text-2xl font-semibold">
        Our Items
      </h1>

      <div className="mx-auto w-full max-w-[768px] px-4 space-y-8 mb-16">
        <div className="grid gap-x-2 gap-y-8 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            card={category}
          />
        ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
