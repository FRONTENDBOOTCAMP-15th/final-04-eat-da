'use client';

import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showSearch?: boolean;
  showCart?: boolean;
  onBack?: () => void;
  onClose?: () => void;
  onSearch?: () => void;
  onCart?: () => void;
}

export default function Header({
  title,
  showBackButton = false,
  showCloseButton = false,
  showSearch = false,
  showCart = false,
  onBack,
  onClose,
  onSearch,
  onCart,
}: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    } else {
      console.log('검색');
    }
  };

  const handleCart = () => {
    if (onCart) {
      onCart();
    } else {
      router.push('/cart');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white px-5 pb-3 border-b border-gray-200 z-50">
      <div className="flex items-center justify-between">
        {/* 왼쪽: 뒤로가기 + 제목 */}
        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="text-gray-900"
              aria-label="뒤로가기"
            >
              <img src="/back.svg" alt="뒤로가기" width={10} height={18} />
            </button>
          )}
          <h1 className="text-display-6 font-semibold text-gray-900">{title}</h1>
        </div>

        {/* 오른쪽: X, 검색, 장바구니 */}
        <div className="flex gap-4 items-center">
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="text-gray-900"
              aria-label="닫기"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
          {showSearch && (
            <button onClick={handleSearch} className="text-gray-900">
              <img src="/search.svg" alt="검색" width={21} height={21} />
            </button>
          )}
          {showCart && (
            <button onClick={handleCart} className="text-gray-900 relative">
              <img src="/shopping cart.svg" alt="장바구니" width={22} height={22} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}