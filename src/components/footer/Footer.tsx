import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faSquareFacebook, faYoutube, faTelegram } from "@fortawesome/free-brands-svg-icons";
import {} from "@ant-design/icons";
import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="content-footer">
        <div className="descrip-web-movie">
          <div>Movies</div>
          <p>phim-nền tảng xem phim thân thiện với người dùng .Nguồn phim phong phú và đa dạng</p>
        </div>
        <div className="movie-featured">
          <div className="title">Phim nổi bật</div>
          <div>
            <a href="/">Phim kinh dị</a>
          </div>
          <div>
            <a href="/">Phim hoạt hình</a>
          </div>
          <div>
            <a href="/">Phim viễn tưởng</a>
          </div>
          <div>
            <a href="/">Phim khoa học</a>
          </div>
        </div>
        <div className="infomation-contact">
          <div className="title">Thông tin liên hệ</div>
          <div className="contact-email">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>ducphucuuu@gmail.com</span>
          </div>
          <Link className="style_link" to={"https://web.facebook.com/Phucccxo/"}>
          <div className="link-fb">
            <FontAwesomeIcon icon={faSquareFacebook} />
            <span>Đức Phúc</span>
          </div>
          </Link>
          <div className="contact-phone">
            <FontAwesomeIcon icon={faPhone} />
            <span>0398194278</span>
          </div>
        </div>
      </div>
      <div className="list-icon-contact">
        <FontAwesomeIcon className="icon-contact" icon={faTwitter} />
        <FontAwesomeIcon className="icon-contact" icon={faTelegram} />
        <FontAwesomeIcon className="icon-contact" icon={faSquareFacebook} />
        <FontAwesomeIcon className="icon-contact " style={{ color: "#FF0000" }} icon={faYoutube} />
      </div>
    </div>
  );
};

export default Footer;
