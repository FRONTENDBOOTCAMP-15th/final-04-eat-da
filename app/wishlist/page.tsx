import WishListItem from "@/app/wishlist/WishListItem";
import WishSmallItem from "@/app/src/components/ui/WishSmallItem";
import { Metadata } from "next";
import Header from "@/app/src/components/common/Header";
import BottomNavigation from "@/app/src/components/common/BottomNavigation";

export const metadata: Metadata = {
  title: "잇다 찜 목록",
  openGraph: {
    title: "잇다 찜 목록",
    description: "찜 페이지",
    url: "/wishlist",
  },
};

export default function WishlistPage() {
  return (
    <>
      <Header
        title="위시리스트"
        showBackButton={true}
        showSearch={true}
        showCart={true}
      />
      <div className="mt-20 mb-15">
        <div className="grid grid-cols-2">
          <WishSmallItem
            imageSrc="/food2.png"
            chefName="김미숙 주부9단"
            dishName="얼큰한 김치찌개"
            rating={4.9}
            reviewCount={13}
            price={8500}
            initialWished={true}
          />
          <WishSmallItem
            imageSrc="/food1.png"
            chefName="박영희 주부8단"
            dishName="소고기 장조림"
            rating={4.8}
            reviewCount={25}
            price={12000}
            initialWished={false}
          />
          <WishSmallItem
            imageSrc="/food2.png"
            chefName="김미숙 주부9단"
            dishName="얼큰한 김치찌개"
            rating={4.9}
            reviewCount={13}
            price={8500}
            initialWished={true}
          />
          <WishSmallItem
            imageSrc="/food1.png"
            chefName="박영희 주부8단"
            dishName="소고기 장조림"
            rating={4.8}
            reviewCount={25}
            price={12000}
            initialWished={false}
          />
          <WishSmallItem
            imageSrc="/food2.png"
            chefName="김미숙 주부9단"
            dishName="얼큰한 김치찌개"
            rating={4.9}
            reviewCount={13}
            price={8500}
            initialWished={true}
          />
          <WishSmallItem
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
