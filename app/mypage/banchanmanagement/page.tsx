import BottomFixedButton from "@/app/src/components/common/BottomFixedButton";
import BanchanManagementClient from "@/app/mypage/banchanmanagement/BanchanManagementClient";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "반찬 관리",
  description: "판매자 반찬 관리 페이지",
};

export default function BanchanManagement() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-5 flex flex-col gap-7.5 flex-1 pb-22.5">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Link>
          <h1 className="text-display-6 text-gray-800 font-semibold">
            반찬 관리
          </h1>
        </header>
        <BanchanManagementClient />
      </div>
      <BottomFixedButton as="link" href="/mypage/banchanmanagement/NewBanchan">
        새 반찬 등록하기
      </BottomFixedButton>
    </div>
  );
}
