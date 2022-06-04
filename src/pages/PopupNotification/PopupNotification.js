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
        <div className="sidebar__scrollbar popup__notification">
          <div>Zingmin phiên bản 1.0.1 cập nhật các chức năng sau.</div>
          <div>- Cập nhật tính năng xem lời bài hát.</div>
          <div>- Cập nhật tính năng tìm kiếm.</div>
          <div>- Tối ưu trình phát nhạc.</div>
          <div>- Tối ưu hóa trình phát MV.</div>
          <div>- Tối ưu danh sách phát nhạc.</div>
          <div>- Cập nhật trình phát thu nhỏ MV.</div>
          <div>- Cải thiện UI.</div>

          <div className="popup__version"></div>

          <div>Zingmin phiên bản 1.0.0 cập nhật các chức năng sau.</div>
          <div>- Các danh mục đang hoạt động:</div>
          <div className="item__notification">+ Cá nhân.</div>
          <div className="item__notification">+ Khám phá.</div>
          <div className="item__notification">+ Thể loại.</div>
          <div className="item__notification">+ Top 100.</div>
          <div className="item__notification">+ MV.</div>

          <div>- Cập nhật trình nghe nhạc và các chức năng liên quan.</div>
          <div>- Cập nhật trình phát MV và các chức năng liên quan.</div>
          <div>- Cập nhật gợi ý tìm kiếm.</div>
          <div>- Cập nhật xem danh sách bài hát.</div>
        </div>
        <div className="messenger__popup">
          Quan trọng: Trang web được tạo ra để học tập cá nhân và không có mục
          đích thương mại.
        </div>
      </div>
    </div>
  );
};

export default PopupNotification;
