import MainLayout from "../../layouts/MainLayout";
import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "./personal.css";

const Personal = () => {
  const location = useLocation();
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));

  return (
    <MainLayout>
      <div
        className="content"
        style={{ height: `${prevSongDefaul ? "" : "100vh"}` }}
      >
        <div className="title__library">
          Thư viện
          <span className="icon__play__library">
            <i className="fa-solid fa-play"></i>
          </span>
        </div>
        <div className="playlist__library">
          <div className="title__playlist__library">
            <div className="title__playlist__left">
              <span>playlist</span>
              <span className="icon__playlist__left">
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            <div className="title__playlist__reight">
              <span>tất cả</span>
              <span className="icon__playlist__reight">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className="list__playlist__library">
            <div className="item__list__library">
              <a href="#">
                <div className="img__playlist__selection">
                  <img
                    src="https://photo-playlist-zmp3.zmdcdn.me/s1/user-playlist?src=HavwqN7EvKCI1oYSFOdq0r9DOvnjYVi30bipXMc1-0PHNs23FTNvK5q6OzOosQXUKW5dY3pQg5fBMtQDC9pwKG0PFzLxoBC6JLLun3lQ-KnD27Z5EuVkJ5jQ8SuqWhn72rvmm3E0kaLJNIB3FD2yG01VSvDfchTJLrCrmMBHzHe86668CfovNHbOBi9rdBXT6LWls7Y6j5172NlJ9zRYLay4ATvmsR1NI05uWIRRuG0T267QD8JjHay3AfXzsgOI1b9dr3hBvb9CGMU0EfBc1W8RSD8-bRjHNaicr3wIx0TU67RKOP2wN0aPSevXaEGGKWijWdq&size=thumb/240_240"
                    alt=""
                  />

                  <div className="option__playlist__selection">
                    <div className="option__selection library__add__selection">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="option__selection item__play__selection">
                      <i className="fa-solid fa-play"></i>
                      {/* <span className="gif__play">
                                        <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                            alt=""/>
                                    </span> */}
                    </div>
                    <div className="option__selection item__option__selection">
                      <div className="option__icon__selection">● ● ●</div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="title__playlist__selection">
                <a href="#" className="title__one__line">
                  love
                </a>
                <div>Trần minh</div>
              </div>
            </div>
          </div>
          <div className="menu__library">
            <ul>
              <li className="item__menu__library">
                <NavLink
                  className={`${
                    location.pathname == "/personal" ? "active" : ""
                  }`}
                  to="/personal/song"
                >
                  Bài Hát
                </NavLink>
              </li>
              <li className="item__menu__library">
                <NavLink to="/personal/podcast">PODCAST</NavLink>
              </li>
              <li className="item__menu__library">
                <NavLink to="/personal/album">ALBUM</NavLink>
              </li>
              <li className="item__menu__library">
                <NavLink to="/personal/mv">MV</NavLink>
              </li>
            </ul>
            <div className="music__list__library">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Personal;
