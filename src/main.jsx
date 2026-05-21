import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";

// Disable the browser's automatic scroll-restoration so SPA navigation
// always lands at the top of the new route (see Layout.jsx scrollTo).
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")).render(<App />);
