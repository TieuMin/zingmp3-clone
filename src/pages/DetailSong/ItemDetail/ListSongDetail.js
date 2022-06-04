import React, { useContext, useState, useEffect, useRef } from "react";
import { PlaylistContext } from "../../../context/GetPlaylistProvider";
import { GetSongContext } from "../../../context/GetSongProvider";
import loading from "../../../assets/images/loading.gif";

const ListSongDetail = () => {
  const { setIndexListIdSong, dataPlaylist } = useContext(PlaylistContext);
  const {
    loaderPlay,
    btnPlay,
    setBtnPlay,
    idSong,
    setIdSong,
    playSong,
    setclose,
  } = useContext(GetSongContext);
  const playId = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const [translate, setTranslate] = useState("480");
  const [indexActive, setIndexActive] = useState(1);
  const Ref = useRef();

  useEffect(() => {
    if (dataPlaylist.song) {
      let indexSong;
      dataPlaylist.song.items.find((item, index) => {
        if (item.encodeId === idSong) {
          indexSong = index;
        }
      });
      setTranslate(480 - 360 * indexSong);
      setIndexActive(indexSong ? indexSong + 1 : 1);
    }
  }, [dataPlaylist, idSong]);

  const handleEvent = {
    nextList: () => {
      if (Ref && Ref.current) {
        setTranslate(translate - 360);
        setIndexActive((prev) => prev + 1);
      }
    },
    prevList: () => {
      if (Ref && Ref.current) {
        setTranslate(translate + 360);
        setIndexActive((prev) => (prev >= 1 ? prev - 1 : 1));
      }
    },
  };

  return (
    <>
      <div className="sidebar__scrollbar detail__song__center">
        <div
          className="detail__center__all__item active__center__item"
          style={{ transform: `translateX(${translate}px)` }}
          ref={Ref}
        >
          {dataPlaylist
            ? dataPlaylist.song.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`detail__center__item ${
                      idSong === item.encodeId && "active__center__item2"
                    }`}
                  >
                    <div
                      className={`detail__center__img ${
                        indexActive &&
                        indexActive === index + 1 &&
                        "avtive__index"
                      }`}
                    >
                      <img src={item.thumbnailM} />
                      {item.artists && item.streamingStatus === 1 ? (
                        ""
                      ) : (
                        <img
                          className="image__vip"
                          src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.6.25/static/media/vip-label.3dd6ac7e.svg"
                          style={{ width: "35px", top: "-150px" }}
                        />
                      )}
                      {item.artists && item.streamingStatus === 1 ? (
                        <>
                          {btnPlay && idSong === item.encodeId && (
                            <span className="gif__play gif__active__detail">
                              <img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""
                              />
                            </span>
                          )}
                          {idSong === item.encodeId ? (
                            <div className="option__detail__song">
                              {loaderPlay === false ? (
                                <>
                                  {btnPlay &&
                                  playSong &&
                                  idSong === item.encodeId ? (
                                    <i
                                      style={{ padding: "11px 18px" }}
                                      className="fa-solid fa-pause"
                                      onClick={() => setBtnPlay(false)}
                                    ></i>
                                  ) : (
                                    <i
                                      className="fa-solid fa-play"
                                      onClick={() => {
                                        setBtnPlay(true);
                                      }}
                                    ></i>
                                  )}
                                </>
                              ) : (
                                <span className="controller__itemmedia loader__audio">
                                  <img
                                    style={{ border: "unset", width: "60px" }}
                                    src={loading}
                                    alt="loading"
                                  />
                                </span>
                              )}
                            </div>
                          ) : (
                            <div
                              className="option__detail__song"
                              onClick={() => {
                                setIdSong(item.encodeId);
                                setIndexListIdSong(index);
                              }}
                            >
                              {btnPlay &&
                              playSong &&
                              idSong === item.encodeId ? (
                                <i
                                  style={{ padding: "11px 18px" }}
                                  className="fa-solid fa-pause"
                                ></i>
                              ) : (
                                <i className="fa-solid fa-play"></i>
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <div
                          className="option__detail__song"
                          onClick={() => setclose(true)}
                        >
                          <i className="fa-solid fa-play"></i>
                        </div>
                      )}
                    </div>
                    <div className="detail__center__description">
                      <div className="detail__center__title">{item.title}</div>
                      <div className="detail__center__singer">
                        {item.artistsNames}
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      {translate < 480 && (
        <div
          className="detail__center__prev"
          onClick={() => handleEvent.prevList()}
        >
          <i className="fa-solid fa-angle-left"></i>
        </div>
      )}
      {dataPlaylist.song &&
      dataPlaylist.song.items.length > 1 &&
      indexActive <= dataPlaylist.song.items.length - 1 ? (
        <div
          className="detail__center__next"
          onClick={() => handleEvent.nextList()}
        >
          <i className="fa-solid fa-angle-right"></i>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ListSongDetail;
