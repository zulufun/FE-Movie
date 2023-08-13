import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import NavbarInMobile from "../components/NavbarInMobile/NavbarInMobile";
import Footer from "../components/footer/Footer";
import "../App.css";

const Layouts: React.FC<any> = () => {
  const [isOpenSideBarRight, setIsOpenSidebarRight] = useState<any>(false);
  return (
    <div className="MainApp">
      <div className="MainContent">
        <Header IsOpenSidebarRight={isOpenSideBarRight} setIsOpenSidebarRight={setIsOpenSidebarRight} />
        {isOpenSideBarRight ? <NavbarInMobile isOpen={isOpenSideBarRight} /> : ""}
        <div className="ContentPage">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layouts;
