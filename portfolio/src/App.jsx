import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./component/SpinnerFullPage";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const WhatIdo = lazy(() => import("./pages/WhatIdo"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Testimonial = lazy(() => import("./pages/Testimonial"));
const Contact = lazy(() => import("./pages/Contact"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Resume = lazy(() => import("./pages/Resume"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>

      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="lists-skills" element={<WhatIdo />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
