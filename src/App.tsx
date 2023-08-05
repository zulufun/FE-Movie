import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RouterLinks } from "./const/RouterLinks";
import HomePage from "./pages/home-page/home-page";
import MovieDetail from "./pages/movie-detail/moive-detail";
import ListMoive from "./pages/list-moive/list-moive";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <div className="MainApp">
            <div className="MainContent">
              <div className="ContentPage">
                <Routes>
                  <Route path={RouterLinks.HOME_PAGE} element={<HomePage />} />
                  <Route path={RouterLinks.DETAIL_MOVIE} element={<MovieDetail />} />
                  <Route path={RouterLinks.LIST_MOVIE} element={<ListMoive />} />
                </Routes>
              </div>
            </div>
          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
