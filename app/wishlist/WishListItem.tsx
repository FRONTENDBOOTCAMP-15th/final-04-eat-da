"use client";
import Image from "next/image";
import { useState } from "react";

export default function WishListItem() {
  const [isWished, setIsWished] = useState(true);

  return (
    <div className="shadow-xl rounded-2xl overflow-hidden">
      <div className="relative">
        <Image
          src="/food2.png"
          width={320}
          height={300}
          alt="반찬 이미지"
          className="w-full"
        />
        <button
          onClick={() => setIsWished(!isWished)}
          className="absolute bottom-3 right-3 p-2 hover:scale-110 transition-transform"
        >
          <Image
            src={isWished ? "/filledHeart.png" : "/emptyHeart.png"}
            width={27}
            height={27}
            alt="찜"
          />
        </button>
      </div>
      <div className="p-5 space-y-2">
        <div className="flex items-center">
          <p className="font-semibold text-2xl mr-3">얼큰한 김치찌개</p>
          <Image
            src="/star.svg"
            alt="별점"
            width={15}
            height={15}
            className="mb-0.5"
          />
          <p className="text-sm ml-0.5">4.9(13)</p>
        </div>
        <div className="flex space-x-1.5 items-center">
          <p className="text-red-400 text-sm">서교동 공유주방</p>
          <p>|</p>
          <p className="text-gray-500 text-sm">김미숙 주부9단</p>
        </div>
        <p className="text-gray-500 text-sm">
          직접 담근 김치로 끓인 얼큰한 김치찌개
        </p>
        <p className="text-lg font-medium">8,500원</p>
      </div>
    </div>
  );
}
