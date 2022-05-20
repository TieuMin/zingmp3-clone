import React from "react";

const NameSinger = ({ artist }) => {
  return (
    <>
      <a href="#" className="name__singer">
        {artist.name}
      </a>
      <span className="singer__end">, </span>
    </>
  );
};

export default NameSinger;
