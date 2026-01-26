// components/CartPopup.tsx
"use client";

import { CartPopupProps } from "@/types/cart";
import CartPopupItem from "./CartPopupItem";

export default function CartPopup({
  isOpen,
  onClose,
  items,
  onQuantityChange,
  onRemoveItem,
  onAddToCart,
  onBuyNow,
}: CartPopupProps) {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[70vh] overflow-y-auto">
        <div className="p-5 flex flex-col gap-5">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto" />

          {items.map((item) => (
            <CartPopupItem
              key={item.id}
              item={item}
              onQuantityChange={(newQuantity) =>
                onQuantityChange(item.id, newQuantity)
              }
              onRemove={() => onRemoveItem(item.id)}
            />
          ))}

          <div className="flex justify-between">
            <p className="text-display-2 font-semibold">총 결제 금액</p>
            <p className="text-display-2 font-semibold text-eatda-orange">
              {totalAmount.toLocaleString()}원
            </p>
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={onAddToCart}
              className="py-4 w-full bg-gray-200 border-gray-300 rounded-lg font-semibold"
            >
              장바구니 담기
            </button>
            <button
              onClick={onBuyNow}
              className="py-4 w-full rounded-lg font-semibold bg-eatda-orange text-white"
            >
              바로 구매하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
