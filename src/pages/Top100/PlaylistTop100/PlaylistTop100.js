import React, { useContext } from "react";
import NameSinger from "../../NameSinger/NameSinger";
import { NavLink } from "react-router-dom";
import { PlaylistContext } from "../../../context/GetPlaylistProvider";
import { GetSongContext } from "../../../context/GetSongProvider";

const PlaylistTop100 = ({ lists, p = true }) => {
  const { setIdPlaylist, idPlaylist } = useContext(PlaylistContext);
  const { btnPlay, setBtnPlay } = useContext(GetSongContext);
  return (
    <>
      {lists.items.map((item, index) => {
        return (
          <div key={index} className="top__100__item mt-20">
            <div
              className={`cate ${
                btnPlay && idPlaylist === item.encodeId ? "active__100" : ""
              }`}
              onClick={() => setIdPlaylist(item.encodeId)}
            >
              <figure className="figure-cate">
                <img src={item.thumbnail} alt="" />
                <div className="icon__top__song">
                  <div className="media__narrow">
                    <div>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                  {idPlaylist === item.encodeId ? (
                    <>
                      {btnPlay ? (
                        <span
                          className="controller__itemmedia gif__play gif__100"
                          onClick={() => setBtnPlay(false)}
                        >
                          <img
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                            alt=""
                          />
                        </span>
                      ) : (
                        <span className="controller__itemmedia play__100">
                          <a onClick={() => setBtnPlay(true)}>
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="controller__itemmedia play__100">
                      <NavLink
                        to={item.link}
                        onClick={() => setIdPlaylist(item.encodeId)}
                      >
                        <i className="fa-solid fa-play"></i>
                      </NavLink>
                    </span>
                  )}
                  <div className="media__narrow">
                    <div>
                      <div className="np__menu__option">● ● ●</div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="cate-song-singer title__playlist__selection">
              <NavLink
                to={item.link}
                className="cate-song"
                style={{ display: "block" }}
                onClick={() => setIdPlaylist(item.encodeId)}
              >
                {item.title}
              </NavLink>
              <div className="name__singer__all">
                {p ? (
                  <>
                    {item.artists ? (
                      item.artists.map((artist, index) => {
                        return <NameSinger key={index} artist={artist} />;
                      })
                    ) : (
                      <a href="#">{item.artistsNames}</a>
                    )}
                  </>
                ) : (
                  <p className="subtitle">{item.sortDescription}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlaylistTop100;
