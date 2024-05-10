import React, { useEffect, useRef } from "react";
import { Row, Col, Divider, Pagination } from "antd";
import CardMovie from "../../components/CardMovie/CardMovie";
import ReactPlayer from "react-player";
import InfoDetailMovie from "../../components/InfoDetailMovie/InfoDetailMovie";
import video from "../../assets/110715CineHarry746.webp";
import CardMovieHeader from "../../components/CardMovieHeader/CardMovieHeader";
import { useParams } from 'react-router-dom';

import "./movie-detail.scss";
const data: any = [];
for (let i = 0; i < 12; i++) {
  data.push(i);
}
const MovieDetail: React.FC<any> = () => {
  const topRef = useRef<any>(null);
  useEffect(() => {
    scrollToBottom();
  }, []);
  function scrollToBottom() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handleClickCardMovie = () => {
    scrollToBottom();
  };
  let { id } = useParams();
  return (
    <div ref={topRef} className="movie-detail-page-wrapper">
      <div className="movie-detail-content">
        <CardMovieHeader />
        <InfoDetailMovie />
      </div>
    </div>
  );
};
export default MovieDetail;
