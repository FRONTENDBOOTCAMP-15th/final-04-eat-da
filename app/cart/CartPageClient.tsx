"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import CartPopup from "./CartPopup";

export default function CartPageClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">장바구니</h1>
      <p className="text-gray-500">4개의 상품</p>
      <button onClick={() => setIsOpen(true)}>바텀시트 열기 (테스트)</button>
      <div className="space-y-3">
        <CartItem />
      </div>
      <CartPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
