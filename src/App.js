import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import AboutUs from "./pages/AboutUs";
import Activity from "./pages/Activity";
import Article from "./pages/Article";
import Complaint from "./pages/Complaint";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Journal from "./pages/Journal";
import NewsArticle from "./pages/NewsArticle";
import PhotoGallery from "./pages/PhotoGallery";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "advocacy", element: <Complaint /> },
      { path: "advocacy/:title", element: <Article /> },
      { path: "news", element: <NewsArticle /> },
      { path: "news/:title", element: <Article /> },
      { path: "journal", element: <Journal /> },
      { path: "journal/:title", element: <Article /> },
      { path: "team-activity", element: <Activity /> },
      { path: "team-activity/:title", element: <Article /> },
      { path: "photo-gallery", element: <PhotoGallery /> },
      { path: "about", element: <AboutUs /> },
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
