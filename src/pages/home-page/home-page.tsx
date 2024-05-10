import React, { useEffect, useRef, useState } from "react";
import CardMovieHeader from "../../components/CardMovieHeader/CardMovieHeader";
import { Row, Col, Carousel, Button } from "antd";
import SideBarRight from "../../components/SideBarRight/SideBarRight";
import ListMovieHome from "../../components/ListMovieHome/ListMovieHome";
import "./home-page.scss";

const HomePage: React.FC<any> = () => {
  // const [contentSpan, setContentSpan] = useState<any>(18);
  // const [sidebarSpan, setSidebarSpan] = useState<any>(6);
  const topRef = useRef<any>(null);

  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     setContentSpan(24);
  //     setSidebarSpan(24);
  //   } else {
  //     setContentSpan(18);
  //     setSidebarSpan(6);
  //   }
  //   function handleResize() {
  //     if (window.innerWidth < 768) {
  //       setContentSpan(24);
  //       setSidebarSpan(24);
  //     } else {
  //       setContentSpan(18);
  //       setSidebarSpan(6);
  //     }
  //   }
  //   window.addEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="home-page-wrapper">
      <div className="home-page-content">
        <div ref={topRef}></div>
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <div className="movie-header">
              <Carousel dotPosition="bottom" dots={true} autoplay>
                <CardMovieHeader />
                
              </Carousel>
            </div>
          </Col>
          <Col span={24} md={16}>
            <ListMovieHome />
          </Col>
          <Col span={24} md={8}>
            <SideBarRight />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
