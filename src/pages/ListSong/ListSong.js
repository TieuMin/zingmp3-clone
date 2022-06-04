import React, { useContext, useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./listSong.css";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import { GetSongContext } from "../../context/GetSongProvider";
import { VideoContext } from "../../context/GetVideoProvider";
import LoadList from "./LoadList";
import NameSinger from "../NameSinger/NameSinger";
import MusicItem from "./MusicItem/MusicItem";
import { useParams, useNavigate } from "react-router-dom";

const ListSong = () => {
  const { loadDataList, dataPlaylist, setIdPlaylist } =
    useContext(PlaylistContext);
  const { btnPlay, setBtnPlay, playSong, idSong } = useContext(GetSongContext);
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const listId = JSON.parse(localStorage.getItem("listIdSong"));
  const params = useParams();
  const { miniatureVideo } = useContext(VideoContext);
  const RefScroll = useRef();
  const navigate = useNavigate();

  const convertLike = (likes) => {
    const like = likes.toString();
    if (like < 1000) return like;
    if (like >= 1000 && like < 10000) return like.slice(0, 1) + "k";
    if (like >= 10000 && like < 100000) return like.slice(0, 2) + "k";
    if (like >= 100000 && like < 1000000) return like.slice(0, 3) + "k";
    if (like >= 1000000 && like < 10000000) return like.slice(0, 1) + "tr";
    if (like >= 10000000 && like < 100000000) return like.slice(0, 2) + "tr";
    if (like >= 100000000 && like < 1000000000) return like.slice(0, 3) + "tr";
    if (like >= 1000000000 && like < 10000000000)
      return like.slice(0, 4) + "tr";
  };

  useEffect(() => {
    if (loadDataList) {
      navigate(dataPlaylist.link);
    }
  }, [dataPlaylist]);

  useEffect(() => {
    if (dataPlaylist === "") {
      setIdPlaylist(params.id.split(".")[0]);
    }
  }, [dataPlaylist]);

  useEffect(() => {
    if (RefScroll && RefScroll.current && dataPlaylist && idSong) {
      let heightScroll;
      dataPlaylist.song.items.forEach((item, index) => {
        if (item.encodeId === idSong) {
          heightScroll = 60 * index - 49;
          RefScroll.current.scrollTop = heightScroll;
        }
      });
    }
  }, [idSong]);

  return (
    <MainLayout>
      {loadDataList ? (
        <LoadList />
      ) : (
        <div
          ref={RefScroll}
          className="content"
          style={{
            height: `${
              prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
            }`,
          }}
        >
          <div className="List__song__main">
            <div className="List__song__right">
              <div className="List__song__img">
                <img src={dataPlaylist.thumbnail} alt="" />
                <div
                  className="option__playlist__selection"
                  onClick={() =>
                    btnPlay ? setBtnPlay(false) : setBtnPlay(true)
                  }
                >
                  <div className="option__selection item__play__selection">
                    {btnPlay && playSong ? (
                      <span className="gif__play">
                        <img
                          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                          alt=""
                        />
                      </span>
                    ) : (
                      <i className="fa-solid fa-play"></i>
                    )}
                  </div>
                </div>
              </div>
              <div className="List__song__description">
                <div className="description__name">{dataPlaylist.title}</div>
                <div className="description__date">Cập nhật: 5/11/2020</div>
                <div className="description__singer">
                  {dataPlaylist.artists
                    ? dataPlaylist.artists.map((artist, index) => {
                        return <NameSinger key={index} artist={artist} />;
                      })
                    : dataPlaylist.artistsNames}
                </div>
                {dataPlaylist && dataPlaylist.like && (
                  <div className="description__count__like">
                    {convertLike(dataPlaylist.like)} người yêu thích
                  </div>
                )}
                {btnPlay && playSong ? (
                  <div
                    className="description__play__song"
                    onClick={() => setBtnPlay(false)}
                  >
                    <span>
                      <i className="fa-solid fa-pause"></i> Tạm dừng
                    </span>
                  </div>
                ) : (
                  <div
                    className="description__play__song"
                    onClick={() => setBtnPlay(true)}
                  >
                    <span>
                      <i className="fa-solid fa-play"></i> tiếp tục phát
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="List__song__left">
              {dataPlaylist.sortDescription ? (
                <div className="List__song__subTitle">
                  lời tựa <span>{dataPlaylist.sortDescription}</span>
                </div>
              ) : (
                <></>
              )}
              <ul className="item__music__list list__song__item">
                <li className="title__submenu">
                  <div className="title__submenu__left">
                    <div className="submenu__left__one active__submenu__labrary">
                      <div className="item__submenu__left"></div>
                      <div className="item__submenu__right">bài hát</div>
                    </div>
                    <div className="submenu__left__two">
                      <div>
                        <div className="item__submenu__left">
                          <input
                            type="checkbox"
                            className="select__all__music"
                          />
                        </div>
                        <div className="item__submenu__content">
                          <i className="fa-solid fa-play"></i> thêm vào danh
                          sách phát
                        </div>
                        <div className="item__submenu__right">
                          <div className="option__submenu__right">● ● ●</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="title__sumenu__content">album</div>
                  <div className="title__sumenu__right">thời gian</div>
                </li>
                <MusicItem datas={dataPlaylist.song} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ListSong;
