import React, { useContext, useState, useEffect } from "react";
import NameSinger from "../../NameSinger/NameSinger";
import { HomeContext } from "../../../context/HomeProvider";
import { VideoContext } from "../../../context/GetVideoProvider";
import { GetSongContext } from "../../../context/GetSongProvider";

const ItemMv = () => {
  const { mv, setIdMv, categoryMv, nameCategoryMv } = useContext(HomeContext);
  const { setActivePlayVideo, setIdVideo, setLoadList, idVideo } =
    useContext(VideoContext);
  const { setclose } = useContext(GetSongContext);
  const [menuFilter, setMenuFilter] = useState(false);
  const [menuFilter1, setMenuFilter1] = useState(false);

  useEffect(() => {
    setMenuFilter(false);
  }, [categoryMv]);

  return (
    <>
      <div className="mv__content">
        <div
          className="all__select"
          onBlur={() => setMenuFilter(false)}
          tabIndex="0"
        >
          <div
            className="all__select__item"
            onClick={() => setMenuFilter(!menuFilter)}
          >
            <div>
              <i className="fa-solid fa-music mr-5"></i>
              <p className="mr-20">
                {nameCategoryMv.id !== "" ? nameCategoryMv.name : "Tất cả"}
              </p>
              <div className="angle-icon-all">
                {menuFilter ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-angle-down"></i>
                )}
              </div>
            </div>
          </div>
          {menuFilter && (
            <div className="list__all__select">
              {categoryMv.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="list__item__select__all"
                    onClick={() => setIdMv(data.id)}
                  >
                    {data.name}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div
          className="most__listen"
          tabIndex="0"
          onBlur={() => setMenuFilter1(false)}
        >
          <div
            className="most__listen__item"
            onClick={() => setMenuFilter1(!menuFilter1)}
          >
            <i className="fa-solid fa-bars-staggered mr-5"></i>
            <p className="mr-20">nghe nhiều</p>
            <div className="angle-icon-most">
              {menuFilter1 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </div>
          </div>
          {menuFilter1 && (
            <div className="list__most__listen">
              <div className="list__item__listen__all">nghe nhiều</div>
              <div className="list__item__listen__all">nổi bật</div>
              <div className="list__item__listen__all">mới nhất</div>
            </div>
          )}
        </div>
      </div>
      <div className="columns__mv">
        {mv.stores &&
          mv.stores.map((item, index) => {
            return (
              <div key={index} className="column__mv mt-20">
                <div className="image__mv">
                  <img src={item.thumbnail} alt="" />
                  {item.artists && item.streamingStatus === 1 ? (
                    ""
                  ) : (
                    <img
                      className="image__vip"
                      src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.6.25/static/media/vip-label.3dd6ac7e.svg"
                      style={{ width: "30px" }}
                    />
                  )}
                  {idVideo === item.encodeId ? (
                    <div
                      className="option__playlist__selection"
                      style={{ opacity: "1", cursor: "default" }}
                    >
                      <div className="option__selection">
                        <a>
                          <span className="active__play__list__video">
                            Đang phát
                          </span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <>
                      {item.artists && item.streamingStatus === 1 ? (
                        <span
                          className="controller__itemmedia play__mv"
                          onClick={() => {
                            setActivePlayVideo(true);
                            setLoadList(true);
                            setIdVideo(item.encodeId);
                          }}
                        >
                          <i className="fa-solid fa-play"></i>
                        </span>
                      ) : (
                        <span
                          className="controller__itemmedia play__mv"
                          onClick={() => setclose(true)}
                        >
                          <i className="far fa-play-circle"></i>
                        </span>
                      )}
                    </>
                  )}
                </div>
                <div className="profile">
                  <div className="avatar__profile">
                    <img src={item.artist.thumbnail} alt="" />
                  </div>
                  <div className="profle__content">
                    <p>
                      <a
                        href="#"
                        onClick={() => {
                          setActivePlayVideo(true);
                          setLoadList(true);
                          setIdVideo(item.encodeId);
                        }}
                      >
                        {item.title}
                      </a>
                    </p>
                    <div>
                      {item.artists ? (
                        item.artists.map((artist, index) => {
                          return <NameSinger key={index} artist={artist} />;
                        })
                      ) : (
                        <a href="#">{item.artistsNames}</a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ItemMv;
