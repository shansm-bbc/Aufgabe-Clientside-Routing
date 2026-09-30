import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ChronicleListRoute from "./routes/ChronicleListRoute";
import ChronicleDetailRoute from "./routes/ChronicleDetailRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ChronicleListRoute />,
      },
      {
        path: "/chronicles/:id",
        element: <ChronicleDetailRoute />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
