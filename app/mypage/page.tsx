import MyPageClient from "@/app/mypage/MyPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이페이지",
  description: "사용자 정보 및 메뉴",
};

export default function MyPage() {
  return (
    <div className="px-5 flex flex-col gap-5">
      <header className="flex gap-4 pt-21">
        <h1 className="text-display-6 text-gray-800 font-semibold">
          마이페이지
        </h1>
      </header>
      <MyPageClient />
    </div>
  );
}
