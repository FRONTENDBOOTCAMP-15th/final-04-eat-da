// /scripts/seed/seed-data.js

function formatKST(date = new Date()) {
  // "2026.1.27 11:46:37" 형식 맞추기
  const pad = (n) => String(n).padStart(2, "0");
  const yyyy = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  return `${yyyy}.${m}.${d} ${hh}:${mm}:${ss}`;
}

// ✅ 주부(판매자) 10명: 남녀 섞어서
const sellers = [
  { _id: 1, seller_id: 1, name: "김미숙", gender: "F" },
  { _id: 2, seller_id: 2, name: "양정희", gender: "F" },
  { _id: 3, seller_id: 3, name: "이선영", gender: "F" },
  { _id: 4, seller_id: 4, name: "최은지", gender: "F" },
  { _id: 5, seller_id: 5, name: "정하늘", gender: "F" },
  { _id: 6, seller_id: 6, name: "강민수", gender: "M" },
  { _id: 7, seller_id: 7, name: "오준호", gender: "M" },
  { _id: 8, seller_id: 8, name: "한도윤", gender: "M" },
  { _id: 9, seller_id: 9, name: "윤재현", gender: "M" },
  { _id: 10, seller_id: 10, name: "서지훈", gender: "M" },
];

const priceByCategory = {
  main: [8000, 16000],
  soup: [6000, 12000],
  side: [3000, 8000],
  stir: [6000, 12000],
  braise: [7000, 14000],
  steam: [7000, 15000],
  fry: [5000, 11000],
};

// ✅ 카테고리: 요구한 7종
const categories = [
  {
    key: "main",
    label: "메인반찬",
    items: [
      "제육볶음",
      "닭갈비",
      "돈까스",
      "떡갈비",
      "불고기",
      "고등어구이",
      "삼겹김치볶음",
      "LA갈비",
      "훈제오리볶음",
      "보쌈",
    ],
  },
  {
    key: "soup",
    label: "국물",
    items: [
      "김치찌개",
      "된장찌개",
      "순두부찌개",
      "미역국",
      "떡국",
      "육개장",
      "콩나물국",
      "감자탕",
      "갈비탕",
      "북엇국",
    ],
  },
  {
    key: "side",
    label: "밑반찬",
    items: [
      "오이무침",
      "콩자반",
      "무생채",
      "시금치나물",
      "도라지무침",
      "멸치볶음",
      "계란말이",
      "진미채무침",
      "감자샐러드",
      "고사리나물",
    ],
  },
  {
    key: "stir",
    label: "볶음",
    items: [
      "소시지야채볶음",
      "새우볶음",
      "오징어볶음",
      "김치볶음",
      "버섯볶음",
      "어묵볶음",
      "두부김치",
      "가지볶음",
      "닭똥집볶음",
      "주꾸미볶음",
    ],
  },
  {
    key: "braise",
    label: "조림",
    items: [
      "장조림",
      "감자조림",
      "꽁치김치조림",
      "두부조림",
      "코다리조림",
      "메추리알장조림",
      "갈치조림",
      "연근조림",
      "무조림",
      "우엉조림",
    ],
  },
  {
    key: "steam",
    label: "찜",
    items: [
      "계란찜",
      "갈비찜",
      "닭찜",
      "등갈비찜",
      "아구찜",
      "콩나물찜",
      "해물찜",
      "단호박찜",
      "만두찜",
      "수육찜",
    ],
  },
  {
    key: "fry",
    label: "튀김",
    items: [
      "새우튀김",
      "김말이튀김",
      "고구마튀김",
      "오징어튀김",
      "야채튀김",
      "만두튀김",
      "닭강정",
      "돈가스",
      "치킨가라아게",
      "고추튀김",
    ],
  },
];

function makeImageUrl(categoryKey, index) {
  // 외부 이미지 placeholder (프론트에서 쓸 경우 next/image remotePatterns 설정 필요)
  return `https://picsum.photos/seed/eatda-${categoryKey}-${index}/600/600`;
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPrice(min, max, unit = 100) {
  const minUnit = Math.ceil(min / unit);
  const maxUnit = Math.floor(max / unit);
  return randomBetween(minUnit, maxUnit) * unit;
}

function pickSellerIdByIndex(i) {
  // 제품 인덱스에 따라 판매자 10명에 분배
  return sellers[(i - 1) % sellers.length].seller_id;
}

function createProducts({ startId = 1 } = {}) {
  const now = formatKST(new Date());
  let id = startId;

  const products = [];

  categories.forEach((cat) => {
    cat.items.forEach((name, idx) => {
      const sellerId = pickSellerIdByIndex(id);
      const [min, max] = priceByCategory[cat.key];

      products.push({
        _id: id,
        createdAt: now,
        updatedAt: now,
        seller_id: sellerId,
        price: randomPrice(min, max),
        show: true,
        active: true,
        name,
        quantity: randomBetween(30, 300),
        buyQuantity: randomBetween(0, 30),
        mainImages: [
          {
            path: makeImageUrl(cat.key, idx + 1),
            name: `banchan_${cat.key}_${String(idx + 1).padStart(2, "0")}.png`,
          },
        ],
        content: `${sellers[sellerId - 1].name} 주부님이 만든 ${name}`,
        extra: {
          isNew: idx < 3, // 각 카테고리 앞 3개는 New
          isBest: idx % 4 === 0, // 4개마다 Best
          category: [cat.key], // ✅ key를 category로 저장
          categoryLabel: cat.label, // (선택) UI용 레이블
        },
      });

      id += 1;
    });
  });

  return products;
}

const products = createProducts({ startId: 1 });

module.exports = {
  sellers,
  products,
};
