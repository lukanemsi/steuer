"use client";
import React, { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SidebarMenu from "../../components/SidebarMenu";
import { useRouter } from "next/navigation";

export default function Revenue(){
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <RevenueInner />
      </Suspense>
    );
  
}
function RevenueInner() {
  const searchParams = useSearchParams();
  const selectedYear = searchParams.get("year") || "----";
  const router = useRouter();

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(3);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      console.log("Selected file:", file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setUploadedFile(file);
      console.log("Dropped file:", file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-primary text-black">
      <aside className="w-full md:w-[500px] bg-primary p-6 flex flex-col justify-between shadow-md">
        <div>
        <h1
          className="mb-5 relative inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => router.push("/")}
        >
          <span className="absolute top-1 sm:top-2 left-1 sm:left-2 w-[95%] sm:w-[90%] h-[75%] sm:h-[80%] bg-primary-text rounded-lg -rotate-[5deg]"></span>
          <span className="relative">StudentSteuer.ge</span>
        </h1>


          <SidebarMenu
            selectedIndex={selectedMenuIndex}
            onSelect={setSelectedMenuIndex}
          />
        </div>

      </aside>

      <main className="flex-1 bg-secondary p-8 flex flex-col items-center justify-start">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Revenue Service Statement:</h2>
        <p className="text-center max-w-lg text-sm sm:text-base text-gray-700 mb-6">
        მიბრძანდით შემოსავლების სამსახურში ( Revenue Service ), უფასოდ მოითხოვეთ თქვენი წინა წლის შემოსავლების ცნობა ( 9 999 ლარს არ უნდა სცდებოდეს თქვენი შემოსავალი დოკუმენტში. თუ სცდება აუცილებელია შემცირებული ვარიანტის ამობეჭდვა). ამობეჭდილ ცნობას ქვედა მარჯვენა კუთხეში აქვს შტრიხკოდი, დაასკანერეთ და გადმოწერეთ PDF დოკუმენტი. შემდეგ კი ატვირთეთ აქ.
        </p>

        <div
    className="w-full max-w-md bg-white  p-8 sm:p-30  rounded-xl border-2 border-dashed border-gray-400 text-center shadow-lg transition-all duration-300 hover:border-gray-600"
    onDrop={handleDrop}
    onDragOver={handleDragOver}
  >
    <input
      ref={fileInputRef}
      type="file"
      className="hidden"
      onChange={handleFileChange}
    />

    {/* Upload button */}
    <button
      onClick={handleUploadClick}
      className="bg-primary-text text-black px-6 py-2 rounded-lg shadow font-semibold transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
    >
      ატვირთე ფაილი
    </button>

    {/* Text below the button */}
    <div className="mt-2 sm:mt-0">
      <p className="text-sm text-gray-500">
        ან გადმოიტანე ფაილი აქ
      </p>
    </div>



    {/* Uploaded file name */}
    {uploadedFile && (
      <p className="mt-4 text-sm text-green-700">
        ატვირთული ფაილი: <span className="font-semibold">{uploadedFile.name}</span>
      </p>
    )}
  </div>
        <div className="w-full max-w-md flex justify-start mt-6">
          <button
            onClick={() => router.push(`/upload-docs/?year=${selectedYear}`)}
            className="bg-primary-text text-black px-8 py-2 rounded-lg shadow font-semibold transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
          >
            შემდეგი
          </button>
        </div>
      </main>
    </div>
  );
}
