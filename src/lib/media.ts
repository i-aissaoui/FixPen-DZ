export type MediaImage = {
  src: string;
  altAr: string;
  altFr: string;
  labelAr: string;
  labelFr: string;
  width: number;
  height: number;
};

export const MEDIA_IMAGES: MediaImage[] = [
  {
    src: "/images/product-01.webp",
    altAr: "صورة المنتج والعلبة",
    altFr: "Product and box",
    labelAr: "القلم والعلبة",
    labelFr: "Pen & box",
    width: 900,
    height: 900,
  },
  {
    src: "/images/product-02.webp",
    altAr: "تفاصيل درجات الألوان",
    altFr: "Shade details",
    labelAr: "درجات الألوان",
    labelFr: "Shades",
    width: 900,
    height: 900,
  },
  {
    src: "/images/product-03.webp",
    altAr: "القلم على سطح خشبي",
    altFr: "Pen on a wooden surface",
    labelAr: "على الخشب",
    labelFr: "On wood",
    width: 900,
    height: 900,
  },
  {
    src: "/images/product-04.webp",
    altAr: "نتيجة التصليح",
    altFr: "Repair result",
    labelAr: "بعد التصليح",
    labelFr: "After repair",
    width: 900,
    height: 900,
  },
  {
    src: "/images/product-05.webp",
    altAr: "مجموعة الأقلام",
    altFr: "Pen set",
    labelAr: "مجموعة الأقلام",
    labelFr: "Pen set",
    width: 900,
    height: 900,
  },
  {
    src: "/images/product-06.webp",
    altAr: "صورة أفقية للمنتج",
    altFr: "Wide product shot",
    labelAr: "صورة المنتج",
    labelFr: "Product shot",
    width: 900,
    height: 672,
  },
  {
    src: "/images/product-07.webp",
    altAr: "استخدام عملي للقلم",
    altFr: "Pen in use",
    labelAr: "استعمال عملي",
    labelFr: "In use",
    width: 900,
    height: 900,
  },
];

export const DEMO_VIDEO_SRC = "/images/product-demo.mp4";
export const DEMO_POSTER_SRC = "/images/product-demo-poster.webp";
export const DEMO_VIDEO_WIDTH = 540;
export const DEMO_VIDEO_HEIGHT = 960;

export const DEMO_GIF_ALT_AR = "فيديو متحرك يوضح استعمال قلم تصليح الخدوش";
export const DEMO_GIF_ALT_FR = "Animated demo of the scratch repair pen";
