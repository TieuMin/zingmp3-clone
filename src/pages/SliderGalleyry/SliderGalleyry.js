import React, { useRef, useEffect, useState } from "react";

const SliderGalleyry = ({ banners }) => {
  const $ = document.querySelector.bind(document);
  let nextSlideAuto;
  const nextSlide = () => {
    const galleryFirts = $(".gallery__item.gallery__item__firts");
    const galleryPrevous = $(".gallery__item.gallery__item__prevous");
    const gallerySelected = $(".gallery__item.gallery__item__selected");
    const galleryNext = $(".gallery__item.gallery__item__next");
    const galleryLast = $(".gallery__item.gallery__item__last");
    const galleryAdd = $(".gallery__item.gallery__item__add");

    gallerySelected.classList.replace(
      "gallery__item__selected",
      "gallery__item__prevous"
    );
    galleryNext.classList.replace(
      "gallery__item__next",
      "gallery__item__selected"
    );
    galleryLast.classList.replace("gallery__item__last", "gallery__item__next");
    galleryAdd.classList.replace("gallery__item__add", "gallery__item__last");
    galleryFirts.classList.replace(
      "gallery__item__firts",
      "gallery__item__add"
    );
    galleryPrevous.classList.replace(
      "gallery__item__prevous",
      "gallery__item__firts"
    );
  };

  const prevSlide = () => {
    const galleryFirts = $(".gallery__item.gallery__item__firts");
    const galleryPrevous = $(".gallery__item.gallery__item__prevous");
    const gallerySelected = $(".gallery__item.gallery__item__selected");
    const galleryNext = $(".gallery__item.gallery__item__next");
    const galleryLast = $(".gallery__item.gallery__item__last");
    const galleryAdd = $(".gallery__item.gallery__item__add");

    gallerySelected.classList.replace(
      "gallery__item__selected",
      "gallery__item__next"
    );
    galleryNext.classList.replace("gallery__item__next", "gallery__item__last");
    galleryLast.classList.replace("gallery__item__last", "gallery__item__add");
    galleryAdd.classList.replace("gallery__item__add", "gallery__item__firts");
    galleryFirts.classList.replace(
      "gallery__item__firts",
      "gallery__item__prevous"
    );
    galleryPrevous.classList.replace(
      "gallery__item__prevous",
      "gallery__item__selected"
    );
  };

  const HandlerClick = {
    nextSlideBtn: () => {
      nextSlide();
      clearInterval(nextSlideAuto);
      nextSlideAuto = setInterval(nextSlide, 5000);
    },
    prevSlideBtn: () => {
      prevSlide();
      clearInterval(nextSlideAuto);
      nextSlideAuto = setInterval(nextSlide, 5000);
    },
  };

  useEffect(() => {
    nextSlideAuto = setInterval(nextSlide, 5000);

    // clear interval
    return () => clearInterval(nextSlideAuto);
  }, []);

  return (
    <div className="gallery__container">
      <div className="prev__slide__galleyry">
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => HandlerClick.prevSlideBtn()}
        ></i>
      </div>
      <div className="gallery__item gallery__item__add">
        <a href="#">
          <img src={banners.items[0].banner} alt="" />
        </a>
      </div>
      <div className="gallery__item gallery__item__firts">
        <a href="#">
          <img src={banners.items[1].banner} alt="" />
        </a>
      </div>
      <div className="gallery__item gallery__item__prevous">
        <a href="#">
          <img src={banners.items[2].banner} alt="" />
        </a>
      </div>
      <div className="gallery__item gallery__item__selected">
        <a href="#">
          <img src={banners.items[3].banner} alt="" />
        </a>
      </div>
      <div className="gallery__item gallery__item__next">
        <a href="#">
          <img src={banners.items[4].banner} alt="" />
        </a>
      </div>
      <div className="gallery__item gallery__item__last">
        <a href="#">
          <img src={banners.items[5].banner} alt="" />
        </a>
      </div>
      <div className="next__slide__galleyry">
        <i
          className="fa-solid fa-chevron-right"
          onClick={() => HandlerClick.nextSlideBtn()}
        ></i>
      </div>
    </div>
  );
};

export default SliderGalleyry;
