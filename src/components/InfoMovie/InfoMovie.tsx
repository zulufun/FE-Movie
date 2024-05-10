import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./InfoMovie.scss";
import { RouterLinks } from "../../const/RouterLinks";
import { useParams } from 'react-router-dom';
const InfoMovie: React.FC<any> = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const handleClickWatchMovie = () => {
    navigate(`/watch-movie/${id}`);
  };
  return (
    <div className="info-movie">
      <span className="series_movie">Phim bộ</span>
      <h1 className="name_movie">Harry Potter</h1>
      <div>
        <span className="info_detail_movie">9 tập - 2019 - Pháp thuật - Viễn tưởng</span>
      </div>
      <button onClick={handleClickWatchMovie} className="button_watching">
        <FontAwesomeIcon className="icon_play" icon={faPlay} />
        Xem phim
      </button>
    </div>
  );
};

export default InfoMovie;
