import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./assets/styles/normalize.css";
import "./index.css";
import "simplebar-react/dist/simplebar.min.css";
import "@/assets/styles/simplebar-react.extend.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
