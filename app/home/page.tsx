import HomeHeader from "@/app/home/HomeHeader";
import RecommendProduct from "@/app/home/RecommendProduct";
import BottomNavigation from "@/app/src/components/common/BottomNavigation";
import SellerProfileClear from "@/app/src/components/ui/SellerProfileClear";
import ProductCard from "@/app/src/components/ui/ProductCard";
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
    <>
      <HomeHeader />
      <div className="p-5 flex flex-col gap-6 mt-14 mb-10">
        <Image src="/Hero.png" alt="banner" height={460} width={350}></Image>
        <div>
          <p className="text-display-5 font-semibold pb-4">오늘의 추천 반찬</p>
          <div className="flex gap-1 overflow-x-auto pb-4 -mx-5 px-5">
            <RecommendProduct />
            <RecommendProduct />
            <RecommendProduct />
            <RecommendProduct />
          </div>
        </div>
        <div className="border-b-[0.5px] border-gray-400 pb-4">
          <p className="text-display-5 font-semibold pb-4">
            오늘의 추천 주부님
          </p>
          <div className="flex gap-1 overflow-x-auto pb-4 -mx-5 px-5">
            <div className="shrink-0 w-28">
              <Image
                src="/food2.png"
                alt="음식"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 w-28">
              <Image
                src="/food2.png"
                alt="음식"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 w-28">
              <Image
                src="/food2.png"
                alt="음식"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 w-28">
              <Image
                src="/food2.png"
                alt="음식"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
          </div>
          <SellerProfileClear />
        </div>
        <div className="grid grid-cols-2">
          <ProductCard
            imageSrc="/food2.png"
            chefName="김미숙 주부9단"
            dishName="얼큰한 김치찌개"
            rating={4.9}
            reviewCount={13}
            price={8500}
            initialWished={true}
          />
          <ProductCard
            imageSrc="/food1.png"
            chefName="박영희 주부8단"
            dishName="소고기 장조림"
            rating={4.8}
            reviewCount={25}
            price={12000}
            initialWished={false}
          />
          <ProductCard
            imageSrc="/food2.png"
            chefName="김미숙 주부9단"
            dishName="얼큰한 김치찌개"
            rating={4.9}
            reviewCount={13}
            price={8500}
            initialWished={true}
          />
          <ProductCard
            imageSrc="/food1.png"
            chefName="박영희 주부8단"
            dishName="소고기 장조림"
            rating={4.8}
            reviewCount={25}
            price={12000}
            initialWished={false}
          />
          <ProductCard
            imageSrc="/food2.png"
            chefName="김미숙 주부9단"
            dishName="얼큰한 김치찌개"
            rating={4.9}
            reviewCount={13}
            price={8500}
            initialWished={true}
          />
          <ProductCard
            imageSrc="/food1.png"
            chefName="박영희 주부8단"
            dishName="소고기 장조림"
            rating={4.8}
            reviewCount={25}
            price={12000}
            initialWished={false}
          />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
