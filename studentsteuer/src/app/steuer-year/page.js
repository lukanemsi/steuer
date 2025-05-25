"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function YearSelectionPage() {

  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const initialYears = Array.from({ length: 5 }, (_, i) => (currentYear - i).toString());

  const [years, setYears] = useState(initialYears);
  const [selectedYear, setSelectedYear] = useState(initialYears[0]);

  const addNewYear = () => {
    const lastYear = parseInt(years[0]); // Get latest year
    const newYear = (lastYear + 1).toString();
    setYears([newYear, ...years]); // Add to beginning of list
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary p-4 text-black">
      {/* Header */}
      <header className="w-full flex justify-around items-center px-8 py-4">
      <h1
          className=" relative inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => router.push("/")}
        >
          <span className="absolute top-1 sm:top-2 left-1 sm:left-2 w-[95%] sm:w-[90%] h-[75%] sm:h-[80%] bg-primary-text rounded-lg -rotate-[5deg]"></span>
          <span className="relative">StudentSteuer.ge</span>
        </h1>
        <div className="hidden sm:flex gap-4 ">
          <button className="cursor-pointer bg-primary-text px-4 py-2 rounded-lg font-semibold shadow-md "
           onClick={() => router.push("/upload-docs/about")}
          >
            About us
          </button>
        </div>
      </header>

      {/* Title */}
      <div className="text-center mt-10 text-white mt-5">
        <h2 className="text-2xl font-bold">აირჩიეთ წელი</h2>
        <p className="text-sm mt-2">
        შთოიერის დასაბრუნებლად აირჩიე ის წელი, რომლის განმავლობაშიც გერმანიაში იყავი დასაქმებული.
        </p>
      </div>
{/* Year Selection */}
{/* Year Selection */}
<div className="flex flex-wrap gap-4 mt-6 justify-center ">
  {years.map((year) => (
    <div
      key={year}
      className={`
        
        flex w-full sm:w-[48%] md:w-16 md:h-16
        items-center justify-between border-2 shadow-md rounded-lg transition-all
        ${selectedYear === year ? "bg-primary-text border-lime-500" : "bg-white border-gray-300"}
        px-4 py-3 md:p-0
        md:flex md:flex-col md:justify-center md:items-center
      `}
    >
      <button
        onClick={() => setSelectedYear(year)}
        className="text-lg font-semibold cursor-pointer"
      >
        {year}
      </button>

      {/* Show this only on mobile */}
      <button 
        onClick={() => router.push(`/upload-docs/info?year=${year}`)}
        className="text-sm bg-secondary text-white px-3 py-1 rounded-lg md:hidden "
      >
        <span className="text-black cursor-pointer">შემდეგი</span>
      </button>
    </div>
  ))}

  {/* "+" Button to Add New Year */}
  <button
    className="cursor-pointer w-full sm:w-[48%] md:w-16 md:h-16 flex items-center justify-center rounded-lg border-2 border-gray-300 shadow-md text-lg font-semibold bg-white"
    onClick={addNewYear}
  >
    +
  </button>
</div>


      {/* Next Button */}
      <button className="cursor-pointer hidden sm:block mt-6 bg-primary-text px-6 py-3 rounded-lg font-semibold shadow-md"
        onClick={() => router.push(`/upload-docs/info?year=${selectedYear}`)}
      >
        შემდეგი
      </button>

      {/* Footer */}
      <footer className="hidden sm:block mt-8 bg-primary-text px-4 py-2 rounded-lg shadow-md text-center">
        <p className="text-sm">+995 557 15 42 66</p>
        <p className="text-sm">studentsteuer@gmail.com</p>
      </footer>
    </div>
  );
}
