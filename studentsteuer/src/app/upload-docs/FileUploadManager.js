"use client";
import React, { useRef, useState } from "react";

const MAX_TOTAL_SIZE = 50 * 1024 * 1024; // 50MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

export default function FileUploadManager({ onFilesReady }) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const processFile = (file) => {
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("Only PDF, PNG, and JPG files are allowed.");
      return;
    }

    if (file.size > MAX_TOTAL_SIZE) {
      alert("File exceeds 50MB size limit.");
      return;
    }

    setUploadedFile(file);
    onFilesReady(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleUploadClick = () => fileInputRef.current?.click();

  return (
    <div
      className="w-full max-w-md bg-white p-8 sm:p-30 rounded-xl border-2 border-dashed border-gray-400 text-center shadow-lg transition-all duration-300 hover:border-gray-600"
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
  );
}
