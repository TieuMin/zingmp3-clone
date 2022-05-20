import React, { useState, useEffect } from "react";

const LoadHeaderMv = () => {
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
    <div className="playmv__top__left">
      <div className={`loader ${!run && "run"} playmv__img`}></div>
      <div className="playmv__title___singer__load">
        <div className={`loader ${!run && "run"} playmv__title__load`}></div>
        <div className={`loader ${!run && "run"} playmv__singer__load`}></div>
      </div>
    </div>
  );
};

export default LoadHeaderMv;
