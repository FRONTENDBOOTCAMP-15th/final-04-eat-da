import BottomFixedButton from "@/app/src/components/common/BottomFixedButton";
import EditBanchanClient from "./EditBanchanClient";
import Header from "@/app/src/components/common/Header";
import { Metadata } from "next";
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
    <>
      <Header title={`${metadata.title}`} showCloseButton />
      <EditBanchanClient initialData={initialData} />
      <BottomFixedButton as="button" formId="edit-banchan-form">
        수정하기
      </BottomFixedButton>
    </>
  );
}
