import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import HomePage from "@/pages/home";

const Routes = () => {
  return (
    <RRDRoutes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/temples" element={<TemplesPage />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </RRDRoutes>
  );
};

export default Routes;
