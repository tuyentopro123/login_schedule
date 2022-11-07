import React from "react";
import "./Schedule.css";
import { useLocation } from "react-router";
import bgStudy from "../../assets/img/bg-study.webp";

const Schedule = ({ role }) => {
  const location = useLocation();
  const state = location.state;

  const week = [
    "thứ 2",
    "thứ 3",
    "thứ 4",
    "thứ 5",
    "thứ 6",
    "thứ 7",
    "chủ nhật",
  ];

  const schedule = [
    {
      day: 2,
      sun: ["toán", "lý", "hóa", "anh", "sinh"],
      moon: ["toán", "lý", "hóa", "anh", "sinh"],
    },
    {
      day: 3,
      sun: ["toán", "lý", "hóa", "anh", "sinh"],
      moon: ["toán", "lý", "hóa", "anh", "sinh"],
    },
    {
      day: 4,
      sun: ["toán", "lý", "hóa", "anh", "sinh"],
      moon: ["toán", "lý", "hóa", "anh", "sinh"],
    },
    {
      day: 5,
      sun: ["toán", "lý", "hóa", "anh", "sinh"],
      moon: ["toán", "lý", "hóa", "anh", "sinh"],
    },
    {
      day: 6,
      sun: ["toán", "lý", "hóa", "anh", "sinh"],
      moon: ["toán", "lý", "hóa", "anh", "sinh"],
    },
    {
      day: 7,
      sun: ["toán", "lý", "hóa", "anh", "sinh"],
      moon: ["toán", "lý", "hóa", "anh", "sinh"],
    },
    {
      day: 8,
      sun: ["toán", "lý", "hóa", "anh", "sinh"],
      moon: ["toán", "lý", "hóa", "anh", "sinh"],
    },
  ];
  return (
    <div className="schedule" style={{ backgroundImage: `url(${bgStudy})` }}>
      <div className="schedule__container">
        <div className="info">
          <div className="info__img">
            <img src="https://i.imgur.com/9vOtlO3.png" alt="" />
            <h2>{state.name}</h2>
          </div>
          <form action="">
            <div className="info__option">
              <label htmlFor="">email : </label>
              <span>{state.username}</span>
            </div>
            <div className="info__option">
              <label htmlFor="">sđt : </label>
              <span>{state.number}</span>
            </div>
            <div className="info__option">
              <label htmlFor="">role : </label>
              <span>{state.role}</span>
            </div>
          </form>
        </div>

        <div className="content">
          <div className="content-container">
            {week.map((day, i) => (
              <div key={i} id={`box${i + 1}`} className="content-box">
                <span>{day}</span>
              </div>
            ))}
            {schedule.map((item, i) => (
              <div key={i} id={`box${i + 8}`} className="content-box">
                {item.sun.map((sub, index) => (
                  <input
                    disabled={true}
                    key={index}
                    type="text"
                    defaultValue={sub}
                  />
                ))}
              </div>
            ))}
            {schedule.map((item, i) => (
              <div id={`box${i + 15}`} className="content-box">
                {item.moon.map((sub, index) => (
                  <input
                    disabled={true}
                    key={index}
                    type="text"
                    defaultValue={sub}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
