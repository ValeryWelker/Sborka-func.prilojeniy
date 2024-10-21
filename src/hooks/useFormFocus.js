import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useFormFocus = (initialState, schema) => {
  const [isFocused, setIsFocused] = useState(initialState);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const watchAllFields = watch();

  const handleFocus = (e) => {
    const { name } = e.target;
    setIsFocused({ ...isFocused, [name]: true });
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    if (watchAllFields[name] !== "") {
      setIsFocused({ ...isFocused, [name]: true });
    } else {
      setIsFocused({ ...isFocused, [name]: false });
    }
  };
  return {
    register,
    handleSubmit,
    handleBlur,
    handleFocus,
    isFocused,
    errors,
    reset,
  };
};

export default useFormFocus;
