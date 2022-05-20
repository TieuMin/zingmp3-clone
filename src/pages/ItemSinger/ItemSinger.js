import React, { useState } from "react";

const ItemSinger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className="zma__list__item"
        style={{
          transform: `${isActive ? "translate3d(-580px, 0px, 0px)" : ""}`,
        }}
      >
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png"
              alt=""
            />
          </a>
        </div>

        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png"
              alt=""
            />
          </a>
        </div>
        <div className="item__zma">
          <a href="#">
            <img
              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={`carousel__prev ${!isActive ? "unprev__carousel" : ""}`}>
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => setIsActive(false)}
        ></i>
      </div>
      <div className={`carousel__next ${isActive ? "unnext__carousel" : ""}`}>
        <i
          className="fa-solid fa-chevron-right"
          onClick={() => setIsActive(true)}
        ></i>
      </div>
    </>
  );
};

export default ItemSinger;
