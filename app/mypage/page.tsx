import MyPageClient from "@/app/mypage/MyPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이페이지",
  description: "사용자 정보 및 메뉴",
};

export default function MyPage() {
  return <MyPageClient />;
}
