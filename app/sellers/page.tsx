import SellerCard from "@/app/sellers/components/SellerCard";
import BottomFixedButton from "@/app/src/components/common/BottomFixedButton";
import BottomNavigation from "@/app/src/components/common/BottomNavigation";
import Header from "@/app/src/components/common/Header";

export default function SellersList() {
  {
    /* 리뷰 리스트 */
  }
  const reviews = [{ id: "r1" }, { id: "r2" }, { id: "r3" }];

  return (
    <div className="flex flex-col gap-7.5 mt-15 pb-23">
      <Header title="주부 목록" showBackButton showSearch showCart />
      <div>
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
      <BottomNavigation />
    </div>
  );
}
