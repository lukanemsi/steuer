"use client"

import { useFileUpload } from "@/app/contexts/FileUploadContext";
import React, { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SidebarMenu from "../../components/SidebarMenu";
import { useRouter } from "next/navigation";
import { useFormData } from "@/app/contexts/FormDataContext";



function PayInner() {
  const searchParams = useSearchParams();
  const selectedYear = searchParams.get("year") || "----";
  const router = useRouter();
  const { files } = useFileUpload();   
  const { formData } = useFormData();
   const [loading, setLoading] = useState(false);


  const [selectedMenuIndex, setSelectedMenuIndex] = useState(6);


async function sendDataToServer() {
  setLoading(true); 
  const formDataPayload = new FormData();

  const userBlob = new Blob([JSON.stringify(formData)], {
    type: "application/json",
  });
  formDataPayload.append("user", userBlob);
  

  files.forEach((file) => {
    formDataPayload.append("files", file);
  });

  try {
    const response = await fetch("https://studentsteuer.ge/studentsteuer/files/upload", {
      method: "POST",
      body: formDataPayload,
    });


    if (!response.ok) {
      throw new Error("ფაილის ატვირთვა ვერ მოხერხდა.");
    }

    const result = await response.json();
    const redirectUrl = result.data;
    if (redirectUrl && typeof redirectUrl === "string") 
      window.location.href = redirectUrl; // 🔁 Redirect to the URL
    
  } catch (err) {
    console.error(err);
  }finally{
     setLoading(false);
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

  <main className="flex-1 bg-secondary px-4 py-10 sm:px-12 flex flex-col items-center justify-start">
  <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 sm:p-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6">
      აირჩიეთ გადახდის მეთოდი
    </h2>
  <div className="p-4 sm:p-6 md:p-10 lg:p-16 xl:p-30">
<button
  onClick={sendDataToServer}
  disabled={loading}
  className={`w-full bg-white border border-gray-300 rounded-xl transition-all duration-300 
              ${loading ? "cursor-not-allowed opacity-60" : "hover:border-orange-500 hover:shadow-xl"}`}
>
  <div className="flex flex-col justify-center items-center h-full p-4">
    <div className="flex-grow flex items-center justify-center">
      {loading ? (
        <svg
          className="animate-spin h-6 w-6 text-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      ) : (
        <img
          src="/svg/bog.svg"
          alt="Bank of Georgia"
          className="w-[120px] h-[60px] object-contain"
        />
      )}
    </div>
    <span className="mt-3 text-sm font-semibold text-gray-700">
      {loading ? "მოთხოვნა იგზავნება..." : "Bank of Georgia"}
    </span>
  </div>
</button>
</div>
  </div>
  </main>

    </div>
  );
}

export default function Pay() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PayInner />
    </Suspense>
  );
}