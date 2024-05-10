import React from "react";
import CardMovieSidebar from "../CardMovieSidebar/CardMovieSidebar";
import "./SideBarRight.scss";
const SideBarRight: React.FC = () => {
  return (
    <div className="side-bar-right">
      <div className="list-movie-sidebar-right">
        <div className="title-list-movie-sidebar-right">Top 10 đánh giá</div>
        <div>
          <CardMovieSidebar />
          <CardMovieSidebar />
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
