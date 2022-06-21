import React, { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./follow.css";
import ItemSinger from "../ItemSinger/ItemSinger";
import { VideoContext } from "../../context/GetVideoProvider";

const Follow = () => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const { miniatureVideo } = useContext(VideoContext);

  return (
    <MainLayout>
      <div
        className="content"
        style={{
          height: `${
            prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
          }`,
        }}
      >
        <div className="zm__navbar">
          <div className="zm__navbar__skin">
            <ul className="zm__navbar__menu">
              <li className="zm__navbar__item zm__active__bar">Việt Nam</li>
              <li className="zm__navbar__item">US-UK</li>
              <li className="zm__navbar__item">K-pop</li>
              <li className="zm__navbar__item">hoa ngữ</li>
              <li className="zm__navbar__item">nổi bật</li>
            </ul>
          </div>
        </div>
        <div className="carousel__wapper" style={{ marginBottom: "60px" }}>
          <ItemSinger />
        </div>
        <div className="follower__container">
          <div className="follower__left">
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/5/2/4/0/5240960e0c44f700b8d5369ef8cfd380.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>ninh dương lan ngọc</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>28 tháng 4 lúc 11:17</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Bé ....</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      background:
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/3e5cafaf88ea61b438fb') center center / cover no-repeat",
                    }}
                  >
                    <span className="controller__itemmedia play__item center">
                      <i class="fa-solid fa-play"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fa-regular fa-heart"></i> 1
                </div>
                <div className="follower__comment">
                  <i className="fa-regular fa-comment"></i> 2
                </div>
              </div>
            </div>
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/1/d122f030d505f3a4f51cc333343e95ee_1499850029.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>jang mi</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>28 tháng 4 lúc 11:17</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Bé ....</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      paddingBottom: "56.0748%",
                      background:
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/e7d77c245b61b23feb70') center center / cover no-repeat",
                    }}
                  >
                    <span className="controller__itemmedia play__item center">
                      <i class="fa-solid fa-play"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fa-regular fa-heart"></i> 1
                </div>
                <div className="follower__comment">
                  <i className="fa-regular fa-comment"></i> 2
                </div>
              </div>
            </div>
          </div>
          <div className="follower__right">
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/1/d122f030d505f3a4f51cc333343e95ee_1499850029.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>jang mi</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>28 tháng 4 lúc 11:17</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Bé ....</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      paddingBottom: "56.0748%",
                      background:
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/e7d77c245b61b23feb70') center center / cover no-repeat",
                    }}
                  >
                    <span className="controller__itemmedia play__item center">
                      <i class="fa-solid fa-play"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fa-regular fa-heart"></i> 1
                </div>
                <div className="follower__comment">
                  <i className="fa-regular fa-comment"></i> 2
                </div>
              </div>
            </div>
            <div className="follower__item">
              <div className="item__follower head__follower">
                <div className="avatar__follower">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/5/2/4/0/5240960e0c44f700b8d5369ef8cfd380.jpg"
                    alt=""
                  />
                </div>
                <div className="follower">
                  <div className="follwer__name">
                    <a href="#">
                      <span>ninh dương lan ngọc</span>
                    </a>
                    <span>.</span>
                    <button href="#">
                      <a href="#">quan tâm</a>
                    </button>
                  </div>
                  <div className="follower__time">
                    <p>28 tháng 4 lúc 11:17</p>
                  </div>
                </div>
              </div>
              <div className="item__follower content__follower">
                <span>Bé ....</span>
                <div className="video__follower">
                  <div
                    className="feed-video-follower"
                    style={{
                      background:
                        "url('https://photo-zmedia-zmp3.zmdcdn.me/w512_png/3e5cafaf88ea61b438fb') center center / cover no-repeat",
                    }}
                  >
                    <span className="controller__itemmedia play__item center">
                      <i class="fa-solid fa-play"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="item__follower follower__comment__like">
                <div className="follower__like">
                  <i className="fa-regular fa-heart"></i> 1
                </div>
                <div className="follower__comment">
                  <i className="fa-regular fa-comment"></i> 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Follow;
