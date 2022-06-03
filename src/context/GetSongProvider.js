import React, { createContext, useEffect, useState } from "react";
import getSong from "../apis/SongApi";
import getInfoSong from "../apis/InfoSong";

export const GetSongContext = createContext();

const GetSongProvider = ({ children }) => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const [songData, setSongData] = useState(
    prevSongDefaul ? prevSongDefaul.songData : ""
  );
  const [infoSong, setInfoSong] = useState(
    prevSongDefaul ? prevSongDefaul : ""
  );
  const [idSong, setIdSong] = useState("");
  const [loaderSong, setLoaderSong] = useState(false);
  const [loaderPlay, setLoaderPlay] = useState(false);
  const [btnPlay, setBtnPlay] = useState(false);
  const [playSong, setPlaySong] = useState(false);
  const [enableFooter, setEnableFooter] = useState(false);
  const [close, setclose] = useState(false);
  const [popupNotification, setPopupNotification] = useState(true);
  const [cloneSong, setCloneSong] = useState();
  const [currentTimeLyric, setCurrentTimeLyric] = useState(0);

  const getSongData = async () => {
    setCloneSong(songData);
    await getSong(idSong).then((item) => {
      if (!item.data.err && item.data.data[128]) {
        getInfoData();
        setSongData(item.data.data[128]);
      } else {
        setclose(true);
        setSongData(cloneSong);
        setIdSong(prevSongDefaul ? prevSongDefaul.id : "");
      }
    });
  };

  const getInfoData = async () => {
    await getInfoSong(idSong).then((item) => {
      setInfoSong(item.data.data);
      localStorage.setItem(
        "prevSongDefaul",
        JSON.stringify({
          songData,
          title: item.data.data.title,
          artists: item.data.data.artists,
          thumbnail: item.data.data.thumbnail,
          thumbnailM: item.data.data.thumbnailM,
          duration: item.data.data.duration,
          like: item.data.data.like,
          listen: item.data.data.listen,
          artistsNames: item.data.data.artistsNames,
          id: idSong,
        })
      );
      setLoaderSong(true);
      setLoaderPlay(false);
      setEnableFooter(true);
    });
  };

  useEffect(() => {
    if (idSong) {
      setLoaderSong(false);
      setLoaderPlay(true);
      getSongData();
    }
  }, [idSong]);

  const datas = {
    songData,
    infoSong,
    setIdSong,
    loaderSong,
    loaderPlay,
    btnPlay,
    setBtnPlay,
    idSong,
    enableFooter,
    playSong,
    setPlaySong,
    close,
    setclose,
    popupNotification,
    setPopupNotification,
    currentTimeLyric,
    setCurrentTimeLyric,
  };
  return (
    <GetSongContext.Provider value={datas}>{children}</GetSongContext.Provider>
  );
};

export default GetSongProvider;
