import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RouterLinks } from "./const/RouterLinks";
import HomePage from "./pages/home-page/home-page";
import MovieDetail from "./pages/movie-detail/moive-detail";
import ListMoive from "./pages/list-moive/list-moive";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";

import "./App.css";
function App() {
  const [isOpenSideBarRight, setIsOpenSidebarRight] = useState<any>(false);
  return (
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <PersistGate loading={null} persistor={persistor}>
        {/* <div className="MainApp">
            <div className="MainContent">
              <Header IsOpenSidebarRight={isOpenSideBarRight} setIsOpenSidebarRight={setIsOpenSidebarRight} />
              {isOpenSideBarRight ? <NavbarInMobile isOpen={isOpenSideBarRight} /> : ""}
              <div className="ContentPage">
                <Routes>
                  <Route path={RouterLinks.HOME_PAGE} element={<HomePage />} />
                  <Route path={RouterLinks.DETAIL_MOVIE} element={<MovieDetail />} />
                  <Route path={RouterLinks.LIST_MOVIE} element={<ListMoive />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div> */}
        <RouterProvider router={router} />
      </PersistGate>
      {/* </BrowserRouter> */}
    </Provider>
  );
}

export default App;
