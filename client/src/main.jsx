import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Set a timeout to delay loading the script
  setTimeout(() => {
    const script = document.createElement("script");
    script.src = window.origin + "/src/delayed/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, 3000);
});
