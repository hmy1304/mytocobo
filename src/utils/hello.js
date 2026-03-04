const img = (path) => `/img/${path}`;
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("hello-img.png"),   // public 폴더 기준
    alt: "backpack",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  eyebrow: "Wecome to Discovery!",
  title: "Take<br>Your backpack",
  description:
    "당신의 취향에 맞는 상품을 골라가세요<br>당신의 마음에 든다면 고민 없이 디스커버리에서<br>골라가세요",
  cta: {
    label: "More Produts",
    href: "/about"
  }
};