"use client";

import Header from "@/app/src/components/common/Header";
import CartItem from "./CartItem";
import Link from "next/link";
import BottomFixedButton from "@/app/src/components/common/BottomFixedButton";

export default function CartPageClient() {
  const cartItems = [1, 2, 3];

  return (
    <>
      <Header
        title="장바구니"
        showBackButton={true}
        showSearch={true}
        showHome={true}
      />
      <div className="min-h-screen flex flex-col">
        <div className="mt-6 p-5 flex-1 flex flex-col">
          {cartItems.length > 0 ? (
            <>
              <p className="text-paragraph-md mt-5 mb-3">
                {cartItems.length}개 상품
              </p>
              <div className="space-y-3">
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="text-gray-600 text-paragraph-md text-center mb-6">
                담긴 반찬이 없습니다.
                <br />
                오늘의 식탁을 채워줄 동네 반찬을 만나보세요.
              </p>
              <Link href="/">
                <button className="px-5 py-3 bg-gray-200 border border-gray-300 text-paragraph-sm rounded-lg">
                  반찬 둘러보기
                </button>
              </Link>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <BottomFixedButton as="link" href="/checkout">
            구매하기
          </BottomFixedButton>
        )}
      </div>
    </>
  );
}