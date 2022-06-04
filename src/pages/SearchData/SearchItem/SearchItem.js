import React, { useContext, useState, useEffect } from "react";
import NameSinger from "../../NameSinger/NameSinger";
import { GetSongContext } from "../../../context/GetSongProvider";
import { PlaylistContext } from "../../../context/GetPlaylistProvider";
import loading from "../../../assets/images/loading.gif";

const SearchItem = ({ datas }) => {
  const { setIndexListIdSong, setIdPlaylist, setDataPlaylist } =
    useContext(PlaylistContext);
  const {
    setIdSong,
    btnPlay,
    setBtnPlay,
    idSong,
    loaderPlay,
    playSong,
    setclose,
  } = useContext(GetSongContext);
  const playId = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const [idPlay, setIdPlay] = useState("");

  useEffect(() => {
    if (idSong) {
      setIdPlay(idSong);
    } else {
      setIdPlay(playId ? playId.id : "");
    }
  }, [idSong]);

  function convertMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds; // Return is HH : MM : SS
  }

  return (
    <>
      {datas.map((item, index) => {
        return (
          <li
            key={index}
            className={`music__library ${
              idPlay === item.encodeId ? "forcus__playlist" : ""
            }`}
          >
            <div>
              <div className="title__sumenu__left">
                <div
                  className="img__music__library"
                  style={{ marginLeft: "10px" }}
                >
                  <img src={item.thumbnail} alt="" />
                  <div className="option__playlist__selection">
                    {item.artists && item.streamingStatus === 1 ? (
                      <>
                        {idPlay === item.encodeId ? (
                          <div className="option__selection">
                            {loaderPlay === false ? (
                              <>
                                {btnPlay &&
                                playSong &&
                                idPlay === item.encodeId ? (
                                  <span
                                    style={{ border: "unset" }}
                                    className="gif__play"
                                    onClick={() => setBtnPlay(false)}
                                  >
                                    <img
                                      src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                      alt=""
                                    />
                                  </span>
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
                                  style={{ border: "unset" }}
                                  src={loading}
                                  alt="loading"
                                />
                              </span>
                            )}
                          </div>
                        ) : (
                          <div
                            className="option__selection"
                            onClick={() => {
                              setIdSong(item.encodeId);
                              setIndexListIdSong(index);
                              if (item.album) {
                                setIdPlaylist(item.album.encodeId);
                              } else setDataPlaylist("");
                            }}
                          >
                            {btnPlay && playSong && idPlay === item.encodeId ? (
                              <span
                                style={{ border: "unset" }}
                                className="gif__play"
                              >
                                <img
                                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                  alt=""
                                />
                              </span>
                            ) : (
                              <i className="fa-solid fa-play"></i>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <div
                        className="option__selection"
                        onClick={() => setclose(true)}
                      >
                        <i className="fa-solid fa-play"></i>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="title__music__library"
                  style={{ width: "150px" }}
                >
                  <div className="item__title__album">
                    {item.title}{" "}
                    {item.artists && item.streamingStatus === 1 ? (
                      ""
                    ) : (
                      <img
                        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.6.25/static/media/vip-label.3dd6ac7e.svg"
                        style={{ width: "23px" }}
                      />
                    )}
                  </div>
                  <nav className="subsinger__music__library item__title__album1">
                    {item.artists ? (
                      item.artists.map((artist, index) => {
                        return <NameSinger key={index} artist={artist} />;
                      })
                    ) : (
                      <a href="#">{item.artistsNames}</a>
                    )}
                  </nav>
                </div>
              </div>
              <div className="subtitle__sumenu__content">
                <a href="#">{item.album ? item.album.title : ""}</a>
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
                <div className="time__music__library">
                  {convertMS(item.duration)}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default SearchItem;
