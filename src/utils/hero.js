const img = (path) => `/img/${path}`;


// Hero 슬라이더용 "가짜 DB" 데이터
export const heroSlides = [
  {
    id: "hs-1",
    title: "PACK MORE, MOVE LIGHT<br>움직임까지 가벼운 Linke-Air",
    subtitle: "문샤넬과 함께하는 데일리 라이크 에어",
    desc: "PACK",
    ctaText: "바로 보러가기",
    ctaHref: "/products",
    image: {
      desktop: img("heroBg1.png"),
      mobile: img("heroBgM1.png"),
    },
    alt: "PACK",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "Grow Up, Pack On<br>SCHOOL DAY BACKPACK",
    subtitle: "자유롭고 활기찬 고학년을 위한 스쿨 백팩",
    desc: "스쿨 백팩",
    ctaText: "스쿨 백팩 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("heroBg2.png"),
      mobile: img("heroBgM2.png"),
    },
    alt: "스쿨 백팩",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "Super Kight for Little Kids<br>두근두근 입학, 첫 책가방 준비",
    subtitle: "액티브 키즈의 가볍고 편안한 저학년 책가방 라인업",
    desc: "키즈 책가방",
    ctaText: "키즈 책가방 보러가기",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("heroBg3.png"),
      mobile: img("heroBgM3.png"),
    },
    alt: "키즈 책가방",
    active: true,
    order: 3,
  },
  
];