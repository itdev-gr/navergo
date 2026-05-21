import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = i18n.language || "el";

  function setLang(lng) {
    if (lng !== current) i18n.changeLanguage(lng);
  }

  const baseBtn = {
    border: 0,
    background: "transparent",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 13,
    padding: "4px 8px",
    cursor: "pointer",
    letterSpacing: 1,
  };
  const active = { textDecoration: "underline", textUnderlineOffset: 4 };
  const inactive = { opacity: 0.7 };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        marginLeft: 16,
      }}
      aria-label={t("common.languageSelector")}
    >
      <button
        type="button"
        onClick={() => setLang("el")}
        style={{ ...baseBtn, ...(current === "el" ? active : inactive) }}
        aria-pressed={current === "el"}
      >
        ΕΛ
      </button>
      <span style={{ color: "#ffffff", opacity: 0.5 }}>|</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        style={{ ...baseBtn, ...(current === "en" ? active : inactive) }}
        aria-pressed={current === "en"}
      >
        EN
      </button>
    </div>
  );
}
