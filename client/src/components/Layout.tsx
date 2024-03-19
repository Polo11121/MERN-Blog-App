import { Header, LoadingScreen } from "@/components";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <div className="h-screen flex flex-col">
    <Header />
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </div>
);
