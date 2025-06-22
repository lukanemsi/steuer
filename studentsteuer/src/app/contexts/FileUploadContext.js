"use client";
import React, { createContext, useContext, useState } from "react";

const FileUploadContext = createContext();

export function FileUploadProvider({ children }) {
  const [files, setFiles] = useState([]);

  const addFile = (file) => {
    setFiles((prev) => [...prev, file]);
  };

  const removeFile = (fileName) => {
    setFiles((prev) => prev.filter(f => f.name !== fileName));
  };

  const clearFiles = () => setFiles([]);

  return (
    <FileUploadContext.Provider value={{ files, addFile, removeFile, clearFiles }}>
      {children}
    </FileUploadContext.Provider>
  );
}

export function useFileUpload() {
  return useContext(FileUploadContext);
}
