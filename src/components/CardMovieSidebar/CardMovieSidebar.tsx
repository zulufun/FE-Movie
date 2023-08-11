import React from "react";
import "./CardMovieSidebar.scss";
import { Row, Col, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/110715CineHarry746.webp";
const CardMovieSidebar: React.FC = () => {
  return (
    <div className="card-movie-sidebar">
      <div>
        <Image alt="" width={"4rem"} height={"5.5rem"} src={image} preview={false}></Image>
      </div>
      <div className="info-card-sidebar">
        <div className="info-card-sidebar-title">Harry potter</div>
        <div className="other-info-card-sidebar">
          <div className="other-info-card-sidebar-rate">
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "0.8rem", paddingRight: "0.3rem" }} />
            7.2
          </div>
          <span className="other-info-card-sidebar-year">2023</span>
        </div>
      </div>
    </div>
  );
};
export default CardMovieSidebar;
