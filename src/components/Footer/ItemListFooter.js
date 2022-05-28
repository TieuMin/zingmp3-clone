import React from "react";
import NameSinger from "../../pages/NameSinger/NameSinger";

const ItemListFooter = ({ item, idSong, setIdSong, setBtnPlay }) => {
  return (
    <>
      {idSong !== item.encodeId ? (
        <div className="list__item__ft item__noactive">
          <div className="item__list__ft">
            <a className="img__list__ft">
              <img src={item.thumbnail} alt="thumbnail" />
              <div className="option__playlist__selection">
                <div
                  className="option__selection"
                  onClick={() => {
                    setIdSong(item.encodeId);
                    setBtnPlay(true);
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </a>
            <div className="subtitle__list__ft">
              <div className="item__title__album">{item.title}</div>
              <nav className="subsinger__music__library item__title__album1">
                {item.artists ? (
                  item.artists.map((artist, index) => {
                    return <NameSinger key={index} artist={artist} />;
                  })
                ) : (
                  <a href="#">{item.artistsNames}</a>
                )}
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemListFooter;
