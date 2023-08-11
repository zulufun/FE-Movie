import React, { useState } from "react";
import { Row, Col, Carousel, Divider, Pagination } from "antd";
import CardMovieHeader from "../../components/CardMovieHeader/CardMovieHeader";
import CardMovie from "../../components/CardMovie/CardMovie";
import SideBarRight from "../../components/SideBarRight/SideBarRight";

import "./list-movie.scss";
const data: any = [];
for (let i = 0; i < 12; i++) {
  data.push(i);
}
const ListMoive: React.FC<any> = () => {
  const [current, setCurrent] = useState<any>(3);
  return (
    <div className="list-page-wrapper">
      <div className="list-page-content">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <div className="movie-header">
              <Carousel dotPosition="bottom" dots={true} autoplay>
                <CardMovieHeader />
                <CardMovieHeader />
                <CardMovieHeader />
              </Carousel>
            </div>
          </Col>

          <Col span={24} md={16}>
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
          </Col>
          <Col span={24} md={8}>
            <SideBarRight />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ListMoive;
