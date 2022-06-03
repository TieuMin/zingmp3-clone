import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomeProvider from "./context/HomeProvider";
import GetSongProvider from "./context/GetSongProvider";
import PlaylistProvider from "./context/GetPlaylistProvider";
import VideoProvider from "./context/GetVideoProvider";
import SearchProvider from "./context/SearchProvider";
import GetLyricProvider from "./context/GetLyricProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HomeProvider>
    <GetSongProvider>
      <PlaylistProvider>
        <VideoProvider>
          <SearchProvider>
            <GetLyricProvider>
              <App />
            </GetLyricProvider>
          </SearchProvider>
        </VideoProvider>
      </PlaylistProvider>
    </GetSongProvider>
  </HomeProvider>
  //</React.StrictMode>
);
