import React, { useContext, useRef, useState, useEffect } from "react";
import { VideoContext } from "../../../context/GetVideoProvider";

const Video = () => {
  const {
    dataVideo,
    setVideoPlay,
    videoPlay,
    setRepeat,
    repeat,
    listVideo,
    setIdVideo,
    setIndexVideo,
    indexVideo,
    fullWidthScreen,
    setFullWidthScreen,
  } = useContext(VideoContext);
  const Ref = useRef(null);
  const [video, setVideo] = useState("");
  const [timeOutPlay, setTimeOutPlay] = useState(false);
  const [timeStart, setTimeStart] = useState("00:00");
  const [stepTime, setStepTime] = useState("0");
  const [volume, setVolume] = useState("0");
  const [muntedAudio, setMuntedAudio] = useState(true);
  const [prevVolume, setPrevVolume] = useState("50");
  const [enableQuality, setEnableQuality] = useState(false);
  const [videoQuality, setVideoQuality] = useState("");
  const [activeQuality, setActiveQuality] = useState("auto");
  const [currentTime, setCurrentTime] = useState(0);

  function convertMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds; // Return is HH : MM : SS
  }

  useEffect(() => {
    if (Ref) {
      setVideo(Ref.current);
    }
  }, []);

  useEffect(() => {
    let timeOut;
    if (timeOutPlay) {
      timeOut = setTimeout(() => {
        setTimeOutPlay(false);
      }, 300);
    }

    return () => clearTimeout(timeOut);
  }, [timeOutPlay]);

  useEffect(() => {
    if (video) {
      handleEvent.playVideo();
      setVideoPlay(true);
    }
  }, [video]);

  useEffect(() => {
    if (dataVideo) {
      setVideoQuality(dataVideo.streaming.mp4["720p"]);
    }
  }, [dataVideo]);

  useEffect(() => {
    if (!videoPlay) {
      handleEvent.pauseVideo();
    }
  }, [videoPlay]);

  useEffect(() => {
    if (video && activeQuality) {
      handleEvent.playVideo();
      console.log("asd");
    }
  }, [video, activeQuality]);

  useEffect(() => {
    if (video) {
      video.paused ? setVideoPlay(false) : setVideoPlay(true);
    }
  });

  const handleEvent = {
    playVideo: () => {
      if (video) {
        video.currentTime = currentTime;
        video.volume = (1 / 100) * volume;
        video.play();
        setVideoPlay(true);
        video.ontimeupdate = () => {
          setCurrentTime(video.currentTime);
          if (video.duration) {
            setTimeStart(convertMS(Math.round(video.currentTime)));
            const step = Math.floor((video.currentTime / video.duration) * 100);
            setStepTime(step);
          }
        };
        video.onended = () => {
          if (repeat === "repeatAll") {
            let i;
            let length = listVideo.listId.length;
            if (indexVideo >= length - 1) {
              handleEvent.pauseVideo();
            } else {
              i = indexVideo + 1;
              setIndexVideo(i);
              setIdVideo(listVideo.listId[i]);
            }
          } else {
            handleEvent.playVideo();
          }
        };
      }
    },
    pauseVideo: () => {
      if (video) {
        video.pause();
        setVideoPlay(false);
      }
    },
    changeTimeVideo: (e) => {
      setStepTime(e.target.value);
      const step = Math.floor((video.duration / 100) * e.target.value);
      video.currentTime = Math.round(step);
    },
    changeVolume: (e) => {
      video.volume = (1 / 100) * e.target.value;
      setVolume(e.target.value);
      if (e.target.value === "0") {
        setMuntedAudio(true);
      } else {
        setMuntedAudio(false);
      }
    },
    MutedAudio: () => {
      setPrevVolume(volume !== "0" ? volume : "50");
      video.volume = (1 / 100) * 0;
      setVolume("0");
      setMuntedAudio(true);
    },
    UnMutedAudio: () => {
      video.volume = (1 / 100) * prevVolume;
      setVolume(prevVolume);
      setMuntedAudio(false);
    },
    PrevVideo: () => {
      let i;
      let length = listVideo.listId.length;
      if (indexVideo < 1) {
        i = length - 1;
      } else {
        i = indexVideo - 1;
      }
      setIndexVideo(i);
      setIdVideo(listVideo.listId[i]);
    },
    NextVideo: () => {
      let i;
      let length = listVideo.listId.length;
      if (indexVideo >= length - 1) {
        i = 0;
      } else {
        i = indexVideo + 1;
      }
      setIndexVideo(i);
      setIdVideo(listVideo.listId[i]);
    },
  };

  return (
    <>
      <div
        className="playmv__video"
        style={{ height: `${fullWidthScreen ? "514px" : ""}` }}
      >
        <video ref={Ref} src={videoQuality}></video>
      </div>
      <div
        className="playmv__btn__video"
        onClick={() => {
          setTimeOutPlay(true);
          videoPlay ? handleEvent.pauseVideo() : handleEvent.playVideo();
        }}
      >
        <div
          className={`playmv__btn__center ${
            timeOutPlay ? "active__btn__center" : ""
          } `}
        >
          <div className="btn__center__play">
            {videoPlay ? (
              <i className="fa-solid fa-play"></i>
            ) : (
              <i className="fa-solid fa-pause"></i>
            )}
          </div>
        </div>
      </div>
      <div className="playmv__btn__video2">
        <div className="media__duration__bar playmv__btn__duration">
          <input
            type="range"
            min="0"
            max="100"
            value={stepTime}
            onChange={(e) => handleEvent.changeTimeVideo(e)}
          />
          <div className="current__time">
            <div
              className="step__time"
              style={{
                width: `${stepTime + "%"}`,
              }}
            ></div>
          </div>
        </div>
        <div className="playmv__btn__bottom">
          <div className="btn__option__bottom">
            <div
              className="item__btn__bottom"
              onClick={() => handleEvent.PrevVideo()}
            >
              <i className="fa-solid fa-backward-step"></i>
            </div>
            <div
              className="item__btn__bottom item__btn__play"
              onClick={() =>
                videoPlay ? handleEvent.pauseVideo() : handleEvent.playVideo()
              }
            >
              {videoPlay ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className="fa-solid fa-play"></i>
              )}
            </div>
            <div
              className="item__btn__bottom"
              onClick={() => handleEvent.NextVideo()}
            >
              <i className="fa-solid fa-forward-step"></i>
            </div>
            <div className="item__btn__bottom">
              <div className="media__volume">
                <div
                  className="icont__volume"
                  onClick={() =>
                    muntedAudio
                      ? handleEvent.UnMutedAudio()
                      : handleEvent.MutedAudio()
                  }
                >
                  {muntedAudio ? (
                    <i className="fa-solid fa-volume-xmark"></i>
                  ) : (
                    <i className="fa fa-volume-up"></i>
                  )}
                </div>
                <div className="volume">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => handleEvent.changeVolume(e)}
                  />
                  <div className="current__volume">
                    <div
                      className="step__volume"
                      style={{ width: `${volume}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item__btn__bottom playmv__time__item">
              {timeStart}
              <nav>|</nav>
              {convertMS(dataVideo.duration)}
            </div>
          </div>
          <div className="btn__option__bottom">
            <div
              className={`item__btn__bottom ${
                repeat === "repeat" ? "active__repeat" : ""
              }`}
              onClick={() =>
                repeat === "repeat"
                  ? setRepeat("repeatAll")
                  : setRepeat("repeat")
              }
            >
              <i className="fa-solid fa-retweet"></i>
            </div>
            <div
              className="item__btn__bottom"
              tabIndex="0"
              onBlur={() => setEnableQuality(false)}
            >
              <i
                className="fa-solid fa-gear"
                onClick={() => setEnableQuality(!enableQuality)}
              ></i>
              <div
                className="option__quality__video"
                style={{ display: `${enableQuality ? "block" : "none"}` }}
              >
                <div className="option__quality__title">Chất Lượng</div>
                <div className="list__quality__option">
                  <div className="item__quality__video vip__quality__video">
                    1080(VIP)
                  </div>
                  <div
                    className="item__quality__video"
                    onClick={() => {
                      setVideoQuality(dataVideo.streaming.mp4["720p"]);
                      setActiveQuality("720");
                      handleEvent.pauseVideo();
                    }}
                  >
                    {activeQuality === "720" && (
                      <div className="check__quality__video">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    )}
                    720
                  </div>
                  <div
                    className="item__quality__video"
                    onClick={() => {
                      setVideoQuality(dataVideo.streaming.mp4["480p"]);
                      setActiveQuality("480");
                      handleEvent.pauseVideo();
                    }}
                  >
                    {activeQuality === "480" && (
                      <div className="check__quality__video">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    )}
                    480
                  </div>
                  <div
                    className="item__quality__video"
                    onClick={() => {
                      setVideoQuality(dataVideo.streaming.mp4["360p"]);
                      setActiveQuality("360");
                      handleEvent.pauseVideo();
                    }}
                  >
                    {activeQuality === "360" && (
                      <div className="check__quality__video">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    )}
                    360
                  </div>
                  <div
                    className="item__quality__video"
                    onClick={() => {
                      setVideoQuality(dataVideo.streaming.mp4["720p"]);
                      setActiveQuality("auto");
                    }}
                  >
                    {activeQuality === "auto" && (
                      <div className="check__quality__video">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    )}
                    Auto
                  </div>
                </div>
              </div>
            </div>
            <div className="item__btn__bottom">
              <div
                className="btn__fullscren__width"
                onClick={() => setFullWidthScreen(!fullWidthScreen)}
              ></div>
            </div>
            <div
              className="item__btn__bottom"
              onClick={() => video && video.requestFullscreen()}
            >
              <i className="fa-solid fa-expand"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
