import BottomFixedButton from "@/app/src/components/common/BottomFixedButton";
import Header from "@/app/src/components/common/Header";
import ProductCard from "@/app/src/components/ui/ProductCard";
import SellerProfileCard from "@/app/src/components/ui/SellerProfileCard";
import ReviewList from "@/app/src/components/ui/ReviewList";
import { getAxios } from "@/lib/axios";
import { Product } from "@/app/src/types";

interface Seller {
  _id: number;
  name: string;
  email: string;
  image?: string;
  extra?: {
    description?: string;
    profileImage?: string;
  };
}

interface Review {
  _id: number;
  content: string;
  rating: number;
  createdAt: string;
  user?: {
    name: string;
  };
  product?: {
    name: string;
  };
  extra?: {
    images?: string[];
  };
}

async function getSeller(sellerId: string): Promise<Seller | null> {
  try {
    const axios = getAxios();
    const res = await axios.get(`/users/${sellerId}`);
    return res.data.item;
  } catch (error) {
    console.error("판매자 정보 조회 실패:", error);
    return null;
  }
}

async function getSellerProducts(sellerId: string): Promise<Product[]> {
  try {
    const axios = getAxios();
    const res = await axios.get(`/products`, {
      params: { seller_id: sellerId },
    });
    return res.data.item || [];
  } catch (error) {
    console.error("판매자 상품 조회 실패:", error);
    return [];
  }
}

async function getSellerReviews(productIds: number[]): Promise<Review[]> {
  if (productIds.length === 0) return [];

  try {
    const axios = getAxios();
    // 각 상품의 상세 정보에서 리뷰 가져오기
    const productDetails = await Promise.all(
      productIds.map((id) => axios.get(`/products/${id}`))
    );

    const allReviews: Review[] = [];
    productDetails.forEach((res) => {
      const product = res.data.item;
      const replies = product.replies || [];
      replies.forEach((reply: Review) => {
        allReviews.push({
          ...reply,
          product: { name: product.name },
        });
      });
    });

    return allReviews;
  } catch (error) {
    console.error("리뷰 조회 실패:", error);
    return [];
  }
}

export default async function SellersDetailPage({
  params,
}: {
  params: Promise<{ sellerId: string }>;
}) {
  const { sellerId } = await params;

  const [seller, products] = await Promise.all([
    getSeller(sellerId),
    getSellerProducts(sellerId),
  ]);

  // 상품 ID 목록으로 리뷰 가져오기
  const productIds = products.map((p) => p._id);
  const reviews = await getSellerReviews(productIds);

  const sellerName = seller?.name ?? "주부";
  const sellerDescription =
    seller?.extra?.description ?? "정성스럽게 만든 집밥을 나눕니다.";
  const sellerProfileImage =
    seller?.extra?.profileImage ?? seller?.image ?? "/seller/seller1.png";

  // 판매자의 총 평점과 리뷰 수 계산
  const totalRating =
    products.length > 0
      ? products.reduce((sum, p) => sum + (p.rating ?? 0), 0) / products.length
      : 0;
  const totalReviewCount = products.reduce(
    (sum, p) => sum + (p.replies ?? 0),
    0
  );

  return (
    <div className="flex flex-col gap-7.5 mt-15 pt-7.5 pb-23">
      <Header title={`${sellerName} 주부9단`} showBackButton showSearch showCart />
      <SellerProfileCard
        name={sellerName}
        rating={totalRating}
        reviewCount={totalReviewCount}
        profileImage={sellerProfileImage}
        description={sellerDescription}
      />
      {/* 반찬 리스트 */}
      <div className="grid grid-cols-2">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              imageSrc={product.mainImages?.[0]?.path ?? "/food1.png"}
              chefName={`${sellerName}`}
              dishName={product.name}
              rating={product.rating ?? 0}
              reviewCount={product.replies ?? 0}
              price={product.price}
              initialWished={Boolean(product.myBookmarkId)}
            />
          ))
        ) : (
          <div className="col-span-2 text-center py-10 text-gray-500">
            등록된 반찬이 없습니다.
          </div>
        )}
      </div>

      {/* 리뷰 리스트 */}
      <div className="gap-0">
        <ReviewList
          reviews={reviews.map((r) => ({
            id: String(r._id),
            userName: r.user?.name ?? "익명",
            rating: r.rating,
            createdAt: r.createdAt,
            productName: r.product?.name,
            content: r.content,
            images: r.extra?.images ?? [],
          }))}
        />
      </div>

      <BottomFixedButton as="link" href={`/mypage/subscription`}>
        구독하기
      </BottomFixedButton>
    </div>
  );
}
