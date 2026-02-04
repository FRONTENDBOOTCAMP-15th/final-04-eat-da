'use client';

import ProductCard from '@/app/src/components/ui/ProductCard';
import Header from '@/app/src/components/common/Header';
import BottomNavigation from '@/app/src/components/common/BottomNavigation';
import { getAxios, getTokenPayload } from '@/lib/axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookmarkProduct } from '@/app/src/types';
import useUserStore from '@/zustand/userStore';
import { getTier } from '@/lib/tier';

export default function WishlistPageClient() {
  const router = useRouter();
  const loggedInUser = useUserStore((state) => state.user);

  const [bookmarks, setBookmarks] = useState<BookmarkProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sellerTotalSales, setSellerTotalSales] = useState<
    Record<number, number>
  >({});

  useEffect(() => {
    const tokenPayload = getTokenPayload();

    if (!tokenPayload && !loggedInUser) {
      router.replace('/login?redirect=/wishlist');
      return;
    }

    fetchData();
  }, [loggedInUser, router]);

  const fetchData = async () => {
    try {
      const axios = getAxios();

      const usersResponse = await axios.get('/users/');
      const users = usersResponse.data.item || [];

      const salesMap: Record<number, number> = {};
      users.forEach((user: any) => {
        if (user.type === 'seller') {
          const sellerId = user._id || user.seller_id;
          if (sellerId) {
            salesMap[sellerId] = user.totalSales ?? 0;
          }
        }
      });

      console.log('seller totalSales 맵:', salesMap);
      setSellerTotalSales(salesMap);

      const bookmarksResponse = await axios.get('/bookmarks/product');
      setBookmarks((bookmarksResponse.data.item || []).reverse());
    } catch (error) {
      console.error('데이터 조회 실패:', error);
      if ((error as any)?.response?.status === 401) {
        router.replace('/login?redirect=/wishlist');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookmarkDeleted = () => {
    fetchData();
  };

  if (!loggedInUser && !getTokenPayload()) {
    return null;
  }

  return (
    <>
      <Header
        title="위시리스트"
        showBackButton={true}
        showSearch={true}
        showCart={true}
      />
      <div className="mt-15 mb-16">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-600">로딩 중...</p>
          </div>
        ) : bookmarks.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-600">찜한 상품이 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2">
            {bookmarks.map((bookmark) => {
              const sellerId = (bookmark.product.seller as any)?._id;
              const totalSales = sellerTotalSales[sellerId] ?? 0;

              return (
                <ProductCard
                  key={bookmark._id}
                  productId={bookmark.product._id}
                  imageSrc={
                    bookmark.product.mainImages?.[0]?.path || '/food1.png'
                  }
                  chefName={bookmark.product.seller?.name || '주부'}
                  tier={getTier(totalSales).label}
                  dishName={bookmark.product.name}
                  rating={bookmark.product.extra?.rating || 0}
                  reviewCount={bookmark.product.extra?.replies || 0}
                  price={bookmark.product.price}
                  initialWished={true}
                  bookmarkId={bookmark._id}
                  onBookmarkChange={handleBookmarkDeleted}
                />
              );
            })}
          </div>
        )}
      </div>
      <BottomNavigation />
    </>
  );
}
