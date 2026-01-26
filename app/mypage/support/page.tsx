import { Metadata } from "next";
import SupportPageClient from "./SupportPageClient";

export const metadata: Metadata = {
  title: "잇다 고객센터",
  openGraph: {
    title: "잇다 고객센터",
    description: "고객센터 페이지",
    url: "/mypage/support",
  },
};

export default function SupportPage() {
  return <SupportPageClient />;
}
