import React, { useContext } from "react";

const LoveSinger = ({ lists }) => {
  return (
    <>
      {lists.items.map((item, index) => {
        if (index < 3) {
          return (
            <div key={index} className="item__favorite__artist">
              <div href="#">
                <img src={item.thumbnail} alt="" />
                <span className="opacity__img__channel"></span>
                <div className="option__playlist__selection">
                  <div className="option__selection item__play__selection favorite__artist__option">
                    <i className="fa-solid fa-play"></i>
                    {/* <span className="gif__play">
                            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""/>
                        </span>  */}
                  </div>
                </div>
                <div className="mix__content">
                  <div className="sub__mix__content">
                    {index === 0
                      ? "từ thư viện của bạn"
                      : index === 1
                      ? "vì bạn nghe nhiều"
                      : "vì bạn yêu thích"}
                  </div>
                  <div className="title__mix__content">{item.artistsNames}</div>
                  <div className="thumbs__mix__content">
                    {item.song.items.map((song, index) => {
                      return (
                        <div key={index} className="item__thumb__mix">
                          <img src={song.thumbnail} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default LoveSinger;
