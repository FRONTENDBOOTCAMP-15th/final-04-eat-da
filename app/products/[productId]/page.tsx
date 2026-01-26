import IngredientList from "@/app/products/[productId]/components/IngredientList";
import ProductImageSlider from "@/app/products/[productId]/components/ProductImageSlider";
import HeartItem from "@/app/src/components/ui/HeartItem";
import ReviewItem from "@/app/src/components/ui/ReviewItem";
import SellerProfileCard from "@/app/src/components/ui/SellerProfileCard";
import ReviewList from "@/app/src/components/ui/ReviewList";
import Header from "@/app/src/components/common/Header";
import BottomFixedButton from "@/app/src/components/common/BottomFixedButton";

export default function ProductDetailPage() {
  {
    /* 반찬 이미지 경로 */
  }
  const productImages = [
    "/food/food_01.png",
    "/food/food_01.png",
    "/food/food_01.png",
  ];
  {
    /* 반찬 재로, 설명 */
  }
  const menuData = {
    title: "얼큰한 김치찌개",
    ingredients: ["돼지고기", "김치", "두부", "대파", "고춧가루"],
    description: "직접 담근 김치로 꽁인 얼큰한 김치찌개. 2인분 용량입니다.",
    amount: "2인분",
    store: "서교동 공유주방",
    stock: "8개",
  };
  {
    /* 리뷰 리스트 */
  }
  const reviews = [{ id: "r1" }, { id: "r2" }, { id: "r3" }];

  return (
    <main className="flex flex-col mt-12.5 gap-5 pb-23">
      {/* 헤더 */}
      <Header title=" " showBackButton showSearch showCart />
      {/* 상품 정보 */}
      <ProductImageSlider images={productImages} />
      {/* 반찬이름 */}
      <div className="flex mx-5 items-center ">
        <h1 className=" w-full text-display-7 font-semibold">
          얼큰한 김치찌개
        </h1>
        <HeartItem size={24} />
      </div>
      {/* 주부 소개 */}
      <SellerProfileCard />
      {/* 메뉴 정보 */}
      <div className=" flex flex-col px-5 gap-4">
        <div className=" flex flex-col gap-1">
          <h5 className="text-paragraph">메뉴 소개</h5>
          <p className="text-paragraph text-gray-600">{menuData.description}</p>
        </div>
        {/* 재료 */}
        <div className=" flex flex-col gap-1 pb-5 border-b-[0.5px] border-gray-400">
          <h5 className="text-paragraph mb-1">재료</h5>
          <IngredientList ingredients={menuData.ingredients} />
        </div>
        {/* n인분 */}
        <div className="flex justify-between border-b-[0.5px] border-gray-400 pb-4">
          <h5 className="text-paragraph">인분</h5>
          <p className="text-paragraph">{menuData.amount}</p>
        </div>
        {/* 픽업장소&남은수량 */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between ">
            <h5 className="text-paragraph">픽업장소</h5>
            <p className="text-paragraph">{menuData.store}</p>
          </div>
          <div className="flex justify-between border-b-[0.5px] border-gray-400 pb-4">
            <h5 className="text-paragraph">남은 수량</h5>
            <p className="text-paragraph">{menuData.stock}</p>
          </div>
        </div>
      </div>
      {/* 리뷰 */}
      <div className="gap-0">
        <ReviewList reviews={reviews} />
      </div>

      <BottomFixedButton as="link" href={`/order/${"임시"}`}>
        구매하기
      </BottomFixedButton>
    </main>
  );
}
