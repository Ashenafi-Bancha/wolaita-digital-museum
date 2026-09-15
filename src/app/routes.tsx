import { createBrowserRouter, Navigate } from "react-router";
import type { ComponentType } from "react";
import Layout from "./components/Layout/Layout";
import PageLoader from "./components/Layout/PageLoader";
import Home from "./pages/Home";

// Every page except Home is code-split so visitors only download the pages they open.
const page = (load: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await load()).default,
});

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    HydrateFallback: PageLoader,
    children: [
      { index: true, Component: Home },
      { path: "gifaataa", lazy: page(() => import("./pages/Gifaataa")) },
      { path: "dingguza", lazy: page(() => import("./pages/Dingguza")) },
      { path: "marccuwaa", lazy: page(() => import("./pages/Marccuwaa")) },
      { path: "calendar", lazy: page(() => import("./pages/WolaitaCalendar")) },
      { path: "history", lazy: page(() => import("./pages/History")) },
      { path: "kings", lazy: page(() => import("./pages/Kings")) },
      { path: "heritage-sites", lazy: page(() => import("./pages/HeritageSites")) },
      { path: "tangible-heritage", lazy: page(() => import("./pages/TangibleHeritage")) },
      { path: "intangible-heritage", lazy: page(() => import("./pages/IntangibleHeritage")) },
      { path: "culture", lazy: page(() => import("./pages/Culture")) },
      { path: "life-ceremonies", lazy: page(() => import("./pages/LifeCeremonies")) },
      { path: "language", lazy: page(() => import("./pages/Language")) },
      { path: "proverbs", lazy: page(() => import("./pages/Proverbs")) },
      { path: "sayings", lazy: page(() => import("./pages/Sayings")) },
      { path: "puzzles", lazy: page(() => import("./pages/Puzzles")) },
      { path: "dictionary", lazy: page(() => import("./pages/Dictionary")) },
      { path: "festivals", lazy: page(() => import("./pages/Festivals")) },
      { path: "food", lazy: page(() => import("./pages/Food")) },
      { path: "music", lazy: page(() => import("./pages/Music")) },
      { path: "quiz", lazy: page(() => import("./pages/Quiz")) },
      { path: "notable-people", lazy: page(() => import("./pages/NotablePeople")) },
      { path: "gallery", lazy: page(() => import("./pages/Gallery")) },
      { path: "tourism", lazy: page(() => import("./pages/Tourism")) },
      { path: "accommodation", lazy: page(() => import("./pages/Accommodation")) },
      { path: "education", lazy: page(() => import("./pages/Education")) },
      { path: "about", lazy: page(() => import("./pages/About")) },
      { path: "contact", lazy: page(() => import("./pages/Contact")) },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
