const img = (path) => `/img/${path}`

export const headerData = {
    logo:{
        src:img('logo.png'),
        alt:"TOCOBO",
        href:'/'
    },

    
    utils: [
        { id: "language", label: "언어", icon: img("language.svg"), href: "#" },
        { id: "search", label: "찾기", icon: img("search.svg"), href: "#" },
        { id: "profile", label: "프로필", icon: img("profile.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("cart.svg"), href: "#" },
    ],

    topBanner: {
        enabled: true,
        height: 64,                   
        items: [
            { id: "tb-1", text: "[COUPON] 로그인하면 최대 7만원 쿠폰 즉시 지급", href: "#" },
            { id: "tb-2", text: "신규 회원 가입 시 1만 마일리지 & 3종 쿠폰 즉시 지급", href: "#" },
            { id: "tb-3", text: "1초 클릭으로 즉시 사용 가능한 2,000P 적립", href: "#" },
        ],
        closeIcon: img("top-banner-close-btn.png"),
        background: "#DC272D",
        color: "#fff",
    },

    menus:[
        {
            id:'hero',
            label:'hero',
            href:'#hero',
            type:'section'
        },
        {
            id:'products',
            label:'products',
            href:'#products',
            type:'section'
        },
        {
            id:'category',
            label:'category',
            href:'#category',
            type:'section'
        },
        {
            id:'trend',
            label:'trend',
            href:'#trend',
            type:'section'
        },
        {
            id:'instargram',
            label:'instargram',
            href:'#instargram',
            type:'section'
        },
        
    ]
}