"use client";
import Image from "next/image";
import { useState } from "react";

interface WishButtonProps {
  initialWished?: boolean;
  className?: string;
}

export default function HeartItem({
  initialWished = false,
  className = "",
}: WishButtonProps) {
  const [isWished, setIsWished] = useState(initialWished);

  return (
    <button
      onClick={() => setIsWished(!isWished)}
      className={`p-2 hover:scale-110 transition-transform ${className}`}
    >
      <Image
        src={isWished ? "/filledHeart.png" : "/emptyHeart.png"}
        width={27}
        height={27}
        alt="찜"
      />
    </button>
  );
}
