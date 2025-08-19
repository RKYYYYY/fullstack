import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Articles from "./pages/Articles/Articles";
import Register from "./pages/Forms/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Articles",
        element: <Articles />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);
