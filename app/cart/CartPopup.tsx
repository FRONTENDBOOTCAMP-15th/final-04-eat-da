"use client";

import CartItem from "./CartItem";

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPopup({ isOpen, onClose }: CartPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[70vh] overflow-y-auto animate-slide-up">
        <div className="p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-4">장바구니</h2>
          <div className="space-y-3">
            <CartItem />
          </div>

          <div className="mt-4 space-y-2">
            <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold">
              장바구니 보기
            </button>
            <button
              className="w-full bg-gray-200 py-3 rounded-lg font-semibold"
              onClick={onClose}
            >
              계속 쇼핑하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
