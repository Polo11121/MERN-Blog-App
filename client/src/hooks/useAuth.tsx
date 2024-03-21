import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux";
import {
  selectUser,
  setError,
  setIsLoading,
  setUser,
} from "@/slices/userSlice";

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
  const { isLoading, error } = useAppSelector(selectUser);
  const [values, setValues] = useState(
    endpoint === "sign-up" ? signUpInitialState : signInInitialState
  );

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.id]: e.target.value.trim() });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Object.values(val)", Object.values(values), values);
    if (Object.values(values).some((value) => !value)) {
      dispatch(setError("All fields are required"));
      setError("All fields are required");
      return;
    }

    dispatch(setIsLoading(true));

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

      if (endpoint === "sign-in") {
        dispatch(setUser(data.user));

        navigate("/", {
          replace: true,
        });
      } else {
        navigate("/sign-in", {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch(setError((error as { message: string }).message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return {
    error,
    isLoading,
    changeHandler,
    submitHandler,
  };
};
