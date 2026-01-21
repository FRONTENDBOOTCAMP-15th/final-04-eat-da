import WishListItem from "@/app/wishlist/WishListItem";
import WishSmallItem from "@/app/wishlist/WishSmallItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "잇다 찜 목록",
  openGraph: {
    title: "잇다 찜 목록",
    description: "찜 페이지",
    url: "/wishlist",
  },
};

export default function WishlistPage() {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-medium">찜한 반찬</h2>
      <div className="grid grid-cols-2 gap-0.5">
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
        <WishSmallItem />
      </div>
    </div>
  );
}
