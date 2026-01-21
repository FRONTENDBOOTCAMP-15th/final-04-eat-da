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

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[70vh] overflow-y-auto">
        <div className="p-5 flex flex-col gap-5">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto" />

          <div className="flex justify-between pb-3 border-b-[0.5px] border-gray-400">
            <p className="text-display-2">얼큰한 김치찌개</p>
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M16.4179 9.38184H2.34521"
                    stroke="#353E5C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <p className="flex items-center justify-center text-paragraph">
                2
              </p>
              <button className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M9.33301 2.33398V16.334"
                    stroke="#353E5C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.333 9.3335H2.33301"
                    stroke="#353E5C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="ml-4 items-center mb-1 w-3.5 h-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M0 6.3C0 2.82061 2.82061 0 6.3 0C9.77943 0 12.6 2.82061 12.6 6.3C12.6 9.77943 9.77943 12.6 6.3 12.6C2.82061 12.6 0 9.77943 0 6.3Z"
                    fill="#E1E4ED"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.88424 3.88376C4.13876 3.62924 4.55141 3.62924 4.80592 3.88376L8.71627 7.7941C8.97078 8.04862 8.97078 8.46126 8.71627 8.71578C8.46175 8.97029 8.0491 8.97029 7.79459 8.71578L3.88424 4.80543C3.62973 4.55092 3.62973 4.13827 3.88424 3.88376Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.71627 3.88376C8.97078 4.13827 8.97078 4.55092 8.71627 4.80543L4.80592 8.71578C4.55141 8.97029 4.13876 8.97029 3.88424 8.71578C3.62973 8.46126 3.62973 8.04862 3.88424 7.7941L7.79459 3.88376C8.0491 3.62924 8.46175 3.62924 8.71627 3.88376Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-display-2 font-semibold">총 결제 금액</p>
            <p className="text-display-2 font-semibold text-eatda-orange">
              16,500원
            </p>
          </div>

          <div className="flex gap-2.5">
            <button className="py-4 w-full bg-gray-200 border-gray-300 rounded-lg font-semibold">
              장바구니 담기
            </button>
            <button
              className="py-4 w-full rounded-lg font-semibold bg-eatda-orange text-white"
              onClick={onClose}
            >
              바로 구매하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
