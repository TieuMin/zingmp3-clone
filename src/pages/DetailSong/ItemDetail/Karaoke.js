import React, { useContext, useEffect, useState, useRef } from "react";
import { GetSongContext } from "../../../context/GetSongProvider";
import { LyricContext } from "../../../context/GetLyricProvider";

const Karaoke = () => {
  const { infoSong, currentTimeLyric } = useContext(GetSongContext);
  const { lyric } = useContext(LyricContext);
  const [indexLyric1, setIndexLyric1] = useState(0);
  const [indexLyric2, setIndexLyric2] = useState(1);

  useEffect(() => {
    if (lyric && lyric.sentences) {
      lyric.sentences.forEach((sentence, index) => {
        if (currentTimeLyric * 1000 + 1500 >= sentence.words[0].startTime) {
          if (index % 2 === 0) {
            setIndexLyric1(index);
            if (indexLyric1 === 0) {
              setIndexLyric2(1);
            }
          } else {
            setIndexLyric1(index - 1);
          }
        }
      });
    }
  }, [currentTimeLyric]);

  const lyric1 = () => {
    let length = lyric.sentences[indexLyric1].words.length;
    if (
      currentTimeLyric * 1000 + 1500 >=
      lyric.sentences[indexLyric1].words[0].startTime
    ) {
      if (
        currentTimeLyric * 1000 >=
        lyric.sentences[indexLyric1].words[length - 2].startTime
      ) {
        setIndexLyric2(indexLyric1 + 1);
      }
    }
  };

  useEffect(() => {
    if (lyric && lyric.sentences) {
      lyric1();
    }
  }, [lyric, indexLyric1, currentTimeLyric]);

  return (
    <>
      <div className="detail__song__center">
        <div className="detail__song__karaoke">
          <div>
            {lyric && lyric.sentences ? (
              <>
                {lyric &&
                currentTimeLyric * 1000 <=
                  lyric.sentences[0].words[0].startTime - 1500 ? (
                  <>
                    <div
                      className="lyric__song"
                      style={{ fontSize: "65px", fontWeight: "700" }}
                    >
                      <span>{infoSong && infoSong.title}</span>
                    </div>
                    <div className="lyric__song">
                      <span>{infoSong && infoSong.artistsNames}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lyric__song">
                      {lyric.sentences[indexLyric1].words.map((word, index) => {
                        let time = "0";
                        if (
                          currentTimeLyric * 1000 >= word.startTime &&
                          currentTimeLyric * 1000 <= word.endTime
                        ) {
                          time =
                            ((currentTimeLyric * 1000 - word.startTime) * 100) /
                            (word.endTime - word.startTime);
                        }
                        return (
                          <span key={index}>
                            <span className="karaoke__text">
                              {word.data}
                              <div
                                className={`animation__test word ${
                                  time == 0 ? "" : "transition__karaoke"
                                }`}
                                style={{
                                  width: `${
                                    currentTimeLyric * 1000 >= word.endTime
                                      ? 100
                                      : time
                                  }%`,
                                }}
                                data-text={word.data}
                              ></div>
                            </span>
                            <> </>
                          </span>
                        );
                      })}
                    </div>
                    <div className="lyric__song">
                      {lyric.sentences[indexLyric2].words.map((word, index) => {
                        let time = "0";
                        if (
                          currentTimeLyric * 1000 >= word.startTime &&
                          currentTimeLyric * 1000 <= word.endTime
                        ) {
                          time =
                            ((currentTimeLyric * 1000 - word.startTime) * 100) /
                            (word.endTime - word.startTime);
                        }
                        return (
                          <span key={index}>
                            <span className="karaoke__text">
                              {word.data}
                              <div
                                className="animation__test word"
                                style={{
                                  width: `${
                                    currentTimeLyric * 1000 >= word.endTime
                                      ? 100
                                      : time
                                  }%`,
                                }}
                                data-text={word.data}
                              ></div>
                            </span>
                            <> </>
                          </span>
                        );
                      })}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div
                className="lyric__song"
                style={{ fontSize: "45px", fontWeight: "700" }}
              >
                <span>Karaoke đang được cập nhật</span>
              </div>
            )}
          </div>
        </div>
        <div className="detail__name__song">
          {infoSong && infoSong.title} {" - "}
          <span style={{ marginLeft: "8px", color: "hsla(0, 0%, 100%, 0.4)" }}>
            {infoSong && infoSong.artistsNames}
          </span>
        </div>
      </div>
    </>
  );
};

export default Karaoke;
