import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import SideHeader from "./SideHeader";
import Footer from "./Footer";
import { bindGlobalHandlers, initPage, cleanupPage } from "../lib/template.js";

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    bindGlobalHandlers();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    const knownSlugs = new Set([
      "home", "about", "service", "servicedetails", "projects", "projectdetails",
      "team", "contact", "faq", "gallery", "coming", "404", "privacypolicy", "terms",
    ]);
    const rawSlug = pathname === "/" ? "home" : pathname.replace(/^\//, "").replace(/-/g, "");
    const slug = knownSlugs.has(rawSlug) ? rawSlug : "404";
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

  // Reset scroll to the top on EVERY navigation. Keyed on location.key so it
  // also fires on same-path query changes (e.g. ?project=a → ?project=b), not
  // just pathname changes. The site scrolls the document natively, but reset
  // every candidate (window + scrollingElement + html + body) and re-assert
  // across a few frames/timeouts so the reset still wins after a lazy-loaded
  // page mounts or a parallax/ScrollTrigger init nudges the position.
  useLayoutEffect(() => {
    const scrollTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch {
        window.scrollTo(0, 0);
      }
      const se = document.scrollingElement;
      if (se) se.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scrollTop();
    const raf1 = requestAnimationFrame(() => {
      scrollTop();
      requestAnimationFrame(scrollTop);
    });
    const t1 = setTimeout(scrollTop, 120);
    const t2 = setTimeout(scrollTop, 320);
    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.key]);

  // Re-run the template's per-page init (AOS, ScrollTrigger, parallax, sliders)
  // when the page itself changes.
  useLayoutEffect(() => {
    initPage();
    return () => {
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
