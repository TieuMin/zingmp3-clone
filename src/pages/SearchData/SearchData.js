import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { SearchContext } from "../../context/SearchProvider";
import { HomeContext } from "../../context/HomeProvider";
import SearchItem from "./SearchItem/SearchItem";
import SearchPlaylist from "./SearchItem/SearchPlaylist";
import SearchMv from "./SearchItem/SearchMv";
import PlayMv from "../Mv/PlayMv/PlayMv";
import LoadSearch from "./LoadSearch";
import { GetSongContext } from "../../context/GetSongProvider";
import { VideoContext } from "../../context/GetVideoProvider";
import loading from "../../assets/images/loading.gif";

import "./searchData.css";

const SearchData = () => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const { animation } = useContext(HomeContext);
  const { setKey, dataEnterSearch, setEnterSearch, loadSearch } =
    useContext(SearchContext);
  const {
    setIdSong,
    btnPlay,
    setBtnPlay,
    idSong,
    loaderPlay,
    playSong,
    setclose,
  } = useContext(GetSongContext);
  const { setIndexListIdSong, setIdPlaylist, setDataPlaylist } =
    useContext(PlaylistContext);
  const { miniatureVideo } = useContext(VideoContext);
  const location = useLocation();
  const params = useParams();
  const playId = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const [idPlay, setIdPlay] = useState("");

  useEffect(() => {
    if (idSong) {
      setIdPlay(idSong);
    } else {
      setIdPlay(playId ? playId.id : "");
    }
  }, [idSong]);

  useEffect(() => {
    setKey(params.keyword.replace("%20", " "));
    setEnterSearch(true);
  }, [params.keyword]);

  return (
    <>
      <MainLayout>
        {loadSearch ? (
          <LoadSearch />
        ) : (
          <div
            className="content"
            style={{
              height: `${
                prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
              }`,
            }}
          >
            <div className="navbar__mv">
              <h3 style={{ textTransform: "capitalize" }}>Kết Quả Tìm Kiếm</h3>
              <ul>
                <li className="active__check">
                  <NavLink className="/tim-kiem/" to="#">
                    TẤT CẢ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#"> BÀI HÁT</NavLink>
                </li>
                <li>
                  <NavLink to="#">PLAYLIST/ALBUM</NavLink>
                </li>
                <li>
                  <NavLink to="#">NGHỆ SĨ/OA</NavLink>
                </li>
                <li>
                  <NavLink to="#">MV</NavLink>
                </li>
              </ul>
            </div>
            {dataEnterSearch ? (
              <>
                {dataEnterSearch.songs && (
                  <>
                    <div className="top__search">
                      <div className="keyword__search">
                        Top Kết Quả "<i>{params.keyword.replace("%20", " ")}</i>
                        "
                      </div>
                      <div className="list__item__ft active__playlist__ft">
                        <div className="item__list__ft">
                          <div className="img__list__ft img__top__search">
                            <img
                              src={dataEnterSearch.songs[0].thumbnail}
                              alt="thumbnail"
                            />
                            <div className="option__playlist__selection">
                              {dataEnterSearch.songs[0].artists &&
                              dataEnterSearch.songs[0].streamingStatus === 1 ? (
                                <>
                                  {idPlay ===
                                  dataEnterSearch.songs[0].encodeId ? (
                                    <div className="option__selection">
                                      {loaderPlay === false ? (
                                        <>
                                          {btnPlay &&
                                          playSong &&
                                          idPlay ===
                                            dataEnterSearch.songs[0]
                                              .encodeId ? (
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
                                        setIdSong(
                                          dataEnterSearch.songs[0].encodeId
                                        );
                                        setIndexListIdSong(0);
                                        dataEnterSearch.songs[0].album
                                          ? setIdPlaylist(
                                              dataEnterSearch.songs[0].album
                                                .encodeId
                                            )
                                          : setDataPlaylist("");
                                      }}
                                    >
                                      {btnPlay &&
                                      playSong &&
                                      idPlay ===
                                        dataEnterSearch.songs[0].encodeId ? (
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
                          <div className="subtitle__list__ft subtitle__top__search">
                            <div className="item__title__album">
                              <div style={{ cursor: "default" }}>
                                {dataEnterSearch.songs[0].title}{" "}
                                {dataEnterSearch.songs[0].artists &&
                                dataEnterSearch.songs[0].streamingStatus ===
                                  1 ? (
                                  ""
                                ) : (
                                  <img
                                    src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.6.25/static/media/vip-label.3dd6ac7e.svg"
                                    style={{ width: "23px" }}
                                  />
                                )}
                              </div>
                            </div>
                            <nav className="subsinger__music__library item__title__album1">
                              Bài hát
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="item__music__list list__song__item">
                      <li
                        className="title__submenu"
                        style={{
                          borderBottom: "unset",
                          marginBottom: "12px",
                        }}
                      >
                        <div className="title__submenu__left">
                          <div className="submenu__left__one active__submenu__labrary">
                            <div className="item__submenu__left"></div>
                            <div className="item__submenu__right name__song__search">
                              bài hát
                            </div>
                          </div>
                        </div>
                        <div className="title__sumenu__content"></div>
                        <div className="title__sumenu__right all__search">
                          Tất Cả <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </li>
                      {dataEnterSearch && (
                        <SearchItem datas={dataEnterSearch.songs} />
                      )}
                    </ul>
                  </>
                )}

                {dataEnterSearch.playlists && (
                  <div
                    className={`gallery ${
                      !dataEnterSearch.songs && "top__search"
                    }`}
                  >
                    <div className="playlist__selection">
                      <div className="header__playlist__selection">
                        <span>Playlist/Album</span>
                        <div className="btn__view__all">
                          TẤT CẢ <i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>
                      <div className="list__playlist__selection">
                        <SearchPlaylist lists={dataEnterSearch.playlists} />
                      </div>
                    </div>

                    {dataEnterSearch.videos && (
                      <div
                        className={`playlist__selection ${
                          !dataEnterSearch.songs &&
                          !dataEnterSearch.playlists &&
                          "top__search"
                        }`}
                      >
                        <div className="header__playlist__selection">
                          <span>MV</span>
                          <div className="btn__view__all">
                            TẤT CẢ <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </div>
                        <div className="list__playlist__selection">
                          <SearchMv datas={dataEnterSearch.videos} />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        )}
      </MainLayout>
      {animation ? "" : <PlayMv />}
    </>
  );
};

export default SearchData;
