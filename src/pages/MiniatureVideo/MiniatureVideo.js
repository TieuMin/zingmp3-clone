import React, { useContext } from "react";
import "./miniatureVideo.css";
import TagVideo from "./TagVideo";
import { VideoContext } from "../../context/GetVideoProvider";

const MiniatureVideo = () => {
  const { dataVideo, miniatureVideo, loadVideo } = useContext(VideoContext);

  return (
    <div
      className="miniature__video"
      style={{ display: `${miniatureVideo ? "block" : "none"}` }}
    >
      <div className="miniature__video__tag">
        {loadVideo && miniatureVideo && <TagVideo />}
      </div>
      <div className="miniature__video__title">
        {dataVideo && (
          <>
            {dataVideo.title}
            {" - "}
            {dataVideo.artistsNames}
          </>
        )}
      </div>
    </div>
  );
};

export default MiniatureVideo;
