import Link from "next/link";
import "./src/styles/tailwind.css";

export default function Home() {
  return (
    <>
      <Link href="/wishlist">찜한 반찬</Link>
      <Link href="/cart">장바구니</Link>
    </>
  );
}
