import React, { useContext } from "react";
import { GetSongContext } from "../../context/GetSongProvider";
import "./PopupNotification.css";

const PopupNotification = () => {
  const { popupNotification, setPopupNotification } =
    useContext(GetSongContext);
  return (
    <div
      className="popup__bg"
      style={{ display: `${popupNotification ? "flex" : "none"}` }}
    >
      <div className="popup__vip" style={{ height: "450px", width: "350px" }}>
        <div className="close__popup">
          <i
            className="fa-solid fa-xmark"
            onClick={() => setPopupNotification(false)}
          ></i>
        </div>
        <div className="popup__title">Thông Báo</div>
        <div
          className="sidebar__scrollbar popup__notification"
          style={{ textAlign: "start" }}
        >
          <div>Zingmin phiên bản 1.0.0 cập nhật các chức năng sau.</div>
          <div>- Chức năng nghe nhạc:</div>
          <div className="item__notification">+ Play & Pause bài hát</div>
          <div className="item__notification">+ Next & Prev bài hát</div>
          <div className="item__notification">+ Lặp bài hát</div>
          <div className="item__notification">+ Phát ngẫu nhiên bài hát</div>
          <div className="item__notification">+ Tua bài hát</div>
          <div className="item__notification">+ Điều chỉnh Volume</div>

          <div>- Chức năng MV:</div>
          <div className="item__notification">+ Play & Pause MV</div>
          <div className="item__notification">+ Next & Prev MV</div>
          <div className="item__notification">+ Lặp MV</div>
          <div className="item__notification">+ Phát ngẫu nhiên MV</div>
          <div className="item__notification">+ Tua MV</div>
          <div className="item__notification">+ Điều chỉnh Volume</div>

          <div>- Chức năng tìm kiếm</div>
          <div>- Chức năng xem danh bài hát</div>
        </div>
        <div className="messenger__popup">
          Quan trọng: Trang web được tạo ra để học tập ngôn ngữ React JS và
          không có mục đích thương mại.
        </div>
      </div>
    </div>
  );
};

export default PopupNotification;
