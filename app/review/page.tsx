'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReviewManagementPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'available' | 'my'>('available');

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-white px-5 border-b border-gray-200" style={{ paddingTop: '64px', paddingBottom: '30px' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="text-gray-900"
            >
              <img src="/back.svg" alt="뒤로가기" width={8} height={16} />
            </button>
            <h1 className="text-xl font-bold text-gray-900">리뷰관리</h1>
          </div>

          <div className="flex gap-4">
            {/* 검색 */}
            <button className="text-gray-900">
              <img src="/search.svg" alt="검색" width={20} height={20} />
            </button>

            {/* 장바구니 */}
            <button className="text-gray-900 relative">
              <img src="/shopping cart.svg" alt="장바구니" width={20} height={20} />
            </button>
          </div>
        </div>
      </header>

      {/* 탭 */}
      <div className="px-5 py-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'available'
                ? 'bg-eatda-orange text-white'
                : 'bg-white text-gray-900 border border-gray-200'
            }`}
          >
            작성 가능한 리뷰
          </button>
          <button
            onClick={() => setActiveTab('my')}
            className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'my'
                ? 'bg-eatda-orange text-white'
                : 'bg-white text-gray-900 border border-gray-200'
            }`}
          >
            내 리뷰
          </button>
        </div>
      </div>

      {/* 컨텐츠 */}
      <div>
        {activeTab === 'available' ? (
          // 작성 가능한 리뷰 탭
          <div>
            {/* 리뷰 아이템 1 */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex gap-3 mb-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    입에서 녹는 소고기 장조림
                  </h3>
                  <p className="text-sm text-eatda-orange mb-0.5">
                    김미숙 주부 9단
                  </p>
                  <p className="text-xs text-gray-500">2026.01.10 구매완료</p>
                </div>
              </div>
              <button className="w-full py-3 bg-eatda-orange text-white font-medium rounded-lg">
                리뷰 쓰기
              </button>
            </div>

            {/* 리뷰 아이템 2 */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex gap-3 mb-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    얼큰한 김치찌개
                  </h3>
                  <p className="text-sm text-eatda-orange mb-0.5">
                    김미숙 주부 9단
                  </p>
                  <p className="text-xs text-gray-500">2026.01.10 구매완료</p>
                </div>
              </div>
              <button className="w-full py-3 bg-eatda-orange text-white font-medium rounded-lg">
                리뷰 쓰기
              </button>
            </div>

            {/* 리뷰 아이템 3 */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex gap-3 mb-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    얼큰한 김치찌개
                  </h3>
                  <p className="text-sm text-eatda-orange mb-0.5">
                    김미숙 주부 9단
                  </p>
                  <p className="text-xs text-gray-500">2026.01.10 구매완료</p>
                </div>
              </div>
              <button className="w-full py-3 bg-eatda-orange text-white font-medium rounded-lg">
                리뷰 쓰기
              </button>
            </div>
          </div>
        ) : (
          // 내 리뷰 탭
          <div>
            {/* 내 리뷰 아이템 1 */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex gap-3 mb-2">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    입에서 녹는 소고기 장조림
                  </h3>
                  <p className="text-sm text-eatda-orange">김미숙 주부 9단</p>
                </div>
              </div>

              {/* 별점 */}
              <div className="flex gap-0.5 mb-2">
                <span className="text-base text-eatda-orange">★</span>
              </div>

              {/* 리뷰 내용 */}
              <p className="text-sm text-gray-900 mb-3">돼지고기 맛있어요.</p>

              {/* 버튼 */}
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-white text-eatda-orange font-medium rounded-lg border border-eatda-orange text-sm">
                  수정하기
                </button>
                <button className="flex-1 py-2.5 bg-white text-eatda-orange font-medium rounded-lg border border-eatda-orange text-sm">
                  삭제하기
                </button>
              </div>
            </div>

            {/* 내 리뷰 아이템 2 */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex gap-3 mb-2">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    입에서 녹는 소고기 장조림
                  </h3>
                  <p className="text-sm text-eatda-orange">김미숙 주부 9단</p>
                </div>
              </div>

              {/* 별점 */}
              <div className="flex gap-0.5 mb-2">
                <span className="text-base text-eatda-orange">★</span>
              </div>

              {/* 리뷰 내용 */}
              <p className="text-sm text-gray-900 mb-3">돼지고기 맛있어요.</p>

              {/* 버튼 */}
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-white text-eatda-orange font-medium rounded-lg border border-eatda-orange text-sm">
                  수정하기
                </button>
                <button className="flex-1 py-2.5 bg-white text-eatda-orange font-medium rounded-lg border border-eatda-orange text-sm">
                  삭제하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}