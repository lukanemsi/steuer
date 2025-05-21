"use client";
import React, { useState, useRef,Suspense  } from "react";
import { useSearchParams } from "next/navigation";
import SidebarMenu from "../../components/SidebarMenu";
import { useRouter } from "next/navigation";

export default function UserAgreementPage(){
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <UserAgreementPageInner />
      </Suspense>
    );
}
function UserAgreementPageInner() {
   const searchParams = useSearchParams();
     const selectedYear = searchParams.get("year") || "----";
    
const router = useRouter();
     const [selectedMenuIndex, setSelectedMenuIndex] = useState(4);
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
   
             <div className="bg-white p-4 rounded-lg shadow text-sm font-medium mb-6">
               <p>Tax Year: <span className="font-semibold">{selectedYear}</span></p>
             </div>
   
             <SidebarMenu
               selectedIndex={selectedMenuIndex}
               onSelect={setSelectedMenuIndex}
             />
           </div>
   
           <div className="bg-primary-text text-black mt-6 p-4 rounded-lg text-sm text-center shadow">
             <p>+995 557 15 42 66</p>
             <p>studentsteuer@gmail.com</p>
           </div>
         </aside>
   
         {/* Main Content */}
         <main className="flex-1 bg-secondary p-8 flex flex-col items-center justify-start">
           <h2 className="text-2xl sm:text-3xl font-bold mb-2">დასრულება:</h2>
           <p className="text-center max-w-lg text-sm sm:text-base text-gray-700 mb-6">
           გადმოწერეთ ფაილი “ User Agreement PDF”, შემდეგ შეავსეთ და ატვირთეთ. ბოლოს დაეთანხმეთ ჩვენი მომსახურების წესებსა და პირობებს. ფაილის შესავსებად შეგიძლიათ გამოიყენოთ adobe scan ან pdfescape.com.           </p>
           <button
               className="mb-3 bg-primary-text text-black px-6 py-2 rounded-lg shadow font-semibold transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
             >
               User Agreement PDF
             </button>

           <div
             className="w-full max-w-2xl bg-white p-50 rounded-xl border-2 border-dashed border-gray-400 text-center shadow-lg transition-all duration-300 hover:border-gray-600"
             onDrop={handleDrop}
             onDragOver={handleDragOver}
           >
             <input
               ref={fileInputRef}
               type="file"
               className="hidden"
               onChange={handleFileChange}
             />
   
             <button
               onClick={handleUploadClick}
               className="bg-primary-text text-black px-6 py-2 rounded-lg shadow font-semibold transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
             >
               ატვირთე ფაილი
             </button>
             <p className="text-sm text-gray-500 mt-2">ან გადმოიტანე ფაილი აქ</p>
   
             {uploadedFile && (
               <p className="mt-4 text-sm text-green-700">
                 ატვირთული ფაილი: <span className="font-semibold">{uploadedFile.name}</span>
               </p>
             )}
           </div>
         </main>
       </div>
     );
};