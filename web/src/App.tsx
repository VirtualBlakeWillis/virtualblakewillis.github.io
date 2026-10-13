import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.scss";
import { initEmailJs } from "./emailJsInit";
import { ToastContainer } from "react-toastify";
import { MyRoutes } from "./Routes";

export default function App() {
  useEffect(() => {
    initEmailJs();
  }, []);

 

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <MyRoutes />
      <ToastContainer />
    </div>
  );
}
