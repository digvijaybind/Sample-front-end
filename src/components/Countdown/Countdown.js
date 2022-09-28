import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import "./countdown.scss";
import { Link } from "react-router-dom";

const Success = () => (
  <div className="successWrapper">
    <div className="bridgebutton">
      <span className="buttonText">
      <a href="https://app.spherium.finance/" target={'_blank'}>
          <span style={{color: 'white', outline: 'none'}}>Enter The Cross Chain Metaverse</span>
        </a>
       
      </span>
    </div>
  </div>
);
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Success />;
  } else {
    // Render a countdown
    return (
      <div>
        <div style={{ display: "grid" }}>
          <span className="title">
            Spherium Cross Chain Bridge Going Live In:
          </span>
          <span className="text">
            {days < 10 ? "0" + days : days}&nbsp;
            {hours < 10 ? "0" + hours : hours}
            &nbsp;
            {minutes < 10 ? "0" + minutes : minutes}&nbsp;
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
        </div>
        <div className="countdownText">
          <span className="subtitle">Days</span>
          <span className="subtitle">Hours</span>
          <span className="subtitle">Minutes</span>
          <span className="subtitle">Seconds</span>
        </div>
      </div>
    );
  }
};

const CountdownTimer = () => {
  return (
    <div className="body">
      <div className="countdown">
        <Countdown
          date={"Mon, 31 Jan 2022 18:00:00 GMT-0000"}
          renderer={renderer}
        >
          <Success />
        </Countdown>
      </div>
    </div>
  );
};

export default CountdownTimer;
