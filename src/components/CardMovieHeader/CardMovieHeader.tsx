import React from "react";
import coverPhoto from "../../assets/hinh-anh-Harry-potter-va-quan-doan-Dumbledore.jpg";
import InfoMovie from "../InfoMovie/InfoMovie";
import "./CardMovieHeader.scss";

const CardMovieHeader: React.FC = () => {
  return (
    <div className="card_movie_header">
      <div className="cover_photo" style={{ background: `url(${coverPhoto}) no-repeat`, backgroundSize: "cover" }}>
        <InfoMovie />
      </div>
    </div>
  );
};

export default CardMovieHeader;
