import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.id]: e.target.value.trim() });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.username || !values.email || !values.password) {
      setError("All fields are required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      navigate("/sign-in", {
        replace: true,
      });
    } catch (error) {
      console.log(error);
      setError((error as { message: string }).message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    changeHandler,
    submitHandler,
  };
};
