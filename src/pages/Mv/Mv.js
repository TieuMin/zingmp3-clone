import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./mv.css";
import MainLayout from "../../layouts/MainLayout";
import { HomeContext } from "../../context/HomeProvider";
import MvLoader from "./ItemMv/MvLoader";
import PlayMv from "./PlayMv/PlayMv";

const Mv = () => {
  const { setIdMv, animation } = useContext(HomeContext);
  const location = useLocation();
  const prevSongDefaul = JSON.parse(localStorage.getItem("prevSongDefaul"));

  return (
    <>
      <MainLayout>
        {animation ? (
          <MvLoader />
        ) : (
          <div
            className="content"
            style={{ height: `${prevSongDefaul ? "" : "100vh"}` }}
          >
            <div className="navbar__mv">
              <h3>mv</h3>
              <ul>
                <li className="active__check">
                  <NavLink
                    className={`${location.pathname == "/mv" ? "active" : ""}`}
                    to="/mv/IWZ9Z08I"
                    onClick={() => setIdMv("IWZ9Z08I")}
                  >
                    việt nam
                  </NavLink>
                </li>
                <li className="active__check">
                  <NavLink
                    to="/mv/IWZ9Z08O"
                    onClick={() => setIdMv("IWZ9Z08O")}
                  >
                    US-UK
                  </NavLink>
                </li>
                <li className="active__check">
                  <NavLink
                    to="/mv/IWZ9Z08W"
                    onClick={() => setIdMv("IWZ9Z08W")}
                  >
                    KPOP
                  </NavLink>
                </li>
                <li className="active__check">
                  <NavLink
                    to="/mv/IWZ9Z086"
                    onClick={() => setIdMv("IWZ9Z086")}
                  >
                    Hòa Tấu
                  </NavLink>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        )}
      </MainLayout>
      {animation ? "" : <PlayMv />}
    </>
  );
};

export default Mv;
