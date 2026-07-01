import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

// Route-level code splitting: the home page stays in the main bundle so the
// landing view paints immediately; every other page loads on demand.
import HomePage from "./pages/HomePage.jsx";
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.jsx"));
const ServiceDetailsPage = lazy(() => import("./pages/ServiceDetailsPage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const ProjectDetailsPage = lazy(() => import("./pages/ProjectDetailsPage.jsx"));
const TeamPage = lazy(() => import("./pages/TeamPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const FaqPage = lazy(() => import("./pages/FaqPage.jsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const LegalPage = lazy(() => import("./pages/LegalPage.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy-policy" element={<LegalPage doc="privacy" />} />
          <Route path="/terms" element={<LegalPage doc="terms" />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
