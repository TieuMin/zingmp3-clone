import React, { useContext, useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./zingchart.css";
import LibraryZingChart from "../../Library/LibraryZingChart/LibraryZingChart";
import TopZingChart from "./TopZingChart/TopZingChart";
import WeeklyRanking from "./WeeklyRanking/WeeklyRanking";
import { HomeContext } from "../../context/HomeProvider";
import DiscoveryLoader from "../Discovery/DiscoveryLoader";
import { VideoContext } from "../../context/GetVideoProvider";

const ZingChart = () => {
  const { loader, rank, animation } = useContext(HomeContext);
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));
  const { miniatureVideo } = useContext(VideoContext);

  return (
    <MainLayout>
      {animation ? (
        <DiscoveryLoader />
      ) : (
        <div
          className="content"
          style={{
            height: `${
              prevSongDefaul && !miniatureVideo ? "" : "calc(100vh - 70px)"
            }`,
          }}
        >
          <div className="content__item zingchart__size">
            <div className="chart__title">
              <h3 className="title">#zingchart</h3>
              <button>
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
            <LibraryZingChart data={loader.stores[7]} rank={rank} />
          </div>
          <TopZingChart datas={loader.stores[7]} />
          <WeeklyRanking />
        </div>
      )}
    </MainLayout>
  );
};

export default ZingChart;
