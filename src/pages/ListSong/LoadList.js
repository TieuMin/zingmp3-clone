import React, { useEffect, useState } from "react";

const LoadList = () => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));

  const [run, setRun] = useState(true);
  useEffect(() => {
    let animation;
    let unAnimation;
    const load = () => {
      animation = setTimeout(() => {
        setRun(false);
      }, 500);

      unAnimation = setTimeout(() => {
        setRun(true);
        load();
      }, 2200);
    };
    load();
    return () => {
      clearTimeout(animation);
      clearTimeout(unAnimation);
    };
  }, []);

  return (
    <div
      className="content"
      style={{ height: `${prevSongDefaul ? "" : "100vh"}` }}
    >
      <div className="List__song__main">
        <div className="List__song__right">
          <span
            className={`name__loader loader ${!run && "run"} img__load`}
          ></span>
          <div className="header__playlist__selection title__load">
            <span className={`name__loader loader ${!run && "run"}`}></span>
          </div>
          <div className="header__playlist__selection title__load1">
            <span className={`name__loader loader ${!run && "run"}`}></span>
          </div>
          <div className="header__playlist__selection title__load1">
            <span className={`name__loader loader ${!run && "run"}`}></span>
          </div>
          <div className="header__playlist__selection title__load2">
            <span className={`name__loader loader ${!run && "run"}`}></span>
          </div>
        </div>
        <div className="List__song__left">
          <div className="playlist__selection">
            <div className="item__load">
              <div className="left__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load">
                <div className="header__playlist__selection title__load1 center__item">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                    style={{ marginTop: "0px" }}
                  ></span>
                </div>
                <div className="header__playlist__selection title__load1">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load1">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="right__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
            </div>
            <div className="item__load">
              <div className="left__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load">
                <div className="header__playlist__selection title__load1 center__item">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                    style={{ marginTop: "0px" }}
                  ></span>
                </div>
                <div className="header__playlist__selection title__load1">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load1">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="right__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
            </div>
            <div className="item__load">
              <div className="left__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load">
                <div className="header__playlist__selection title__load1 center__item">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                    style={{ marginTop: "0px" }}
                  ></span>
                </div>
                <div className="header__playlist__selection title__load1">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load1">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="right__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
            </div>
            <div className="item__load">
              <div className="left__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load">
                <div className="header__playlist__selection title__load1 center__item">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                    style={{ marginTop: "0px" }}
                  ></span>
                </div>
                <div className="header__playlist__selection title__load1">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load1">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="right__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
            </div>
            <div className="item__load">
              <div className="left__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load">
                <div className="header__playlist__selection title__load1 center__item">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                    style={{ marginTop: "0px" }}
                  ></span>
                </div>
                <div className="header__playlist__selection title__load1">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load1">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="right__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
            </div>
            <div className="item__load">
              <div className="left__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load">
                <div className="header__playlist__selection title__load1 center__item">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                    style={{ marginTop: "0px" }}
                  ></span>
                </div>
                <div className="header__playlist__selection title__load1">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load1">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="right__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
            </div>
            <div className="item__load">
              <div className="left__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load">
                <div className="header__playlist__selection title__load1 center__item">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                    style={{ marginTop: "0px" }}
                  ></span>
                </div>
                <div className="header__playlist__selection title__load1">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="center__load1">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
              <div className="right__load">
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
                <div className="header__playlist__selection">
                  <span
                    className={`name__loader loader ${!run && "run"}`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadList;
