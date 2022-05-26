import React, { useContext } from "react";

const PersonalSong = () => {
  return (
    <>
      <div className="option__music__list">
        <a href="#" className="item__music__option active__option__library">
          yêu thích
        </a>
        <a href="#" className="item__music__option">
          đã tải lên
        </a>
      </div>
      <ul className="item__music__list">
        <li className="title__submenu">
          <div className="title__submenu__left">
            <div className="submenu__left__one active__submenu__labrary">
              <div className="item__submenu__left"></div>
              <div className="item__submenu__right">bài hát</div>
            </div>
            <div className="submenu__left__two">
              <div>
                <div className="item__submenu__left">
                  <input type="checkbox" className="select__all__music" />
                </div>
                <div className="item__submenu__content">
                  <i className="fa-solid fa-play"></i> thêm vào danh sách phát
                </div>
                <div className="item__submenu__right">
                  <div className="option__submenu__right">● ● ●</div>
                </div>
              </div>
            </div>
          </div>
          <div className="title__sumenu__content">album</div>
          <div className="title__sumenu__right">thời gian</div>
        </li>
      </ul>
    </>
  );
};

export default PersonalSong;
