import React, { useContext, useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./zingchart.css";
import LibraryZingChart from "../../Library/LibraryZingChart/LibraryZingChart";
import TopZingChart from "./TopZingChart/TopZingChart";
import WeeklyRanking from "./WeeklyRanking/WeeklyRanking";
import { HomeContext } from "../../context/HomeProvider";
import DiscoveryLoader from "../Discovery/DiscoveryLoader";

const ZingChart = () => {
  const { loader, rank, animation } = useContext(HomeContext);
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));

  return (
    <MainLayout>
      {animation ? (
        <DiscoveryLoader />
      ) : (
        <div
          className="content"
          style={{ height: `${prevSongDefaul ? "" : "100vh"}` }}
        >
          <div className="content__item zingchart__size">
            <div className="chart__title">
              <h3 className="title">#zingchart</h3>
              <button>
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
            <LibraryZingChart data={loader.stores[8]} rank={rank} />
          </div>
          <TopZingChart />
          <WeeklyRanking />
        </div>
      )}
    </MainLayout>
  );
};

export default ZingChart;
