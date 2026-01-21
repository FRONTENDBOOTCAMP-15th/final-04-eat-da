'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

interface AddImageProps {
  onChange?: (images: string[]) => void;
  maxImages?: number;
  initialImages?: string[];
}

export default function AddImage({ onChange, maxImages = 20, initialImages = [] }: AddImageProps) {
  const [images, setImages] = useState<string[]>(initialImages);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미지 추가 버튼 클릭
  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 파일 선택 시 이미지 미리보기 추가
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const imageUrl = URL.createObjectURL(files[i]);
      newImages.push(imageUrl);
    }

    const updatedImages = [...images, ...newImages].slice(0, maxImages);
    setImages(updatedImages);
    onChange?.(updatedImages);
  };

  // 이미지 삭제
  const handleImageRemove = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onChange?.(updatedImages);
  };

  return (
    <div>
      <label className="text-display-2 font-semibold text-gray-800 mb-2">
        반찬 이미지 등록 <span className="text-eatda-orange">*</span>
      </label>
      {/* 파일 input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <div className="flex gap-2.5 overflow-x-auto overflow-y-visible py-2">
        {/* 등록된 이미지 미리보기 */}
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="w-17.5 h-17.5 shrink-0 relative"
          >
            <Image
              src={imageUrl}
              alt={`반찬 이미지 ${index + 1}`}
              fill
              className="object-cover rounded"
            />
            {/* 삭제 버튼 */}
            <button
              type="button"
              onClick={() => handleImageRemove(index)}
              className="absolute -top-2 -right-2"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z" fill="#FF6155"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.54906 5.54857C5.91265 5.18498 6.50215 5.18498 6.86574 5.54857L12.4519 11.1348C12.8155 11.4984 12.8155 12.0879 12.4519 12.4515C12.0884 12.8151 11.4989 12.8151 11.1353 12.4515L5.54906 6.86525C5.18547 6.50166 5.18547 5.91216 5.54906 5.54857Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.4519 5.54857C12.8155 5.91216 12.8155 6.50166 12.4519 6.86525L6.86574 12.4515C6.50215 12.8151 5.91265 12.8151 5.54906 12.4515C5.18547 12.0879 5.18547 11.4984 5.54906 11.1348L11.1353 5.54857C11.4989 5.18498 12.0884 5.18498 12.4519 5.54857Z" fill="white"/>
              </svg>
            </button>
          </div>
        ))}
        {/* 이미지 추가 버튼 */}
        <button
          type="button"
          onClick={handleImageButtonClick}
          className="w-17.5 h-17.5 rounded shrink-0 bg-gray-200 border-[0.5px] border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="#ff6155" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
