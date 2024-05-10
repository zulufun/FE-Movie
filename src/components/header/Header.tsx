import React, { useRef, useState,useEffect  } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { RouterLinks } from "../../const/RouterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faDeleteLeft,
  faSearch,
  faXmark,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";
import axios from 'axios';


const data: any = [];
for (let i = 1; i < 30; i++) {
  data.push(i);
}

const Header: React.FC<any> = ({ IsOpenSidebarRight, setIsOpenSidebarRight }) => {
  const inputRef = useRef<any>(null);
  const [countries, setCountries] = useState([]);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isOpenIconDelete, setIsOpenIconDelete] = useState(false);
  useEffect(() => {
    // Gọi API để lấy danh sách tất cả các quốc gia
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        // Xử lý dữ liệu trả về từ API
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);
  const handleOpenInputSearch = () => {
    setIsOpenInput(true);
  };
  const handleCloseInput = () => {
    setIsOpenInput(false);
    setIsOpenIconDelete(false);
    inputRef.current.value = "";
  };
  const handleResetValue = () => {
    inputRef.current.value = "";
  };
  const handleValueChange = (e: any) => {
    setIsOpenIconDelete(true);
  };
  
  ///function scroll top

  return (
    <div className="header">
      <FontAwesomeIcon
        onClick={() => {
          setIsOpenSidebarRight(!IsOpenSidebarRight);
        }}
        className="icon-bars"
        icon={IsOpenSidebarRight ? faClose : faBars}
      />
      <Link className="style_link" to={RouterLinks.HOME_PAGE}>
      <div className="logo">
        <span>Movies</span>
      </div>
      </Link>
      <ul className="nav__menu">
        <li className="nav_item">
          <Link className="style_link" to={RouterLinks.HOME_PAGE}>
            <span> Home</span>
          </Link>
        </li>
        {/* <li className="nav_item">
          <Link className="style_link" to={`${RouterLinks.LIST_MOVIE}?isSeries=1`}>
            <span> Phim bộ</span>
          </Link>
        </li>
        <li className="nav_item">
          <Link to={`${RouterLinks.LIST_MOVIE}?isSeries=0`} className="style_link">
            <span> Phim lẻ</span>
          </Link>
        </li> */}
        <li className="nav_item">
          <span>
            Quốc gia
            <FontAwesomeIcon icon={faCaretDown} style={{ paddingLeft: "0.3rem", color: "rgba(255, 255, 255, 0.7)" }} />
          </span>
          <div className="sub_menu">
            <ul>
              {countries.map((country: any, index: number) => (
                <li key={index} className="country_item">
                  <Link className="style_link" to={`${RouterLinks.LIST_MOVIE}?country_id=${country.idd.root}`}>
                    <FontAwesomeIcon icon={faCaretRight} />
                    {country.name.common}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="nav_item">
          <span>
            Thể loại
            <FontAwesomeIcon icon={faCaretDown} style={{ paddingLeft: "0.3rem", color: "rgba(255, 255, 255, 0.7)" }} />
          </span>
          <div className="sub_menu">
            <ul>
              {countries.map((country: any, index: number) => (
                <li key={index} className="country_item">
                  <Link className="style_link" to={`${RouterLinks.LIST_MOVIE}?country_id=${country.idd.root}`}>
                    <FontAwesomeIcon icon={faCaretRight} />
                    {country.name.common}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      {/* <div className="search">
        <FontAwesomeIcon onClick={handleOpenInputSearch} className="icon icon__search" icon={faSearch} />
        <input
          onChange={handleValueChange}
          ref={inputRef}
          type="text"
          className={`search__input ${isOpenInput ? "search-open-input" : ""}`}
          autoFocus
        ></input>
        <FontAwesomeIcon
          onClick={handleCloseInput}
          className={`icon icon__close ${isOpenInput ? "icon-open-close" : ""}`}
          icon={faXmark}
        />
        <FontAwesomeIcon
          onClick={handleResetValue}
          className={`icon icon__delete ${isOpenIconDelete ? "icon-open-delete" : ""}`}
          icon={faDeleteLeft}
        />
      </div> */}
    </div>
  );
};
export default Header;
