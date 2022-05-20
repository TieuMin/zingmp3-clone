import React, { useState, useEffect } from "react";

const LoadVideoMv = () => {
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
    <div className="playmv__video">
      <div className={`playmv__video__load loader ${!run && "run"}`}></div>
    </div>
  );
};

export default LoadVideoMv;
