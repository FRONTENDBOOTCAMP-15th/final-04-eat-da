import BottomFixedButton from "@/app/src/components/ui/BottomFixedButton";
import EditBanchanClient from "./EditBanchanClient";
import { Metadata } from "next";
import Link from "next/link";
import { banchanList } from "../../BanchanData";

export const metadata: Metadata = {
  title: "반찬 수정",
  description: "반찬 수정 페이지",
};

interface EditBanchanPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBanchanPage({
  params,
}: EditBanchanPageProps) {
  const { id } = await params;
  const banchan = banchanList.items.find((item) => item._id === Number(id));

  if (!banchan) {
    return <div>반찬을 찾을 수 없습니다.</div>;
  }

  const initialData = {
    id: banchan._id,
    name: banchan.name,
    price: banchan.price.toLocaleString(),
    description: banchan.extra?.description || "",
    ingredients: banchan.extra?.ingredients || "",
    servings: banchan.extra?.servings || "",
    quantity: banchan.quantity?.toString() || "",
    pickupLocation: banchan.extra?.pickupLocation || "",
    images: banchan.mainImages?.map((img) => img.path) || [],
  };

  return (
    <div className="flex flex-col bg-white">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-5 border-b border-gray-400">
        <h1 className="text-display-6 font-semibold text-gray-800">
          반찬 수정
        </h1>
        <Link href="/mypage/banchan" className="text-gray-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </header>
      <EditBanchanClient initialData={initialData} />
      <BottomFixedButton as="button" formId="edit-banchan-form">
        수정하기
      </BottomFixedButton>
    </div>
  );
}
