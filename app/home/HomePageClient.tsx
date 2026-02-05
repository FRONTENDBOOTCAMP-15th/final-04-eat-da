'use client';

import HomeHeader from '@/app/home/HomeHeader';
import RecommendProduct from '@/app/home/RecommendProduct';
import BottomNavigation from '@/app/src/components/common/BottomNavigation';
import SellerProfileClear from '@/app/src/components/ui/SellerProfileClear';
import ProductCard from '@/app/src/components/ui/ProductCard';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAxios } from '@/lib/axios';
import { Product, Seller, SellerWithStats } from '@/app/src/types';

import * as ChannelService from '@channel.io/channel-web-sdk-loader';

ChannelService.loadScript();

export default function HomePageClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [recommendProducts, setRecommendProducts] = useState<Product[]>([]);
  const [recommendSeller, setRecommendSeller] =
    useState<SellerWithStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axios = getAxios();
        const [productsRes, usersRes] = await Promise.all([
          axios.get('/products'),
          axios.get('/users/'),
        ]);

        const rawProducts = productsRes.data.item || [];
        // 구독권 제외
        const allProducts = rawProducts.filter(
          (p: Product) => !p.extra?.isSubscription
        );
        const allUsers = usersRes.data.item || [];
        const sellers = allUsers.filter(
          (user: Seller) => user.type === 'seller'
        );

        setProducts(allProducts);

        const today = new Date().toDateString();
        const stored = localStorage.getItem('dailyRecommend');

        if (stored) {
          const { date, products: storedProducts } = JSON.parse(stored);
          if (date === today) {
            const validProducts = storedProducts
              .map((id: number) =>
                allProducts.find((p: Product) => p._id === id)
              )
              .filter(Boolean)
              .slice(0, 6);

            if (validProducts.length > 0) {
              setRecommendProducts(validProducts);
            }
          }
        }

        if (recommendProducts.length === 0) {
          const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
          const selected = shuffled.slice(0, 6);
          setRecommendProducts(selected);

          localStorage.setItem(
            'dailyRecommend',
            JSON.stringify({
              date: today,
              products: selected.map((p: Product) => p._id),
            })
          );
        }

        const storedSeller = localStorage.getItem('dailyRecommendSeller');

        if (storedSeller) {
          const { date, sellerId } = JSON.parse(storedSeller);
          if (date === today) {
            const seller = sellers.find((s: Seller) => s._id === sellerId);
            if (seller) {
              const sellerWithStats = calculateSellerStats(seller, allProducts);
              setRecommendSeller(sellerWithStats);
              setIsLoading(false);
              return;
            }
          }
        }

        if (sellers.length > 0) {
          const randomSeller =
            sellers[Math.floor(Math.random() * sellers.length)];
          const sellerWithStats = calculateSellerStats(
            randomSeller,
            allProducts
          );
          setRecommendSeller(sellerWithStats);

          localStorage.setItem(
            'dailyRecommendSeller',
            JSON.stringify({
              date: today,
              sellerId: randomSeller._id,
            })
          );
        }
      } catch (error) {
        console.error('데이터 조회 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateSellerStats = (
    seller: Seller,
    allProducts: Product[]
  ): SellerWithStats => {
    const sellerProducts = allProducts.filter(
      (p) => (p as any).seller_id === seller._id
    );

    const rating =
      sellerProducts.length > 0
        ? sellerProducts.reduce((sum, p) => sum + (p.rating ?? 0), 0) /
          sellerProducts.length
        : 0;

    const reviewCount = sellerProducts.reduce((sum, p) => {
      const replies = p.replies;
      if (Array.isArray(replies)) {
        return sum + replies.length;
      } else if (typeof replies === 'number') {
        return sum + replies;
      }
      return sum;
    }, 0);

    const topDishes = sellerProducts
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 4)
      .map((p) => ({
        imageSrc: p.mainImages?.[0]?.path ?? '/food1.png',
        name: p.name,
      }));

    return {
      ...seller,
      rating,
      reviewCount,
      topDishes,
    };
  };
  useEffect(() => {
    ChannelService.boot({
      pluginKey: '67502dfa-39a4-4d1e-8332-59d195da33a7',
      hideChannelButtonOnBoot: true,
    });

    return () => {
      ChannelService.shutdown();
    };
  }, []);

  return (
    <>
      <HomeHeader />
      <div className="p-5 flex flex-col gap-6 mt-12 mb-10">
        <Image src="/Hero.png" alt="banner" height={460} width={350}></Image>

        <div>
          <p className="text-display-5 font-semibold pb-4">오늘의 추천 반찬</p>
          <div className="flex gap-1 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide">
            {isLoading ? (
              <>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-28 h-40 bg-gray-200 animate-pulse rounded-lg"
                  />
                ))}
              </>
            ) : (
              recommendProducts.map((product) => (
                <RecommendProduct key={product._id} product={product} />
              ))
            )}
          </div>
        </div>

        <div className="border-b-[0.5px] border-gray-400 pb-4">
          <p className="text-display-5 font-semibold pb-4">
            오늘의 추천 주부님
          </p>

          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-20 bg-gray-200 rounded-lg mb-4" />
            </div>
          ) : recommendSeller ? (
            <>
              <div className="flex gap-1 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide">
                {recommendSeller.topDishes.map((dish, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-28 h-28 overflow-hidden"
                  >
                    <Image
                      src={dish.imageSrc}
                      alt={dish.name}
                      width={120}
                      height={120}
                      sizes="50vw"
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                ))}
                {[
                  ...Array(Math.max(0, 4 - recommendSeller.topDishes.length)),
                ].map((_, i) => (
                  <div
                    key={`placeholder-${i}`}
                    className="shrink-0 overflow-hidden w-28 h-28"
                  >
                    <Image
                      src="/food2.png"
                      alt="음식"
                      width={120}
                      height={120}
                      sizes="50vw"
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <SellerProfileClear
                sellerId={recommendSeller._id}
                sellerName={recommendSeller.name}
                rating={recommendSeller.rating}
                reviewCount={recommendSeller.reviewCount}
                profileImage={
                  recommendSeller.extra?.profileImage ??
                  recommendSeller.image ??
                  '/seller/seller1.png'
                }
                description={
                  recommendSeller.extra?.description ??
                  recommendSeller.extra?.intro ??
                  '정성스럽게 만든 집밥을 나눕니다.'
                }
              />
            </>
          ) : (
            <p className="text-center text-gray-500 py-4">
              추천 주부가 없습니다.
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="text-center py-10">
            <p className="text-gray-600">로딩 중...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 -mx-5">
            {products.map((product) => {
              const reviewCount = Array.isArray(product.replies)
                ? product.replies.length
                : typeof product.replies === 'number'
                  ? product.replies
                  : 0;

              return (
                <ProductCard
                  key={product._id}
                  productId={product._id}
                  imageSrc={product.mainImages?.[0]?.path ?? '/food1.png'}
                  chefName={`${product.seller?.name ?? '주부'}`}
                  dishName={product.name}
                  rating={product.rating ?? 0}
                  reviewCount={reviewCount}
                  price={product.price}
                  initialWished={Boolean(product.myBookmarkId)}
                />
              );
            })}
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => ChannelService.showMessenger()}
        className="fixed bg-white bottom-20 right-2 z-50 w-12 h-12 rounded-2xl shadow flex items-center justify-center"
      >
        <Image src="/Message.svg" alt="채널톡 문의" width={28} height={28} />
      </button>
      <BottomNavigation />
    </>
  );
}
