"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import CartPopup from "./CartPopup";
import Link from "next/link";

export default function CartPageClient() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = []; // 빈 배열로 테스트, 실제로는 상태나 props로 관리

  return (
    <div className="p-5 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">장바구니</h1>

      {cartItems.length > 0 ? (
        <>
          <p className="text-gray-500">{cartItems.length}개 상품</p>
          <button onClick={() => setIsOpen(true)}>
            바텀시트 열기 (테스트)
          </button>
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

      <CartPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
