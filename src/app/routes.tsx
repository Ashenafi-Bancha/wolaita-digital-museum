import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import TangibleHeritage from "./pages/TangibleHeritage";
import IntangibleHeritage from "./pages/IntangibleHeritage";
import Culture from "./pages/Culture";
import Festivals from "./pages/Festivals";
import Food from "./pages/Food";
import Gallery from "./pages/Gallery";
import Tourism from "./pages/Tourism";
import Education from "./pages/Education";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Language from "./pages/Language";
import Proverbs from "./pages/Proverbs";
import Sayings from "./pages/Sayings";
import Puzzles from "./pages/Puzzles";
import Dictionary from "./pages/Dictionary";
import Kings from "./pages/Kings";
import NotablePeople from "./pages/NotablePeople";
import Accommodation from "./pages/Accommodation";
import Gifaataa from "./pages/Gifaataa";
import Dingguza from "./pages/Dingguza";
import WolaitaCalendar from "./pages/WolaitaCalendar";
import HeritageSites from "./pages/HeritageSites";
import LifeCeremonies from "./pages/LifeCeremonies";
import Marccuwaa from "./pages/Marccuwaa";
import Music from "./pages/Music";
import Quiz from "./pages/Quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "gifaataa", Component: Gifaataa },
      { path: "dingguza", Component: Dingguza },
      { path: "marccuwaa", Component: Marccuwaa },
      { path: "calendar", Component: WolaitaCalendar },
      { path: "history", Component: History },
      { path: "kings", Component: Kings },
      { path: "heritage-sites", Component: HeritageSites },
      { path: "tangible-heritage", Component: TangibleHeritage },
      { path: "intangible-heritage", Component: IntangibleHeritage },
      { path: "culture", Component: Culture },
      { path: "life-ceremonies", Component: LifeCeremonies },
      { path: "language", Component: Language },
      { path: "proverbs", Component: Proverbs },
      { path: "sayings", Component: Sayings },
      { path: "puzzles", Component: Puzzles },
      { path: "dictionary", Component: Dictionary },
      { path: "festivals", Component: Festivals },
      { path: "food", Component: Food },
      { path: "music", Component: Music },
      { path: "quiz", Component: Quiz },
      { path: "notable-people", Component: NotablePeople },
      { path: "gallery", Component: Gallery },
      { path: "tourism", Component: Tourism },
      { path: "accommodation", Component: Accommodation },
      { path: "education", Component: Education },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);