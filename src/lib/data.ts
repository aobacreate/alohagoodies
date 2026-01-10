// Category
export const categories = [
  {
    slug: "accessories",
    title: "Accessories",
    description: "自然素材のハワイアンアクセサリー",
    image: "/images/home/cat1.webp",
  },
  {
    slug: "interior-goods",
    title: "Interior Goods",
    description: "自然のぬくもりを感じるインテリア雑貨",
    image: "/images/home/cat2.webp",
  },
  {
    slug: "kitchen-tableware",
    title: "Kitchen & Tableware",
    description: "島の暮らしを感じるキッチンウェア",
    image: "/images/home/cat3.webp",
  },
  {
    slug: "apparel-fabric",
    title: "Apparel & Fabric",
    description: "ハワイの暮らしを感じるアパレル",
    image: "/images/home/cat4.webp",
  },
] as const;

export type Category = typeof categories[number];
export type CategorySlug = Category["slug"];

// Section Text
// src/lib/data.ts

export type SectionText = {
  title: string[];
  subtitle: string[];
};

export const homeText: SectionText = {
  title: [
    "ハワイの風や空気を感じられる、",
    "小さな雑貨を集めたショップです。",
  ],
  subtitle: [
    "毎日の暮らしに、",
    "少しだけ南国のやさしさを。",
  ],
};

export const accessoriesText: SectionText = {
  title: ["自然のやさしさを、身につける。"],
  subtitle: ["Aloha Goodiesのアクセサリーコレクション"],
};

//Footer Section
export type FooterSection = {
  title: string;
  lines: string[];
};

export const footerSections: FooterSection[] = [
  {
    title: "Location",
    lines: [
      "123 Example Street",
      "Waikiki, Honolulu",
      "12345",
    ],
  },
  {
    title: "Hours",
    lines: [
      "Monday–Friday",
      "8am–6pm",
    ],
  },
  {
    title: "Contact",
    lines: [
      "hi@example.com",
      "(123)456-7890",
    ],
  },
];

// Product
export type Product = {
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const accessoriesProducts: Product[] = [
  {
    category: "accessories",
    name: "Plumeria Shell",
    price: 3200,
    description:
      "天然のシェル素材を使った、やさしい光沢のネックレス。プルメリアを思わせる軽やかなデザインで、日常にもリゾートにもなじみます。",
    image: "/images/accessories/ac1.webp",
  },
  {
    category: "accessories",
    name: "Turquoise Tide",
    price: 3800,
    description:
      "海の色を閉じ込めたようなターコイズアクセサリー。シンプルながら存在感があり、コーディネートのアクセントに最適です。",
    image: "/images/accessories/ac2.webp",
  },
  {
    category: "accessories",
    name: "Ocean Star",
    price: 2900,
    description:
      "星型モチーフが印象的な、ナチュラルテイストのアクセサリー。波や空を感じるデザインで、さりげないハワイ感を楽しめます。",
    image: "/images/accessories/ac3.webp",
  },
  {
    category: "accessories",
    name: "Palm Charm",
    price: 3400,
    description:
      "ヤシの木チャームが揺れる、軽やかなアクセサリー。カジュアルな装いに合わせやすく、毎日使いたくなる一品です。",
    image: "/images/accessories/ac4.webp",
  },
  {
    category: "accessories",
    name: "Island Wood",
    price: 3600,
    description:
      "温もりのあるウッド素材を使用した、自然派アクセサリー。シンプルで落ち着いた雰囲気が、大人のリラックススタイルに合います。",
    image: "/images/accessories/ac5.webp",
  },
  {
    category: "accessories",
    name: "Surf Spirit",
    price: 4200,
    description:
      "波をイメージしたモチーフが特徴のアクセサリー。アクティブで自由なハワイの空気を感じられるデザインです。",
    image: "/images/accessories/ac6.webp",
  },
];

export const interiorProducts: Product[] = [
  {
    category: "interior-goods",
    name: "Island Candle",
    price: 2800,
    description:
      "自然素材の器に包まれた、やさしい灯りのキャンドル。島の夕暮れを思わせる落ち着いた雰囲気を演出します。",
    image: "/images/interior-goods/in1.webp",
  },
  {
    category: "interior-goods",
    name: "Palm Tray",
    price: 3600,
    description:
      "天然素材で編まれたトレイ。キャンドルや小物をまとめて、空間に南国のアクセントを添えます。",
    image: "/images/interior-goods/in2.webp",
  },
  {
    category: "interior-goods",
    name: "Shell Decor",
    price: 2400,
    description:
      "シェルやウッドを組み合わせたウォールデコレーション。自然の表情がやさしく空間になじみます。",
    image: "/images/interior-goods/in3.webp",
  },
  {
    category: "interior-goods",
    name: "Woven Lamp",
    price: 5200,
    description:
      "手編みのシェードから広がる、あたたかな光。リラックスした時間を演出するテーブルランプです。",
    image: "/images/interior-goods/in4.webp",
  },
  {
    category: "interior-goods",
    name: "Palm Object",
    price: 4100,
    description:
      "ヤシの木をモチーフにしたウッドオブジェ。棚やサイドボードに置くだけで南国ムードに。",
    image: "/images/interior-goods/in5.webp",
  },
  {
    category: "interior-goods",
    name: "Beach Aroma",
    price: 3000,
    description:
      "海辺を思わせる香りのアロマディフューザー。暮らしに穏やかなリゾート感をプラスします。",
    image: "/images/interior-goods/in6.webp",
  },
];

export const kitchenProducts: Product[] = [
  {
    category: "kitchen-tableware",
    name: "Palm Mug",
    price: 2600,
    description:
      "ヤシの葉モチーフをあしらったマグカップ。毎日のコーヒータイムに南国のやさしさを添えます。",
    image: "/images/kitchen-tableware/ki1.webp",
  },
  {
    category: "kitchen-tableware",
    name: "Island Bowl",
    price: 3400,
    description:
      "自然な色合いと曲線が美しいボウル。食卓にもインテリアにもなじむデザインです。",
    image: "/images/kitchen-tableware/ki2.webp",
  },
  {
    category: "kitchen-tableware",
    name: "Palm Plate",
    price: 3000,
    description:
      "南国モチーフを描いたプレート。軽やかなデザインで日常使いに最適です。",
    image: "/images/kitchen-tableware/ki3.webp",
  },
  {
    category: "kitchen-tableware",
    name: "Tea Pot",
    price: 4800,
    description:
      "やわらかなフォルムのティーポット。ゆったりとした島時間を楽しめます。",
    image: "/images/kitchen-tableware/ki4.webp",
  },
  {
    category: "kitchen-tableware",
    name: "Island Cup",
    price: 2400,
    description:
      "手になじむサイズ感のカップ。シンプルながら温もりのある仕上がりです。",
    image: "/images/kitchen-tableware/ki5.webp",
  },
  {
    category: "kitchen-tableware",
    name: "Palm Cloth",
    price: 2200,
    description:
      "ヤシ柄をあしらったキッチンクロス。食卓や収納のアクセントにも。",
    image: "/images/kitchen-tableware/ki6.webp",
  },
];

export const apparelProducts: Product[] = [
  {
    category: "apparel-fabric",
    name: "Island Tote",
    price: 4200,
    description:
      "自然素材を使ったトートバッグ。軽やかで、日常にもリゾートにも使いやすいデザインです。",
    image: "/images/apparel-fabric/ap1.webp",
  },
  {
    category: "apparel-fabric",
    name: "Aloha Dress",
    price: 6800,
    description:
      "南国モチーフをあしらったワンピース。風を感じる、やさしい着心地です。",
    image: "/images/apparel-fabric/ap2.webp",
  },
  {
    category: "apparel-fabric",
    name: "Island Shirt",
    price: 5200,
    description:
      "自然な色合いのアロハシャツ。リラックスした島の雰囲気を楽しめます。",
    image: "/images/apparel-fabric/ap3.webp",
  },
  {
    category: "apparel-fabric",
    name: "Palm Towel",
    price: 3000,
    description:
      "肌ざわりのよいファブリックタオル。ビーチやお部屋で心地よく使えます。",
    image: "/images/apparel-fabric/ap4.webp",
  },
  {
    category: "apparel-fabric",
    name: "Beach Bag",
    price: 4500,
    description:
      "たっぷり入る布製バッグ。ナチュラルな素材感がコーディネートに映えます。",
    image: "/images/apparel-fabric/ap5.webp",
  },
  {
    category: "apparel-fabric",
    name: "Island Wear",
    price: 5900,
    description:
      "軽やかな素材のリゾートウェア。島の暮らしを感じる一着です。",
    image: "/images/apparel-fabric/ap6.webp",
  },
];

// CategoryMap
export type CategoryData = {
  sectionText: SectionText;
  products: Product[];
};

export type CategoryMap = Record<CategorySlug, CategoryData>;

export const categoryMap: CategoryMap = {
  "accessories": {
    sectionText: accessoriesText,
    products: accessoriesProducts,
  },
  "interior-goods": {
    sectionText: {
      title: ["自然のぬくもりを、部屋に。"],
      subtitle: ["Aloha Goodiesのインテリアコレクション"],
    },
    products: interiorProducts, 
  },
  "kitchen-tableware": {
    sectionText: {
      title: ["島の暮らしを、食卓に。"],
      subtitle: ["Aloha Goodiesのキッチン＆テーブルウェア"],
    },
    products: kitchenProducts,
  },
  "apparel-fabric": {
    sectionText: {
      title: ["ハワイの風を、毎日に。"],
      subtitle: ["Aloha Goodiesのアパレル＆布小物"],
    },
    products: apparelProducts,
  },
};
