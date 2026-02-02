'use client';

import BottomNavigation from '@/app/src/components/common/BottomNavigation';
import Header from '@/app/src/components/common/Header';
import ProductsListClient from '@/app/src/components/ui/ProductsListClient';
import { getAxios } from '@/lib/axios';
import { useEffect, useState } from 'react';
import { Product } from '@/app/src/types';

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const axios = getAxios();
        const res = await axios.get('/products/');
        setProducts(res.data.item || []);
      } catch (error) {
        console.error('상품 조회 실패:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header title="서교동 공유주방" showBackButton showSearch showCart />

      <ProductsListClient products={products} />

      <BottomNavigation />
    </>
  );
}
