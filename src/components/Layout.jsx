import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import SideHeader from "./SideHeader";
import Footer from "./Footer";
import { bindGlobalHandlers, initPage, cleanupPage } from "../lib/template.js";

export default function Layout() {
  const { pathname } = useLocation();

  // Bind document-level handlers once.
  useEffect(() => {
    bindGlobalHandlers();
  }, []);

  // Re-init per-page plugins on every navigation, scroll to top.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
