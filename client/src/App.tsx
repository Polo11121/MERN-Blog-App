import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazyLoad } from "@/lib/lazyLoad";
import { Layout } from "@/components";

const HomePage = lazyLoad("HomePage");
const AboutPage = lazyLoad("AboutPage");
const DashboardPage = lazyLoad("DashboardPage");
const ProjectsPage = lazyLoad("ProjectsPage");
const AuthenticationPage = lazyLoad("AuthenticationPage");

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="sign-in" element={<AuthenticationPage />} />
        <Route path="sign-up" element={<AuthenticationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
