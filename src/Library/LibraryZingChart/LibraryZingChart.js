import React from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";

const LibraryZingChart = ({ data, rank }) => {
  let chartData = {
    graphset: [
      {
        type: "line",
        theme: "classic",
        backgroundColor: "rgba(0, 0, 0, 0)",
        width: "100%",
        height: "300px",
        globals: {
          fontFamily: "Arial",
        },
        plot: {
          barsOverlap: "55%",
        },
        plotarea: {},
        scaleX: {
          values: [
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "24:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
          ],
          guide: {
            visible: false,
          },
          tick: {
            visible: false,
          },
          item: {
            fontColor: "#E3E3E5",
          },
          lineColor: "none",
        },
        scaleY: {
          values: "0:60:15",
          guide: {
            lineStyle: "dashed",
            lineColor: "#E3E3E5",
          },
          tick: {
            visible: false,
          },
          item: {
            visible: false,
          },
          lineColor: "none",
        },
        crosshairX: {
          lineColor: "#74b9ff",
          lineWidth: "2px",
          plotLabel: {
            visible: false,
          },
          scaleLabel: {
            visible: false,
          },
        },
        series: [
          {
            values: [
              23, 20, 28, 24, 23, 24, 25, 27, 24, 22, 26, 24, 15, 14, 13, 9, 7,
              6, 14, 15, 16, 17, 18, 22,
            ],
            tooltip: {
              //HTML Tooltips
              text: `<div class='chart__alert'><div class='item__chart__alert' style='background-color: rgb(227, 80, 80);'><div class='chart__alert__left'><div class='list__chart__alert'><div class='chart__alert__thumb' style='margin-right: 10px;'><img src=${
                data.items[2].album.thumbnail
              } alt=''></div><div class='chart__alert__infor'><div class='subtitle__chart__alert'><div class='title__chart__alert'>...</div></div><div class='chart__alert__singer'>${
                data.items[2].artists[0].name
              }...</div></div></div></div><div class='chart__alert__right'><span>${Math.round(
                (data.items[2].score / rank) * 100
              )}%</span></div></div></div>`,
              "html-mode": true,
              backgroundColor: "none",
            },
            aspect: "spline",
            lineColor: "rgb(227, 80, 80)",
            lineWidth: "2px",
            marker: {
              borderColor: "rgb(227, 80, 80)",
              borderWidth: "2px",
              size: "4px",
              visible: false,
            },
            hoverMarker: {
              type: "circle",
              backgroundColor: "rgb(227, 80, 80)",
              borderColor: "#F4F4F4",
              borderWidth: "3px",
              size: "6px",
              visible: true,
            },
          },
          {
            values: [
              34, 28, 42, 41, 35, 30, 31, 34, 35, 40, 38, 36, 32, 28, 25, 20,
              18, 17, 19, 22, 23, 28, 30, 32,
            ],
            tooltip: {
              //HTML Tooltips
              text: `<div class='chart__alert'><div class='item__chart__alert' style='background-color: rgb(227, 80, 80);'><div class='chart__alert__left'><div class='list__chart__alert'><div class='chart__alert__thumb' style='margin-right: 10px;'><img src=${
                data.items[1].album.thumbnail
              } alt=''></div><div class='chart__alert__infor'><div class='subtitle__chart__alert'><div class='title__chart__alert'>...</div></div><div class='chart__alert__singer'>${
                data.items[1].artists[0].name
              }...</div></div></div></div><div class='chart__alert__right'><span>${Math.round(
                (data.items[1].score / rank) * 100
              )}%</span></div></div></div>`,
              "html-mode": true,
              backgroundColor: "none",
            },
            aspect: "spline",
            lineColor: "rgb(39, 189, 156)",
            lineWidth: "2px",
            marker: {
              backgroundColor: "#F4F4F4",
              borderColor: "rgb(39, 189, 156)",
              borderWidth: "1px",
              shadow: false,
              size: "5px",
              visible: false,
            },
            hoverMarker: {
              type: "circle",
              backgroundColor: "rgb(39, 189, 156)",
              borderColor: "#F4F4F4",
              borderWidth: "3px",
              size: "6px",
              visible: true,
            },
          },
          {
            values: [
              44, 48, 46, 48, 50, 45, 43, 40, 45, 43, 42, 41, 39, 38, 35, 30,
              28, 27, 30, 33, 38, 42, 44, 47,
            ],
            tooltip: {
              //HTML Tooltips
              text: `<div class='chart__alert'><div class='item__chart__alert' style='background-color: rgb(227, 80, 80);'><div class='chart__alert__left'><div class='list__chart__alert'><div class='chart__alert__thumb' style='margin-right: 10px;'><img src=${
                data.items[0].album.thumbnail
              } alt=''></div><div class='chart__alert__infor'><div class='subtitle__chart__alert'><div class='title__chart__alert'>...</div></div><div class='chart__alert__singer'>${
                data.items[0].artists[0].name
              }...</div></div></div></div><div class='chart__alert__right'><span>${Math.round(
                (data.items[0].score / rank) * 100
              )}%</span></div></div></div>`,
              "html-mode": true,
              backgroundColor: "none",
            },
            aspect: "spline",
            lineColor: "rgb(74, 144, 226)",
            lineWidth: "2px",
            marker: {
              backgroundColor: "#fff",
              backgroundColor: "#F4F4F4",
              borderColor: "rgb(74, 144, 226)",
              borderWidth: "1px",
              shadow: false,
              size: "5px",
              visible: false,
            },
            hoverMarker: {
              type: "circle",
              backgroundColor: "rgb(74, 144, 226)",
              borderColor: "#F4F4F4",
              borderWidth: "3px",
              size: "6px",
              visible: true,
            },
          },
        ],
      },
    ],
  };

  return <ZingChart data={chartData} />;
};

export default LibraryZingChart;
