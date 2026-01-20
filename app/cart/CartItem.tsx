import Image from "next/image";

export default function CartItem() {
  return (
    <div className="shadow-xl bg-amber-100 p-3 rounded-lg space-y-3">
      <div className="flex gap-3">
        <Image
          src="/food1.png"
          width={90}
          height={90}
          alt="반찬 사진1"
          className="rounded-xl"
        />
        <div className="">
          <p className="font-semibold text-lg">김미숙님의 소고기 장조림</p>
          <p className="text-sm text-gray-500">김미숙 주부님</p>
          <p className="font-bold mt-3">8,500원</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <button className="w-8 h-8 bg-white rounded-lg">-</button>
          <p className="w-8 h-8 text-center leading-8">2</p>
          <button className="w-8 h-8 bg-white rounded-lg">+</button>
        </div>
        <div className="">
          <p className="text-right text-gray-500">총합</p>
          <p className="font-medium text-xl ">17,000원</p>
        </div>
      </div>
    </div>
  );
}
