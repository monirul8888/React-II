import React, { Component } from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: ()=>fetch("data/booksData.json"),
        Component: Home,
      },
    ],
  },
]);
