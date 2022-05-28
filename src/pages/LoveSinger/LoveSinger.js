import React, { useContext } from "react";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import { GetSongContext } from "../../context/GetSongProvider";
import { NavLink, useNavigate } from "react-router-dom";

const LoveSinger = ({ lists }) => {
  const { idPlaylist, setIdPlaylist, setIndexListIdSong } =
    useContext(PlaylistContext);
  const { btnPlay, setBtnPlay } = useContext(GetSongContext);
  return (
    <>
      {lists.items.map((item, index) => {
        if (index < 3) {
          return (
            <div key={index} className="item__favorite__artist">
              <div
                className={` ${
                  btnPlay && idPlaylist === item.encodeId
                    ? "active__playlist__home"
                    : ""
                }`}
              >
                <img src={item.thumbnail} alt="" />
                <span className="opacity__img__channel"></span>
                <div className="option__playlist__selection">
                  <div className="option__selection item__play__selection favorite__artist__option">
                    {idPlaylist === item.encodeId ? (
                      <>
                        {btnPlay ? (
                          <span
                            className="gif__play"
                            onClick={() => setBtnPlay(false)}
                          >
                            <img
                              src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                              alt=""
                            />
                          </span>
                        ) : (
                          <a>
                            <i
                              className="fa-solid fa-play"
                              onClick={() => setBtnPlay(true)}
                            ></i>
                          </a>
                        )}
                      </>
                    ) : (
                      <NavLink to={item.link}>
                        <i
                          className="fa-solid fa-play"
                          onClick={() => {
                            setIdPlaylist(item.encodeId);
                            setIndexListIdSong(0);
                          }}
                        ></i>
                      </NavLink>
                    )}
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
