import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  // <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  // </StrictMode>
=======
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
>>>>>>> f872d487b96bef632d0de80ca6307772eaea6475
);
