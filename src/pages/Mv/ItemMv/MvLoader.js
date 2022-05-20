import React, { useState, useEffect } from "react";

const MvLoader = () => {
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
    <div className="content">
      <div className="gallery">
        <div className="gallery__container mv">
          <div className={`gallery__item loader ${!run && "run"}`}></div>
          <div className={`gallery__item loader ${!run && "run"}`}></div>
          <div className={`gallery__item loader ${!run && "run"}`}></div>
        </div>
        <div className="gallery__container mv">
          <div className={`gallery__item loader ${!run && "run"}`}></div>
          <div className={`gallery__item loader ${!run && "run"}`}></div>
          <div className={`gallery__item loader ${!run && "run"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default MvLoader;
