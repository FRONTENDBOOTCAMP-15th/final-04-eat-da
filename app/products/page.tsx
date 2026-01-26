import CategoryTabs from "@/app/products/components/CategoryTabs";
import BottomNavigation from "@/app/src/components/common/BottomNavigation";
import Header from "@/app/src/components/common/Header";
import WishSmallItem from "@/app/src/components/ui/WishSmallItem";

export default function ProductsList() {
  return (
    <>
      {/* 헤더 */}
      <Header title="반찬 목록" showBackButton showSearch showCart />
      <CategoryTabs />
      <div className="mt-30 grid grid-cols-2">
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
      <BottomNavigation />
    </>
  );
}
