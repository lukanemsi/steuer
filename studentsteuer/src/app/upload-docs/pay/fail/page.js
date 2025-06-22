"use client";

import React, { useState, Suspense } from "react";
import SidebarMenu from "@/app/components/SidebarMenu";
import { useRouter } from "next/navigation";

function FailInner() {
    const router = useRouter();
    
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
          <SidebarMenu/>
        </div>   
      </aside>
<div className="flex-1 bg-secondary px-4 py-10 sm:px-12 flex flex-col items-center justify-start text-center">
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-600">სამწუხაროდ, წარმოიშვა პრობლემა</h2>
  <p className="text-base sm:text-lg leading-relaxed">
    სამწუხაროდ, გადახდა ვერ განხორციელდა ტექნიკური ხარვეზის გამო.
    გთხოვთ, სცადეთ თავიდან რამდენიმე წუთში ან დაგვიკავშირდით დახმარებისთვის.<br /><br />
    კითხვების შემთხვევაში, შეგიძლიათ დაგვიკავშირდეთ ორშაბათიდან პარასკევის ჩათვლით
    10:00 - დან 18:00 მდე.
  </p>
</div>

      </div>
  );
}

export default function Fail() {
  return (

    <Suspense fallback={<div>Loading...</div>}>
      <FailInner />
    </Suspense>

  );
}
