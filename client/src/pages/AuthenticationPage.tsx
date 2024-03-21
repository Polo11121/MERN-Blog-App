import { AuthenticationForm, Logo } from "@/components";

export const AuthenticationPage = () => (
  <div className="my-20  flex-1">
    <div className="flex p-3 mx-auto max-w-3xl flex-col md:flex-row md:items-center gap-5">
      <div className="flex-1">
        <Logo className="text-4xl dat:text-white font-bold" />
        <p className="text-sm mt-5">
          This is a demo project. Yoy can sign up with your email and password
          or with Google.
        </p>
      </div>
      <AuthenticationForm />
    </div>
  </div>
);
