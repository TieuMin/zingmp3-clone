import React, { useState, useEffect, useContext } from "react";
import LibraryZingChart from "../../Library/LibraryZingChart/LibraryZingChart";
import NameSinger from "../NameSinger/NameSinger";
import { HomeContext } from "../../context/HomeProvider";
import { GetSongContext } from "../../context/GetSongProvider";

const ZingChartHome = ({ lists }) => {
  const { setIdSong } = useContext(GetSongContext);
  const { rank } = useContext(HomeContext);
  return (
    <>
      <div className="bg__img__chart"></div>
      <div className="bg__alpha__chart"></div>
      <div className="selection__header">
        <a href="#" className="zingchart__btn">
          #zingchart
        </a>
        <div className="btn__random__zingchart">
          <i className="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <div className="list__chart__selection">
        <div className="list__zingchart">
          {lists.items.map((item, index) => {
            if (index < 3) {
              return (
                <div key={index} className="item__list__zingchart">
                  <div className="list__zingchart__left">
                    <div className="list__item__zingchart">
                      <div
                        className={`song__prefix ${
                          index === 1 ? "song__prefix2" : "song__prefix3"
                        }`}
                      >
                        <span>{index + 1}</span>
                      </div>
                      <div className="song__thumb">
                        <img src={item.album.thumbnail} alt="" />
                        <div
                          className="play__zingchart"
                          onClick={() => setIdSong(item.encodeId)}
                        >
                          <i className="fa-solid fa-play"></i>
                        </div>
                      </div>
                      <div className="cart__infor">
                        <div className="subtitle__zingchart">
                          <a href="#" className="title__one__line">
                            {item.album.title}
                          </a>
                        </div>
                        <div className="name__singer__all singer__zingchart">
                          {item.album.artists.map((artist, index) => {
                            return <NameSinger key={index} artist={artist} />;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list__zingchart__right">
                    <span>{Math.round((item.score / rank) * 100)}%</span>
                  </div>
                </div>
              );
            }
          })}
          <div className="view__all__zingchart">
            <span>Xem thêm</span>
          </div>
        </div>
        <div className="chart__zingchart">
          <LibraryZingChart data={lists} rank={rank} />
        </div>
      </div>
    </>
  );
};

export default ZingChartHome;
