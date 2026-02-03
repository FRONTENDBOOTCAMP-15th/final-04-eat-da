'use client';

import { useRef, useState } from 'react';
import ReviewItem from '@/app/src/components/ui/ReviewItem';

const INITIAL_REVIEW_COUNT = 3;

export interface Review {
  id?: string;
  _id?: number;
  userId?: number;
  userName?: string;
  profileImage?: string;
  rating?: number;
  createdAt?: string;
  productName?: string;
  content?: string;
  images?: string[];
  user?: {
    _id?: number;
    name?: string;
    image?: string;
  };
  product?: {
    name?: string;
    image?: {
      path?: string;
      name?: string;
    };
  };
  extra?: {
    images?: string[];
  };
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);
    } else {
      setIsExpanded(false);
    }
  };

  const resolvedReviews = reviews.map((review, index) => {
    const resolvedId = review.id ?? String(review._id ?? index);
    const resolvedUserName = review.userName ?? review.user?.name ?? '익명';
    const resolvedProfileImage = review.profileImage ?? review.user?.image;
    const resolvedProductName =
      review.productName ?? review.product?.name ?? '';
    const resolvedImages =
      review.images ??
      review.extra?.images ??
      (review.product?.image?.path ? [review.product.image.path] : []);

    return {
      ...review,
      id: resolvedId,
      userName: resolvedUserName,
      profileImage: resolvedProfileImage,
      productName: resolvedProductName,
      images: resolvedImages,
    };
  });

  const displayedReviews = isExpanded
    ? resolvedReviews
    : resolvedReviews.slice(0, INITIAL_REVIEW_COUNT);

  const hasMoreReviews = resolvedReviews.length > INITIAL_REVIEW_COUNT;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="review-title"
      className="gap-0 scroll-mt-14"
    >
      <div className="flex justify-between mx-5">
        <h3 id="review-title" className="text-display-4 font-semibold">
          리뷰 ({resolvedReviews.length})
        </h3>
        {hasMoreReviews && (
          <button
            type="button"
            onClick={handleToggle}
            className="text-paragraph text-gray-700"
          >
            {isExpanded ? '접기' : '더보기'}
          </button>
        )}
      </div>

      <ul>
        {displayedReviews.map((review, index) => {
          const isLast = index === displayedReviews.length - 1;

          return (
            <li key={review.id ?? review._id ?? index}>
              <ReviewItem
                showDivider={!isLast}
                userName={review.userName}
                profileImage={review.profileImage}
                rating={review.rating}
                createdAt={review.createdAt}
                productName={review.productName}
                content={review.content}
                images={review.images}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
