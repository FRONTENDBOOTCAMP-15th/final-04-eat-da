import BottomFixedButton from "@/app/src/components/common/BottomFixedButton";
import OrderProductItem from "@/app/src/components/ui/OrderProductItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "잇다 구매완료",
  openGraph: {
    title: "잇다 구매완료",
    description: "구매완료 페이지",
    url: "/checkout/complete",
  },
};

export default function CheckoutCompletePage() {
  return (
    <>
      <div className="p-5 space-y-5 mt-5 mb-16">
        <div className="space-y-5">
          <h2 className="text-display-6 font-semibold">결제 완료!</h2>
          <div>
            <p className="text-paragraph text-gray-600">주문이 접수되었어요.</p>
            <p className="text-paragraph text-gray-600">
              픽업 정보를 확인하고, 동네 집밥을 만나러 가보세요.
            </p>
          </div>
        </div>

        <div className="flex justify-between py-3 border-b-[0.5px] border-gray-600">
          <p className="text-paragraph font-semibold ">주문번호</p>
          <p className="text-paragraph font-semibold">ORDER - 12341234</p>
        </div>

        <OrderProductItem
          imageSrc="/food1.png"
          dishName="입에서 녹는 소고기장조림"
          chefName="김미숙 주부 9단"
          price={8500}
        />

        <div className="space-y-2.5 border-b-[0.5px] border-gray-600 pb-5">
          <div className="flex justify-between">
            <p className="text-paragraph">픽업 장소</p>
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
              >
                <path
                  d="M11.7241 5.86207C11.7241 9.61379 5.86207 13.6 5.86207 13.6C5.86207 13.6 0 9.61379 0 5.86207C0 2.57931 2.75404 0 5.86207 0C8.97009 0 11.7241 2.57931 11.7241 5.86207Z"
                  fill="#FF6155"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.86213 4.45475C5.08513 4.45475 4.45524 5.08464 4.45524 5.86164C4.45524 6.63865 5.08513 7.26854 5.86213 7.26854C6.63914 7.26854 7.26903 6.63865 7.26903 5.86164C7.26903 5.08464 6.63914 4.45475 5.86213 4.45475ZM3.04834 5.86164C3.04834 4.30763 4.30812 3.04785 5.86213 3.04785C7.41615 3.04785 8.67593 4.30763 8.67593 5.86164C8.67593 7.41566 7.41615 8.67544 5.86213 8.67544C4.30812 8.67544 3.04834 7.41566 3.04834 5.86164Z"
                  fill="white"
                />
              </svg>
              <p className="text-paragraph font-semibold">서교동 공유주방</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-paragraph">픽업 시간</p>
            <p className="text-paragraph font-semibold">10:00 - 11:00</p>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-paragraph font-semibold">총 결제 금액</p>
          <p className="text-paragraph font-semibold text-eatda-orange">
            16,500원
          </p>
        </div>
      </div>
      <BottomFixedButton as="link" href="/home">
        홈으로
      </BottomFixedButton>
    </>
  );
}
