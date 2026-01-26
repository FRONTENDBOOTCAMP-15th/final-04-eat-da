"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddImage from "@/app/src/components/ui/AddImage";
import ConfirmModal from "@/app/src/components/ui/ConfirmModal";

interface EditBanchanClientProps {
  initialData: {
    id: number;
    name: string;
    price: string;
    description: string;
    ingredients: string;
    servings: string;
    quantity: string;
    pickupLocation: string;
    images: string[];
  };
}

export default function EditBanchanClient({
  initialData,
}: EditBanchanClientProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isOnSale, setIsOnSale] = useState(true); // 판매 상태

  // 수정 버튼
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  // 모달 확인 버튼
  const handleModalConfirm = () => {
    setShowModal(false);
    router.push("/mypage/banchan");
  };

  return (
    <form
      id="edit-banchan-form"
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <div className="px-5 pt-16 pb-18 flex flex-col gap-5">
        {/* 판매중/판매중지 버튼 */}
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={() => setIsOnSale(true)}
            className={`flex-1 h-12.5 rounded-lg text-display-1 font-semibold border ${
              isOnSale
                ? "bg-eatda-orange text-white border-eatda-orange"
                : "bg-white text-gray-500 border-gray-300"
            }`}
          >
            판매중
          </button>
          <button
            type="button"
            onClick={() => setIsOnSale(false)}
            className={`flex-1 h-12.5 rounded-lg text-display-1 font-semibold border ${
              !isOnSale
                ? "bg-eatda-orange text-white border-eatda-orange"
                : "bg-white text-gray-500 border-gray-300"
            }`}
          >
            판매중지
          </button>
        </div>
        {/* 입력 필드 영역 - 판매중지 시 비활성화 */}
        <fieldset
          disabled={!isOnSale}
          className={`flex flex-col gap-7.5 ${!isOnSale ? "text-gray-500 opacity-70" : ""}`}
        >
          {/* 반찬 이름 */}
          <div>
            <label className="text-display-2 font-semibold text-gray-800">
              반찬 이름 <span className="text-eatda-orange">*</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={initialData.name}
              placeholder="예: 불향 가득 제육볶음"
              className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500 disabled:text-gray-500"
              required
            />
          </div>

          {/* 반찬 이미지 등록 */}
          <AddImage initialImages={initialData.images} />

          {/* 가격 */}
          <div>
            <label className="text-display-2 font-semibold text-gray-800">
              가격 (원) <span className="text-eatda-orange">*</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={initialData.price}
              placeholder="5,000"
              className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500 disabled:text-gray-500"
              required
            />
          </div>

          {/* 설명 */}
          <div>
            <label className="text-display-2 font-semibold text-gray-800">
              설명 <span className="text-eatda-orange">*</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={initialData.description}
              placeholder="반찬에 대한 소개를 작성해주세요"
              className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500 disabled:text-gray-500"
              required
            />
          </div>

          {/* 재료 */}
          <div>
            <label className="text-display-2 font-semibold text-gray-800">
              재료 <span className="text-eatda-orange">*</span>
            </label>
            <textarea
              name="ingredients"
              defaultValue={initialData.ingredients}
              placeholder={`재료를 쉼표로 구분해주세요\n(예: 김치, 돼지고기, 두부)`}
              className="resize-none w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500 disabled:text-gray-500"
              required
            />
          </div>

          {/* 인분 */}
          <div>
            <label className="text-display-2 font-semibold text-gray-800">
              인분 <span className="text-eatda-orange">*</span>
            </label>
            <input
              type="text"
              name="servings"
              defaultValue={initialData.servings}
              placeholder="2"
              className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500 disabled:text-gray-500"
              required
            />
          </div>

          {/* 재고 수량 */}
          <div>
            <label className="text-display-2 font-semibold text-gray-800">
              재고 수량 <span className="text-eatda-orange">*</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={initialData.quantity}
              placeholder="20"
              className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500 disabled:text-gray-500"
              required
            />
          </div>

          {/* 픽업 장소 */}
          <div>
            <label className="text-display-2 font-semibold text-gray-800">
              픽업 장소 <span className="text-eatda-orange">*</span>
            </label>
            <input
              type="text"
              name="pickupLocation"
              defaultValue={initialData.pickupLocation}
              placeholder="잇다 서교동 공유주방"
              className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500 disabled:text-gray-500"
              required
            />
          </div>
        </fieldset>
      </div>

      <ConfirmModal
        isOpen={showModal}
        title="반찬 정보가 변경되었습니다."
        description="변경된 정보로 상품이 노출됩니다."
        onConfirm={handleModalConfirm}
      />
    </form>
  );
}
