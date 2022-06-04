import React, { createContext, useEffect, useState, useContext } from "react";
import getPlaylist from "../apis/PlaylistApi";

export const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const listId = JSON.parse(localStorage.getItem("listIdSong"));
  const indexListId = JSON.parse(localStorage.getItem("indexListIdSong"));
  const [idPlaylist, setIdPlaylist] = useState(
    listId && listId.idPlaylist ? listId.idPlaylist : ""
  );
  const [dataPlaylist, setDataPlaylist] = useState(
    listId && listId.listSong ? listId.listSong : ""
  );
  const [loadDataList, setLoadDataList] = useState(true);
  const [listIdSong, setListIdSong] = useState(listId ? listId.encodeId : "");
  const [indexListIdSong, setIndexListIdSong] = useState(
    indexListId ? indexListId.index : 0
  );
  const [detailSong, setDetailSong] = useState(false);

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
      const itemslist = dataPlaylist.song.items.filter(
        (item) => item.streamingStatus === 1
      );
      setListIdSong(itemslist.map((item) => item.encodeId));
    }
  }, [dataPlaylist]);

  useEffect(() => {
    if (dataPlaylist) {
      localStorage.setItem(
        "listIdSong",
        JSON.stringify({
          encodeId: listIdSong,
          idPlaylist: idPlaylist,
          link: dataPlaylist.link,
          listSong: dataPlaylist,
        })
      );
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
    detailSong,
    setDetailSong,
  };
  return (
    <PlaylistContext.Provider value={datas}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
