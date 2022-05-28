import React, { useContext } from "react";
import NameSinger from "../../NameSinger/NameSinger";
import { VideoContext } from "../../../context/GetVideoProvider";
import { GetSongContext } from "../../../context/GetSongProvider";

const SearchMv = ({ datas }) => {
  const { setActivePlayVideo, setIdVideo, setLoadList } =
    useContext(VideoContext);
  const { setclose } = useContext(GetSongContext);

  return (
    <div className="columns__mv">
      {datas.map((item, index) => {
        if (index < 6) {
          return (
            <div key={index} className="column__mv mt-20">
              <div className="image__mv">
                <img src={item.thumbnail} alt="" />
                {item.artists && item.streamingStatus === 1 ? (
                  ""
                ) : (
                  <img
                    className="image__vip"
                    src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.6.25/static/media/vip-label.3dd6ac7e.svg"
                    style={{ width: "30px" }}
                  />
                )}
                {item.artists && item.streamingStatus === 1 ? (
                  <span
                    className="controller__itemmedia play__item"
                    onClick={() => {
                      setActivePlayVideo(true);
                      setLoadList(true);
                      setIdVideo(item.encodeId);
                    }}
                  >
                    <i className="far fa-play-circle"></i>
                  </span>
                ) : (
                  <span
                    className="controller__itemmedia play__item"
                    onClick={() => setclose(true)}
                  >
                    <i className="far fa-play-circle"></i>
                  </span>
                )}
              </div>
              <div className="profile">
                <div className="avatar__profile">
                  <img
                    src={item.artist ? item.artist.thumbnail : item.thumbnail}
                    alt=""
                  />
                </div>
                <div className="profle__content">
                  <p>
                    <a href="#">{item.title}</a>
                  </p>
                  <div>
                    {item.artists ? (
                      item.artists.map((artist, index) => {
                        return <NameSinger key={index} artist={artist} />;
                      })
                    ) : (
                      <a href="#">{item.artistsNames}</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SearchMv;
