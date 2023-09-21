import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Dashboard from "../../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
