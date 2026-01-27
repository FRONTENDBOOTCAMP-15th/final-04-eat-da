"use client";

import BanchanCard from "@/app/mypage/banchan/BanchanCard";
import { banchanList } from "@/app/mypage/banchan/BanchanData";

export default function BanchanManagementClient() {
  const items = banchanList.items;

  return (
    <>
      <section className="px-5 mt-15 mb-24 flex flex-1 flex-col gap-5 min-h-[calc(100vh-10rem)]">
        {items.length > 0 ? (
          <div>
            <p className="text-display-3 font-semibold text-gray-800">
              등록된 반찬 ({items.length})
            </p>
            <div className="flex flex-col">
              {items.map((item) => (
                <BanchanCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <p className="text-display-3 font-semibold text-gray-800">
              등록된 반찬 ({items.length})
            </p>
            <div className="flex-1 flex items-center justify-center text-display-3 text-gray-600">
              <div className="text-center flex flex-col gap-2">
                <p>등록된 반찬이 없습니다.</p>
                <p>새 반찬을 등록하여 판매를 시작해보세요.</p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
