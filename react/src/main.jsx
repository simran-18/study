import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SnackBarProvider } from "./contexts/SnackbarContext.jsx";

createRoot(document.getElementById("root")).render(
  <SnackBarProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </SnackBarProvider>,
);
