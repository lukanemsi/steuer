"use client";

import React, { useState, useRef, Suspense } from "react";
import SidebarMenu from "../../components/SidebarMenu";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function AboutInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isChecked, setIsChecked] = useState(false);

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(5);
  const selectedYear = searchParams.get("year") || "----";

  const handleNextClick = () => {

        router.push(`/upload-docs/pay?year=${selectedYear}`);
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
      <main className="flex-1 bg-secondary px-4 py-6 sm:px-12 sm:py-10 flex flex-col items-center justify-start">
 
        <h2 className="text-3xl font-bold mb-6 text-center">About us</h2>

        <div className="space-y-4 text-[16px] leading-relaxed">
        <p>
            <strong>StudentSteuer.ge</strong> არის ქართული კომპანია და აქცენტს აკეთებს
            ქართველ სტუდენტებზე გერმანიაში ბუღალტრული დოკუმენტებში. ჩვენი პლატფორმა პროცესს
            გამარტივებს.
          </p>

          <p>მთავარ ორ სერვისს გთავაზობთ:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              ფინალური გადახდის დაბრუნება (€50.00) – ერთჯერადი ტიპის ოპერაცია და ჩვენი სერვისით
              მოგაწვდით მომზადებულ სახელს.
            </li>
            <li>
              პორტალის ატვირთვა ანტვერპ – ამ ეტაპზე არ ითხოვს დაბრუნებას. საბუღალტრო ფორმებს
              Finanzamt მიაწვდით იმავე სახელზე, რაც გამოყენებულია ჩვენს სისტემაში. ფასი
              შეადგენს €50.00 + 50.00 ორ ეტაპად მომზადებისას.
            </li>
          </ol>

          <p>
            <strong>StudentSteuer.ge</strong>-ს გუნდი მზად არის დაგეხმაროთ დოკუმენტების
            მომზადებაში, სერვისსა და კითხვებზე პასუხით!
          </p>

          <p>იხილეთ მომხმარებლის პროტოკოლი:</p>

          <div className="flex flex-col items-start gap-4">
      <a
        href="/docs/user-agreement.pdf"
        target="_blank"
        className="inline-block px-4 py-2 bg-[#a8c087] text-white font-medium rounded shadow hover:bg-[#91aa6d] transition"
      >
        User Agreement PDF
      </a>

      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="accent-[#a8c087] w-4 h-4"
        />
        I've read and agree to the User Agreement
      </label>

      <button
        onClick={handleNextClick}
        disabled={!isChecked}
        className={`px-8 py-2 rounded-lg shadow font-semibold transition-all duration-200 ${
          isChecked
            ? "bg-primary-text text-black hover:bg-opacity-80 hover:scale-105"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        შემდეგი
      </button>
    </div>
        </div>
    </main>
    </div>
  );
}

export default function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutInner />
    </Suspense>
  );
}
