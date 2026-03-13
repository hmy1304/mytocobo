const img = (path) => `/img/${path}`;


// Hero 슬라이더용 "가짜 DB" 데이터
export const heroSlides = [
  {
    id: "hs-1",
    title: "PACK MORE, MOVE LIGHT<br>움직임까지 가벼운 Linke-Air",
    subtitle: "문샤넬과 함께하는 데일리 라이크 에어",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "바로 보러가기",
    ctaHref: "/products",
    image: {
      desktop: img("heroBg1.png"),
      mobile: img("heroBgM1.png"),
    },
    alt: "비건 스킨케어 히어로 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "Grow Up, Pack On<br>SCHOOL DAY BACKPACK",
    subtitle: "자유롭고 활기찬 고학년을 위한 스쿨 백팩",
    desc: "가볍지만 깊게, 산뜻한 촉촉함",
    ctaText: "스쿨 백팩 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("heroBg2.png"),
      mobile: img("heroBgM2.png"),
    },
    alt: "보습 라인 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "Super Kight for Little Kids<br>두근두근 입학, 첫 책가방 준비",
    subtitle: "액티브 키즈의 가볍고 편안한 저학년 책가방 라인업",
    desc: "민감 피부를 위한 무향 포뮬러",
    ctaText: "키즈 책가방 보러가기",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("heroBg3.png"),
      mobile: img("heroBgM3.png"),
    },
    alt: "민감 피부 라인 배너",
    active: true,
    order: 3,
  },
  
];