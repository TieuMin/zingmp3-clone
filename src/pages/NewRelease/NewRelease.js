import React, { useEffect, useRef, useContext } from "react";
import NameSinger from "../NameSinger/NameSinger";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import { GetSongContext } from "../../context/GetSongProvider";

const NewRelease = ({ lists }) => {
  const { setIdPlaylist, setDataPlaylist } = useContext(PlaylistContext);
  const {
    setIdSong,
    btnPlay,
    setBtnPlay,
    idSong,
    loaderPlay,
    playSong,
    setclose,
  } = useContext(GetSongContext);
  const newRelease = useRef();

  useEffect(() => {
    let nextAnimationRelease;
    let timeout1;
    let timeout2;
    let timeout3;
    let timeout4;

    if (newRelease.current !== undefined) {
      const AnimationRelease = () => {
        timeout1 = setTimeout(() => {
          newRelease.current.classList.add("animation__translate");
          newRelease.current.style.transform = "translate3d(-1036px, 0px, 0px)";
        }, 5000);

        timeout2 = setTimeout(() => {
          newRelease.current.style.transform = "translate3d(-2080px, 0px, 0px)";
        }, 10000);

        timeout3 = setTimeout(() => {
          newRelease.current.style.transform = "translate3d(-3121px, 0px, 0px)";
          const timeout4 = setTimeout(() => {
            newRelease.current.classList.remove("animation__translate");
            newRelease.current.style.transform = "translate3d( 0px, 0px, 0px)";
          }, 1000);
        }, 15000);
      };

      AnimationRelease();
      nextAnimationRelease = setInterval(AnimationRelease, 20000);
    }

    return () => {
      clearInterval(nextAnimationRelease);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  const dateTime = new Date();
  const date =
    dateTime.getDate() +
    "." +
    (dateTime.getMonth() + 1) +
    "." +
    dateTime.getFullYear();

  return (
    <div className="animation__new__release" ref={newRelease}>
      {lists?.items.map((item, index) => {
        return (
          <div key={index} className="item__new__release">
            <div className="item__release__child">
              <div className="media__release">
                <div className="media__left__release">
                  <div className="img__media">
                    <img
                      src={item.album ? item.album.thumbnail : item.thumbnail}
                      alt=""
                    />
                    <div className="option__playlist__selection">
                      <div className="option__selection item__play__selection">
                        {idSong === item.encodeId ? (
                          <>
                            {btnPlay && playSong ? (
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
                              <i
                                className="fa-solid fa-play"
                                onClick={() => setBtnPlay(true)}
                              ></i>
                            )}
                          </>
                        ) : (
                          <i
                            className="fa-solid fa-play"
                            onClick={() => {
                              setIdSong(item.encodeId);
                              item.album
                                ? setIdPlaylist(item.album.encodeId)
                                : setDataPlaylist("");
                              setBtnPlay(true);
                            }}
                          ></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media__reight__release">
                  <div className="subtitle__release">
                    <a href="#" className="title__one__line">
                      {item.title}
                    </a>
                    <div className="name__singer__all">
                      {item.album ? (
                        item.album.artists.map((artist, index) => {
                          return <NameSinger key={index} artist={artist} />;
                        })
                      ) : (
                        <>
                          {item.artists ? (
                            item.artists.map((artist, index) => {
                              return <NameSinger key={index} artist={artist} />;
                            })
                          ) : (
                            <a href="#">{item.artistsNames}</a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="rank__release">
                    <span className="number__rank">#{index + 1}</span>
                    <span className="date__rank">{date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="item__new__release">
        <a className="view__all__release" href="#">
          Xem tất cả
        </a>
      </div>

      {lists.items.map((item, index) => {
        if (index < 3) {
          return (
            <div key={index} className="item__new__release">
              <div className="item__release__child">
                <div className="media__release">
                  <div className="media__left__release">
                    <div className="img__media">
                      <img src={item.album.thumbnail} alt="" />
                      <div className="option__playlist__selection">
                        <div className="option__selection item__play__selection">
                          <i className="fa-solid fa-play"></i>
                          {/* <span className="gif__play">
                            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                alt=""/>
                        </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media__reight__release">
                    <div className="subtitle__release">
                      <a href="#" className="title__one__line">
                        {item.title}
                      </a>
                      <div className="name__singer__all">
                        {item.album.artists.map((artist, index) => {
                          return <NameSinger key={index} artist={artist} />;
                        })}
                      </div>
                    </div>
                    <div className="rank__release">
                      <span className="number__rank">#{index + 1}</span>
                      <span className="date__rank">{date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default NewRelease;
