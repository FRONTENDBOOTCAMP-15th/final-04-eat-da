import Image from 'next/image';

interface BanchanCardProps {
  name: string;
  // img: string;
  status: string;
  price: string;
  max: number;
}

export default function BanchanCard({ name, status, price, max }: BanchanCardProps) {
  return (
    <div className="flex border-b-[0.5px] border-gray-400 py-5 gap-5">
      {/* 이미지 영역 */}
      <div className="flex items-center rounded">
        <Image src="/food1.png" alt="반찬 사진" width={70} height={70} className="object-cover rounded" />
      </div>

      {/* 정보 영역 */}
      <div className=" flex-1 flex flex-col gap-4 py-[7.5px]">
        <div className="flex justify-between ">
          {/* 반찬명 및 가격*/}
          <div className="flex flex-col gap-0.5">
          <h3 className="text-display-2 font-semibold text-gray-800">{name}</h3>
          <p className="text-display-2 text-gray-600">{price}원</p>
        </div>

          {/* 상태 */}
          <span className={`text-display-2 font-semibold ${status === '판매중' ? 'text-eatda-orange' : 'text-gray-500'}`}>
            {status}
          </span>
        </div>

        {/* 수량 정보 */}
        <p className="text-display-1 text-gray-600">최대 주문 수량 : {max}개</p>
      </div>
    </div>
  );
}
