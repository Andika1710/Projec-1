import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DESKTOPECESI = React.lazy(() => import("pages/DESKTOPECESI"));
const DESKTOPECESITwo = React.lazy(() => import("pages/DESKTOPECESITwo"));
const DESKTOPECESIOne = React.lazy(() => import("pages/DESKTOPECESIOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopecesione" element={<DESKTOPECESIOne />} />
          <Route path="/desktopecesitwo" element={<DESKTOPECESITwo />} />
          <Route path="/desktopecesi" element={<DESKTOPECESI />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
