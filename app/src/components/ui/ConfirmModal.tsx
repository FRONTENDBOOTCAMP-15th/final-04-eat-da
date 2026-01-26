"use client";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  onConfirm: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  description,
  onConfirm,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-5">
      <div className="bg-white rounded w-[90vw] max-w-150 p-6 flex flex-col gap-6.5">
        <div className="text-gray-800 text-center flex flex-col gap-4">
          <p className="text-display-5 font-semibold">{title}</p>
          {description && <p className="text-display-2">{description}</p>}
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="w-full py-3 rounded bg-eatda-orange text-white text-display-2 font-semibold hover:opacity-80"
        >
          확인
        </button>
      </div>
    </div>
  );
}
