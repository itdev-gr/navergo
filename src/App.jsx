import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import TeamDetailsPage from "./pages/TeamDetailsPage.jsx";
// News & Insights — disabled for now
// import BlogPage from "./pages/BlogPage.jsx";
// import BlogStandardPage from "./pages/BlogStandardPage.jsx";
// import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ComingPage from "./pages/ComingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team-details" element={<TeamDetailsPage />} />
          {/* News & Insights — disabled for now
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-standard" element={<BlogStandardPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/coming" element={<ComingPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
