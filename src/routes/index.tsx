import { createBrowserRouter } from "react-router-dom";
import { RouterLinks } from "../const/RouterLinks";
import HomePage from "../pages/home-page/home-page";
import ListMoive from "../pages/list-moive/list-moive";
import MovieDetail from "../pages/movie-detail/moive-detail";
import Layouts from "../layouts/Layouts";
import NotFound from "../pages/not-found/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: RouterLinks.HOME_PAGE,
        element: <HomePage />,
      },
      {
        path: RouterLinks.LIST_MOVIE,
        element: <ListMoive />,
      },
      {
        path: RouterLinks.DETAIL_MOVIE,
        element: <MovieDetail />,
      },
    ],
  },
]);
