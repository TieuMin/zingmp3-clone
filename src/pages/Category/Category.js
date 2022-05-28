import React, { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./category.css";
import MusicTheme from "./MusicTheme/MusicTheme";
import MusicCountry from "./MusicCountry/MusicCountry";
import ItemPlaylist from "../ItemPlaylist/ItemPlaylist";
import { HomeContext } from "../../context/HomeProvider";
import LoaderPage from "../Discovery/LoaderPage";
import { VideoContext } from "../../context/GetVideoProvider";

const Category = () => {
  const { loader, animation } = useContext(HomeContext);
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const { miniatureVideo } = useContext(VideoContext);
  return (
    <MainLayout>
      {animation ? (
        <LoaderPage />
      ) : (
        <div
          className="content"
          style={{
            height: `${
              prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
            }`,
          }}
        >
          <div className="banner__vip">
            <figure>
              <img
                src="https://photo-zmp3.zmdcdn.me/cover/d/2/2/3/d223524cfa359d16b2c0d6e4497c126f.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="section gallery">
            <div className="topic-section">
              <div className="section__title mt-40">
                <h3>tâm trạng và hoạt động</h3>
              </div>
              <MusicTheme />
            </div>
            <div className="topic-hot-section">
              <div className="section__title mb-20">
                <h3>quốc gia</h3>
              </div>
              <MusicCountry />
            </div>

            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>Trữ Tình & Bolero</span>
                <div className="btn__view__all">
                  TẤT CẢ <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[4]} p={false} />
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Category;
