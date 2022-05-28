import React, { createContext, useEffect, useState, useContext } from "react";
import getPlaylist from "../apis/PlaylistApi";

export const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const idPrevList = JSON.parse(localStorage.getItem("idPlaylist"));
  const listId = JSON.parse(localStorage.getItem("listIdSong"));
  const indexListId = JSON.parse(localStorage.getItem("indexListIdSong"));
  const [idPlaylist, setIdPlaylist] = useState("");
  const [dataPlaylist, setDataPlaylist] = useState("");
  const [loadDataList, setLoadDataList] = useState(true);
  const [listIdSong, setListIdSong] = useState(listId ? listId.encodeId : "");
  const [indexListIdSong, setIndexListIdSong] = useState(
    indexListId ? indexListId.index : 0
  );

  const playlist = async () => {
    setLoadDataList(true);
    await getPlaylist(idPlaylist).then((playlist) => {
      setDataPlaylist(playlist.data.data);
    });
  };

  useEffect(() => {
    if (idPlaylist !== "") {
      playlist();
    }
  }, [idPlaylist]);

  useEffect(() => {
    if (dataPlaylist) {
      setLoadDataList(false);
      if (dataPlaylist.artists) {
        const itemslist = dataPlaylist.song.items.filter(
          (item) => item.streamingStatus === 1
        );
        setListIdSong(itemslist.map((item) => item.encodeId));
      }
    }
  }, [dataPlaylist]);

  useEffect(() => {
    if (dataPlaylist) {
      if (dataPlaylist.artists) {
        localStorage.setItem(
          "listIdSong",
          JSON.stringify({
            encodeId: listIdSong,
            idPlaylist: idPlaylist,
            link: dataPlaylist.link,
          })
        );
      }
    }
  }, [listIdSong]);

  useEffect(() => {
    localStorage.setItem(
      "indexListIdSong",
      JSON.stringify({ index: indexListIdSong })
    );
  }, [indexListIdSong]);

  const datas = {
    setIdPlaylist,
    dataPlaylist,
    loadDataList,
    idPlaylist,
    playlist,
    listIdSong,
    setIndexListIdSong,
    indexListIdSong,
    setDataPlaylist,
  };
  return (
    <PlaylistContext.Provider value={datas}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
