import React from "react";
import { Row, Col } from "antd";
import CardMovie from "../CardMovie/CardMovie";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ListMovieHome.scss";
const ListMovieHome: React.FC = () => {
  return (
    <div className="list-movie-home">
      <div className="title-list">Top 10 bộ phim xu hướng</div>
      <div className="content-list">
        <Carousel showThumbs={false} showArrows={true} swipeScrollTolerance={4}>
          <div className="list-movie-page">
            <CardMovie click={() => console.log("click")} />
            <CardMovie click={() => console.log("click")} />
            <CardMovie click={() => console.log("click")} />
            <CardMovie click={() => console.log("click")} />
          </div>
          <div className="list-movie-page">
            <CardMovie click={() => console.log("click")} />
            <CardMovie click={() => console.log("click")} />
            <CardMovie click={() => console.log("click")} />
            <CardMovie click={() => console.log("click")} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default ListMovieHome;
