import React from "react";
import useTimer from "../../hooks/useTimer";

export default function Timer({ fontSize, deadLine, background, area }) {
  let timeObject = useTimer(deadLine);
  const keyList = Object.keys(timeObject);
  return (
    <>
      {keyList.map((value, index) => (
        <TimerSingle
          key={index}
          fontSize={fontSize}
          time={timeObject[value]}
          area={area}
          background={background}
          keyList={keyList}
          index={index}
        />
      ))}
    </>
  );
}

function TimerSingle({ time, area, background, fontSize, keyList, index }) {
  const iconStyle = {
    fontSize: "12px",
    color: "gray",
  };
  return (
    <>
      <div
        className="rounded-circle justify-content-center d-flex align-items-center"
        style={{ background: background, height: area, width: area }}
      >
        <span className="fw-bold" style={{ fontSize: fontSize, color: "gray" }}>
          {time}
        </span>
      </div>
      {keyList.length - 1 === index ? null : (
        <i style={iconStyle} className="bi bi-three-dots-vertical"></i>
      )}
    </>
  );
}
