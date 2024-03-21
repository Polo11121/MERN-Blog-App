import { useState } from "react";
import { useNavigate } from "react-router-dom";

const signUpInitialState = {
  username: "",
  email: "",
  password: "",
};

const signInInitialState = {
  email: "",
  password: "",
};

export const useAuth = (endpoint: "sign-up" | "sign-in") => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState(
    endpoint === "sign-up" ? signUpInitialState : signInInitialState
  );

  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.id]: e.target.value.trim() });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Object.values(val)", Object.values(values), values);
    if (Object.values(values).some((value) => !value)) {
      setError("All fields are required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/auth/${endpoint}`, {
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
