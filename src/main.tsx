import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SDKProvider } from "@telegram-apps/sdk-react";

import App from "./App.tsx";
import "./index.css";

// Tạo root và render component
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SDKProvider acceptCustomStyles debug>
      <App />
    </SDKProvider>
  </StrictMode>
);
