import React, { useState, useEffect } from "react";

const LoadListVideo = () => {
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
    <>
      <div className={`playmv__list__item`}>
        <div className="playmv__list__img">
          <div
            style={{ margin: "0" }}
            className={`loader ${!run && "run"}`}
          ></div>
        </div>
        <div className="playmv__list__title__singer">
          <div
            className={`loader ${!run && "run"} playmv__list__title__load`}
          ></div>
          <div
            className={`loader ${!run && "run"} playmv__list__singer__load`}
          ></div>
        </div>
      </div>
      <div className={`playmv__list__item`}>
        <div className="playmv__list__img">
          <div
            style={{ margin: "0" }}
            className={`loader ${!run && "run"}`}
          ></div>
        </div>
        <div className="playmv__list__title__singer">
          <div
            className={`loader ${!run && "run"} playmv__list__title__load`}
          ></div>
          <div
            className={`loader ${!run && "run"} playmv__list__singer__load`}
          ></div>
        </div>
      </div>
      <div className={`playmv__list__item`}>
        <div className="playmv__list__img">
          <div
            style={{ margin: "0" }}
            className={`loader ${!run && "run"}`}
          ></div>
        </div>
        <div className="playmv__list__title__singer">
          <div
            className={`loader ${!run && "run"} playmv__list__title__load`}
          ></div>
          <div
            className={`loader ${!run && "run"} playmv__list__singer__load`}
          ></div>
        </div>
      </div>
      <div className={`playmv__list__item`}>
        <div className="playmv__list__img">
          <div
            style={{ margin: "0" }}
            className={`loader ${!run && "run"}`}
          ></div>
        </div>
        <div className="playmv__list__title__singer">
          <div
            className={`loader ${!run && "run"} playmv__list__title__load`}
          ></div>
          <div
            className={`loader ${!run && "run"} playmv__list__singer__load`}
          ></div>
        </div>
      </div>
      <div className={`playmv__list__item`}>
        <div className="playmv__list__img">
          <div
            style={{ margin: "0" }}
            className={`loader ${!run && "run"}`}
          ></div>
        </div>
        <div className="playmv__list__title__singer">
          <div
            className={`loader ${!run && "run"} playmv__list__title__load`}
          ></div>
          <div
            className={`loader ${!run && "run"} playmv__list__singer__load`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LoadListVideo;
