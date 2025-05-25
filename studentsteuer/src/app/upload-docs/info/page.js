"use client";

import React, { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SidebarMenu from "../../components/SidebarMenu";
import { useRouter } from "next/navigation";

function InfoInner() {
  const searchParams = useSearchParams();
  const selectedYear = searchParams.get("year") || "----";
  const router = useRouter();

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);


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
      <main className="flex-1 bg-secondary px-4 py-6 sm:px-12 sm:py-10 flex flex-col items-center justify-start">
  <h2 className="text-xl sm:text-3xl font-bold mb-2 text-center">
    თქვენი პერსონალური მონაცემები
  </h2>

      <form className="w-full max-w-md mt-8 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
        <label className="font-medium w-full sm:w-40">1. Name</label>
        <input
          type="text"
          className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
        <label className="font-medium w-full sm:w-40">2. Lastname</label>
        <input
          type="text"
          className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your lastname"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
        <label className="font-medium w-full sm:w-40">3. Mobile Number</label>
        <input
          type="tel"
          className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your mobile number"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-4">
        <label className="font-medium w-full sm:w-40">
          4. Country, City, home address, home number
        </label>
        <textarea
          className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your address"
          rows={2}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
        <label className="font-medium w-full sm:w-40">5. Gmail</label>
        <input
          type="email"
          className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your Gmail"
        />
      </div>
    </form>


  <div className="w-full max-w-md flex justify-start mt-6">
    <button
      onClick={() => router.push(`/upload-docs/passport?year=${selectedYear}`)}
      className="bg-primary-text text-black px-8 py-2 rounded-lg shadow font-semibold transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
    >
      შემდეგი
    </button>
  </div>
</main>


    </div>
  );
}

export default function Info() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InfoInner />
    </Suspense>
  );
}
