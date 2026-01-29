import BottomNavigation from "@/app/src/components/common/BottomNavigation";
import Header from "@/app/src/components/common/Header";
import ProductsListClient from "@/app/src/components/ui/ProductsListClient";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`, {
    cache: "no-store",
    headers: {
      accept: "application/json",
      "Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID!,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(res.status, body);
    throw new Error("반찬 목록 불러오기 실패");
  }

  return res.json();
}

export default async function ProductsList() {
  const data = await getProducts();
  const products = data.item;

  return (
    <>
      <Header title="서교동 공유주방" showBackButton showSearch showCart />

      <ProductsListClient products={products} />

      <BottomNavigation />
    </>
  );
}
