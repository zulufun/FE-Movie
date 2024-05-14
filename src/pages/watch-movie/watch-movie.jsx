import React from "react";
import { Row, Col, Divider, Pagination } from "antd";
import CardMovie from "../../components/CardMovie/CardMovie";
import ReactPlayer from "react-player";
import InfoDetailMovie from "../../components/InfoDetailMovie/InfoDetailMovie";
import video from "../../assets/110715CineHarry746.webp";
import "./watch-movie.scss";
import { useParams } from 'react-router-dom';
import listmovie from "../../const/movie";
import { useSearchParams } from "react-router-dom";
const WatchMovie = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  // const movieurl = listmovie.find(movie => movie.id === id).url; 
  const movieurl = searchParams.get("url")
  console.log(movieurl)
  return (
    <div className="watch-movie-page-wrapper">
      <div className="watch-movie-content">
        <div style={{ width: "100%", height: "40rem" }}>
          <ReactPlayer url={movieurl} width={"100%"} height={"100%"} controls={true} />
        </div>
        <InfoDetailMovie />
        
      </div>
    </div>
  );
};
export default WatchMovie;
