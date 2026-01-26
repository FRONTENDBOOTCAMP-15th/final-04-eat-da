"use client";

import { useState } from "react";

const CATEGORIES = [
  "전체",
  "메인반찬",
  "국물",
  "찜",
  "볶음",
  "조림",
  "튀김",
  "밑반찬",
];

export default function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  return (
    <div className="fixed top-15 z-10 bg-white flex h-10 items-center gap-7.5 overflow-x-auto px-5 scrollbar-hide text-paragraph">
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={[
              "relative shrink-0 overflow-hidden transition-colors",
              isSelected
                ? "font-bold text-eatda-orange"
                : "font-medium text-gray-700",
            ].join(" ")}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
