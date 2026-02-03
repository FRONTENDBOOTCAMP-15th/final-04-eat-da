import BottomNavigation from '@/app/src/components/common/BottomNavigation';
import Header from '@/app/src/components/common/Header';
import ProductsListClient from '@/app/src/components/ui/ProductsListClient';
import { Product } from '@/app/src/types';

const API_SERVER = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_SERVER}/products/`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Client-Id': CLIENT_ID,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('상품 조회 실패:', res.status);
      return [];
    }

    const data = await res.json();
    return data.item || [];
  } catch (error) {
    console.error('상품 조회 실패:', error);
    return [];
  }
}

export default async function ProductsList() {
  const products = await getProducts();

  return (
    <>
      <Header title="서교동 공유주방" showBackButton showSearch showCart />

      <ProductsListClient products={products} />

      <BottomNavigation />
    </>
  );
}
