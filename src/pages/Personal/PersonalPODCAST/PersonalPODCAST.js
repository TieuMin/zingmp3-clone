import React from "react";

const PersonalPODCAST = () => {
  return (
    <>
      <div className="option__music__list">
        <a href="#" className="item__music__option active__option__library">
          Tập mới
        </a>
        <a href="#" className="item__music__option">
          tập đã lưu
        </a>
        <a href="#" className="item__music__option">
          chương trình
        </a>
      </div>
      <div className="unListSong">
        <nav>
          <img
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/episode-empty-1.png"
            alt=""
          />
        </nav>
        <div>Không có tập tin mới</div>
      </div>
    </>
  );
};

export default PersonalPODCAST;
