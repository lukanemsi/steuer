"use client";

import React, { createContext, useState, useContext } from "react";

const FormDataContext = createContext(null);

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  return (
    <FormDataContext.Provider value={{ formData, setFormData, errors, setErrors }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
}
