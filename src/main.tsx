import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/normalize.css";
import "./vendor/fonts/fonts.css";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
