"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddImage from "@/app/src/components/ui/AddImage";
import ConfirmModal from "@/app/src/components/ui/ConfirmModal";

export default function NewBanchanClient() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  // 등록 버튼
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
      id="new-banchan-form"
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      <div className="flex-1 px-5 pt-5 pb-32.5 flex flex-col gap-7.5 overflow-y-auto">
        {/* 반찬 이름 */}
        <div>
          <label className="text-display-2 font-semibold text-gray-800 mb-2">
            반찬 이름 <span className="text-eatda-orange">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="예: 불향 가득 제육볶음"
            className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500"
            required
          />
        </div>

        {/* 반찬 이미지 등록 */}
        <AddImage />

        {/* 가격 */}
        <div>
          <label className="text-display-2 font-semibold text-gray-800 mb-2">
            가격 (원) <span className="text-eatda-orange">*</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="5,000"
            className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500"
            required
          />
        </div>

        {/* 설명 */}
        <div>
          <label className="text-display-2 font-semibold text-gray-800 mb-2">
            설명 <span className="text-eatda-orange">*</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="반찬에 대한 소개를 작성해주세요"
            className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500"
            required
          />
        </div>

        {/* 재료 */}
        <div>
          <label className="text-display-2 font-semibold text-gray-800 mb-2">
            재료 <span className="text-eatda-orange">*</span>
          </label>
          <textarea
            name="ingredients"
            placeholder={`재료를 쉼표로 구분해주세요\n(예: 김치, 돼지고기, 두부)`}
            className="resize-none w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500"
            required
          />
        </div>

        {/* 인분 */}
        <div>
          <label className="text-display-2 font-semibold text-gray-800 mb-2">
            인분 <span className="text-eatda-orange">*</span>
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="2"
            className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500"
            required
          />
        </div>

        {/* 재고 수량 */}
        <div>
          <label className="text-display-2 font-semibold text-gray-800 mb-2">
            재고 수량 <span className="text-eatda-orange">*</span>
          </label>
          <input
            type="text"
            name="maxOrder"
            placeholder="20"
            className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500"
            required
          />
        </div>

        {/* 픽업 장소 */}
        <div>
          <label className="text-display-2 font-semibold text-gray-800 mb-2">
            픽업 장소 <span className="text-eatda-orange">*</span>
          </label>
          <input
            type="text"
            name="pickupLocation"
            placeholder="잇다 서교동 공유주방"
            className="w-full py-2 border-b-[0.5px] border-gray-400 text-display-2 text-gray-800 placeholder:text-gray-500"
            required
          />
        </div>
      </div>

      <ConfirmModal
        isOpen={showModal}
        title="반찬이 등록되었습니다."
        onConfirm={handleModalConfirm}
      />
    </form>
  );
}
