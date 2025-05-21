"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const menuItems = [
  { label: "Lohnsteuerbescheinigung", path: "/upload-docs" },
  { label: "Passport Scan", path: "/upload-docs/passport" },
  { label: "Bank Account Statement", path: "/upload-docs/bank" },
  { label: "Revenue Service Statement", path: "/upload-docs/revenue" },
  { label: "Your Personal Info", path: "/upload-docs/info" },
  { label: "Pay", path: "/upload-docs/pay" },
  { label: "About Us", path: "/aboutus" },
];

export default function SidebarMenu({ selectedIndex, onSelect }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedYear = searchParams.get("year");

  const handleClick = (index, basePath) => {
    onSelect(index);
    const pathWithYear = selectedYear
      ? `${basePath}?year=${selectedYear}`
      : basePath;
    router.push(pathWithYear);
  };

  const selectedItem = menuItems[selectedIndex];

  return (
    <div className="mt-4 space-y-2">
      {/* Mobile: show only selected */}
      <div className="block md:hidden">
        {selectedItem && (
          <button
            onClick={() => handleClick(selectedIndex, selectedItem.path)}
            className="w-full text-left px-3 py-2 rounded bg-[#a8c087] text-white"
          >
            {selectedIndex + 1}. {selectedItem.label}
          </button>
        )}
      </div>

      {/* Desktop: show all */}
      <div className="hidden md:block">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index, item.path)}
            className={`m-1 w-full text-left px-3 py-2 rounded transition ${
              selectedIndex === index
                ? "bg-[#a8c087] text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {index + 1}. {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
