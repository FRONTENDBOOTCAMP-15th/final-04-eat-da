import Link from "next/link";
import "./src/styles/tailwind.css";

export default function Home() {
  return (
    <>
      <Link href="/checkout">구매하기</Link>
      <Link href="/cart">장바구니</Link>
    </>
  );
}
