import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router-dom";
// import i18n (need to be bundled)
import "./locales/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
);
