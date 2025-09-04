import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Forms/Register";
import Login from "./pages/Forms/Login";
import ErrorPage from "./pages/ErrorPage";
import BlogDetails from "./pages/Blog/components/BlogDetails";
<<<<<<< HEAD
import { rootLoader } from "./loaders/rootLoader";
=======
>>>>>>> f872d487b96bef632d0de80ca6307772eaea6475

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
<<<<<<< HEAD
    loader: rootLoader,
=======
>>>>>>> f872d487b96bef632d0de80ca6307772eaea6475
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
