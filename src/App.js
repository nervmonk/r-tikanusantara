import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
// import AboutUs from "./pages/AboutUs";
// import Activity from "./pages/Activity";
// import Article from "./pages/Article";
// import Complaint from "./pages/Complaint";
import ErrorPage from "./pages/ErrorPage";
// import HomePage from "./pages/HomePage";
// import Journal from "./pages/Journal";
// import NewsArticle from "./pages/NewsArticle";
// import PhotoGallery from "./pages/PhotoGallery";
import RootLayout from "./pages/RootLayout";
import React from "react";
import Spinner from "./components/Spinner";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Activity = lazy(() => import("./pages/Activity"));
const Article = lazy(() => import("./pages/Article"));
const Complaint = lazy(() => import("./pages/Complaint"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Journal = lazy(() => import("./pages/Journal"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const PhotoGallery = lazy(() => import("./pages/PhotoGallery"));
// const AboutUs = lazy(() => import("./pages/AboutUs"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "advocacy",
        element: (
          <Suspense fallback={<Spinner />}>
            <Complaint />
          </Suspense>
        ),
      },
      {
        path: "advocacy/:title",
        element: (
          <Suspense fallback={<Spinner />}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "news",
        element: (
          <Suspense fallback={<Spinner />}>
            <NewsArticle />
          </Suspense>
        ),
      },
      {
        path: "news/:title",
        element: (
          <Suspense fallback={<Spinner />}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "journal",
        element: (
          <Suspense fallback={<Spinner />}>
            <Journal />
          </Suspense>
        ),
      },
      {
        path: "journal/:title",
        element: (
          <Suspense fallback={<Spinner />}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "team-activity",
        element: (
          <Suspense fallback={<Spinner />}>
            <Activity />
          </Suspense>
        ),
      },
      {
        path: "team-activity/:title",
        element: (
          <Suspense fallback={<Spinner />}>
            <Article />{" "}
          </Suspense>
        ),
      },
      {
        path: "photo-gallery",
        element: (
          <Suspense fallback={<Spinner />}>
            <PhotoGallery />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Spinner />}>
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
