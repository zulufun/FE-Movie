import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import "./NavbarInMobile.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { RouterLinks } from "../../const/RouterLinks";
const data: any = [];
for (let i = 1; i < 30; i++) {
  data.push(i);
}
const NavbarInMobile: React.FC<any> = ({ isOpen }) => {
  console.log(isOpen);
  const topRef = useRef<any>();
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);
  function scrollToBottom() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="navbar-mobile">
      <div ref={topRef}></div>
      <div className="home-title navbar-moblie-title">Trang chủ</div>
      <div className="movie-series navbar-moblie-title">Phim bộ</div>
      <div className="movie-not-series navbar-moblie-title">Phim lẻ</div>
      <div className="navbar-group">
        <div className=" navbar-moblie-title-group">Quốc gia</div>
        <Row gutter={[10, 10]}>
          {data.map((i: any) => {
            return (
              <Col key={i} span={6}>
                <Link className="item-navbar-mobile-group" to={`${RouterLinks.LIST_MOVIE}?country_id=${i}`}>
                  <FontAwesomeIcon icon={faCaretRight} style={{ paddingRight: "0.3rem" }} />
                  Viet Nam
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="navbar-group">
        <div className="navbar-moblie-title-group">Thể loại</div>
        <Row gutter={[10, 10]}>
          {data.map((i: any) => {
            return (
              <Col key={i} span={6}>
                <Link className="item-navbar-mobile-group" to={`${RouterLinks.LIST_MOVIE}?country_id=${i}`}>
                  <FontAwesomeIcon icon={faCaretRight} style={{ paddingRight: "0.3rem" }} />
                  Viet Nam
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default NavbarInMobile;
