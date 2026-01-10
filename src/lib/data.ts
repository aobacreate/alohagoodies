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
    products: [], // まだなら空でOK
  },
  "kitchen-tableware": {
    sectionText: {
      title: ["島の暮らしを、食卓に。"],
      subtitle: ["Aloha Goodiesのキッチン＆テーブルウェア"],
    },
    products: [],
  },
  "apparel-fabric": {
    sectionText: {
      title: ["ハワイの風を、毎日に。"],
      subtitle: ["Aloha Goodiesのアパレル＆布小物"],
    },
    products: [],
  },
};
