import { createElement } from "react";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { HomePage } from "./pages/homePage/HomePage";
import { SettingsPage } from "./pages/settingsPage/SettingPage";

const rootRoute = createRootRoute({
  component: function RootLayout() {
    return createElement(Outlet);
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, settingsRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
