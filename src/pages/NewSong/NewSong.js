import React, { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./newsong.css";
import ListTopSong from "./ListTopSong/ListTopSong";
import { VideoContext } from "../../context/GetVideoProvider";

const NewSong = () => {
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const { miniatureVideo } = useContext(VideoContext);

  return (
    <MainLayout>
      <div
        className="content"
        style={{
          height: `${
            prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
          }`,
        }}
      >
        <div className="bg__blur1"></div>
        <div className="bg__alpha1"></div>
        <div className="content__item">
          <div className="chart__title">
            <h3 className="title">mới phát hành</h3>
            <button>
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
        <div className="list__zing__chart">
          <ListTopSong />
        </div>
      </div>
    </MainLayout>
  );
};

export default NewSong;
