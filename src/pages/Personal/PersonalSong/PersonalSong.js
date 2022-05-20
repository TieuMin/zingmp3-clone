import React from "react";

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
        <li className="music__library">
          <div>
            <div className="title__sumenu__left">
              <div className="icon__music__library">
                <i className="fa-solid fa-music"></i>
              </div>
              <div className="checkbox__music__library">
                <input type="checkbox" className="select__all__music" />
              </div>
              <div className="img__music__library">
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/6/d/e/c6def069a1a885c41fe479358fa7c506.jpg"
                  alt=""
                />
                <div className="option__playlist__selection">
                  <div className="option__selection">
                    <i className="fa-solid fa-play"></i>
                    {/* <span className="gif__play">
                            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""/>
                        </span> */}
                  </div>
                </div>
              </div>
              <div className="title__music__library">
                <div>chạy về khóc với anh</div>
                <nav className="subsinger__music__library">
                  <a href="#">ERIK</a>
                </nav>
              </div>
            </div>
            <div className="subtitle__sumenu__content">
              <a href="#">chạy về khóc với (single)</a>
            </div>
            <div className="option__sumenu__right">
              <div className="icon__mic_library">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div className="delete__library">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="item__music__library">
                <div>● ● ●</div>
              </div>
              <div className="time__music__library">03:44</div>
            </div>
          </div>
        </li>
        <li className="music__library">
          <div>
            <div className="title__sumenu__left">
              <div className="icon__music__library">
                <i className="fa-solid fa-music"></i>
              </div>
              <div className="checkbox__music__library">
                <input type="checkbox" className="select__all__music" />
              </div>
              <div className="img__music__library">
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/b/3/3/8b337aca4250fde26de3dfb1d6eca697.jpg"
                  alt=""
                />
                <div className="option__playlist__selection">
                  <div className="option__selection">
                    <i className="fa-solid fa-play"></i>
                    {/* <span className="gif__play">
                            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""/>
                        </span> */}
                  </div>
                </div>
              </div>
              <div className="title__music__library">
                <div>cô đơn dành cho ai</div>
                <nav className="subsinger__music__library">
                  <a href="#">Lee Ken</a>,<a href="#">Nal</a>
                </nav>
              </div>
            </div>
            <div className="subtitle__sumenu__content">
              <a href="#">cô đơn dành cho ai (single)</a>
            </div>
            <div className="option__sumenu__right">
              <div className="icon__mic_library">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div className="delete__library">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="item__music__library">
                <div>● ● ●</div>
              </div>
              <div className="time__music__library">03:44</div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default PersonalSong;
