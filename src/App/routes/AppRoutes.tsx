import { BrowserRouter as Router } from "react-router-dom";
import { UnauthenticatedRoutes } from "./UnauthenticatedRoutes";

export const AppRoutes = (): JSX.Element => {
  UnauthenticatedRoutes;

  return (
    <Router>
      <UnauthenticatedRoutes />
    </Router>
  );
};
