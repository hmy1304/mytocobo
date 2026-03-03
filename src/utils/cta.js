const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 1,
    slug: "padding jarket",
    name: "패딩 자켓",
    href: "/category/make-up/61/",
    img: {
      src: img("cta1.png"),
      alt: "패딩 자켓",
    },
  },
  {
    id: 2,
    slug: "short",
    name: "숏패딩",
    href: "/category/sun/42/",
    img: {
      src: img("cta2.png"),

      alt: "숏패딩",
    },
  },
  {
    id: 3,
    slug: "long",
    name: "롱자켓",
    href: "/category/lip/52/",
    img: {
      src: img("cta3.png"),

      alt: "롱자켓",
    },
  },
  {
    id: 4,
    slug: "winter",
    name: "윈터 슈즈",
    href: "/category/skincare/50/",
    img: {
      src: img("cta4.png"),

      alt: "윈터 슈즈",
    },
  },
  {
    id: 5,
    slug: "backpack",
    name: "백팩",
    href: "/category/cleansing/47/",
    img: {
      src: img("cta5.png"),

      alt: "백팩",
    },
  },
  
];

export default categories;