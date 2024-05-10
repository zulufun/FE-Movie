import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../App.css";

const Layouts: React.FC<any> = () => {
  const [isOpenSideBarRight, setIsOpenSidebarRight] = useState<any>(false);
  return (
    <div className="MainApp">
      <div className="MainContent">
        <Header IsOpenSidebarRight={isOpenSideBarRight} setIsOpenSidebarRight={setIsOpenSidebarRight} />
        
        <div className="ContentPage">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layouts;
