import ReviewItem from "@/app/src/components/ui/ReviewItem";
import SellerProfileCard from "@/app/src/components/ui/SellerProfileCard";

export default function ProductDetailPage() {
  return (
    <main className=" py-6">
      {/* 다른 상품 정보 */}

      <SellerProfileCard />
      <ReviewItem />

      {/* 리뷰 영역 */}
    </main>
  );
}
