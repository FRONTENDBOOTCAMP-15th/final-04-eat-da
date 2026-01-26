"use client";

import Link from "next/link";

export default function MyPageClient() {
  // 나중에 실제 사용자 정보로 변경 예정
  const isSeller = true; // true: 판매자, false: 구매자
  const userName = "박주부";
  const userEmail = "jubu@gmail.com";

  return (
    <div className="px-5 py-15.5 flex flex-col gap-5">
      {/* 프로필 섹션 */}
      <section className="p-5 border border-gray-400 rounded-lg bg-gray-200">
        <div className="flex items-start gap-2.5">
          {/* 프로필 이미지 */}
          <div className="w-15 h-15 rounded-full bg-gray-600"></div>

          {/* 사용자 정보 */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-gray-800">{userName}</h2>
              <span className="text-xs text-gray-600">주부 9단</span>
            </div>
            <p className="text-sm text-gray-600">{userEmail}</p>
            <div className="flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8621 7.06226C13.8621 10.814 8.00001 14.8002 8.00001 14.8002C8.00001 14.8002 2.13794 10.814 2.13794 7.06226C2.13794 3.77951 4.89198 1.2002 8.00001 1.2002C11.108 1.2002 13.8621 3.77951 13.8621 7.06226Z"
                  className="fill-eatda-orange"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00007 5.65494C7.22306 5.65494 6.59318 6.28483 6.59318 7.06184C6.59318 7.83885 7.22306 8.46874 8.00007 8.46874C8.77708 8.46874 9.40697 7.83885 9.40697 7.06184C9.40697 6.28483 8.77708 5.65494 8.00007 5.65494ZM5.18628 7.06184C5.18628 5.50782 6.44606 4.24805 8.00007 4.24805C9.55409 4.24805 10.8139 5.50782 10.8139 7.06184C10.8139 8.61585 9.55409 9.87563 8.00007 9.87563C6.44606 9.87563 5.18628 8.61585 5.18628 7.06184Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm text-gray-700">서교동</span>
            </div>
          </div>

          {/* 로그아웃 */}
          <button className="text-sm text-nowrap text-gray-600 hover:text-gray-700">
            로그아웃
          </button>
        </div>

        {/* 장바구니/찜 목록 */}
        <div className="flex justify-around pt-4 gap-2.5">
          <Link
            href="/cart"
            className="bg-white rounded-lg text-center flex items-center justify-center cursor-pointer flex-1 py-4"
          >
            <div>
              <p className="text-sm font-bold text-eatda-orange">0</p>
              <p className="text-xs text-gray-600 group-hover:text-gray-700 mt-3">
                장바구니
              </p>
            </div>
          </Link>
          <Link
            href="/wishlist"
            className="bg-white rounded-lg text-center flex items-center justify-center cursor-pointer flex-1 py-4"
          >
            <div>
              <p className="text-sm font-bold text-eatda-orange">0</p>
              <p className="text-xs text-gray-600 group-hover:text-gray-700 mt-3">
                찜 목록
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 전체 리스트 */}
      <nav>
        <ul>
          {/* 판매자 전용 */}
          {isSeller && (
            <>
              <Link
                href="/mypage/banchan"
                className="block py-5 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
              >
                <span className="text-gray-800">반찬 관리</span>
              </Link>
              <Link
                href="/mypage/orders"
                className="block py-5 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
              >
                <span className="text-gray-800">주문 / 픽업 관리</span>
              </Link>
            </>
          )}

          {/* 공통 */}
          <div className="flex flex-col">
            <Link
              href="/mypage/purchases"
              className="py-5 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
            >
              <span className="text-gray-800">구매 내역</span>
            </Link>

            <Link
              href="/mypage/subscription"
              className="py-5 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
            >
              <span className="text-gray-800">구독 관리</span>
            </Link>

            <Link
              href="/review"
              className="py-5 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
            >
              <span className="text-gray-800">반찬 리뷰</span>
            </Link>

            <Link
              href="/mypage/verify"
              className="py-5 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
            >
              <span className="text-gray-800">개인 정보 설정</span>
            </Link>

            <Link
              href="/mypage/support"
              className="py-5 hover:bg-gray-200 cursor-pointer"
            >
              <span className="text-gray-800">고객센터</span>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
