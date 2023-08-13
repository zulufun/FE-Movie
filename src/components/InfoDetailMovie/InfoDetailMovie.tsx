import React from "react";
import { Image, Rate, Typography, Avatar, Row, Col } from "antd";
import image from "../../assets/110715CineHarry746.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/21204723-hinh-anh-gai-xinh-2.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./InfoDetailMovie.scss";
import ReactPlayer from "react-player";

const actors: any = [];
for (let i = 0; i <= 10; i++) {
  actors.push(i);
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const InfoDetailMovie: React.FC<any> = () => {
  return (
    <div className="info-detail-movie">
      <div className="detail-movie">
        <div className="poster-detail-movie">
          <Image src={image} preview={false} width={"100%"}></Image>
        </div>

        <div className="infomation">
          <div className="title">Harry Potter</div>
          <div className="base-info">jul 3,2023 103p Việt Nam</div>
          <div className="rate">
            <div className="count-star">9</div>
            <div className="action-rate">
              <Rate allowHalf defaultValue={8.5} style={{ color: "#408BEA" }} count={10} />
              <div style={{ paddingTop: "0.3rem", color: "rgba(255, 255, 255, 0.712)" }}>
                <FontAwesomeIcon style={{ paddingRight: "0.5rem" }} icon={faUser} />
                <span>41 đánh giá</span>
              </div>
              <div className="count-people-rate"></div>
            </div>
            <div className="rate-of-me">Đánh giá của bạn : 9</div>
          </div>
          <div className="category">
            <Row gutter={[0, 10]}>
              <Col md={4} xs={8}>
                <span>Phim chiếu rạp</span>
              </Col>
              <Col md={4} xs={8}>
                <span>Phim chiếu rạp</span>
              </Col>
              <Col md={4} xs={8}>
                <span>Phim chiếu rạp</span>
              </Col>
              <Col md={4} xs={8}>
                <span>Phim chiếu rạp</span>
              </Col>
              <Col md={4} xs={8}>
                <span>Phim chiếu rạp</span>
              </Col>
              <Col md={4} xs={8}>
                <span>Phim chiếu rạp</span>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="movie-description">
        <div className="title">Mô tả</div>
        <Typography.Paragraph
          className="article"
          ellipsis={{
            rows: 2,
            expandable: true,
          }}
        >
          Jake Gyllenhaal (sinh ngày 19 tháng 12 năm 1980) là một nam diễn viên người Mỹ. Sinh ra trong gia đình Gyllenhaal,
          anh là con trai của đạo diễn Stephen Gyllenhaal và nhà biên kịch Naomi Foner. Gyllenhaal bắt đầu công việc diễn
          xuất vào năm 10 tuổi trong City Slickers (1991), tiếp theo là các vai diễn trong A Dangerous Woman (1993) và
          Homegrown (1998) đều do cha mình đạo diễn. Sự nghiệp của anh bứt phá với vai diễn Homer Hickam trong October Sky
          (1999) và vai diễn một cậu bé gặp vấn đề về thần kinh trong Donnie Darko (2001).
        </Typography.Paragraph>
      </div>
      <div className="movie-director">
        <div className="title">Đạo diễn</div>
        <div className="avatar">
          <Avatar src={avatar} size={"large"} />
          <div className="info-director">
            <div className="name-director">Hoang Nam</div>
            <div className="age-director">Age: 20</div>
          </div>
        </div>
      </div>
      <div className="movie-actor">
        <div className="title">Diễn viên</div>
        <div className="list-actor">
          <Carousel
            swipeable={false}
            draggable={false}
            ssr={true}
            infinite={true}
            responsive={responsive}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {actors.map((item: any) => {
              return (
                <div key={item} className="avatar">
                  <Avatar src={avatar} size={"large"} />
                  <div className="info-actor">
                    <div className="name-actor">Hoang Nam</div>
                    <div className="age-actor">Age: 20</div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="episodes">
        <div className="title">Tập phim</div>
        <div className="list-episodess">
          <Carousel swipeable={false} draggable={false} ssr={true} infinite={true} responsive={responsive}>
            {actors.map((item: any) => {
              return (
                <div key={item} className="item-episodes">
                  <ReactPlayer url={image} width={"100%"} height={"100%"} controls={true} />
                  <div className="episode-count">Tập 2</div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default InfoDetailMovie;
