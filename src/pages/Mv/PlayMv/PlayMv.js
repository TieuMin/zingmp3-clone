import React, { useContext, useRef, useState, useEffect } from "react";
import { VideoContext } from "../../../context/GetVideoProvider";
import "./playmv.css";
import NameSinger from "../../NameSinger/NameSinger";
import LoadHeaderMv from "./LoadHeaderMv";
import LoadVideoMv from "./LoadVideoMv";
import Video from "./Video";
import LoadListVideo from "./LoadListVideo";

const PlayMv = () => {
  const {
    activePlayVideo,
    setActivePlayVideo,
    dataVideo,
    idVideo,
    loadVideo,
    setVideoPlay,
    setIdVideo,
    setLoadVideo,
    setDataVideo,
    setRepeat,
    repeat,
    listVideo,
    setIndexVideo,
    loadList,
    fullWidthScreen,
  } = useContext(VideoContext);

  useEffect(() => {
    if (!activePlayVideo) {
      setVideoPlay(false);
      setIdVideo("");
      setLoadVideo(false);
      if (dataVideo) {
        setDataVideo("");
      }
    }
  }, [activePlayVideo, dataVideo]);

  return (
    <div className={`main__mv ${activePlayVideo ? "playmv__active" : ""}`}>
      <div className="sidebar__scrollbar playmv__container">
        <div className="playmv__top">
          {loadVideo ? (
            <div className="playmv__top__left">
              <div className="playmv__img">
                <img src={dataVideo.artist.thumbnail} alt="" />
              </div>
              <div className="playmv__title___singer">
                <div className="playmv__title">{dataVideo.title}</div>
                <div className="playmv__singer">
                  {dataVideo.artists.map((artist, index) => {
                    return <NameSinger key={index} artist={artist} />;
                  })}
                </div>
              </div>
              <div className="playmv__option__left">
                <div className="playmv__option__item">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="playmv__option__item">
                  <i className="fa-solid fa-music"></i>
                </div>
                <div className="playmv__option__item">
                  <i className="fa fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
          ) : (
            <LoadHeaderMv />
          )}
          <div className="playmv__top__right">
            <div className="playmv__option__item">
              <i className="fa-solid fa-minimize"></i>
            </div>
            <div
              className="playmv__option__item"
              onClick={() => setActivePlayVideo(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
        <div
          className="playmv__content"
          style={{ width: `${fullWidthScreen ? "100%" : ""}` }}
        >
          <div
            className={`playmv__left ${fullWidthScreen && "fullWidthScreen"}`}
          >
            {loadVideo ? <Video /> : <LoadVideoMv />}
          </div>
          <div
            className="playmv__right"
            style={{ display: `${fullWidthScreen ? "none" : ""}` }}
          >
            <div className="playmv__right__form">
              <div className="playmv__right__top">
                <div className="playmv__top__left">Danh Sách Phát</div>
                <div className="playmv__top__right">
                  <span
                    onClick={() =>
                      repeat === "repeatAll"
                        ? setRepeat("repeat")
                        : setRepeat("repeatAll")
                    }
                  >
                    Tự động phát
                  </span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={repeat === "repeatAll" ? "checked" : ""}
                      onChange={() =>
                        repeat === "repeatAll"
                          ? setRepeat("repeat")
                          : setRepeat("repeatAll")
                      }
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="sidebar__scrollbar playmv__right__bottom">
                {listVideo && loadList === false ? (
                  listVideo.recommends.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`playmv__list__item ${
                          idVideo === item.encodeId && "active__playmv__list"
                        }`}
                      >
                        <div className="playmv__list__img">
                          <img src={item.thumbnail} alt="" />
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
                            <div
                              className="option__playlist__selection"
                              onClick={() => {
                                setIdVideo(item.encodeId);
                                setIndexVideo(index);
                              }}
                            >
                              <div className="option__selection">
                                <a>
                                  <i className="fa-solid fa-play"></i>
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="playmv__list__title__singer">
                          {idVideo === item.encodeId ? (
                            <div className="playmv__list__title">
                              {item.title}
                            </div>
                          ) : (
                            <div
                              className="playmv__list__title"
                              onClick={() => {
                                setIdVideo(item.encodeId);
                                setIndexVideo(index);
                              }}
                            >
                              {item.title}
                            </div>
                          )}
                          <div className="playmv__list__singer">
                            {item.artists.map((artist, index) => {
                              return <NameSinger key={index} artist={artist} />;
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <LoadListVideo />
                )}
              </div>
            </div>
          </div>
        </div>
        {fullWidthScreen && (
          <div className="playmv__list__bottom">
            <div className="playmv__right__top">
              <div className="playmv__top__left">Danh Sách Phát</div>
              <div className="playmv__top__right">
                <span
                  onClick={() =>
                    repeat === "repeatAll"
                      ? setRepeat("repeat")
                      : setRepeat("repeatAll")
                  }
                >
                  Tự động phát
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={repeat === "repeatAll" ? "checked" : ""}
                    onChange={() =>
                      repeat === "repeatAll"
                        ? setRepeat("repeat")
                        : setRepeat("repeatAll")
                    }
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="playmv__all__list">
              {listVideo && loadList === false ? (
                listVideo.recommends.map((item, index) => {
                  return (
                    <div key={index} className="playmv__list__item2">
                      <div className="playmv__list__img playmv__list__img2">
                        <img src={item.thumbnail} alt="" />
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
                          <div
                            class="option__playlist__selection"
                            onClick={() => {
                              setIdVideo(item.encodeId);
                              setIndexVideo(index);
                            }}
                          >
                            <div class="option__selection item__play__selection">
                              <a href="#">
                                <i class="fa-solid fa-play"></i>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="playmv__list__title__singer playmv__title__singer2">
                        {idVideo === item.encodeId ? (
                          <div className="playmv__list__title">
                            {item.title}
                          </div>
                        ) : (
                          <div
                            className="playmv__list__title"
                            onClick={() => {
                              setIdVideo(item.encodeId);
                              setIndexVideo(index);
                            }}
                          >
                            {item.title}
                          </div>
                        )}

                        <div className="playmv__list__singer">
                          {item.artists.map((artist, index) => {
                            return <NameSinger key={index} artist={artist} />;
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <LoadListVideo />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayMv;
