import React from "react";
import img1 from "../assets/Group 286.svg";
import img2 from "../assets/Group 287.svg";
import img3 from "../assets/Group 288.svg";

const Section5 = () => {
  return (
    <>
      <div className="section5support">
        <div className="basis">
          <img src={img1} />
          <h4 className="basis-head">DOT Wearable Bluetooth Button</h4>
          <p className="basis-para">Connect seamlessly to our Medical Alert Protection System. Tap. Connect. Get Help.</p>
        </div>

        <div className="line"></div>

        <div className="basis">
          <img src={img2} />
          <h4  className="basis-head">Location Assist</h4>
          <p className="basis-para">Have loved ones download the app to receive updates on your safety and location.</p>
        </div>
        <div className="line"></div>
        <div className="basis">
          <img src={img3} />
          <h4  className="basis-head">Fall Detection</h4>
          <p className="basis-para">If a fall is detected, our agents will reach out to see if you need help.</p>
        </div>
      </div>
    </>
  );
};

export default Section5;
