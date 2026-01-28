import Image from "next/image";

export default function CartItem() {
  return (
    <div className="py-3 border-b-[0.5px] border-gray-400">
      <div className="flex gap-5 mb-3">
        <Image
          src="/food1.png"
          width={70}
          height={70}
          alt="반찬 사진1"
          className="rounded-lg"
        />
        <div className="flex-1 flex flex-col gap-0.5 mt-1">
          <div className="flex justify-between items-start">
            <p className="font-semibold text-paragraph">
              김미숙님의 소고기 장조림
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="mt-1"
            >
              <path
                d="M10.3999 0.649902L0.649902 10.3999"
                stroke="#353E5C"
                stroke-width="1.3"
                stroke-linecap="round"
              />
              <path
                d="M0.649902 0.649902L10.3999 10.3999"
                stroke="#353E5C"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <p className="text-x-small text-gray-500">김미숙 주부 9단</p>
          <p className="font-semibold text-paragraph-sm text-eatda-orange">
            8,500원
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <button className="w-6 h-6 bg-gray-200 rounded-xs flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M16.4179 9.38184H2.34521"
                stroke="#353E5C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p className="flex items-center justify-center text-paragraph">2</p>
          <button className="w-6 h-6 bg-gray-200 rounded-xs flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M9.33301 2.33398V16.334"
                stroke="#353E5C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.333 9.3335H2.33301"
                stroke="#353E5C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <p className="text-right text-gray-500 text-x-small">총합</p>
          <p className="font-semibold text-paragraph">17,000원</p>
        </div>
      </div>
    </div>
  );
}
