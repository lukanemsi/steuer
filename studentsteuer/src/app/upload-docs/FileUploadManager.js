"use client";
import React, { useRef, useState } from "react";
import { useFileUpload } from "../contexts/FileUploadContext";

const MAX_TOTAL_SIZE = 50 * 1024 * 1024;

export default function FileUploadManager({ onFilesReady }) {
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const { files, addFile, removeFile } = useFileUpload();

  const processFile = (file) => {
    if (!file) return;

    if (file.size > MAX_TOTAL_SIZE) {
      setError("ფაილის ზომა არ უნდა აღემატებოდეს 50MB-ს.");
      return;
    }

    addFile(file);
    onFilesReady?.(file);
    setError(null);
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
    className="w-full max-w-md bg-white  p-8 sm:p-30  rounded-xl border-2 border-dashed border-gray-400 text-center shadow-lg transition-all duration-300 hover:border-gray-600"
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

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {files.length > 0 && (
        <div className="mt-4 text-left">
          <p className="text-green-700 font-semibold mb-1">ატვირთული ფაილები:</p>
          <ul className="list-disc list-inside text-sm">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center">
                {file.name}
                <button
                  className="text-red-500 ml-2 text-xs"
                  onClick={() => removeFile(file.name)}
                >
                  წაშლა
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
