import { Route, Routes } from "react-router";
import { AboutPage } from "./components/AboutPage";
// import { PortfolioPage } from "./components/PortfolioPage";
import { ContactPage } from "./components/ContactPage";
import { LearncraftSpanishPage } from "./components/LearncraftSpanishPage";
import { LearncraftArticleDetailPage } from "./components/LearncraftArticleDetailPage";
import { HomePage } from "./components/HomePage";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio/*" >
        <Route index element={<LearncraftSpanishPage />} />
        <Route path=":slug" element={<LearncraftArticleDetailPage />} />
      </Route>
      <Route path="/contact" element={<ContactPage />} />
      {/* <Route path="/learncraftspanish/*" >
        <Route index element={<LearncraftSpanishPage />} />
        <Route path=":slug" element={<LearncraftArticleDetailPage />} />
      </Route> */}
    </Routes>
  );
}