import React from "react";
import ListYearRelease from "../ListYearRelease/ListYearRelease";
import CardMovieSidebar from "../CardMovieSidebar/CardMovieSidebar";
import "./SideBarRight.scss";
const SideBarRight: React.FC = () => {
  return (
    <div className="side-bar-right">
      <ListYearRelease />
      <div className="list-movie-sidebar-right">
        <div className="title-list-movie-sidebar-right">Top 10 đánh giá</div>
        <div>
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
          <CardMovieSidebar />
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
