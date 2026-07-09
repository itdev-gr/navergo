import { createContext, useContext } from "react";

// Context + hook for the fullscreen image viewer. Kept in its own module so the
// component file (Lightbox.jsx) exports only components — required for React
// Fast Refresh (react-refresh/only-export-components).
export const LightboxContext = createContext(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a <LightboxProvider>");
  }
  return ctx;
}
