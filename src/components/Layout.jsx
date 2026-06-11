import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import SideHeader from "./SideHeader";
import Footer from "./Footer";
import { bindGlobalHandlers, initPage, cleanupPage } from "../lib/template.js";

export default function Layout() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    bindGlobalHandlers();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    const slug = pathname === "/" ? "home" : pathname.replace(/^\//, "").replace(/-/g, "");
    const titleSuffix = t("common.brand.name", { defaultValue: "Navergo" });
    const pageTitle = t(`pageTitles.${slug}`, { defaultValue: titleSuffix });
    document.title = pageTitle === titleSuffix ? titleSuffix : `${pageTitle} | ${titleSuffix}`;

    const defaultDescription = t("meta.defaultDescription", { defaultValue: "" });
    const description = t(`meta.descriptions.${slug}`, { defaultValue: defaultDescription });
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", document.title);
    }
  }, [i18n.language, pathname, t]);

  useLayoutEffect(() => {
    // Force instant scroll to top regardless of CSS scroll-behavior, then
    // re-assert on next animation frame to defeat any browser auto-restore
    // (some browsers clamp scroll to the new document height after route swap).
    const scrollTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch {
        window.scrollTo(0, 0);
      }
    };
    scrollTop();
    const raf1 = requestAnimationFrame(() => {
      scrollTop();
      requestAnimationFrame(scrollTop);
    });
    initPage();
    return () => {
      cancelAnimationFrame(raf1);
      cleanupPage();
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <SideHeader />
      <Outlet />
      <Footer />
      <span className="cs_scrollup">
        <i className="flaticon-top"></i>
      </span>
      <div className="cs_video_popup">
        <div className="cs_video_popup_overlay"></div>
        <div className="cs_video_popup_content">
          <div className="cs_video_popup_layer"></div>
          <div className="cs_video_popup_container">
            <div className="cs_video_popup_align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="about:blank" title="video"></iframe>
              </div>
            </div>
            <div className="cs_video_popup_close"></div>
          </div>
        </div>
      </div>
    </>
  );
}
