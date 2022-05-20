import React, { useEffect } from "react";
import ImgMixtape from "../../store/storeimg/storeimg";

const ItemMixtape = () => {
  const $$ = document.querySelectorAll.bind(document);
  const imgMixtape = ImgMixtape;

  useEffect(() => {
    const itemMixtape = Array($$(".item__playlist__animation"));
    const imgAnimation = Array($$(".img__playlist__animation img"));
    const imgFilter = Array($$(".img__filter__animation img"));

    const autoMixtape = () => {
      let mixtape5 = 5;
      let mixtape10 = 10;
      let mixtape15 = 15;
      let mixtape20 = 20;

      const handleAnimation = (items, index) => {
        for (let i = 0; i < 5; i++) {
          switch (i) {
            case 1:
              setTimeout(() => {
                imgAnimation[0][1].src = imgMixtape[mixtape5].url;
                imgFilter[0][1].src = imgMixtape[mixtape5].url;
                if (index == 4) mixtape5 = 5;
                else mixtape5++;
              }, 7000);
              break;
            case 2:
              setTimeout(() => {
                imgAnimation[0][2].src = imgMixtape[mixtape10].url;
                imgFilter[0][2].src = imgMixtape[mixtape10].url;
                if (index == 4) mixtape10 = 10;
                else mixtape10++;
              }, 9000);
              break;
            case 3:
              setTimeout(() => {
                imgAnimation[0][3].src = imgMixtape[mixtape15].url;
                imgFilter[0][3].src = imgMixtape[mixtape15].url;
                if (index == 4) mixtape15 = 15;
                else mixtape15++;
              }, 11000);
              break;
            case 4:
              setTimeout(() => {
                imgAnimation[0][4].src = imgMixtape[mixtape20].url;
                imgFilter[0][4].src = imgMixtape[mixtape20].url;
                if (index == 4) {
                  handleAnimation(itemMixtape, 0);
                  mixtape20 = 20;
                } else {
                  handleAnimation(itemMixtape, index + 1);
                  mixtape20++;
                }
              }, 13000);
              break;
            default:
              setTimeout(() => {
                imgAnimation[0][0].src = imgMixtape[index].url;
                imgFilter[0][0].src = imgMixtape[index].url;
              }, 5000);
              break;
          }
        }
      };

      handleAnimation(itemMixtape, 0);
    };

    autoMixtape();
  }, []);

  return (
    <>
      <div className="item__playlist__animation">
        <div className="img__playlist__animation">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/covers/6/e/6e7b90d96728c9ce1b4c2a104d622784_1507799020.jpg"
            alt=""
          />
          <div className="option__playlist__selection">
            <div className="option__selection library__add__selection">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="option__selection item__play__selection">
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="option__selection item__option__selection">
              <div className="option__icon__selection">● ● ●</div>
            </div>
          </div>
        </div>
        <div className="title__playlist__animation">
          <div className="img__filter__animation">
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/covers/6/e/6e7b90d96728c9ce1b4c2a104d622784_1507799020.jpg"
              alt=""
            />
          </div>
          <div className="subtitle__playlist__animation">
            Mixtape Yêu Thương Nhau Gì Đâu
          </div>
        </div>
      </div>
      <div className="item__playlist__animation">
        <div className="img__playlist__animation">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/1/f/1/a/1f1ab8428a983f8a7700bfaa5591713b.jpg"
            alt=""
          />
          <div className="option__playlist__selection">
            <div className="option__selection library__add__selection">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="option__selection item__play__selection">
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="option__selection item__option__selection">
              <div className="option__icon__selection">● ● ●</div>
            </div>
          </div>
        </div>
        <div className="title__playlist__animation">
          <div className="img__filter__animation">
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/1/f/1/a/1f1ab8428a983f8a7700bfaa5591713b.jpg"
              alt=""
            />
          </div>
          <div className="subtitle__playlist__animation">
            Mixtape Cô Độc Vương
          </div>
        </div>
      </div>
      <div className="item__playlist__animation">
        <div className="img__playlist__animation">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/0/8/5/3/0853118a8d14808d8526bc717409ac90.jpg"
            alt=""
          />
          <div className="option__playlist__selection">
            <div className="option__selection library__add__selection">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="option__selection item__play__selection">
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="option__selection item__option__selection">
              <div className="option__icon__selection">● ● ●</div>
            </div>
          </div>
        </div>
        <div className="title__playlist__animation">
          <div className="img__filter__animation">
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/0/8/5/3/0853118a8d14808d8526bc717409ac90.jpg"
              alt=""
            />
          </div>
          <div className="subtitle__playlist__animation">
            Mixtape Đường Tôi Chở Em Về
          </div>
        </div>
      </div>
      <div className="item__playlist__animation">
        <div className="img__playlist__animation">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/avatars/1/2/3/5/12358eabe806af65178e625d01c1dfb3.jpg"
            alt=""
          />
          <div className="option__playlist__selection">
            <div className="option__selection library__add__selection">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="option__selection item__play__selection">
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="option__selection item__option__selection">
              <div className="option__icon__selection">● ● ●</div>
            </div>
          </div>
        </div>
        <div className="title__playlist__animation">
          <div className="img__filter__animation">
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/avatars/1/2/3/5/12358eabe806af65178e625d01c1dfb3.jpg"
              alt=""
            />
          </div>
          <div className="subtitle__playlist__animation">
            Mixtape Anh Quân Idol
          </div>
        </div>
      </div>
      <div className="item__playlist__animation">
        <div className="img__playlist__animation">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/covers/1/9/191a3ccf66f83bd6f9470c8ffa96387d_1454569375.jpg"
            alt=""
          />
          <div className="option__playlist__selection">
            <div className="option__selection library__add__selection">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="option__selection item__play__selection">
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="option__selection item__option__selection">
              <div className="option__icon__selection">● ● ●</div>
            </div>
          </div>
        </div>
        <div className="title__playlist__animation">
          <div className="img__filter__animation">
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/covers/1/9/191a3ccf66f83bd6f9470c8ffa96387d_1454569375.jpg"
              alt=""
            />
          </div>
          <div className="subtitle__playlist__animation">
            Mixtape Anh Mệt Rồi
            <div className="name__singer__all">
              <a href="#" className="name__singer">
                Anh Quân Idol
              </a>
              ,...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemMixtape;
