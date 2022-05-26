import React from "react";

const MusicCountry = () => {
  return (
    <div className="columns">
      <div className="column">
        <a href="#">
          <figure className="img__">
            <img
              src="https://photo-zmp3.zmdcdn.me/cover/9/a/5/4/9a547c214248610d4907fa5b60b1b3b5.jpg"
              alt=""
            />
          </figure>
          <div className="bg__hot"></div>
          <p className="title-topic">nhạc việt</p>
        </a>
      </div>
      <div className="column">
        <a href="#">
          <figure className="img__">
            <img
              src="https://photo-zmp3.zmdcdn.me/cover/d/8/5/6/d856eafd7198e0f534ef400d088c7cda.jpg"
              alt=""
            />
          </figure>
          <div
            className="bg__hot"
            style={{
              backgroundImage: "linear-gradient(transparent, rgb(44 44 44))",
            }}
          ></div>
          <p className="title-topic">nhạc âu mỹ</p>
        </a>
      </div>
      <div className="column">
        <a href="#">
          <figure className="img__">
            <img
              src="https://photo-zmp3.zmdcdn.me/cover/e/1/8/d/e18dbedd369af1866454302658c2c1a7.jpg"
              alt=""
            />
          </figure>
          <div
            className="bg__hot"
            style={{
              backgroundImage:
                "linear-gradient(transparent, rgb(155, 124, 196))",
            }}
          ></div>
          <p className="title-topic">nhạc hàn</p>
        </a>
      </div>
      <div className="column">
        <a href="#">
          <figure className="img__">
            <img
              src="https://photo-zmp3.zmdcdn.me/cover/4/0/7/0/407056603b2048fe1c1ed6e05bda95d0.jpg"
              alt=""
            />
          </figure>
          <div
            className="bg__hot"
            style={{
              backgroundImage: "linear-gradient(transparent, rgb(40, 18, 46))",
            }}
          ></div>
          <p className="title-topic">nhạc Hoa</p>
        </a>
      </div>
    </div>
  );
};

export default MusicCountry;
