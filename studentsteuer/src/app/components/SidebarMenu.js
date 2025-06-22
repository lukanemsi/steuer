"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const menuItems = [
  { label: "Your Personal Info", path: "/upload-docs/info" },
  { label: "Passport Scan", path: "/upload-docs/passport" },
  { label: "Bank Account Statement", path: "/upload-docs/bank" },
  { label: "Revenue Service Statement", path: "/upload-docs/revenue" },
  { label: "Lohnsteuerbescheinigung", path: "/upload-docs" },
  { label: "About Us", path: "/upload-docs/about" },
  { label: "Pay", path: "/upload-docs/pay" },
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
    <div className="mt-4 space-y-2 md:flex md:flex-col  items-center">
        <div className="w-70  bg-white p-4 rounded-lg shadow text-sm font-medium mb-6 hidden sm:block ">
                  <p>
                    Tax Year: <span className="font-semibold">{selectedYear}</span>
                  </p>
                </div>
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
      <div className="hidden md:flex flex-col items-center">
{menuItems.map((item, index) => {
  const isDisabled = item.label === "Pay";

  return (
    <button
      key={index}
      onClick={() => {
        if (!isDisabled) handleClick(index, item.path);
      }}
      disabled={isDisabled}
      className={`m-1 text-center w-70 px-3 py-2 rounded transition
        ${isDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" :
          selectedIndex === index
            ? "bg-[#a8c087] text-white"
            : "bg-white text-black hover:bg-gray-200 cursor-pointer"
        }`}
    >
      {index + 1}. {item.label}
    </button>
  );
})}

      </div>

      <footer className="w-70 hidden sm:block mt-8 bg-primary-text px-4 py-2 rounded-lg shadow-md text-center">
          <p className="text-sm">+995 557 15 42 66</p>
          <p className="text-sm">studentsteuer@gmail.com</p>
        </footer>
    </div>
  );
}
