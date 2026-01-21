import PurchasesClient from "@/app/mypage/purchases/PurchasesClient";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "구매 내역",
  description: "구매 내역 페이지",
};

export default function MyPage() {
  return (
    <>
      <div className="px-5 flex flex-col gap-5 min-h-screen">
        <header className="flex gap-4 pt-21 ">
          <Link href={"/mypage"} className="flex items-center">
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
            구매 내역
          </h1>
        </header>
        <PurchasesClient />
      </div>
    </>
  );
}
