import { useState } from 'react';

const useForm = (initial) => {
  const [inputsForm, setInputs] = useState(initial);

  const handleInputChange = (e) => {
    setInputs({
      ...inputsForm,
      [e.target.name]: e.target.value,
    });
  };
  // Reseting form
  const resetForm = () => setInputs(initial);

  return [inputsForm, handleInputChange, resetForm];
};

export default useForm;
