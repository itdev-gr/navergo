import { useState } from "react";
import { useTranslation } from "react-i18next";

const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "a09fadfc-4491-45af-9723-de23745d81d9";

// Shared contact form used on the Contact page and the homepage. Submits via
// Web3Forms (no backend needed); the access key routes messages to the inbox
// registered at web3forms.com.
export default function ContactForm({ tPrefix = "contact.form" }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (form.elements._gotcha.value) return; // honeypot: silently drop bots
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Navergo website: ${form.elements.subject.value}`,
          from_name: `${form.elements.firstName.value} ${form.elements.lastName.value}`.trim(),
          firstName: form.elements.firstName.value,
          lastName: form.elements.lastName.value,
          phone: form.elements.phone.value,
          email: form.elements.email.value,
          message: form.elements.message.value,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error("send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <div className="input-col-two">
        <input type="text" name="firstName" autoComplete="given-name" aria-label={t(`${tPrefix}.firstName`)} placeholder={t(`${tPrefix}.firstName`)} required />
        <input type="text" name="lastName" autoComplete="family-name" aria-label={t(`${tPrefix}.lastName`)} placeholder={t(`${tPrefix}.lastName`)} />
      </div>
      <div className="input-col-two">
        <input type="tel" name="phone" autoComplete="tel" aria-label={t(`${tPrefix}.phone`)} placeholder={t(`${tPrefix}.phone`)} required />
        <input type="email" name="email" autoComplete="email" aria-label={t(`${tPrefix}.email`)} placeholder={t(`${tPrefix}.email`)} required />
      </div>
      <input type="text" name="subject" aria-label={t(`${tPrefix}.subject`)} placeholder={t(`${tPrefix}.subject`)} required />
      <textarea name="message" rows="4" aria-label={t(`${tPrefix}.message`)} placeholder={t(`${tPrefix}.message`)} required></textarea>
      <button
        type="submit"
        disabled={status === "sending"}
        className="cs-primary-btn secondary-btn cs-color-white themecolor-bg cs-height-60 cs-width-220"
      >
        <span>{status === "sending" ? t("contact.form.sending") : t(`${tPrefix}.send`, { defaultValue: t("common.cta.sendMessage") })}</span>
      </button>
      {status === "success" && (
        <p role="status" style={{ marginTop: "16px", color: "#1a7f37", fontWeight: 600 }}>{t("contact.form.success")}</p>
      )}
      {status === "error" && (
        <p role="alert" style={{ marginTop: "16px", color: "#b42318", fontWeight: 600 }}>{t("contact.form.error")}</p>
      )}
    </form>
  );
}
