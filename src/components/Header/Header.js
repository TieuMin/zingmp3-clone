import React, { useState, useEffect, useRef, useContext } from "react";
import { SearchContext } from "../../context/SearchProvider";
import logo from "../../assets/images/avatar.jpg";
import NameSinger from "../../pages/NameSinger/NameSinger";
import { GetSongContext } from "../../context/GetSongProvider";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import loading from "../../assets/images/loading.gif";
import { useNavigate } from "react-router-dom";

let useClickOutSide = (handler) => {
  let domNote = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNote.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNote;
};

function Header() {
  const { key, setKey, dataSearch, setEnterSearch } = useContext(SearchContext);
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
  const playId = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const [isClickMenu, setIsClickMenu] = useState(false);
  const [isPlayingFullscreen, setIsPlayingFullscreen] = useState(false);
  const [isEffect, setIsEffect] = useState(false);
  const [isMusicQuality, setIsMusicQuality] = useState(true);
  const [enableSearch, setEnableSearch] = useState(false);
  const [value, setValue] = useState("");
  const [idPlay, setIdPlay] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (idSong) {
      setIdPlay(idSong);
    } else {
      setIdPlay(playId ? playId.id : "");
    }
  }, [idSong]);

  let domNote = useClickOutSide(() => {
    setIsClickMenu(false);
  });

  let suggestSearch = useClickOutSide(() => {
    setEnableSearch(false);
  });

  useEffect(() => {
    let timeout;
    if (value !== "") {
      timeout = setTimeout(() => {
        setKey(value);
      }, 200);
    } else {
      setKey("");
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__left">
          <div className="move__arow">
            <a href="#">
              <i className="fa-solid fa-arrow-left"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="search__input" ref={suggestSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={(e) => setEnableSearch(true)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  navigate(`/tim-kiem/tat-ca/${value.replace(" ", "%20")}`);
                  setEnterSearch(true);
                  setEnableSearch(false);
                }
              }}
            />
            {value && (
              <div className="delete__text__search">
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setValue("")}
                ></i>
              </div>
            )}
            {enableSearch && (
              <div className="suggest__search">
                <span>Gợi ý kết quả</span>
                <div className="sidebar__scrollbar list__item__all__ft">
                  {dataSearch && key
                    ? dataSearch.songs &&
                      dataSearch.songs.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`list__item__ft item__noactive ${
                              idPlay === item.encodeId && "active__search__item"
                            }`}
                          >
                            <div className="item__list__ft">
                              <a className="img__list__ft">
                                <img src={item.thumbnail} alt="thumbnail" />
                                <div className="option__playlist__selection">
                                  {item.artists &&
                                  item.streamingStatus === 1 ? (
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
                                                  onClick={() =>
                                                    setBtnPlay(false)
                                                  }
                                                >
                                                  <img
                                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                                    alt=""
                                                  />
                                                </span>
                                              ) : (
                                                <i
                                                  className="fa-solid fa-play"
                                                  onClick={() =>
                                                    setBtnPlay(true)
                                                  }
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
                                            if (item.album) {
                                              setIdPlaylist(
                                                item.album.encodeId
                                              );
                                            } else setDataPlaylist("");
                                          }}
                                        >
                                          {btnPlay &&
                                          playSong &&
                                          idPlay === item.encodeId ? (
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
                              </a>
                              <div className="subtitle__list__ft">
                                <div className="item__title__album item__title__search">
                                  {item.title}{" "}
                                  {item.artists &&
                                  item.streamingStatus === 1 ? (
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
                                      return (
                                        <NameSinger
                                          key={index}
                                          artist={artist}
                                        />
                                      );
                                    })
                                  ) : (
                                    <a href="#">{item.artistsNames}</a>
                                  )}
                                </nav>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="header__right">
          <div
            className="item__header bdt__after tdt__after__47 tdt__before__55"
            data-title="Chủ đề"
          >
            <i className="fa-solid fa-shirt"></i>
          </div>
          <div
            className="item__header bdt__after tdt__after__47 tdt__before__55"
            data-title="Nâng cấp VIP"
          >
            <i className="fa-solid fa-gem"></i>
          </div>
          <div
            className="item__header bdt__after tdt__after__47 tdt__before__55"
            data-title="Tải lên"
          >
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </div>
          <div
            className="item__header item__header__setting  bdt__after tdt__after__47 tdt__before__55"
            data-title="Cài đặt"
            ref={domNote}
          >
            <i
              className="fa-solid fa-gear"
              onClick={() => setIsClickMenu(!isClickMenu)}
            ></i>
            <span></span>
            {isClickMenu && (
              <div className="setting">
                <ul className="setting__one">
                  <li>
                    <i className="fa-solid fa-ban"></i>
                    Danh sách chặn
                  </li>
                  <li>
                    <span className="setting__resolution">HQ</span>
                    Chất lượng âm nhạc
                    <nav>
                      <i className="fa-solid fa-angle-right"></i>
                    </nav>
                    <div className="setting__child">
                      <ul>
                        <li onClick={() => setIsMusicQuality(false)}>
                          SQ ● 128
                          <div className="resolution__sub">
                            <span className="resolution__sub__title">
                              Giảm sử dụng dữ liệu cho các kết nối chậm hơn.
                            </span>
                          </div>
                          {!isMusicQuality && (
                            <span className="ischeck">
                              <i className="fa-solid fa-check"></i>
                            </span>
                          )}
                        </li>
                        <li onClick={() => setIsMusicQuality(true)}>
                          HQ ● 320
                          <div className="resolution__sub">
                            <span className="resolution__sub__title">
                              Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất
                              lượng âm thanh.
                            </span>
                          </div>
                          {isMusicQuality && (
                            <span className="ischeck">
                              <i className="fa-solid fa-check"></i>
                            </span>
                          )}
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="setting__theme">
                    <i className="fa-regular fa-circle-play"></i>
                    Giao diện
                    <nav>
                      <i className="fa-solid fa-angle-right"></i>
                    </nav>
                    <div className="setting__theme__list">
                      <ul>
                        <li
                          onClick={() =>
                            setIsPlayingFullscreen(!isPlayingFullscreen)
                          }
                        >
                          <div className="setting__theme__item">
                            <span>Luôn phát nhạc toàn màn hình</span>
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={isPlayingFullscreen}
                                onChange={() =>
                                  setIsPlayingFullscreen(isPlayingFullscreen)
                                }
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </li>
                        <li onClick={() => setIsEffect(!isEffect)}>
                          <div className="setting__theme__item">
                            <span>Hiệu ứng</span>
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={isEffect}
                                onChange={() => setIsEffect(isEffect)}
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="setting__one setting__two">
                  <li>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    Giới thiệu
                  </li>
                  <li>
                    <i className="fa-solid fa-font-awesome"></i>
                    Góp ý
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    Liên hệ
                  </li>
                  <li>
                    <i className="fa-solid fa-rectangle-ad"></i>
                    Quảng cáo
                  </li>
                  <li>
                    <i className="fa-solid fa-file-lines"></i>
                    Thỏa thuận sử dụng
                  </li>
                  <li>
                    <i className="fa-solid fa-shield-halved"></i>
                    Chính sách bảo mật
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="item__header">
            <img src={logo} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
