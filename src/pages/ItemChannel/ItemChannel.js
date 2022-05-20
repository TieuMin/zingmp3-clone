import React, { useState } from "react";

const ItemChannel = ({ lists }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="header__playlist__selection">
        <span>sự kiện</span>
        <div className="btn__channel">
          <span
            className={`btn__channel__prev ${
              !isActive ? "unprev__channel" : ""
            }`}
          >
            <i
              className="fa-solid fa-chevron-left"
              onClick={() => setIsActive(false)}
            ></i>
          </span>
          <span
            className={`btn__channel__next ${
              isActive ? "unnext__channel" : ""
            }`}
          >
            <i
              className="fa-solid fa-chevron-right"
              onClick={() => setIsActive(true)}
            ></i>
          </span>
        </div>
      </div>
      <div className="channel__selection">
        <div
          className="list__channel__selection"
          style={{
            transform: `${isActive ? "translate3d(-352px, 0px, 0px)" : ""}`,
          }}
        >
          {lists.items.map((item, index) => {
            if (index < 4) {
              return (
                <div key={index} className="item__channel__selection">
                  <div className="img__channel__selection">
                    <img src={item.coverH} alt="" />
                    <span className="opacity__img__channel"></span>
                    <div className="item__tag__title">
                      <div
                        className="tag__channel"
                        style={{ cursor: "pointer" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="title__channel"
                        style={{ cursor: "pointer" }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="subtitle__channel"
                        style={{ cursor: "pointer" }}
                      >
                        {item.startText}
                      </div>
                    </div>
                  </div>
                  <div className="event__follow">
                    <div className="event__follow__left">
                      <div className="subtitle__follow">Lượt quan tâm</div>
                      <div className="user__follow">
                        <div className="count__follow">+{item.totalFollow}</div>
                        {item.followers.map((user, index) => {
                          return (
                            <div key={index} className="user__item">
                              <img src={user.avatar} alt="" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="event__follow__right">
                      <span className="follower__discover">quan tâm</span>
                      {/* <span className="active__follower">Đã quan tâm</span> */}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ItemChannel;
