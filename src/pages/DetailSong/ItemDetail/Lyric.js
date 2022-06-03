import React, { useContext, useEffect, useState, useRef } from "react";
import { GetSongContext } from "../../../context/GetSongProvider";
import { LyricContext } from "../../../context/GetLyricProvider";
import { Lrc } from "react-lrc";

const Lyric = () => {
  const { infoSong, btnPlay, currentTimeLyric } = useContext(GetSongContext);
  const { lyric, dataLyric } = useContext(LyricContext);
  const [indexLyric, setIndexLyric] = useState("");

  const RefIndex = useRef();

  useEffect(() => {
    if (RefIndex && RefIndex.current) {
      const CurrentLine = RefIndex.current.getCurrentLine();
      setIndexLyric(CurrentLine.index);
    }
  }, [currentTimeLyric]);

  return (
    <>
      <div className="detail__song__lyric">
        <div className="detail__lyric__img">
          <img src={infoSong && infoSong.thumbnailM} />
          {btnPlay && (
            <span
              className="gif__play gif__active__detail"
              style={{ left: "62px", bottom: "0" }}
            >
              <img
                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                alt=""
              />
            </span>
          )}
        </div>
        {lyric && dataLyric ? (
          <>
            <Lrc
              ref={RefIndex}
              lrc={dataLyric}
              autoScroll={true}
              className="detail__lyric"
              lineRenderer={({ index, line, active = true }) => (
                <div
                  className={`detail__lyric__item${
                    indexLyric > index ? " lyric__item__over" : ""
                  } ${active ? " lyric__item__active" : ""}`}
                >
                  {line.content}
                </div>
              )}
              currentMillisecond={currentTimeLyric * 1000}
            />
          </>
        ) : (
          <div className="sidebar__scrollbar detail__lyric detail__lyric__item text__item__lyric">
            {lyric && lyric.lyric ? (
              lyric.lyric
            ) : (
              <div
                style={{
                  display: "flex",
                  height: "90%",
                  alignItems: "center",
                }}
              >
                Lời bài hát đang được cập nhật
              </div>
            )}
          </div>
        )}
      </div>
      <div className="detail__name__song">
        {infoSong && infoSong.title} {" - "}
        <span style={{ marginLeft: "8px", color: "hsla(0, 0%, 100%, 0.4)" }}>
          {infoSong && infoSong.artistsNames}
        </span>
      </div>
    </>
  );
};

export default Lyric;
