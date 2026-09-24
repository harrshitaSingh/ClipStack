import { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./index.css";
import { router } from "./router";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  createElement(StrictMode, null, createElement(RouterProvider, { router })),
);
