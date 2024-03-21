import { Header, LoadingScreen } from "@/components";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";

export const Layout = () => (
  <div className="h-screen flex flex-col">
    <Header />
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
    <Footer />
  </div>
);
