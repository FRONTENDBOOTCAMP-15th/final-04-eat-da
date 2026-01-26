import { OrderDetail } from "@/app/mypage/purchases/[id]/PurchasesDetailCard";
import PurchaseDetailClient from "./PurchaseDetailClient";
import { Metadata } from "next";
import Link from "next/link";
import { banchanList, BanchanItem } from "@/app/mypage/banchan/BanchanData";

export const metadata: Metadata = {
  title: "구매 내역 정보",
  description: "구매 내역 상세 정보 페이지",
};

// BanchanData를 기반으로 주문 데이터 생성
const pickupTimes = [
  "10:00 - 11:00",
  "12:00 - 13:00",
  "15:00 - 16:00",
  "18:00 - 19:00",
];

const orderData: OrderDetail[] = banchanList.items.map(
  (item: BanchanItem, index: number) => ({
    orderNumber: `2026012${index + 1}${String(index + 1001).slice(-4)}`,
    pickupLocation: item.extra.pickupLocation,
    pickupTime: pickupTimes[index % pickupTimes.length],
    totalPrice: item.price * item.quantity,
    product: {
      imageSrc: item.mainImages[0]?.path || "/food1.png",
      dishName: item.name,
      chefName: `${item.seller.name} 주부 9단`,
      price: item.price,
    },
  }),
);

export default function PurchaseDetailPage() {
  return (
    <>
      <div className="px-5 flex flex-col gap-5 min-h-screen">
        <header className="flex gap-4 pt-21">
          <Link href={"/mypage/purchases"} className="flex items-center">
            <span>
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.999999L1 9L9 17"
                  stroke="#353E5C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
          <h1 className="text-display-6 text-gray-800 font-semibold">
            구매 내역 정보
          </h1>
        </header>

        <PurchaseDetailClient orders={orderData} />
      </div>
    </>
  );
}
