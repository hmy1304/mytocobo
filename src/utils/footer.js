// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube, FaFacebookSquare } from "react-icons/fa";


// 로고
export const logoData = {
  src: img("logo.png"),
  alt: "DISCVERY 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "(주) 에프앤에프 사업자 정보 ",
  "대표: 김창수 / 서울특별시 강남구 테헤란로8길 8",
  "사업자 등록번호: 153-81-02451",
  "통신판매업 신고번호: 제2021-서울강남-03353호",
  "개인정보보호 책임자: 류영석",
  "교환/반품 반송처: 경기도 이천시 대원면 초지리 57 F&F 물류센터 디스커버리 물류부",
  "고객센터: 080-820-8802 / 운영시간: 평일 오전 9시 - 오후 6시(토/일/공휴일 휴무)",
];
export const footerLegal = {
  copyright: "이용약관 | 개인정보처리방침",
  links: [
    { label: "[인증범위] 에프앤에프 온라인 쇼핑몰 서비스 운영", href: "/service" },
    { label: "[유효기간] 2023.08.16 - 2026.08.15", href: "/date" },
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "080-820-8802", href: "tel:0808208802" },
  hours: "운영시간: 평일 오전 9시 - 오후 6시",
  notice: "(토/일/공휴일 휴무)",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Family Site",
    items: [
      { label: "MLB", href: "/mlb" },
      { label: "MLB KIDS", href: "/mlb-kids" },
      { label: "DUVETICA", href: "/duvetica" },
      { label: "SUPRA", href: "/supra" },
      { label: "BANILA CO", href: "/banila-co" },
      { label: "COLLECTED", href: "/collected" },
      { label: "F&F", href: "/f&f" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "Female", href: "/shop/female" },
      { label: "Male", href: "/shop/male" },
      { label: "Backpack", href: "/shop/backpack" },
      { label: "Shoses", href: "/shop/Shoses" },
      { label: "Item", href: "/shop/item" },
      { label: "Kids", href: "/shop/kids" },
    ],
  },
  {
    title: "Promotion",
    items: [{ label: "Promot", href: "/promot" }],
    items: [{ label: "Ion", href: "/ion" }],
  },
  {
    title: "Community",
    items: [
      { label: "Notice", href: "/notice" },
      { label: "FAQ", href: "/faq" },
      { label: "Review", href: "/review" },
      { label: "1:1 CS", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "facebook",
    label: "facebook",
    href: "https://www.facebook.com/your-channel",
    icon: FaFacebookSquare
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "instagram-kid",
    label: "Instagram-kid",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
