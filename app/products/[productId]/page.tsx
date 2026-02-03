'use client';

import { useEffect, useState } from 'react';
import IngredientList from '@/app/products/[productId]/components/IngredientList';
import ProductImageSlider from '@/app/products/[productId]/components/ProductImageSlider';
import HeartItem from '@/app/src/components/ui/HeartItem';
import SellerProfileCard from '@/app/src/components/ui/SellerProfileCard';
import ReviewList from '@/app/src/components/ui/ReviewList';
import Header from '@/app/src/components/common/Header';
import ProductDetailClient from '@/app/products/[productId]/ProductDetailClient';
import { getAxios } from '@/lib/axios';
import { fetchSellerTier } from '@/lib/tier';
import { Product, Reply } from '@/app/src/types/product';
import { getImageUrl } from '@/lib/review';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Reply[]>([]);
  const [userImageMap, setUserImageMap] = useState<Map<number, string>>(
    new Map()
  );
  const [sellerProfileImage, setSellerProfileImage] = useState<
    string | undefined
  >();
  const [sellerTier, setSellerTier] = useState<
    { level: number; label: string } | undefined
  >();
  const [bookmarkId, setBookmarkId] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.then(({ productId: id }) => {
      fetchProductData(id);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const fetchProductData = async (id: string) => {
    try {
      const axios = getAxios();
      const res = await axios.get(`/products/${id}/`);
      const productData = res.data.item;
      setProduct(productData);
      setBookmarkId(productData.myBookmarkId);

      const reviewsData: Reply[] = Array.isArray(productData.replies)
        ? productData.replies
        : [];
      setReviews(reviewsData);

      // 유저 이미지 가져오기
      const userIds = Array.from(
        new Set(
          reviewsData
            .map((review) => review.user?._id)
            .filter((id): id is number => typeof id === 'number')
        )
      );

      if (userIds.length > 0) {
        const imageMap = await getUserImageMap(userIds);
        setUserImageMap(imageMap);
      }

      if (productData.seller?._id) {
        // 셀러 이미지 가져오기
        const sellerImg = await getSellerImage(productData.seller._id);
        setSellerProfileImage(sellerImg);
        // 셀러 티어 가져오기
        const tier = await fetchSellerTier(productData.seller._id);
        setSellerTier(tier);
      }
    } catch (error) {
      console.error('상품 조회 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSellerImage = async (
    sellerId: number
  ): Promise<string | undefined> => {
    try {
      const axios = getAxios();
      const res = await axios.get(`/users/${sellerId}`);
      const seller = res.data.item;
      return seller?.extra?.profileImage ?? seller?.image;
    } catch (error) {
      console.error('판매자 이미지 조회 실패:', error);
      return undefined;
    }
  };

  const getUserImageMap = async (userIds: number[]) => {
    try {
      const axios = getAxios();
      const responses = await Promise.all(
        userIds.map((userId) =>
          axios
            .get(`/users/${userId}`)
            .then((res) => ({
              userId,
              image: res.data.item?.image as string | undefined,
            }))
            .catch(() => ({ userId, image: undefined }))
        )
      );

      return new Map(
        responses
          .filter((item) => item.image)
          .map((item) => [item.userId, item.image!])
      );
    } catch (error) {
      console.error('유저 이미지 조회 실패:', error);
      return new Map();
    }
  };

  const handleWishToggle = async (newWishedState: boolean) => {
    try {
      const axios = getAxios();

      if (!newWishedState && bookmarkId) {
        await axios.delete(`/bookmarks/${bookmarkId}`);
        setBookmarkId(undefined);
      } else if (newWishedState) {
        const response = await axios.post('/bookmarks/product', {
          product_id: product!._id,
        });
        setBookmarkId(response.data.item._id);
      }
    } catch (error) {
      console.error('북마크 토글 실패:', error);
    }
  };

  if (isLoading || !product) {
    return (
      <>
        <Header title=" " showBackButton showSearch showCart />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </>
    );
  }

  const extra = product.extra ?? {};
  const ingredients: string[] = extra.ingredients ?? [];
  const serving: string = extra.serving ?? '2인분';
  const pickupPlace: string = extra.pickupPlace ?? '서교동 공유주방';
  const stock: number = product.quantity ?? 0;
  const productImages = product.mainImages?.map(
    (img: { path: string }) => img.path
  ) ?? ['/food/food_01.png'];

  const seller = product.seller ?? {};
  const sellerName: string = seller.name ?? '주부';
  const sellerDescription: string =
    seller.extra?.description ?? seller.extra?.intro ?? '';
  const rating: number = product.rating ?? 0;
  const reviewCount: number = reviews.length;

  return (
    <main className="flex flex-col mt-12.5 gap-5 pb-23">
      <Header title=" " showBackButton showSearch showCart />
      <ProductImageSlider images={productImages} />

      {/* 반찬이름 */}
      <div className="flex mx-5 items-center">
        <h1 className="w-full text-display-7 font-semibold">{product.name}</h1>
        <HeartItem
          size={24}
          initialWished={Boolean(bookmarkId)}
          onToggle={handleWishToggle}
        />
      </div>

      <SellerProfileCard
        name={sellerName}
        tier={sellerTier?.label}
        rating={rating}
        reviewCount={reviewCount}
        profileImage={sellerProfileImage}
        description={sellerDescription}
      />

      <div className="flex flex-col px-5 gap-4">
        <div className="flex flex-col gap-1">
          <h5 className="text-paragraph">메뉴 소개</h5>
          <div
            className="text-paragraph text-gray-600"
            dangerouslySetInnerHTML={{ __html: product.content ?? '' }}
          />
        </div>

        <div className="flex flex-col gap-1 pb-5 border-b-[0.5px] border-gray-400">
          <h5 className="text-paragraph mb-1">재료</h5>
          <IngredientList ingredients={ingredients} />
        </div>

        <div className="flex justify-between border-b-[0.5px] border-gray-400 pb-4">
          <h5 className="text-paragraph">인분</h5>
          <p className="text-paragraph">{serving}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h5 className="text-paragraph">픽업장소</h5>
            <p className="text-paragraph">{pickupPlace}</p>
          </div>
          <div className="flex justify-between border-b-[0.5px] border-gray-400 pb-4">
            <h5 className="text-paragraph">남은 수량</h5>
            <p className="text-paragraph">{stock}개</p>
          </div>
        </div>
      </div>

      <div className="gap-0">
        <ReviewList
          reviews={reviews.map((r: Reply) => ({
            id: String(r._id),
            userId: r.user?._id,
            userName: r.user?.name ?? '익명',
            profileImage:
              (r.user?._id ? userImageMap.get(r.user._id) : undefined) ??
              r.user?.image,
            rating: r.rating,
            createdAt: r.createdAt,
            content: r.content,
            images: (r.extra?.images ?? []).map((img: unknown) =>
              typeof img === 'string' ? img : getImageUrl((img as { path: string }).path)
            ),
          }))}
        />
      </div>

      <ProductDetailClient product={product} />
    </main>
  );
}
