import React, { useRef } from "react";
import { Row, Col, Carousel } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ListyearRelease.scss";
let data: any = [];
for (let i = 2023; i >= 2008; i--) {
  data.push(i);
}
const ListYearRelease: React.FC = () => {
  const carousel = useRef<any>(null);
  return (
    <div className="list-year-release">
      <div className="title-list-year-release">
        <div className="title">Năm phát hành</div>
        <div>
          <div>
            <FontAwesomeIcon onClick={() => carousel.current.prev()} className="icon-chevron" icon={faChevronUp} />
          </div>
          <div>
            <FontAwesomeIcon onClick={() => carousel.current.next()} className="icon-chevron" icon={faChevronDown} />
          </div>
        </div>
      </div>
      <div className="list-year">
        <Carousel ref={carousel} dotPosition="right">
          <div>
            {" "}
            <Row gutter={[10, 5]}>
              {data.map((item: any) => {
                return (
                  <Col key={item} span={6}>
                    <div className="item-year">{item}</div>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div>
            <Row gutter={[10, 5]}>
              {data.map((item: any) => {
                return (
                  <Col key={item} span={6}>
                    <div className="item-year">{item}</div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ListYearRelease;
