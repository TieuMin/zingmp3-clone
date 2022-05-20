import React, { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import SliderGalleyry from "../SliderGalleyry/SliderGalleyry";
import ItemPlaylist from "../ItemPlaylist/ItemPlaylist";
import ItemAudio from "../ItemAudio/ItemAudio";
import ItemSinger from "../ItemSinger/ItemSinger";
import ItemChannel from "../ItemChannel/ItemChannel";
import ItemMixtape from "../ItemMixtape/ItemMixtape";
import NewRelease from "../NewRelease/NewRelease";
import LoveSinger from "../LoveSinger/LoveSinger";
import ZingChartHome from "../ZingChartHome/ZingChartHome";
import DiscoveryLoader from "./DiscoveryLoader";
import { HomeContext } from "../../context/HomeProvider";
import "./discovery.css";

const Discovery = () => {
  const { loader, handleScroll, animation } = useContext(HomeContext);
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));

  return (
    <MainLayout>
      {animation ? (
        <DiscoveryLoader />
      ) : (
        <div
          className="content"
          style={{ height: `${prevSongDefaul ? "" : "100vh"}` }}
          onScroll={(event) => handleScroll(event)}
        >
          <div className="gallery">
            <SliderGalleyry banners={loader.stores[0]} />

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>Gần Đây</span>
                <div className="btn__view__all">
                  TẤT CẢ <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
              <div className="list__playlist__selection">
                <div className="item__playlist__selection">
                  <a href="#">
                    <div className="img__playlist__selection">
                      <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                        alt=""
                      />
                      <div className="option__playlist__selection">
                        <div className="option__selection library__add__selection">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="option__selection item__play__selection">
                          {/* <i className="fa-solid fa-play"></i> */}
                          <span className="gif__play">
                            <img
                              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="option__selection item__option__selection">
                          <div className="option__icon__selection">● ● ●</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="title__playlist__selection">
                    <a href="#" className="title__tow__line">
                      Cả Một Trời Thương Nhớ (Live in HOA Concert)
                    </a>
                  </div>
                </div>
                <div className="item__playlist__selection">
                  <a href="#">
                    <div className="img__playlist__selection">
                      <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg"
                        alt=""
                      />

                      <div className="option__playlist__selection">
                        <div className="option__selection library__add__selection">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="option__selection item__play__selection">
                          <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="option__selection item__option__selection">
                          <div className="option__icon__selection">● ● ●</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="title__playlist__selection">
                    <a href="#" className="title__tow__line">
                      #zingchart
                    </a>
                  </div>
                </div>
                <div className="item__playlist__audio">
                  <a href="#">
                    <div className="img__playlist__audio">
                      <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/f/9/8/af98f523d39db21eed35d049b5c87cd1.jpg"
                        alt=""
                      />
                      <div className="option__playlist__audio">
                        <div className="option__audio">
                          {/* <i className="fa-solid fa-play"></i> */}
                          <span className="gif__play">
                            <img
                              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                      <svg
                        className="svg circle__radio"
                        fill="transparent"
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          className="svg-circle-bg"
                          stroke="rgba(255, 255, 255, 0.2)"
                          cx="50"
                          cy="50"
                          r="48.75"
                          strokeWidth="2.5"
                        ></circle>
                        <circle
                          className="svg-circle"
                          stroke="#ff4b4a"
                          cx="50"
                          cy="50"
                          r="48.75"
                          strokeWidth="2.5"
                          strokeDasharray="306.3052837250048"
                          strokeDashoffset="120"
                          style={{
                            transition:
                              "stroke-dashoffset 850ms ease-in-out 0s",
                          }}
                        ></circle>
                      </svg>
                    </div>
                    <div className="band__name__audio">
                      <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/f/9/8/af98f523d39db21eed35d049b5c87cd1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="icon__live__audio">
                      <img
                        src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
                        alt=""
                      />
                    </div>
                  </a>
                  <div className="title__playlist__audio">
                    <span className="title_audio">XONE Radio</span>
                  </div>
                </div>
                <div className="item__playlist__selection">
                  <a href="#">
                    <div className="img__playlist__selection">
                      <img
                        src="https://photo-playlist-zmp3.zmdcdn.me/s1/user-playlist?src=HavwqN7EvKCI1oYSFOdq0r9DOvnjYVi30bipXMc1-0PHNs23FTNvK5q6OzOosQXUKW5dY3pQg5fBMtQDC9pwKG0PFzLxoBC6JLLun3lQ-KnD27Z5EuVkJ5jQ8SuqWhn72rvmm3E0kaLJNIB3FD2yG01VSvDfchTJLrCrmMBHzHe86668CfovNHbOBi9rdBXT6LWls7Y6j5172NlJ9zRYLay4ATvmsR1NI05uWIRRuG0T267QD8JjHay3AfXzsgOI1b9dr3hBvb9CGMU0EfBc1W8RSD8-bRjHNaicr3wIx0TU67RKOP2wN0aPSevXaEGGKWijWdq&size=thumb/240_240"
                        alt=""
                      />

                      <div className="option__playlist__selection">
                        <div className="option__selection library__add__selection">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="option__selection item__play__selection">
                          <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="option__selection item__option__selection">
                          <div className="option__icon__selection">● ● ●</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="title__playlist__selection">
                    <a href="#" className="title__tow__line">
                      Love
                    </a>
                  </div>
                </div>
                <div className="item__playlist__selection">
                  <a href="#">
                    <div className="img__playlist__selection">
                      <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/7/6/3/076388b9c3ecd0aa14af0b829352e426.jpg"
                        alt=""
                      />

                      <div className="option__playlist__selection">
                        <div className="option__selection library__add__selection">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="option__selection item__play__selection">
                          <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="option__selection item__option__selection">
                          <div className="option__icon__selection">● ● ●</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="title__playlist__selection">
                    <a href="#" className="title__tow__line">
                      ERIK's Heartbreak Story
                    </a>
                  </div>
                </div>
                <div className="item__playlist__selection">
                  <a href="#">
                    <div className="img__playlist__selection">
                      <img
                        src="https://photo-playlist-zmp3.zmdcdn.me/s1/mixtape?src=HavwqN7EYmrDGr6VBegSG044GDzhm8f0L0H1tpwBYGfGL4A2RTpT1GG5HDTisOzM0m0NqclVZ50111RPTeN83Wr2HD8znu4z5aL8vJkCt7S120IYAioVFKO81Q8jp9udG1K6eIlCc7H0H07rU9RE9a151VHzo9aYHnTJgtlEqt5IGb_jATsK9GGK0BSSaSOd2G-h8px4IL373wiZ8yH1_29z&cv=1&size=thumb/240_240"
                        alt=""
                      />

                      <div className="option__playlist__selection">
                        <div className="option__selection library__add__selection">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="option__selection item__play__selection">
                          <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="option__selection item__option__selection">
                          <div className="option__icon__selection">● ● ●</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="title__playlist__selection">
                    <a href="#" className="title__tow__line">
                      Mixtape Anh Luôn Là Lý Do
                    </a>
                  </div>
                </div>
                <div className="item__playlist__selection">
                  <a href="#">
                    <div className="img__playlist__selection">
                      <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/f/7/6/cf76de6283cfa98ec85a301addb676e5.jpg"
                        alt=""
                      />

                      <div className="option__playlist__selection">
                        <div className="option__selection library__add__selection">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="option__selection item__play__selection">
                          <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="option__selection item__option__selection">
                          <div className="option__icon__selection">● ● ●</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="title__playlist__selection">
                    <a href="#" className="title__tow__line">
                      Top 100 bài hát nhạc trẻ hay nhất
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>Có Thể Bạn Muốn Nghe</span>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[3]} />
              </div>
            </div>

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>Lựa Chọn Hôm Nay</span>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[4]} p={false} />
              </div>
            </div>

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>XONE's CORNER</span>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[5]} p={false} />
              </div>
            </div>

            <div className="audio__selection">
              <div className="header__playlist__selection">
                <span>Radio Nổi Bật</span>
                <div className="btn__view__all">
                  TẤT CẢ <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
              <div className="list__playlist__selection">
                <ItemAudio lists={loader.stores[6]} />
              </div>
            </div>

            {loader.loadPage && (
              <>
                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <div className="fan__playlist__selection">
                      <a href="#" className="fan__playlist__img">
                        <img
                          src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/d/e/c/bdec30800a424a4ab622294453dd31c7.jpg"
                          alt=""
                        />
                      </a>
                      <div className="fan__playlist__subtitle">
                        <span>Dành Cho fan</span>
                        <div className="name__singer__fan">
                          <a href="#">Anh Quân Idol</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list__playlist__selection">
                    <ItemPlaylist lists={loader.stores[4]} />
                  </div>
                </div>

                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <span>Nhạc Mới Mỗi Ngày</span>
                  </div>
                  <div className="list__playlist__selection">
                    <ItemPlaylist lists={loader.stores[7]} />
                  </div>
                </div>

                <div className="chart__home">
                  <ZingChartHome lists={loader.stores[8]} />
                </div>

                <div className="option__zingchart">
                  <div className="item__option__zingchart">
                    <a href="#">
                      <img
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item__option__zingchart">
                    <a href="#">
                      <img
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item__option__zingchart">
                    <a href="#">
                      <img
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="zma__section">
                  <div className="carousel__wapper">
                    <ItemSinger />
                  </div>
                </div>

                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <span>Top 100</span>
                    <div className="btn__view__all">
                      TẤT CẢ <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </div>
                  <div className="list__playlist__selection">
                    <ItemPlaylist lists={loader.stores[11]} />
                  </div>
                </div>

                <div className="playlist__selection">
                  <ItemChannel lists={loader.stores[12]} />
                </div>

                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <span>Mixtape Yêu Thích</span>
                  </div>
                  <div className="list__playlist__selection">
                    <ItemMixtape />
                  </div>
                </div>

                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <span>Mới phát hành</span>
                    <div className="btn__view__all">
                      TẤT CẢ <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </div>
                  <div className="new__release">
                    <NewRelease lists={loader.stores[13]} />
                  </div>
                  <div className="list__playlist__selection">
                    <ItemPlaylist lists={loader.stores[15]} />
                  </div>
                </div>

                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <span>nghệ sĩ Zing Choice</span>
                  </div>
                  <div className="list__playlist__selection">
                    <div className="favorite__artist">
                      <LoveSinger lists={loader.stores[16]} />
                    </div>
                  </div>
                </div>

                <div className="music__partner">
                  <div className="title__music__partner">đối tác âm nhạc</div>
                  <div className="logos__partner">
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/Kakao-M.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png"
                        alt=""
                      />
                    </div>
                    <div className="item__logo__partner">
                      <img
                        src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Discovery;
