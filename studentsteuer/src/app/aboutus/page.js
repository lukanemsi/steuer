"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AboutUsPage = () => {
  const router = useRouter();

    return (
    <div className="bg-[#f7f3ef] min-h-screen flex items-center justify-center">
      <div className="p-6 md:p-10 text-[#1a1a1a] font-sans max-w-2xl w-full">
      <h1 
            className="relative inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black px-4 sm:px-6 py-2 sm:py-3 cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => router.push("/")}>
            <span className="absolute top-1 sm:top-2 left-1 sm:left-2 w-[95%] sm:w-[90%] h-[75%] sm:h-[80%] bg-primary-text rounded-lg -rotate-[5deg]"></span>
            <span className="relative">StudentSteuer.ge</span>
          </h1>
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
              ფინალური გადახდის დაბრუნება (€49.99) – ერთჯერადი ტიპის ოპერაცია და ჩვენი სერვისით
              მოგაწვდით მომზადებულ სახელს.
            </li>
            <li>
              პორტალის ატვირთვა ანტვერპ – ამ ეტაპზე არ ითხოვს დაბრუნებას. საბუღალტრო ფორმებს
              Finanzamt მიაწვდით იმავე სახელზე, რაც გამოყენებულია ჩვენს სისტემაში. ფასი
              შეადგენს €49.99 + 49.99 ორ ეტაპად მომზადებისას.
            </li>
          </ol>

          <p>
            <strong>StudentSteuer.ge</strong>-ს გუნდი მზად არის დაგეხმაროთ დოკუმენტების
            მომზადებაში, სერვისსა და კითხვებზე პასუხით!
          </p>

          <p>იხილეთ მომხმარებლის პროტოკოლი:</p>

          <a
            href="/docs/user-agreement.pdf"
            target="_blank"
            className="inline-block mt-2 px-4 py-2 bg-[#a8c087] text-white font-medium rounded shadow hover:bg-[#91aa6d] transition"
          >
            User Agreement PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
