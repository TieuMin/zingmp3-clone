import React, { useContext, useRef, useState, useEffect } from "react";
import { VideoContext } from "../../context/GetVideoProvider";
import { GetSongContext } from "../../context/GetSongProvider";

const TagVideo = () => {
  const {
    dataVideo,
    repeat,
    listVideo,
    setIdVideo,
    setIndexVideo,
    indexVideo,
    setTimeStart,
    stepTime,
    setStepTime,
    currentTime,
    setCurrentTime,
    miniatureVideo,
    setMiniatureVideo,
    setActivePlayVideo,
  } = useContext(VideoContext);
  const { setBtnPlay, setclose } = useContext(GetSongContext);
  const Ref = useRef(null);
  const [video, setVideo] = useState("");
  const volumeMV = JSON.parse(localStorage.getItem("volumeMV"));
  const [volume, setVolume] = useState(volumeMV ? volumeMV : 50);
  const [videoQuality, setVideoQuality] = useState("");
  const [videoPlay, setVideoPlay] = useState(false);

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
    if (dataVideo) {
      if (dataVideo.streamingStatus === 1 && dataVideo.streaming.mp4) {
        setVideoQuality(dataVideo.streaming.mp4["720p"]);
      } else {
        setclose(true);
      }
    }
  }, [dataVideo]);

  useEffect(() => {
    if (video) {
      video.currentTime = currentTime;
      if (miniatureVideo) {
        setVideoPlay(true);
        setBtnPlay(false);
        handleEvent.playVideo();
      } else {
        handleEvent.pauseVideo();
      }
    }
  }, [video, miniatureVideo]);

  useEffect(() => {
    if (video) {
      video.paused ? setVideoPlay(false) : setVideoPlay(true);
    }
  });

  useEffect(() => {
    if (!videoPlay) {
      handleEvent.pauseVideo();
    }
  }, [videoPlay]);

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
      <video
        className="tag__video__mini"
        ref={Ref}
        src={videoQuality ? videoQuality : ""}
      ></video>

      <div className="full__option__mini">
        <div className="option1__mini__video">
          <div
            className="unmini__video ldt__before__-20 ldt__after__10"
            data-title="Phóng to"
          >
            <i
              className="fa-solid fa-up-right-and-down-left-from-center"
              onClick={() => setMiniatureVideo(false)}
            ></i>
          </div>
          <div
            className="close__video ldt__before__-20 ldt__after__10"
            data-title="Đóng"
          >
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                setActivePlayVideo(false);
                setMiniatureVideo(false);
              }}
            ></i>
          </div>
        </div>
        <div className="option2__mini__video">
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
          </div>
        </div>

        <div className="option3__mini__video">
          <div className="media__duration__bar mini__curentime">
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
        </div>
      </div>
    </>
  );
};

export default TagVideo;
