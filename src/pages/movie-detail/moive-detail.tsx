import React from "react";
import { Row, Col, Divider, Pagination } from "antd";
import CardMovie from "../../components/CardMovie/CardMovie";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import InfoDetailMovie from "../../components/InfoDetailMovie/InfoDetailMovie";

import "./movie-detail.scss";
const data: any = [];
for (let i = 0; i < 12; i++) {
  data.push(i);
}
const MovieDetail: React.FC<any> = () => {
  return (
    <div className="movie-detail-page-wrapper">
      <div className="movie-detail-content">
        <div style={{ width: "100%", height: "50rem" }}>
          <ReactPlayer url={"https://www.youtube.com/embed/-_9iSDlWlvg"} width={"100%"} height={"100%"} controls={true} />
        </div>
        <InfoDetailMovie />
        {/* <Row gutter={[10, 10]}>
          <Col span={24}>
           
          </Col>
          <Col span={24}>
         
          </Col> */}

        {/* <Col span={24} md={16}>
            <div className="list-movie">
              <Divider>Phim bộ</Divider>
              <div>
                <Row gutter={[10, 20]}>
                  {data.map((item: any) => {
                    return (
                      <Col key={item} span={6}>
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
          </Col> */}
        {/* </Row> */}
      </div>
    </div>
  );
};
export default MovieDetail;
