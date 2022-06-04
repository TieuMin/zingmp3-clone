import React, { useEffect, useState, useContext } from "react";
import Karaoke from "./ItemDetail/Karaoke";
import Lyric from "./ItemDetail/Lyric";
import ListSongDetail from "./ItemDetail/ListSongDetail";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import { LyricContext } from "../../context/GetLyricProvider";
import { GetSongContext } from "../../context/GetSongProvider";
import axios from "axios";
import "./detailSong.css";

const DetailSong = () => {
  const { infoSong, loaderSong, idSong } = useContext(GetSongContext);
  const { lyric, setIdLyric, setDataLyric } = useContext(LyricContext);
  const [karaoke, setKaraoke] = useState(false);
  const [lyricBtn, setLyricBtn] = useState(true);
  const [listSongDetail, setListSongDetail] = useState(false);
  const { dataPlaylist, detailSong, setDetailSong } =
    useContext(PlaylistContext);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (lyric && lyric.file) {
      async function GetLyricApi(link) {
        return await axios
          .get(`${link}`)
          .then((response) => {
            setDataLyric(response.data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      }

      GetLyricApi(lyric.file);
    } else {
      setDataLyric("");
    }
  }, [lyric, loaderSong]);

  useEffect(() => {
    if (idSong) {
      setIdLyric(idSong);
    }
  }, [infoSong, idSong]);

  return (
    <>
      <div className="detail__main" style={{ top: `${detailSong ? "0" : ""}` }}>
        <div className="detail__song">
          <div className="detail__song__top">
            <div className="detail__top__left">
              <div className="detail__logo__top">
                <img src="https://zjs.zmdcdn.me/zmp3-desktop/dev/119956/static/media/icon_zing_mp3_60.f6b51045.svg" />
              </div>
              {dataPlaylist && dataPlaylist.description && (
                <div className="detail__title__top">
                  <div>Từ playlist</div>
                  <div className="detail__title__top2">
                    {dataPlaylist.description}
                  </div>
                </div>
              )}
            </div>
            <div className="detail__top__center">
              <div className="detail__form__menu">
                <div className="detail__top__menu">
                  <div
                    className={`item__detail__menu ${
                      listSongDetail && "active__detail__menu"
                    }`}
                    onClick={() => {
                      {
                        setLyricBtn(false);
                        setKaraoke(false);
                        setListSongDetail(true);
                      }
                    }}
                  >
                    Danh sách phát
                  </div>
                  <div
                    className={`item__detail__menu ${
                      karaoke && "active__detail__menu"
                    }`}
                    onClick={() => {
                      {
                        setListSongDetail(false);
                        setLyricBtn(false);
                        setKaraoke(true);
                      }
                    }}
                  >
                    Karaoke
                  </div>
                  <div
                    className={`item__detail__menu ${
                      lyricBtn && "active__detail__menu"
                    }`}
                    onClick={() => {
                      {
                        setListSongDetail(false);
                        setKaraoke(false);
                        setLyricBtn(true);
                      }
                    }}
                  >
                    Lời bài hát
                  </div>
                </div>
              </div>
            </div>
            <div className="detail__top__right">
              <div
                className="item__detail__top__right bdt__after tdt__after__47 tdt__before__55"
                data-title={fullScreen ? "Tắt toàn màn hình" : "Toàn màn hình"}
                onClick={() => {
                  if (!fullScreen) {
                    setFullScreen(true);
                    document.body.requestFullscreen();
                  } else {
                    document.exitFullscreen();
                    setFullScreen(false);
                  }
                }}
              >
                <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
              </div>
              <div
                className="item__detail__top__right bdt__after tdt__after__47 tdt__before__55"
                data-title="Đóng"
                onClick={() => {
                  setDetailSong(false);
                  if (fullScreen) {
                    document.exitFullscreen();
                    setFullScreen(false);
                  }
                }}
              >
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>
          {karaoke && <Karaoke />}
          {lyricBtn && <Lyric />}
          {listSongDetail && <ListSongDetail />}
        </div>
      </div>
    </>
  );
};

export default DetailSong;
