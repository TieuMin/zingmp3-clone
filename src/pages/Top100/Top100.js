import React, { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./top100.css";
import ItemPlaylist from "../ItemPlaylist/ItemPlaylist";
import PlaylistTop100 from "./PlaylistTop100/PlaylistTop100";
import { HomeContext } from "../../context/HomeProvider";
import LoaderPage from "../Discovery/LoaderPage";
import { VideoContext } from "../../context/GetVideoProvider";

const Top100 = () => {
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
          <div className="bg-blur2"></div>
          <div className="bg-alpha2"></div>
          <div className="banner-top100"></div>
          <div
            className="topic-category mb-40 gallery"
            style={{ marginTop: "90px" }}
          >
            <div className="playlist__selection">
              <div className="header__playlist__selection">
                <span>Nổi bật</span>
              </div>
              <div className="list__playlist__selection">
                <ItemPlaylist lists={loader.stores[3]} />
              </div>
            </div>
          </div>
          <div className="topic-category">
            <div className="section__title mt-40">
              <h3>nhạc việt nam</h3>
            </div>
            <div className="columns">
              <PlaylistTop100 lists={loader.stores[7]} />
            </div>
          </div>
          <div className="topic-category mb-40">
            <div className="section__title mt-40">
              <h3>nhạc châu á</h3>
            </div>
            <div className="columns">
              <PlaylistTop100 lists={loader.stores[10]} />
            </div>
          </div>
          <div className="topic-top__100__item">
            <div className="section__title mt-40">
              <h3>nhạc âu mỹ</h3>
            </div>
            <div className="columns">
              <PlaylistTop100 lists={loader.stores[3]} />
            </div>
          </div>
          <div className="topic-category">
            <div className="section__title mt-40">
              <h3>nhạc hòa tấu</h3>
            </div>
            <div className="columns">
              <PlaylistTop100 lists={loader.stores[4]} />
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Top100;
