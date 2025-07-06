"use client";
import React, { useState, useRef,Suspense  } from "react";
import { useSearchParams } from "next/navigation";
import SidebarMenu from "../components/SidebarMenu";
import { useRouter } from "next/navigation";
import FileUploadManager from "./FileUploadManager";
import { useFileUpload } from "../contexts/FileUploadContext";

export default function UploadDocsPage(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UploadDocsPageInner />
    </Suspense>
  );
}


function UploadDocsPageInner() {
  const searchParams = useSearchParams();
  const selectedYear = searchParams.get("year") || "----";
  const router = useRouter();

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(4);
  const [uploadedFile, setUploadedFile] = useState(null);
  const { files } = useFileUpload();   
  const [errorMessage, setErrorMessage] = useState("");

  const handleNextClick = () => {
      if (files.length === 4){
      router.push(`/upload-docs/about?year=${selectedYear}`)
      }
}

async function validate() {
  if (files.length !== 4) {
    setErrorMessage("გთხოვთ, ატვირთეთ ყველა ფაილი სანამ გააგრძელებთ");
    return;
  }
}


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-primary text-black">
      {/* Sidebar */}
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

      {/* Main Content */}
    <main className="flex-1  bg-secondary px-4 py-6 sm:px-12 sm:py-10 flex flex-col items-center justify-start">
      <h2 className="text-xl sm:text-3xl font-bold mb-2 text-center">
    ატვირთეთ შთოიერი
  </h2>
  <p className="text-center max-w-md text-sm sm:text-base text-gray-700 mb-6">
    ატვირთეთ <span className="text-green-700 font-semibold">payslip</span>, payslip არის დოკუმენტი, რომელსაც დამსაქმებელი სამუშაო კონტრაქტის დასრულების შემდეგ გაძლევთ თქვენ.
  </p>

    <FileUploadManager onFilesReady={setUploadedFile} />
    
  <div className="w-full max-w-md flex justify-start mt-6">
    <button
      onClick={() => { validate(); handleNextClick();}}
      className="bg-primary-text text-black px-8 py-2 rounded-lg shadow font-semibold transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
    >
      შემდეგი
    </button>
  </div>
     {errorMessage && (
          <div className="text-red-600 font-semibold mt-4">{errorMessage}</div>
        )}
</main>
    </div>
  );
}