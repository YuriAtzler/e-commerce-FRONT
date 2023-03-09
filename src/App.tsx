import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as Pages from "./pages";

export const AppRoute: React.FC = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Pages.Home />,
    },
    {
      path: "/loja",
      element: <h1>loja </h1>,
    },
  ]);

  return <RouterProvider router={route} />;
};
