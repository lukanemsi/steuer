"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SidebarMenu from "../../components/SidebarMenu";
import { useFormData, FormDataProvider } from "@/app/contexts/FormDataContext";

function InfoInner() {
  const searchParams = useSearchParams();
  const selectedYear = searchParams.get("year") || "----";
  const router = useRouter();

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const { formData, setFormData, errors, setErrors } = useFormData();

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Lastname is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Mobile number is required";
    } else if (!/^\+?\d{6,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Mobile number is invalid";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleNext(e) {
    e.preventDefault();

    if (validate()) {
      router.push(`/upload-docs/passport?year=${selectedYear}`);
    }
  }

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

      <main className="flex-1 bg-secondary px-4 py-6 sm:px-12 sm:py-10 flex flex-col items-center justify-start">
        <h2 className="text-xl sm:text-3xl font-bold mb-2 text-center">
          თქვენი პერსონალური მონაცემები
        </h2>

        <form
          className="w-full max-w-md mt-8 space-y-4"
          onSubmit={handleNext}
          noValidate
        >
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="font-medium w-full sm:w-40" htmlFor="name">
              1. Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`w-full bg-white border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && (
            <p className="text-red-600 text-sm ml-44">{errors.name}</p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="font-medium w-full sm:w-40" htmlFor="lastname">
              2. Lastname
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              className={`w-full bg-white border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.lastname
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          {errors.lastname && (
            <p className="text-red-600 text-sm ml-44">{errors.lastname}</p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="font-medium w-full sm:w-40" htmlFor="phoneNumber">
              3. Mobile Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              className={`w-full bg-white border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.phoneNumber
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm ml-44">{errors.phoneNumber}</p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-4">
            <label
              className="font-medium w-full sm:w-40"
              htmlFor="address"
            >
              4. Country, City, home address, home number
            </label>
            <textarea
              id="address"
              name="address"
              className={`w-full bg-white border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 ${
                errors.address
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your address"
              rows={2}
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          {errors.address && (
            <p className="text-red-600 text-sm ml-44">{errors.address}</p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <label className="font-medium w-full sm:w-40" htmlFor="email">
              5. Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full bg-white border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && (
            <p className="text-red-600 text-sm ml-44">{errors.email}</p>
          )}

          <div className="w-full max-w-md flex justify-start mt-6">
            <button
              type="submit"
              className="bg-primary-text text-black px-8 py-2 rounded-lg shadow font-semibold transition-all duration-200 hover:bg-opacity-80 hover:scale-105"
            

            >
              შემდეგი
            </button>
          </div>
        </form>
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
