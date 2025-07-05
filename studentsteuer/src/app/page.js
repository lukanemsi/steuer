"use client";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
      <div className="h-screen w-screen flex flex-col md:flex-row">
        <div className="bg-primary text-white flex-1 flex flex-col justify-around items-center p-6 text-center md:text-left">
          <h1 
            className="relative inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black px-4 sm:px-6 py-2 sm:py-3 cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => router.push("/")}>
            <span className="absolute top-1 sm:top-2 left-1 sm:left-2 w-[95%] sm:w-[90%] h-[75%] sm:h-[80%] bg-primary-text rounded-lg -rotate-[5deg]"></span>
            <span className="relative">StudentSteuer.ge</span>
          </h1>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">დაიბრუნე შთოიერი <br /> მარტივად</h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl">
              სტუდენტი ხარ და ზაფხულობით <br />
              გერმანიაში მუშაობ? StudentSteuer <br />
              შთოიერის (გერმანული გადასახადის) <br />
              დაბრუნებაში დაგეხმარება.
            </p>
          </div>
          <div className="bg-primary-text text-black px-4 py-2 rounded-lg mt-4 hidden sm:block">
            <p className="text-sm sm:text-base">+995 557 15 42 66</p>
            <p className="text-sm sm:text-base">studentsteuer@gmail.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-secondary flex-1 flex flex-col justify-around items-center p-6">
          <div className="hidden sm:flex gap-10">
            <div 
      className="bg-primary-text text-black font-semibold px-6 py-3 rounded-xl shadow transition-all duration-300 hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-text"
              onClick={() => router.push("/upload-docs/about")}>
              About Us
            </div>
          </div>
<button
  onClick={() => router.push("/steuer-year")}
  className="bg-primary text-black font-semibold text-lg px-8 py-4 rounded-xl shadow-md w-full max-w-md flex items-center justify-center gap-3 transition-all duration-300 hover:bg-opacity-90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary"
>
  დაიბრუნე შთოიერი
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>
        </div>
      </div>
  );
}
