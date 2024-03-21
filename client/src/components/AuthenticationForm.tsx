import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";

export const AuthenticationForm = () => {
  const { pathname } = useLocation();
  const action = pathname.split("/")[1] as "sign-in" | "sign-up";

  const { changeHandler, submitHandler, isLoading, error } = useAuth(action);

  return (
    <div className="flex-1 relative ">
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        {action === "sign-up" && (
          <div>
            <Label value="Your username" />
            <TextInput
              disabled={isLoading}
              onChange={changeHandler}
              type="text"
              placeholder="Username"
              id="username"
            />
          </div>
        )}
        <div>
          <Label value="Your email" />
          <TextInput
            disabled={isLoading}
            onChange={changeHandler}
            type="text"
            placeholder="Email"
            id="email"
          />
        </div>
        <div>
          <Label value="Your password" />
          <TextInput
            disabled={isLoading}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <Button
          disabled={isLoading}
          isProcessing={isLoading}
          gradientDuoTone="purpleToPink"
          type="submit"
        >
          {action === "sign-in" ? "Sign in" : "Sign up"}
        </Button>
      </form>
      <div className="flex gap-2 text-sm mt-5">
        <span>
          {action === "sign-up"
            ? "Already have an account?"
            : "Don't have an account?"}
        </span>
        <Link
          to={`/${action === "sign-in" ? "sign-up" : "sign-in"}`}
          className="text-blue-500"
        >
          {action === "sign-in" ? "Sign up" : "Sign in"}
        </Link>
      </div>
      {error && (
        <Alert className="mt-5 absolute w-full" color="red">
          {error}
        </Alert>
      )}
    </div>
  );
};
