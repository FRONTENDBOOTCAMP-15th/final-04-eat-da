import HeartItem from "@/app/src/components/ui/HeartItem";
import Image from "next/image";

export default function RecommendProduct() {
  return (
    <div className="shrink-0 w-30">
      <div className="relative aspect-square">
        <Image
          src="/food1.png"
          fill
          alt="반찬 이미지"
          className="object-cover"
        />
        <HeartItem className="absolute top-1 right-1" />
      </div>
      <div className="pt-2 px-1 space-y-1">
        <div className="flex gap-2 items-center">
          <p className="text-eatda-orange text-display-1 font-semibold">
            김미숙 주부9단
          </p>
        </div>
        <p className="text-paragraph-sm mr-2">얼큰한 김치찌개</p>
        <p className="text-paragraph-md font-semibold">8,500원</p>
      </div>
    </div>
  );
}
