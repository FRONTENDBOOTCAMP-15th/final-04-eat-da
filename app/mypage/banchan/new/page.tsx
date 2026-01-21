import BottomFixedButton from "@/app/components/BottomFixedButton";
import NewBanchanClient from "@/app/mypage/banchan/new/NewBanchanClient";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "새 반찬 등록",
  description: "새 반찬 등록 페이지",
};

export default function NewBanchan() {
  return (
    <div className="flex flex-col bg-white">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-5 border-b border-gray-400">
        <h1 className="text-display-6 font-semibold text-gray-800">새 반찬 등록</h1>
        <Link href="/mypage/banchan" className="text-gray-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>
      </header>
      <NewBanchanClient />
      <BottomFixedButton as="button" formId="new-banchan-form">
        등록하기
      </BottomFixedButton>
    </div>
  );
}
