import React, { createContext, useState, useEffect } from "react";
import getVideo from "../apis/VideoApi";

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [idVideo, setIdVideo] = useState("");
  const [dataVideo, setDataVideo] = useState("");
  const [loadVideo, setLoadVideo] = useState(false);
  const [activePlayVideo, setActivePlayVideo] = useState(false);
  const [repeat, setRepeat] = useState("repeatAll");
  const [listVideo, setListVideo] = useState("");
  const [loadList, setLoadList] = useState(false);
  const [indexVideo, setIndexVideo] = useState(0);
  const [fullWidthScreen, setFullWidthScreen] = useState(false);
  const [miniatureVideo, setMiniatureVideo] = useState(false);
  const [timeStart, setTimeStart] = useState("00:00");
  const [stepTime, setStepTime] = useState("0");
  const [currentTime, setCurrentTime] = useState(0);

  const video = async (id) => {
    await getVideo(id).then((item) => {
      setDataVideo(item.data.data);
      setCurrentTime(0);
    });
    setLoadVideo(true);
  };

  useEffect(() => {
    if (idVideo !== "") {
      setLoadVideo(false);
      video(idVideo);
    }
  }, [idVideo]);

  useEffect(() => {
    if (loadList && dataVideo !== "") {
      setLoadList(true);
      const id = dataVideo.recommends.map((item) => item.encodeId);
      setListVideo({
        recommends: [
          {
            encodeId: dataVideo.encodeId,
            thumbnail: dataVideo.thumbnail,
            title: dataVideo.title,
            artists: dataVideo.artists,
            streamingStatus: dataVideo.streamingStatus,
          },
          ...dataVideo.recommends,
        ],
        listId: [dataVideo.encodeId, ...id],
      });
      setIndexVideo(0);
      setLoadList(false);
    }
  }, [loadList, dataVideo]);

  const datas = {
    dataVideo,
    setIdVideo,
    idVideo,
    loadVideo,
    setActivePlayVideo,
    activePlayVideo,
    setLoadVideo,
    setDataVideo,
    setRepeat,
    repeat,
    setLoadList,
    listVideo,
    setIndexVideo,
    indexVideo,
    loadList,
    fullWidthScreen,
    setFullWidthScreen,
    miniatureVideo,
    setMiniatureVideo,
    timeStart,
    setTimeStart,
    stepTime,
    setStepTime,
    currentTime,
    setCurrentTime,
  };
  return (
    <VideoContext.Provider value={datas}>{children}</VideoContext.Provider>
  );
};

export default VideoProvider;
