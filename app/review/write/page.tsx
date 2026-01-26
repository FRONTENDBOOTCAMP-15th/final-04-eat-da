'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/src/components/common/Header';
import HeartItem from '@/app/src/components/ui/HeartItem';
import AddImage from '@/app/src/components/ui/AddImage';
import BottomFixedButton from '@/app/src/components/common/BottomFixedButton';
import StarRating from '@/app/src/components/ui/StarItem';

export default function WriteReviewPage() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [chefLike, setChefLike] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (newImages: string[]) => {
    setImages(newImages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating) {
      alert('별점을 선택해주세요');
      return;
    }
    if (!reviewText.trim()) {
      alert('후기를 작성해주세요');
      return;
    }

    console.log('리뷰 등록:', {
      rating,
      chefLike,
      reviewText,
      images
    });
    // TODO: 실제 API 호출
    router.back();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 헤더 */}
      <Header title="리뷰작성" showCloseButton />

      {/* 헤더 높이만큼 여백 */}
      <div className="h-[60px]"></div>

      {/* 컨텐츠 */}
      <form id="reviewForm" onSubmit={handleSubmit} className="flex-1 px-5 py-6 overflow-y-auto pb-32">
        {/* 연관된 상품 */}
        <div className="py-4 border-b border-gray-600">
          <div className="flex gap-3 mb-3">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                입에서 녹는 소고기 장조림
              </h3>
              <p className="text-sm text-eatda-orange mb-0.5">
                김미숙 주부 9단
              </p>
              <p className="text-xs text-gray-600">2026.01.10 구매완료</p>
            </div>
          </div>
        </div>

        {/* 사진 등록 */}
        <div className="py-6 border-b border-gray-300">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            사진 등록
          </h3>
          <AddImage 
            onChange={handleImageChange}
            maxImages={5}
            initialImages={images}
          />
        </div>

        {/* 별점 - StarRating 컴포넌트 사용 */}
        <div className="py-6 border-b border-gray-300">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            반찬은 어떠셨나요? <span className="text-red-500">*</span>
          </h3>
          <StarRating 
            rating={rating}
            onRatingChange={setRating}
            size={40}
          />
        </div>

        {/* 주부님 평가 */}
        <div className="py-6 border-b border-gray-300">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            마음에 드셨나요?
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            주부님을 찜하고 반찬소식을 받아보세요.
          </p>
          <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">👩</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">김미숙 주부9단</p>
                <div className="flex items-center gap-1">
                  <span className="text-eatda-orange text-sm">★</span>
                  <span className="text-sm text-gray-900">4.9</span>
                  <span className="text-xs text-gray-500">(32건)</span>
                </div>
              </div>
            </div>
            {/* HeartItem 컴포넌트 사용 */}
            <div onClick={() => setChefLike(!chefLike)}>
              <HeartItem 
                initialWished={chefLike}
                size={28}
                className="p-0"
              />
            </div>
          </div>
        </div>

        {/* 반찬 후기 */}
        <div className="py-6">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            반찬 후기 <span className="text-red-500">*</span>
          </h3>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="오늘 식탁은 어땠나요?
맛, 양, 느낌을 자유롭게 남겨주세요."
            className="w-full min-h-[80px] text-sm text-gray-900 placeholder:text-gray-400 resize-none focus:outline-none"
          />
        </div>
      </form>

      {/* 하단 고정 등록 버튼 */}
      <BottomFixedButton as="button" formId="reviewForm">
        등록하기
      </BottomFixedButton>
    </div>
  );
}