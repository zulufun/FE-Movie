import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CardMovie from "../CardMovie/CardMovie";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ListMovieHome.scss";
import listmovie from "../../const/movie";
import { postServices } from "../../utils/services/postService";
const ListMovieHome: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]); // Sử dụng any[] cho kiểu của movies

  useEffect(() => {
    postServices.get()
      .then((res) => {
        // Kiểm tra nếu res không phải là một mảng, chuyển đổi thành mảng với một phần tử
        const moviesArray = Array.isArray(res) ? res : [res];
        setMovies(moviesArray);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  console.log(movies);
  return (
    <div className="list-movie-home">
      <div className="title-list">Top 10 bộ phim xu hướng</div>
      <div className="content-list">
        <div className="list-movie-page">
          {movies.map((movie: any) => ( // Thêm kiểu dữ liệu any cho movie
            <CardMovie
              key={movie.id} // Thêm key để React không cảnh báo
              id={movie.id}
              img={movie.img}
              name={movie.name}
              click={() => console.log(movie.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ListMovieHome;
