import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "@layouts/Default/Default";
import Loader from "@components/Loader/Loader";

// Lazy load page components
const HomePage = lazy(() => import("@pages/Home/Home"));
const AboutPage = lazy(() => import("@pages/About/About"));
const ContactPage = lazy(() => import("@pages/Contact/Contact"));

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </Router>
  );
};

export default App;
