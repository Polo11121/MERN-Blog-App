import { Logo } from "@/components";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useSignUp } from "@/hooks/useSignUp";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
  const { changeHandler, submitHandler, isLoading, error } = useSignUp();

  return (
    <div className="mt-20 flex-1">
      <div className="flex p-3 mx-auto max-w-3xl flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Logo className="text-4xl dat:text-white font-bold" />
          <p className="text-sm mt-5">
            This is a demo project. Yoy can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1 relative">
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
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
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {error && (
            <Alert className="mt-5 absolute w-full" color="red">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};
