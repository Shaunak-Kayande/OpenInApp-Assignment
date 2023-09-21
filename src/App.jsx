import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { router } from "./setup/router/RouterArch";
import { RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
