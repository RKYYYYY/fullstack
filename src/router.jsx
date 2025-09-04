import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Forms/Register";
import Login from "./pages/Forms/Login";
import ErrorPage from "./pages/ErrorPage";
import BlogDetails from "./pages/Blog/components/BlogDetails";
import { rootLoader } from "./loaders/rootLoader";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",

        element: (
          <UserNotConnected>
            <Blog />
          </UserNotConnected>
        ),
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/register",
        element: (
          <UserConnected>
            <Register />
          </UserConnected>
        ),
      },
      {
        path: "/login",
        element: (
          <UserConnected>
            <Login />
          </UserConnected>
        ),
      },
    ],
  },
]);
