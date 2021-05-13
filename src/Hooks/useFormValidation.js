import { useState } from "react";

const useFormValidation = () => {
  const [values, setValues] = useState("");

  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setValues("");
    console.log({ values });
  };
  return {
    handleChange,
    values,
    handleSubmit,
  };
};

export default useFormValidation;
