import React from "react";
import coverPhoto from "../../assets/hinh-anh-Harry-potter-va-quan-doan-Dumbledore.jpg";
import InfoMovie from "../InfoMovie/InfoMovie";
import "./CardMovieHeader.scss";
import { useSearchParams } from "react-router-dom";
const CardMovieHeader = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const postter =searchParams.get("img")
  return (
    <div className="card_movie_header">
      <div className="cover_photo" style={{ background: `url(${postter}) no-repeat`, backgroundSize: "cover" }}>
        <InfoMovie />
      </div>
    </div>
  );
};

export default CardMovieHeader;
