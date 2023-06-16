import React, { useState } from "react";

const useFormHandling = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);
  const handleFormInput = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    handleFormInput,
  };
};

export default useFormHandling;
