import React from "react";
import img1 from "../assets/Group 281.png";
import img2 from "../assets/Group 282.png";
import img3 from "../assets/Group 283.png";
import arrow from "../assets/arrow.png";
import bar1 from "../assets/Group152.svg";

const Section3 = () => {
  return (
    <>
      <div className="section3-support">
        <div className="support3-text">
          <h2 className="sec3-head">
            Let your loved ones know where you are. Have them download the
            Home&Away app to receive updates on your location.
          </h2>
        </div>

        <div className="imges-sec3">
          <div className="img1-div">
            <img className="img-1" src={img1} />
            <h1 className="head-sec3">TAP</h1>
            <h2 className="head-sec4">Press the DOT Wearable</h2>
            <p className="para-sec4">
              Or call through the app on your smartphone. Be connected to
              Emergency Response Agent, in less than 30 seconds.
            </p>
          </div>

          <div className="img-arrow">
            <img className="arrow-1" src={arrow} />
          </div>

          <div className="img2-div">
            <img className="img-1" src={img2} />
            <h1 className="head-sec3">CONNECT</h1>
            <h2 className="head-sec4">Via audio, video or GPS</h2>
            <p className="para-sec4">
              Your agent will notify your family or health care provider and
              stay on the line until help arrives, so you are never alone.
            </p>
          </div>

          <div className="img-arrow">
            <img className="arrow-1" src={arrow} />
          </div>

          <div className="img3-div">
            <img className="img-1" src={img3} />
            <h1 className="head-sec3">GET HELP.</h1>
            <h2 className="head-sec4">We send the help you need, fast.</h2>
            <p className="para-sec4">
              Or call through the app on your smartphone. Be connected to
              Emergency Response Agent, in less than 30 seconds.
            </p>
          </div>
        </div>
      </div>

      <div className="section3-text">
        <h1 className="section3-head">
          Turn Your Smartphone Into An Emergency Response Device.
        </h1>
        <img className="bar-2" src={bar1} />
      </div>
      <div className="btn-secdiv">
        <button className="btn-sec3">Order Today</button>
      </div>
    </>
  );
};

export default Section3;
