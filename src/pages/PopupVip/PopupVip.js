import React, { useContext } from "react";
import { GetSongContext } from "../../context/GetSongProvider";

const PopupVip = () => {
  const { close, setclose } = useContext(GetSongContext);
  return (
    <div
      className="popup__bg"
      style={{ display: `${close ? "flex" : "none"}` }}
    >
      <div className="popup__vip">
        <div className="close__popup">
          <i className="fa-solid fa-xmark" onClick={() => setclose(false)}></i>
        </div>
        <div className="popup__title">Dành cho tài khoản VIP</div>
        Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để nghe
        bài hát này.
        <div className="popup__login__vip">Đăng nhập tài khoản VIP</div>
      </div>
    </div>
  );
};

export default PopupVip;
