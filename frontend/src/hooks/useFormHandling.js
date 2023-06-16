import React, { useState } from "react";

const useFormHandling = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);
  const handleFormInput = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      ["uuid"]: "6cedeb38-b756-4c57-b3fe-b6b1168016db",
    });
  };

  return {
    formData,
    handleFormInput,
  };
};

export default useFormHandling;
