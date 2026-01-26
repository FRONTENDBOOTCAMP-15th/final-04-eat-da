import CategoryTabs from "@/app/products/components/CategoryTabs";
import BottomNavigation from "@/app/src/components/common/BottomNavigation";
import Header from "@/app/src/components/common/Header";
import ProductCard from "@/app/src/components/ui/ProductCard";

export default function ProductsList() {
  return (
    <>
      {/* 헤더 */}
      <Header title="서교동 공유주방" showBackButton showSearch showCart />
      <CategoryTabs />
      <div className="mt-25 mb-16 grid grid-cols-2">
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
      <BottomNavigation />
    </>
  );
}
