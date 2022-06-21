import React from "react";

const TopZingChart = ({ datas }) => {
  return (
    <div className="list__zing__chart">
      {datas && datas.items ? (
        datas.items.map((data, index) => {
          return (
            <div key={index} className="top__song">
              <div className="top__song__left">
                <span className="number__top_song">{index + 1}</span>
                <div className="line__">-</div>
                <div className="song__content">
                  <div className="thumbnail__children">
                    <img src={data.thumbnail} alt="thumbnail" />
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <div className="song__track__singer">
                    <div className="item__song">{data.title}</div>
                    <a href="#" className="item__single">
                      {data.artistsNames}
                    </a>
                  </div>
                </div>
              </div>
              <div className="top__song__content">
                <a href="#" className="item__single">
                  {data.title}
                </a>
              </div>
              <div className="top__song_right">
                <div className="icon__top__song">
                  <div className="media__narrow">
                    <div>
                      <i className="fa fa-microphone"></i>
                    </div>
                  </div>
                  <div className="media__narrow">
                    <div>
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  </div>
                  <div className="media__narrow">
                    <div>
                      <div className="np__menu__option">● ● ●</div>
                      <ul className="np__menu__children menu__etc">
                        <div className="option__chindren__one">
                          <div className="option__chindren__img">
                            <div>
                              <img src={data.thumbnail} alt="" />
                            </div>
                          </div>
                          <div className="option__chindren__sub">
                            <h2>{data.title}</h2>
                            <div>
                              <span>
                                <i className="fa-regular fa-heart"></i> 6K
                              </span>
                              <span>
                                <i className="fa-solid fa-headphones"></i> 138K
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="option__chindren__two">
                          <div className="option__two__item option__chindren__down">
                            <i className="fa-solid fa-download"></i>
                            <div>Tải xuống</div>
                          </div>
                          <div className="option__two__item option__chindren__sing">
                            <i className="fa-solid fa-microphone"></i>
                            <div>Lời bài hát</div>
                          </div>
                          <div className="option__two__item option__chindren__block">
                            <i className="fa-solid fa-ban"></i>
                            <div>Chặn</div>
                          </div>
                        </div>
                        <li className="active__playlist">
                          <i className="fa-solid fa-circle-plus"></i>
                          <span>
                            Thêm vào playlist{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                          <ul className="form__playList">
                            <div>
                              <input
                                type="text"
                                name="search__playlist"
                                className="search__playlist"
                                placeholder="Tìm playlist"
                              />
                            </div>
                            <li>
                              <i className="fa fa-plus-square"></i> Tạo playlist
                              mới
                            </li>
                            <nav className="list__playlist">
                              <li>
                                <div className="list_playlist__item">
                                  <nav>
                                    <i className="fa fa-list-ol"></i>
                                  </nav>
                                  Love
                                </div>
                              </li>
                            </nav>
                          </ul>
                        </li>
                        <li>
                          <i className="fa fa-microphone"></i>
                          <span>Phát cùng lời bài hát</span>
                        </li>
                        <li>
                          <i className="fa-solid fa-comment"></i>
                          <span>Bình luận</span>
                        </li>
                        <li>
                          <i className="fa-solid fa-link"></i>
                          <span>Sao chép link</span>
                        </li>
                        <li className="option__share">
                          <i className="fa-solid fa-share"></i>
                          <span>
                            Chia sẻ{" "}
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                          <ul className="item__share">
                            <li className="icon__fb">
                              <i className="fa-brands fa-facebook"></i> Faboock
                            </li>
                            <li className="icon__zalo">
                              <i className="fa-solid fa-comment-dots"></i> Zalo
                            </li>
                            <li>
                              <i className="fa-solid fa-code"></i> Mã nhúng
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="duration__time__song">04.20</div>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div className="top__song">
            <div className="top__song__left">
              <span className="number__top_song">1</span>
              <div className="line__">-</div>
              <div className="song__content">
                <div className="thumbnail__children">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                    alt="thumbnail"
                  />
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className="song__track__singer">
                  <div className="item__song">Cả Một Trời Thương</div>
                  <a href="#" className="item__single">
                    Noo Phước Thịnh
                  </a>
                </div>
              </div>
            </div>
            <div className="top__song__content">
              <a href="#" className="item__single">
                Cả Một Trời Thương Nhớ (Live in HOA Concert)
              </a>
            </div>
            <div className="top__song_right">
              <div className="icon__top__song">
                <div className="media__narrow">
                  <div>
                    <i className="fa fa-microphone"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <div className="np__menu__option">● ● ●</div>
                    <ul className="np__menu__children menu__etc">
                      <div className="option__chindren__one">
                        <div className="option__chindren__img">
                          <div>
                            <img
                              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="option__chindren__sub">
                          <h2>Cả Một Trời Thương Nhớ (Live in HOA Concert)</h2>
                          <div>
                            <span>
                              <i className="fa-regular fa-heart"></i> 6K
                            </span>
                            <span>
                              <i className="fa-solid fa-headphones"></i> 138K
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="option__chindren__two">
                        <div className="option__two__item option__chindren__down">
                          <i className="fa-solid fa-download"></i>
                          <div>Tải xuống</div>
                        </div>
                        <div className="option__two__item option__chindren__sing">
                          <i className="fa-solid fa-microphone"></i>
                          <div>Lời bài hát</div>
                        </div>
                        <div className="option__two__item option__chindren__block">
                          <i className="fa-solid fa-ban"></i>
                          <div>Chặn</div>
                        </div>
                      </div>
                      <li className="active__playlist">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>
                          Thêm vào playlist{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="form__playList">
                          <div>
                            <input
                              type="text"
                              name="search__playlist"
                              className="search__playlist"
                              placeholder="Tìm playlist"
                            />
                          </div>
                          <li>
                            <i className="fa fa-plus-square"></i> Tạo playlist
                            mới
                          </li>
                          <nav className="list__playlist">
                            <li>
                              <div className="list_playlist__item">
                                <nav>
                                  <i className="fa fa-list-ol"></i>
                                </nav>
                                Love
                              </div>
                            </li>
                          </nav>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-microphone"></i>
                        <span>Phát cùng lời bài hát</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-comment"></i>
                        <span>Bình luận</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-link"></i>
                        <span>Sao chép link</span>
                      </li>
                      <li className="option__share">
                        <i className="fa-solid fa-share"></i>
                        <span>
                          Chia sẻ <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="item__share">
                          <li className="icon__fb">
                            <i className="fa-brands fa-facebook"></i> Faboock
                          </li>
                          <li className="icon__zalo">
                            <i className="fa-solid fa-comment-dots"></i> Zalo
                          </li>
                          <li>
                            <i className="fa-solid fa-code"></i> Mã nhúng
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="duration__time__song">04.20</div>
            </div>
          </div>
          <div className="top__song">
            <div className="top__song__left">
              <span className="number__top_song">2</span>
              <div className="line__">-</div>
              <div className="song__content">
                <div className="thumbnail__children">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                    alt="thumbnail"
                  />
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className="song__track__singer">
                  <div className="item__song">Cả Một Trời Thương</div>
                  <a href="#" className="item__single">
                    Noo Phước Thịnh
                  </a>
                </div>
              </div>
            </div>
            <div className="top__song__content">
              <a href="#" className="item__single">
                Cả Một Trời Thương Nhớ (Live in HOA Concert)
              </a>
            </div>
            <div className="top__song_right">
              <div className="icon__top__song">
                <div className="media__narrow">
                  <div>
                    <i className="fa fa-microphone"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <div className="np__menu__option">● ● ●</div>
                    <ul className="np__menu__children menu__etc">
                      <div className="option__chindren__one">
                        <div className="option__chindren__img">
                          <div>
                            <img
                              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="option__chindren__sub">
                          <h2>Cả Một Trời Thương Nhớ (Live in HOA Concert)</h2>
                          <div>
                            <span>
                              <i className="fa-regular fa-heart"></i> 6K
                            </span>
                            <span>
                              <i className="fa-solid fa-headphones"></i> 138K
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="option__chindren__two">
                        <div className="option__two__item option__chindren__down">
                          <i className="fa-solid fa-download"></i>
                          <div>Tải xuống</div>
                        </div>
                        <div className="option__two__item option__chindren__sing">
                          <i className="fa-solid fa-microphone"></i>
                          <div>Lời bài hát</div>
                        </div>
                        <div className="option__two__item option__chindren__block">
                          <i className="fa-solid fa-ban"></i>
                          <div>Chặn</div>
                        </div>
                      </div>
                      <li className="active__playlist">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>
                          Thêm vào playlist{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="form__playList">
                          <div>
                            <input
                              type="text"
                              name="search__playlist"
                              className="search__playlist"
                              placeholder="Tìm playlist"
                            />
                          </div>
                          <li>
                            <i className="fa fa-plus-square"></i> Tạo playlist
                            mới
                          </li>
                          <nav className="list__playlist">
                            <li>
                              <div className="list_playlist__item">
                                <nav>
                                  <i className="fa fa-list-ol"></i>
                                </nav>
                                Love
                              </div>
                            </li>
                          </nav>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-microphone"></i>
                        <span>Phát cùng lời bài hát</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-comment"></i>
                        <span>Bình luận</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-link"></i>
                        <span>Sao chép link</span>
                      </li>
                      <li className="option__share">
                        <i className="fa-solid fa-share"></i>
                        <span>
                          Chia sẻ <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="item__share">
                          <li className="icon__fb">
                            <i className="fa-brands fa-facebook"></i> Faboock
                          </li>
                          <li className="icon__zalo">
                            <i className="fa-solid fa-comment-dots"></i> Zalo
                          </li>
                          <li>
                            <i className="fa-solid fa-code"></i> Mã nhúng
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="duration__time__song">04.20</div>
            </div>
          </div>
          <div className="top__song">
            <div className="top__song__left">
              <span className="number__top_song">3</span>
              <div className="line__">-</div>
              <div className="song__content">
                <div className="thumbnail__children">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                    alt="thumbnail"
                  />
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className="song__track__singer">
                  <div className="item__song">Cả Một Trời Thương</div>
                  <a href="#" className="item__single">
                    Noo Phước Thịnh
                  </a>
                </div>
              </div>
            </div>
            <div className="top__song__content">
              <a href="#" className="item__single">
                Cả Một Trời Thương Nhớ (Live in HOA Concert)
              </a>
            </div>
            <div className="top__song_right">
              <div className="icon__top__song">
                <div className="media__narrow">
                  <div>
                    <i className="fa fa-microphone"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <div className="np__menu__option">● ● ●</div>
                    <ul className="np__menu__children menu__etc">
                      <div className="option__chindren__one">
                        <div className="option__chindren__img">
                          <div>
                            <img
                              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="option__chindren__sub">
                          <h2>Cả Một Trời Thương Nhớ (Live in HOA Concert)</h2>
                          <div>
                            <span>
                              <i className="fa-regular fa-heart"></i> 6K
                            </span>
                            <span>
                              <i className="fa-solid fa-headphones"></i> 138K
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="option__chindren__two">
                        <div className="option__two__item option__chindren__down">
                          <i className="fa-solid fa-download"></i>
                          <div>Tải xuống</div>
                        </div>
                        <div className="option__two__item option__chindren__sing">
                          <i className="fa-solid fa-microphone"></i>
                          <div>Lời bài hát</div>
                        </div>
                        <div className="option__two__item option__chindren__block">
                          <i className="fa-solid fa-ban"></i>
                          <div>Chặn</div>
                        </div>
                      </div>
                      <li className="active__playlist">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>
                          Thêm vào playlist{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="form__playList">
                          <div>
                            <input
                              type="text"
                              name="search__playlist"
                              className="search__playlist"
                              placeholder="Tìm playlist"
                            />
                          </div>
                          <li>
                            <i className="fa fa-plus-square"></i> Tạo playlist
                            mới
                          </li>
                          <nav className="list__playlist">
                            <li>
                              <div className="list_playlist__item">
                                <nav>
                                  <i className="fa fa-list-ol"></i>
                                </nav>
                                Love
                              </div>
                            </li>
                          </nav>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-microphone"></i>
                        <span>Phát cùng lời bài hát</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-comment"></i>
                        <span>Bình luận</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-link"></i>
                        <span>Sao chép link</span>
                      </li>
                      <li className="option__share">
                        <i className="fa-solid fa-share"></i>
                        <span>
                          Chia sẻ <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="item__share">
                          <li className="icon__fb">
                            <i className="fa-brands fa-facebook"></i> Faboock
                          </li>
                          <li className="icon__zalo">
                            <i className="fa-solid fa-comment-dots"></i> Zalo
                          </li>
                          <li>
                            <i className="fa-solid fa-code"></i> Mã nhúng
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="duration__time__song">04.20</div>
            </div>
          </div>
          <div className="top__song">
            <div className="top__song__left">
              <span className="number__top_song">4</span>
              <div className="line__">-</div>
              <div className="song__content">
                <div className="thumbnail__children">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                    alt="thumbnail"
                  />
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className="song__track__singer">
                  <div className="item__song">Cả Một Trời Thương</div>
                  <a href="#" className="item__single">
                    Noo Phước Thịnh
                  </a>
                </div>
              </div>
            </div>
            <div className="top__song__content">
              <a href="#" className="item__single">
                Cả Một Trời Thương Nhớ (Live in HOA Concert)
              </a>
            </div>
            <div className="top__song_right">
              <div className="icon__top__song">
                <div className="media__narrow">
                  <div>
                    <i className="fa fa-microphone"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <div className="np__menu__option">● ● ●</div>
                    <ul className="np__menu__children menu__etc">
                      <div className="option__chindren__one">
                        <div className="option__chindren__img">
                          <div>
                            <img
                              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="option__chindren__sub">
                          <h2>Cả Một Trời Thương Nhớ (Live in HOA Concert)</h2>
                          <div>
                            <span>
                              <i className="fa-regular fa-heart"></i> 6K
                            </span>
                            <span>
                              <i className="fa-solid fa-headphones"></i> 138K
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="option__chindren__two">
                        <div className="option__two__item option__chindren__down">
                          <i className="fa-solid fa-download"></i>
                          <div>Tải xuống</div>
                        </div>
                        <div className="option__two__item option__chindren__sing">
                          <i className="fa-solid fa-microphone"></i>
                          <div>Lời bài hát</div>
                        </div>
                        <div className="option__two__item option__chindren__block">
                          <i className="fa-solid fa-ban"></i>
                          <div>Chặn</div>
                        </div>
                      </div>
                      <li className="active__playlist">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>
                          Thêm vào playlist{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="form__playList">
                          <div>
                            <input
                              type="text"
                              name="search__playlist"
                              className="search__playlist"
                              placeholder="Tìm playlist"
                            />
                          </div>
                          <li>
                            <i className="fa fa-plus-square"></i> Tạo playlist
                            mới
                          </li>
                          <nav className="list__playlist">
                            <li>
                              <div className="list_playlist__item">
                                <nav>
                                  <i className="fa fa-list-ol"></i>
                                </nav>
                                Love
                              </div>
                            </li>
                          </nav>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-microphone"></i>
                        <span>Phát cùng lời bài hát</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-comment"></i>
                        <span>Bình luận</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-link"></i>
                        <span>Sao chép link</span>
                      </li>
                      <li className="option__share">
                        <i className="fa-solid fa-share"></i>
                        <span>
                          Chia sẻ <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="item__share">
                          <li className="icon__fb">
                            <i className="fa-brands fa-facebook"></i> Faboock
                          </li>
                          <li className="icon__zalo">
                            <i className="fa-solid fa-comment-dots"></i> Zalo
                          </li>
                          <li>
                            <i className="fa-solid fa-code"></i> Mã nhúng
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="duration__time__song">04.20</div>
            </div>
          </div>
          <div className="top__song">
            <div className="top__song__left">
              <span className="number__top_song">5</span>
              <div className="line__">-</div>
              <div className="song__content">
                <div className="thumbnail__children">
                  <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                    alt="thumbnail"
                  />
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className="song__track__singer">
                  <div className="item__song">Cả Một Trời Thương</div>
                  <a href="#" className="item__single">
                    Noo Phước Thịnh
                  </a>
                </div>
              </div>
            </div>
            <div className="top__song__content">
              <a href="#" className="item__single">
                Cả Một Trời Thương Nhớ (Live in HOA Concert)
              </a>
            </div>
            <div className="top__song_right">
              <div className="icon__top__song">
                <div className="media__narrow">
                  <div>
                    <i className="fa fa-microphone"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                <div className="media__narrow">
                  <div>
                    <div className="np__menu__option">● ● ●</div>
                    <ul className="np__menu__children menu__etc">
                      <div className="option__chindren__one">
                        <div className="option__chindren__img">
                          <div>
                            <img
                              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/8/3/0683cf03b2c1f2e169a9439aea0b3d62.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="option__chindren__sub">
                          <h2>Cả Một Trời Thương Nhớ (Live in HOA Concert)</h2>
                          <div>
                            <span>
                              <i className="fa-regular fa-heart"></i> 6K
                            </span>
                            <span>
                              <i className="fa-solid fa-headphones"></i> 138K
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="option__chindren__two">
                        <div className="option__two__item option__chindren__down">
                          <i className="fa-solid fa-download"></i>
                          <div>Tải xuống</div>
                        </div>
                        <div className="option__two__item option__chindren__sing">
                          <i className="fa-solid fa-microphone"></i>
                          <div>Lời bài hát</div>
                        </div>
                        <div className="option__two__item option__chindren__block">
                          <i className="fa-solid fa-ban"></i>
                          <div>Chặn</div>
                        </div>
                      </div>
                      <li className="active__playlist">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>
                          Thêm vào playlist{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="form__playList">
                          <div>
                            <input
                              type="text"
                              name="search__playlist"
                              className="search__playlist"
                              placeholder="Tìm playlist"
                            />
                          </div>
                          <li>
                            <i className="fa fa-plus-square"></i> Tạo playlist
                            mới
                          </li>
                          <nav className="list__playlist">
                            <li>
                              <div className="list_playlist__item">
                                <nav>
                                  <i className="fa fa-list-ol"></i>
                                </nav>
                                Love
                              </div>
                            </li>
                          </nav>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-microphone"></i>
                        <span>Phát cùng lời bài hát</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-comment"></i>
                        <span>Bình luận</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-link"></i>
                        <span>Sao chép link</span>
                      </li>
                      <li className="option__share">
                        <i className="fa-solid fa-share"></i>
                        <span>
                          Chia sẻ <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <ul className="item__share">
                          <li className="icon__fb">
                            <i className="fa-brands fa-facebook"></i> Faboock
                          </li>
                          <li className="icon__zalo">
                            <i className="fa-solid fa-comment-dots"></i> Zalo
                          </li>
                          <li>
                            <i className="fa-solid fa-code"></i> Mã nhúng
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="duration__time__song">04.20</div>
            </div>
          </div>
        </>
      )}
      <div className="jus__content">
        <button className="zm__btn">Xem top 100</button>
      </div>
    </div>
  );
};

export default TopZingChart;
