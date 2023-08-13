import React from "react";
import { Row, Col, Divider, Pagination } from "antd";
import CardMovie from "../../components/CardMovie/CardMovie";
import ReactPlayer from "react-player";
import InfoDetailMovie from "../../components/InfoDetailMovie/InfoDetailMovie";
import video from "../../assets/110715CineHarry746.webp";

import "./movie-detail.scss";
const data: any = [];
for (let i = 0; i < 12; i++) {
  data.push(i);
}
const MovieDetail: React.FC<any> = () => {
  return (
    <div className="movie-detail-page-wrapper">
      <div className="movie-detail-content">
        <div style={{ width: "100%", height: "40rem" }}>
          <ReactPlayer url={video} width={"100%"} height={"100%"} controls={true} />
        </div>
        <InfoDetailMovie />
        <div className="list-movie">
          <Divider style={{ paddingBottom: "2rem" }}>Phim liên quan</Divider>
          <div>
            <Row gutter={[10, 20]}>
              {data.map((item: any) => {
                return (
                  <Col key={item} span={4} xs={6}>
                    <CardMovie />
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="pagination">
            <Pagination showSizeChanger={false} total={500} defaultCurrent={3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
