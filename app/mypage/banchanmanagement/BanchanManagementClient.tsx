'use client';

import BanchanCard from '@/app/mypage/banchanmanagement/BanchanCard';

export default function BanchanManagementClient() {
  // const hasBanchan = false; // true: 반찬 있음, false: 반찬 없음
  const hasBanchan = true; // true: 반찬 있음, false: 반찬 없음

  const items = [
    { name: '불고기', status: '판매중', price: '6,800', max: 10 },
    { name: '제육볶음', status: '판매중', price: '12,000', max: 6 },
    { name: '파김치', status: '판매중', price: '8,000', max: 1 },
    { name: '장조림', status: '판매 중지', price: '12,000', max: 0 },
  ];

  return (
    <>
      <section className="flex-1 flex flex-col">
          {hasBanchan ? (
            <div>
              <p className="text-display-3 font-semibold text-gray-800">등록된 반찬 ({items.length})</p>
              <div className="flex flex-col">
                {items.map((item, index) => (
                  <BanchanCard
                    key={index}
                    name={item.name}
                    status={item.status}
                    price={item.price}
                    max={item.max}
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              <p className="text-display-5 font-semibold text-gray-800">등록된 반찬 ({items.length})</p>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-display-2 text-gray-600">등록된 반찬이 없습니다</p>
              </div>
            </>
          )}
      </section>
    </>
  );
}
