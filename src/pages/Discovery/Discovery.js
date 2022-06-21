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
import { VideoContext } from "../../context/GetVideoProvider";
import "./discovery.css";

const Discovery = () => {
  const { loader, handleScroll, animation } = useContext(HomeContext);
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const { miniatureVideo } = useContext(VideoContext);

  return (
    <MainLayout>
      {animation ? (
        <DiscoveryLoader />
      ) : (
        <div
          className="content"
          style={{
            height: `${
              prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
            }`,
          }}
          onScroll={(event) => handleScroll(event)}
        >
          <div className="gallery">
            <SliderGalleyry banners={loader.stores[0]} />

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>Lựa Chọn Hôm Nay</span>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[3]} p={false} />
              </div>
            </div>

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>Có Thể Bạn Muốn Nghe</span>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[6]} />
              </div>
            </div>

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>XONE's CORNER</span>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[4]} p={false} />
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
                <ItemAudio lists={loader.stores[5]} />
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
                    <ItemPlaylist lists={loader.stores[14]} />
                  </div>
                </div>

                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <span>Nhạc Mới Mỗi Ngày</span>
                  </div>
                  <div className="list__playlist__selection">
                    <ItemPlaylist lists={loader.stores[6]} />
                  </div>
                </div>

                <div className="chart__home">
                  <ZingChartHome lists={loader.stores[7]} />
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
                    <ItemPlaylist lists={loader.stores[10]} />
                  </div>
                </div>

                <div className="playlist__selection">
                  <ItemChannel lists={loader.stores[11]} />
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
                    <NewRelease lists={loader.stores[12]} />
                  </div>
                  <div className="list__playlist__selection">
                    <ItemPlaylist lists={loader.stores[14]} />
                  </div>
                </div>

                <div className="playlist__selection">
                  <div className="header__playlist__selection">
                    <span>nghệ sĩ Zing Choice</span>
                  </div>
                  <div className="list__playlist__selection">
                    <div className="favorite__artist">
                      <LoveSinger lists={loader.stores[15]} />
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
