import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import pages
import Layout from "@organisms/Layout";
import Home from "@pages/Home";
import ErrorPage from "@pages/ErrorPage";
import { lazy, Suspense } from "react";
import PageTransition from "@molecules/PageTransition";

// const About = lazy(() => import("@pages/About"));

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ], { basename: "/" });
  return <RouterProvider router={router} />;
};

export default AppRouter;
