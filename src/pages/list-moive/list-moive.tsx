import React, { useState, useEffect } from "react";
import { Row, Col, Carousel, Divider, Pagination } from "antd";
import CardMovieHeader from "../../components/CardMovieHeader/CardMovieHeader";
import CardMovie from "../../components/CardMovie/CardMovie";
import SideBarRight from "../../components/SideBarRight/SideBarRight";
import ListMovieHome from "../../components/ListMovieHome/ListMovieHome";
import "./list-movie.scss";
import { postServices } from "../../utils/services/postService";

const data: any = [];
for (let i = 0; i < 12; i++) {
  data.push(i);
}
const ListMoive: React.FC<any> = () => {
  const [movies, setMovies] = useState<any[]>([]); // Sử dụng any[] cho kiểu của movies

  useEffect(() => {
    postServices.get()
      .then((res) => {
        // Kiểm tra nếu res không phải là một mảng, chuyển đổi thành mảng với một phần tử
        const moviesArray = Array.isArray(res) ? res : [res];
        setMovies(moviesArray);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="list-page-wrapper">
      <div className="list-page-content">
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <div className="movie-header">
              <Carousel dotPosition="bottom" dots={true} autoplay >
              {movies.map((movie: any) => ( // Thêm kiểu dữ liệu any cho movie
            <CardMovieHeader
              poster ={movie.poster}  
              />
            ))}
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
                  {movies.map((item: any) => {
                    return (
                      <Col key={item} span={6}>
                        <CardMovie   
                        key={item.id} // Thêm key để React không cảnh báo
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        url={item.url}
                        poster ={item.poster}
                        click={() => console.log(item.id)}/>
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
