import OrderCard from "@/app/mypage/orders/OrderCard";
import Header from "@/app/src/components/common/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "잇다 주문 관리",
  openGraph: {
    title: "잇다 주문관리 목록",
    description: "주문관리 페이지",
    url: "/mypage/orders",
  },
};

export default function OrdersPage() {
  const sampleProducts = [
    {
      imageSrc: "/food1.png",
      dishName: "김미숙님의 소고기 장조림",
      chefName: "김미숙 주부 9단",
      price: 8500,
      quantity: 2,
    },
    {
      imageSrc: "/food1.png",
      dishName: "김미숙님의 소고기 장조림",
      chefName: "김미숙 주부 9단",
      price: 8500,
      quantity: 2,
    },
  ];

  return (
    <>
      <Header
        title="주문관리"
        showBackButton={true}
        showSearch={true}
        showCart={true}
      />
      <div className="flex flex-col gap-6 p-5">
        <h2 className="text-display-6 font-semibold">주문관리</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex justify-between items-center px-3 py-4 border border-gray-300 bg-gray-200 rounded-lg">
            <span>대기중</span>
            <p className="text-paragraph-sm text-eatda-orange">1건</p>
          </button>
          <button className="flex justify-between items-center px-3 py-4 border border-gray-300 bg-gray-200 rounded-lg">
            <span>승인됨</span>
            <p className="text-paragraph-sm text-eatda-orange">1건</p>
          </button>
          <button className="flex justify-between items-center px-3 py-4 border border-gray-300 bg-gray-200 rounded-lg">
            <span>조리 완료</span>
            <p className="text-paragraph-sm text-eatda-orange">1건</p>
          </button>
          <button className="flex justify-between items-center px-3 py-4 border border-gray-300 bg-gray-200 rounded-lg">
            <span>픽업 완료</span>
            <p className="text-paragraph-sm text-eatda-orange">1건</p>
          </button>
        </div>

        <OrderCard
          status="대기중"
          orderTime="2026. 1. 8 9:30"
          products={sampleProducts}
          customerName="김자취"
          pickupDate="2026. 1. 9"
          pickupTime="10:00 - 14:00"
        />

        <OrderCard
          status="승인됨"
          orderTime="2026. 1. 7 14:20"
          products={sampleProducts}
          customerName="이주부"
          pickupDate="2026. 1. 8"
          pickupTime="12:00 - 16:00"
        />
        <OrderCard
          status="조리완료"
          orderTime="2026. 1. 7 14:20"
          products={sampleProducts}
          customerName="이주부"
          pickupDate="2026. 1. 8"
          pickupTime="12:00 - 16:00"
        />
        <OrderCard
          status="픽업완료"
          orderTime="2026. 1. 7 14:20"
          products={sampleProducts}
          customerName="이주부"
          pickupDate="2026. 1. 8"
          pickupTime="12:00 - 16:00"
        />
      </div>
    </>
  );
}
