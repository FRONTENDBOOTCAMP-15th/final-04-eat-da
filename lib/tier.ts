import { getAxios } from '@/lib/axios';

interface TierInfo {
  level: number;
  label: string;
}

const tierCount = [
  { min: 30, level: 9 },
  { min: 13, level: 8 },
  { min: 11, level: 7 },
  { min: 9, level: 6 },
  { min: 7, level: 5 },
  { min: 5, level: 4 },
  { min: 3, level: 3 },
  { min: 1, level: 2 },
  { min: 0, level: 1 },
];

export function getTier(totalSales: number): TierInfo {
  const tier = tierCount.find((t) => totalSales >= t.min) ?? {
    level: 1,
  };

  return {
    level: tier.level,
    label: `주부${tier.level}단`,
  };
}

export async function fetchSellerTier(sellerId: number): Promise<TierInfo> {
  try {
    const axios = getAxios();
    const response = await axios.get(`/users/${sellerId}`);
    if (response.data.ok) {
      const totalSales = response.data.item?.totalSales ?? 0;
      return getTier(totalSales);
    }
    return getTier(0);
  } catch (error) {
    console.error('판매자 티어 조회 실패:', error);
    return getTier(0);
  }
}

export function getTierFromSales(totalSales: number): TierInfo {
  return getTier(totalSales);
}
