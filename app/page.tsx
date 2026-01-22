import Link from "next/link";
import "./src/styles/tailwind.css";

export default function Home() {
  return (
    <>
      <li>
        <Link href="/wishlist">찜한 반찬</Link>
      </li>
      <li>
        <Link href="/cart">장바구니</Link>
      </li>
      <li>
        <Link href="/checkout">구매하기</Link>
      </li>
      <li>
        <Link href="/checkout/complete">구매완료</Link>
      </li>
      <li>
        <Link href="/home">홈</Link>
      </li>
    </>
  );
}
