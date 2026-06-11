import { useState } from "react";
import { useTranslation } from "react-i18next";

const MAP_SRC = "https://www.google.com/maps?q=Leof.+Dimokratias+397,+Perama+188+63,+Greece&output=embed";

// GDPR: the Google Maps iframe sets third-party cookies, so it only loads
// after the visitor explicitly opts in.
export default function ConsentMap() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={MAP_SRC}
        title={t("contact.map.consentHeading")}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }

  return (
    <div
      style={{
        minHeight: "420px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        background: "#0a0c2e url('/assets/img/pattern-bg-for-light.png') center/cover",
        backgroundBlendMode: "multiply",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <h5 style={{ color: "#fff", margin: 0 }}>{t("contact.map.consentHeading")}</h5>
      <p style={{ color: "rgba(255,255,255,0.75)", margin: 0, maxWidth: "420px" }}>{t("contact.map.consentNote")}</p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-220"
      >
        <span>{t("contact.map.consentButton")}</span>
      </button>
    </div>
  );
}
