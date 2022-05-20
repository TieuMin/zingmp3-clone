import React, { useState, useEffect, useRef, useContext } from "react";
import { GetSongContext } from "../../context/GetSongProvider";
import { PlaylistContext } from "../../context/GetPlaylistProvider";
import loading from "../../assets/images/loading.gif";
import NameSinger from "../../pages/NameSinger/NameSinger";
import { useNavigate } from "react-router-dom";
import ItemListFooter from "./ItemListFooter";

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

const Footer = () => {
  let navigate = useNavigate();
  let [isClickOption, setIsClickOption] = useState(false);
  const {
    songData,
    infoSong,
    loaderSong,
    loaderPlay,
    btnPlay,
    setBtnPlay,
    idSong,
    setIdSong,
    setPlaySong,
  } = useContext(GetSongContext);
  const {
    idPlaylist,
    setIdPlaylist,
    listIdSong,
    setIndexListIdSong,
    indexListIdSong,
    dataPlaylist,
  } = useContext(PlaylistContext);
  const [noneBtn, setNoneBtn] = useState(false);
  const [audio, setAudio] = useState("");
  const [timePlay, setTimePlay] = useState("00:00");
  const [timePlayChange, setTimePlayChange] = useState("00:00");
  const [stepTime, setStepTime] = useState("0");
  const [timeStepChange, setTimeStepChange] = useState("0");
  const [enableTimeStep, setEnableTimeStep] = useState(false);
  const [mutedAudio, setMutedAudio] = useState(true);
  const [volume, setVolume] = useState("100");
  const [prevVolume, setPrevVolume] = useState("100");
  const Audio = useRef(null);
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const repeat_random = JSON.parse(localStorage.getItem("repeat_random"));
  const listId = JSON.parse(localStorage.getItem("listIdSong"));
  const timeEnd =
    loaderSong !== false ? infoSong.duration : prevSongDefaul.duration;
  const [repeat, setRepeat] = useState(
    repeat_random ? repeat_random.repeat : "noRepeat"
  );
  const [random, setRandom] = useState(
    repeat_random ? repeat_random.random : "noRandom"
  );
  const [displayList, setDisplayList] = useState(false);

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

  let domNote = useClickOutSide(() => {
    setIsClickOption(false);
  });

  useEffect(() => {
    if (Audio !== null) {
      setAudio(Audio.current);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "repeat_random",
      JSON.stringify({ repeat: repeat, random: random })
    );
  }, [repeat, random]);

  useEffect(() => {
    if (audio) {
      if (btnPlay) {
        handleEvent.playAudio();
        listIdSong.find((item, index) => {
          if (item === (idSong ? idSong : prevSongDefaul.id)) {
            setIndexListIdSong(index);
          }
        });
      } else {
        handleEvent.pauseAudio();
      }
    }
  }, [songData, btnPlay, loaderSong]);

  useEffect(() => {
    if (audio) {
      if (loaderSong) {
        audio.muted = false;
      } else {
        audio.muted = true;
      }
    }
  }, [loaderSong, audio]);

  useEffect(() => {
    setIdSong(listIdSong[0]);
    setIndexListIdSong(0);
  }, [listIdSong]);

  const handleEvent = {
    playAudio: () => {
      if (audio && songData) {
        audio.play();
        setPlaySong(true);
        audio.ontimeupdate = () => {
          if (audio.duration) {
            setTimePlay(convertMS(Math.round(audio.currentTime)));
            const step = Math.floor((audio.currentTime / audio.duration) * 100);
            setStepTime(step);
          }
          audio.onended = () => {
            switch (repeat) {
              case "repeatAll":
                if (listIdSong) {
                  let i;
                  const length = listIdSong.length;
                  if (indexListIdSong >= length - 1) {
                    i = 0;
                  } else {
                    i = indexListIdSong + 1;
                  }
                  setIdSong(listIdSong[i]);
                  setIndexListIdSong(i);
                  handleEvent.playAudio();
                } else {
                  handleEvent.pauseAudio();
                }
                break;
              case "repeat":
                handleEvent.playAudio();
                break;
              default:
                if (listIdSong) {
                  let i;
                  const length = listIdSong.length;
                  if (indexListIdSong >= length - 1) {
                    handleEvent.pauseAudio();
                  } else {
                    i = indexListIdSong + 1;
                    setIdSong(listIdSong[i]);
                    setIndexListIdSong(i);
                    handleEvent.playAudio();
                  }
                } else {
                  handleEvent.pauseAudio();
                }
                break;
            }
            switch (random) {
              case "random":
                switch (repeat) {
                  case "repeat":
                    if (listIdSong) {
                      handleEvent.playAudio();
                    }
                    break;
                  default:
                    if (listIdSong) {
                      let i;
                      const length = listIdSong.length;
                      if (indexListIdSong >= length - 1) {
                        i = 0;
                      } else {
                        do {
                          i = Math.floor(Math.random() * length);
                        } while (i === indexListIdSong);
                      }
                      setIdSong(listIdSong[i]);
                      setIndexListIdSong(i);
                      handleEvent.playAudio();
                    } else {
                      handleEvent.pauseAudio();
                    }
                    break;
                }
                break;
              default:
                break;
            }
          };
        };
        setNoneBtn(true);
        setBtnPlay(true);
      }
    },
    pauseAudio: () => {
      audio.pause();
      setNoneBtn(false);
      setBtnPlay(false);
    },
    ChangeStepTime: (e) => {
      setStepTime(e.target.value);
      setEnableTimeStep(true);
      const seekTime = (audio.duration / 100) * e.target.value;
      setTimePlayChange(convertMS(Math.round(seekTime)));
      setTimeStepChange(e.target.value);
    },
    ChangeTimePlay: (e) => {
      setStepTime(e.target.value);
      const seekTime = (audio.duration / 100) * e.target.value;
      setTimePlay(convertMS(Math.round(seekTime)));
      audio.currentTime = Math.round(seekTime);
      setEnableTimeStep(false);
    },
    MutedAudio: () => {
      setMutedAudio(!mutedAudio);
      audio.muted = mutedAudio;
      if (mutedAudio === false) {
        setVolume(prevVolume !== "0" ? prevVolume : "100");
      } else {
        setPrevVolume(volume);
        setVolume("0");
      }
    },
    ChangeVolume: (e) => {
      const stepVolume = (1 / 100) * e.target.value;
      audio.volume = stepVolume;
      setVolume(e.target.value);
      if (e.target.value > "10") {
        audio.muted = false;
        setMutedAudio(true);
      }
      if (e.target.value === "0") {
        audio.muted = true;
        setMutedAudio(false);
      }
    },
    NextSong: () => {
      if (listIdSong) {
        let i;
        const length = listIdSong.length;
        if (indexListIdSong >= length - 1) {
          i = 0;
        } else {
          i = indexListIdSong + 1;
        }
        setIdSong(listIdSong[i]);
        setIndexListIdSong(i);
        handleEvent.playAudio();
      }
    },
    PrevSong: () => {
      if (listIdSong) {
        let i;
        const length = listIdSong.length;
        if (indexListIdSong === 0) {
          i = length - 1;
        } else {
          i = indexListIdSong - 1;
        }
        setIdSong(listIdSong[i]);
        setIndexListIdSong(i);
        handleEvent.playAudio();
      }
    },
  };
  return (
    <div className="footer">
      <audio src={songData} ref={Audio} />
      <div className="media__left">
        <div className="media__left__item">
          <div className="media__thumbnail">
            <div
              className="thumbnail"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(listId ? listId.link : "");
                setIdPlaylist(listId.idPlaylist);
              }}
            >
              {loaderSong !== false ? (
                <img src={infoSong.thumbnail} alt="thumbnail" />
              ) : (
                <img src={prevSongDefaul.thumbnail} alt="thumbnail" />
              )}
            </div>
          </div>
          <div className="content__left">
            {loaderSong !== false ? (
              <div className="item__song">{infoSong.title}</div>
            ) : (
              <div className="item__song">{prevSongDefaul.title}</div>
            )}
            <div className="item__single">
              <div>
                {loaderSong !== false
                  ? infoSong.artists.map((artist, index) => {
                      return <NameSinger key={index} artist={artist} />;
                    })
                  : prevSongDefaul.artists.map((artist, index) => {
                      return <NameSinger key={index} artist={artist} />;
                    })}
              </div>
            </div>
          </div>
          <div className="options__left">
            <div className="media__heart">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="np__menu" ref={domNote}>
              <div
                className="np__menu__option"
                onClick={() => setIsClickOption(!isClickOption)}
              >
                ● ● ●
              </div>
              {isClickOption && (
                <ul className="np__menu__children">
                  <div className="option__chindren__one">
                    <div className="option__chindren__img">
                      <div>
                        {loaderSong !== false ? (
                          <img src={infoSong.thumbnail} alt="thumbnail" />
                        ) : (
                          <img src={prevSongDefaul.thumbnail} alt="thumbnail" />
                        )}
                      </div>
                    </div>
                    <div className="option__chindren__sub">
                      {loaderSong !== false ? (
                        <h2>{infoSong.title}</h2>
                      ) : (
                        <h2>{prevSongDefaul.title}</h2>
                      )}
                      <div>
                        <span>
                          {loaderSong !== false ? (
                            <>
                              <i className="fa-regular fa-heart"></i>{" "}
                              {convertLike(infoSong.like)}
                            </>
                          ) : (
                            <>
                              <i className="fa-regular fa-heart"></i>{" "}
                              {convertLike(prevSongDefaul.like)}
                            </>
                          )}
                        </span>
                        <span>
                          {loaderSong !== false ? (
                            <>
                              <i className="fa-solid fa-headphones"></i>{" "}
                              {convertLike(infoSong.listen)}
                            </>
                          ) : (
                            <>
                              <i className="fa-solid fa-headphones"></i>{" "}
                              {convertLike(prevSongDefaul.listen)}
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="option__chindren__two">
                    <div className="option__two__item option__chindren__down">
                      <i className="fa-solid fa-download"></i>
                      <div>Tải xuống</div>
                    </div>
                    <div className="option__two__item option__chindren__sing">
                      <i className="fa-solid fa-microphone"></i>
                      <div>Lời bài hát</div>
                    </div>
                    <div className="option__two__item option__chindren__block">
                      <i className="fa-solid fa-ban"></i>
                      <div>Chặn</div>
                    </div>
                  </div>
                  <li className="active__playlist">
                    <i className="fa-solid fa-circle-plus"></i>
                    <span>
                      Thêm vào playlist{" "}
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    <ul className="form__playList">
                      <div>
                        <input
                          type="text"
                          name="search__playlist"
                          className="search__playlist"
                          placeholder="Tìm playlist"
                        />
                      </div>
                      <li>
                        <i className="fa fa-plus-square"></i> Tạo playlist mới
                      </li>
                      <nav className="list__playlist">
                        <li>
                          <div className="list_playlist__item">
                            <nav>
                              <i className="fa fa-list-ol"></i>
                            </nav>
                            Love
                          </div>
                        </li>
                      </nav>
                    </ul>
                  </li>
                  <li>
                    <i className="fa fa-microphone"></i>
                    <span>Phát cùng lời bài hát</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-comment"></i>
                    <span>Bình luận</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-link"></i>
                    <span>Sao chép link</span>
                  </li>
                  <li className="option__share">
                    <i className="fa-solid fa-share"></i>
                    <span>
                      Chia sẻ <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    <ul className="item__share">
                      <li className="icon__fb">
                        <i className="fa-brands fa-facebook"></i> Faboock
                      </li>
                      <li className="icon__zalo">
                        <i className="fa-solid fa-comment-dots"></i> Zalo
                      </li>
                      <li>
                        <i className="fa-solid fa-code"></i> Mã nhúng
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="media__content">
        <div className="controller__media">
          <span
            onClick={() =>
              setRandom(
                (random === "noRandom" && "random") ||
                  (random === "random" && "noRandom")
              )
            }
            className={`controller__itemmedia ${
              random === "random" && "active__redo"
            } `}
          >
            <i className="fas fa-random"></i>
          </span>
          <span
            className="controller__itemmedia"
            onClick={() => handleEvent.PrevSong()}
          >
            <i className="fas fa-step-backward"></i>
          </span>
          {loaderPlay === false ? (
            <>
              <span
                className={`controller__itemmedia play__item ${
                  noneBtn && "none__btn"
                }`}
              >
                <i
                  className="far fa-play-circle"
                  onClick={() => handleEvent.playAudio()}
                ></i>
              </span>
              <span
                className={`controller__itemmedia play__item ${
                  !noneBtn && "none__btn"
                }`}
              >
                <i
                  className="far fa-pause-circle"
                  onClick={() => handleEvent.pauseAudio()}
                ></i>
              </span>
            </>
          ) : (
            <span className="controller__itemmedia loader__audio">
              <img src={loading} alt="loading" />
            </span>
          )}

          <span
            className="controller__itemmedia"
            onClick={() => handleEvent.NextSong()}
          >
            <i className="fas fa-step-forward"></i>
          </span>
          <span
            onClick={() =>
              setRepeat(
                (repeat === "noRepeat" && "repeatAll") ||
                  (repeat === "repeatAll" && "repeat") ||
                  (repeat === "repeat" && "noRepeat")
              )
            }
            className={`controller__itemmedia ${
              (repeat === "repeat" && "active__redo") ||
              (repeat === "repeatAll" && "active__redo") ||
              (repeat === "noRepeat" && "")
            } `}
          >
            <i
              className={`fas fa-redo ${repeat === "repeat" ? "repeat" : ""}`}
            ></i>
          </span>
        </div>
        <div className="media__duration__bar">
          <div className="time__start">
            {enableTimeStep ? timePlayChange : timePlay}
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={`${enableTimeStep ? timeStepChange : stepTime}`}
            onChange={(e) => handleEvent.ChangeStepTime(e)}
            onMouseUp={(e) => handleEvent.ChangeTimePlay(e)}
          />
          <div className="current__time">
            <div
              className="step__time"
              style={{
                width: `${
                  enableTimeStep ? timeStepChange + "%" : stepTime + "%"
                }`,
              }}
            ></div>
          </div>
          <div className="time__end">{convertMS(timeEnd.toString())}</div>
        </div>
      </div>
      <div className="media__right">
        <div className="media__narrow unclick">
          <div className="mv__item">MV</div>
        </div>
        <div className="media__narrow">
          <div>
            <i className="fa fa-microphone"></i>
          </div>
        </div>
        <div className="media__narrow">
          <div>
            <i className="fa fa-window-restore"></i>
          </div>
        </div>
        <div className="media__volume">
          <div
            className="icont__volume"
            onClick={() => handleEvent.MutedAudio()}
          >
            {mutedAudio ? (
              <i className="fa fa-volume-up"></i>
            ) : (
              <i className="fa-solid fa-volume-xmark"></i>
            )}
          </div>
          <div className="volume">
            <input
              type="range"
              min="0"
              max="100"
              value={`${volume ? volume : "100"}`}
              onChange={(e) => handleEvent.ChangeVolume(e)}
            />
            <div className="current__volume">
              <div
                className="step__volume"
                style={{
                  width: `${volume ? volume + "%" : ""}`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="media__divide">
          <span className="divide"></span>
        </div>
        <div className="media__narrow media__list__item">
          <div
            style={{
              padding: "7px",
              borderRadius: "5px",
              backgroundColor: `${displayList ? "#7200a1" : ""}`,
            }}
            onClick={() => setDisplayList(!displayList)}
          >
            <i className="fa fa-align-right"></i>
          </div>
          <div
            className={`list__playlist__ft ${
              displayList && "display__list__ft"
            }`}
          >
            <div className="title__list__ft">
              <nav>Danh sách phát</nav>
            </div>

            <div className="list__item__ft active__playlist__ft">
              <div className="item__list__ft">
                <div className="img__list__ft">
                  {loaderSong !== false ? (
                    <img src={infoSong.thumbnail} alt="thumbnail" />
                  ) : (
                    <img src={prevSongDefaul.thumbnail} alt="thumbnail" />
                  )}
                  <div
                    className="option__playlist__selection"
                    style={{ opacity: `${btnPlay ? "1" : ""}` }}
                  >
                    <div className="option__selection">
                      {btnPlay ? (
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
                        <a>
                          <i
                            className="fa-solid fa-play"
                            onClick={() => setBtnPlay(true)}
                          ></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="subtitle__list__ft">
                  <div className="item__title__album">
                    {loaderSong !== false ? (
                      <div className="item__song">{infoSong.title}</div>
                    ) : (
                      <div className="item__song">{prevSongDefaul.title}</div>
                    )}
                  </div>
                  <nav className="subsinger__music__library item__title__album1">
                    {loaderSong !== false
                      ? infoSong.artists.map((artist, index) => {
                          return <NameSinger key={index} artist={artist} />;
                        })
                      : prevSongDefaul.artists.map((artist, index) => {
                          return <NameSinger key={index} artist={artist} />;
                        })}
                  </nav>
                </div>
              </div>
            </div>
            <div className="list__next__ft">
              <div>Tiếp theo</div>
              <div className="item__title__album" style={{ color: "#9c32ca" }}>
                <span style={{ color: "hsla(0, 0%, 100%, 0.4)" }}>
                  Từ playlist{" "}
                </span>
                {dataPlaylist ? dataPlaylist.description : ""}
              </div>
            </div>
            <div className="sidebar__scrollbar list__item__all__ft">
              {dataPlaylist
                ? dataPlaylist.song.items.map((item, index) => {
                    return (
                      <ItemListFooter
                        key={index}
                        item={item}
                        idSong={idSong}
                        setIdSong={setIdSong}
                        setBtnPlay={setBtnPlay}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
