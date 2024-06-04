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
  // Chia mảng movies thành các nhóm chứa 4 phần tử mỗi nhóm
  const groupedMovies = [];
  for (let i = 0; i < movies.length; i += 4) {
    groupedMovies.push(movies.slice(i, i + 4));
  }
  console.log(movies);
  return (
    <div className="list-movie-home">
      <div className="title-list">Top 10 bộ phim xu hướng</div>
      <div className="content-list">
        <Carousel showThumbs={false} showArrows={true} swipeScrollTolerance={4} showStatus ={true}>
          {/* Hiển thị mỗi nhóm trong một slide của Carousel */}
          {groupedMovies.map((group, index) => (
            <div key={index} className="list-movie-page">
              {group.map((movie: any) => (
                <CardMovie
                  key={movie.id}
                  id={movie.id}
                  img={movie.img}
                  name={movie.name}
                  url={movie.url}
                  poster={movie.poster}
                  click={() => console.log(movie.id)}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ListMovieHome;
