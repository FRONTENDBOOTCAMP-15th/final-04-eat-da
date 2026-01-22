import RecommendProduct from "@/app/home/RecommendProduct";
import WishSmallItem from "@/app/wishlist/WishSmallItem";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "잇다 홈",
  openGraph: {
    title: "잇다 홈",
    description: "홈 페이지",
    url: "/home",
  },
};

export default function Home() {
  return (
    <div className="p-5">
      <Image src="/Hero.png" alt="banner" height={460} width={350}></Image>
      <div>
        <p>오늘의 추천 반찬</p>
        <div className="flex gap-1 overflow-x-auto pb-4">
          <RecommendProduct />
          <RecommendProduct />
          <RecommendProduct />
          <RecommendProduct />
        </div>
      </div>
      <div>
        <p>오늘의 추천 주부님</p>
        component
      </div>
      <div className="grid grid-cols-2">
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
      </div>
    </div>
  );
}
