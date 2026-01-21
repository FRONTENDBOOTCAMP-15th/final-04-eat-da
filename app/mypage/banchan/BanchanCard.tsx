import Image from "next/image";
import Link from "next/link";
import { BanchanItem } from "./BanchanData";

interface BanchanCardProps {
  item: BanchanItem;
}

// 반찬 상태 계산 함수
const getBanchanStatus = (item: BanchanItem): string => {
  if (item.quantity === 0) return "품절";
  return "판매중";
};

export default function BanchanCard({ item }: BanchanCardProps) {
  const status = getBanchanStatus(item);
  const price = item.price.toLocaleString();
  const imgSrc =
    item.mainImages[0]?.path ||
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlwMBIgACEQEDEQH/xAAaAAEBAAMBAQAAAAAAAAAAAAAAAQMEBQIG/8QAORAAAgECAwQFCwEJAAAAAAAAAAECAxEEBSESMUFREyJhc5IVNDVTVXGBobHB8DIUIzNDUnKR4fH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+0Kld2RD1ey04gQhSAACgQtj3Tkoyel7ok9lO0deb7QPAAAAFW/XcAtdPgQrd9ABAABRbt15BbzInFw2ZK1tW+L7AMdiFduG4AFoQACghQAAAXCIUAQoADXmCAUEKAAAAAgAAAACgAAAAAEBQwA4AACFAEKAAAAAhQBAABVvMijGUU1Lr8uRjLtNJpcd4EZCkAGfDYWtinJUYbWzvd7GA6eWSlHA46UW01C6a4aMDF5Kxi30l4kV5VjH/KXiRqdPW9dVXYps2KdPHVKDrU5VpQT4Td/+AevJOM9UvEh5Jxnql4ka3T17/wAer42eqVTE1akKcK1Vyk7LrsDP5Jxnql4kWOVYzaX7peJG5iMtxFOhKdPG1ZzirtOTSfzOSsRW9fV8bA255Ti79SKceLckamIoVcPU2K0dmVriWJr20r1dN3XZvZ95zS7tfUDmAoAFWmrWvAnvVyAVu+8EAAAAUEKAOll3o/H939mc06OXej8f3f2YGlh6MsRXhSp75O1+XafVUaUaFKFOmrRirI52R4ToqX7RNdap+nTdE6gGnjMuoYrrNKE/6orf7zjVcJiMvqxq2vGLupx3f6PpQ9U09z4AcPEZzKpQlCnS2JSVm73t7jn1MNWpU4VKlOUYTV4u2h3auU4apWjNXgk7ygt0jeaUouMopp6NW0A+Oe5nTz3zil3a+pmzXLKVOhUxFF7GyruHB+4wZ75xS7tAc4AACAAAAAAPSWuuiQEQHuAA6OX+jsw7v7M5p0csrYeFLEUcTNwjVVrpAd7D+b0tF+iP0MhyKU6LWzTzOu0louXyI61D2piPz4AdgHH6bD+1cR+fAdNh/auI/PgB2AcfpsP7VxH58B02H9q4n8+AG5m3o3Ef2nLz3zil3aM1SWGqwdOrmNaUHvT4/I1c3xFLEYiLoS2oxha9gNG4IUAQu89bHV27dXgB4BSAUMEAoAAhQAPUXaV7tc7EnLaeiSXIgAgKAIVc+PIABvAAEBQAWmp7jNxVt/K/A8AA3feCAAAABUAADAAgAAoAAEKQAAUAAABCkAAAAW1tOIWjVzJGS6PZmlZdurAxgMgApAAK1ZlWl+fAjAEAAoIVfTgA47wZKkoySdld8E9xjAEAApUv8cyfMX0AEAAqAAEAAAAAL8AAAAAAqAAEAAAACkAAAAD/2Q==";

  return (
    <Link
      href={`/mypage/banchan/edit/${item._id}`}
      className="flex border-b-[0.5px] border-gray-400 py-5 gap-5 cursor-pointer hover:bg-gray-100"
    >
      {/* 이미지 영역 */}
      <div className="flex items-center rounded">
        <Image
          src={imgSrc}
          alt={item.name}
          width={70}
          height={70}
          className="object-cover rounded"
        />
      </div>

      {/* 정보 영역 */}
      <div className=" flex-1 flex flex-col gap-4 py-[7.5px]">
        <div className="flex justify-between ">
          {/* 반찬명 및 가격*/}
          <div className="flex flex-col gap-0.5">
            <h3 className="text-display-2 font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-display-2 text-gray-600">{price}원</p>
          </div>

          {/* 상태 */}
          <span
            className={`text-display-2 font-semibold ${status === "판매중" ? "text-eatda-orange" : "text-gray-500"}`}
          >
            {status}
          </span>
        </div>

        {/* 수량 정보 */}
        <p className="text-display-1 text-gray-600">
          최대 주문 수량 : {item.quantity}개
        </p>
      </div>
    </Link>
  );
}
