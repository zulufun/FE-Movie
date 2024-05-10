import React from "react";
import { Row, Col } from "antd";
import CardMovie from "../CardMovie/CardMovie";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ListMovieHome.scss";
import listmovie from "../../const/movie";
const ListMovieHome: React.FC = () => {

  return (
    <div className="list-movie-home">
      <div className="title-list">Top 10 bộ phim xu hướng</div>
      <div className="content-list">
        <div className="list-movie-page">
          {listmovie.map((movie) => {
            return (
              <CardMovie id={movie.id} name ={movie.name} click={() => console.log(movie.id)} />
            )
          })}
        </div>
      </div>
    </div>
  );
};
export default ListMovieHome;
