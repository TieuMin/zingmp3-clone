import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NameSinger from "../NameSinger/NameSinger";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import { GetSongContext } from "../../context/GetSongProvider";

const ItemPlaylist = ({ lists, p = true }) => {
  const { idPlaylist, setIdPlaylist, setIndexListIdSong } =
    useContext(PlaylistContext);
  const { btnPlay, setBtnPlay } = useContext(GetSongContext);

  return (
    <>
      {lists.items.map((item, index) => {
        if (index < 5) {
          return (
            <div key={index} className="item__playlist__selection">
              <div
                className={`img__playlist__selection ${
                  btnPlay && idPlaylist === item.encodeId
                    ? "active__playlist__home"
                    : ""
                }`}
              >
                <img src={item.thumbnail} alt="" />

                <div className="option__playlist__selection">
                  <div className="option__selection library__add__selection">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="option__selection item__play__selection">
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
                  <div className="option__selection item__option__selection">
                    <div className="option__icon__selection">● ● ●</div>
                  </div>
                </div>
              </div>
              <div className="title__playlist__selection">
                <a href="#" className="title__one__line">
                  {item.title}
                </a>
                <div className="name__singer__all">
                  {p ? (
                    item.artists ? (
                      item.artists.map((artist, index) => {
                        return <NameSinger key={index} artist={artist} />;
                      })
                    ) : (
                      <a href="#">{item.artistsNames}</a>
                    )
                  ) : (
                    <p className="subtitle">{item.sortDescription}</p>
                  )}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default ItemPlaylist;
