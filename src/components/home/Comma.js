import React from "react";
import Group53 from "../assets/Group53.svg";
import Ellipse40 from "../assets/Ellipse40.svg";
import Ellipse41 from "../assets/Ellipse41.svg";
import Ellipse44 from "../assets/Ellipse44.svg";
const Comma = () => {
  return (
    <div className="commadiv">
      <img className="comma" src={Group53} />

      <h2>They’ve connected for less:</h2>
      <p className="p1">
        My daughter has been trying to get me to wear a tracker for a while now,
        but they are all too bulky and scream GRANDMA! I never agreed to wear
        any of them until I found the DOT Wearable. It’s a simple, smooth device
        that weighs almost nothing and is easily hidden beneath my clothes. I
        feel safer when wearing my Mobile Medical Alert. I know that if I need
        help, I just need to push the button.
      </p>
      <p className="p2">- Steve M., state</p>

      <div className="mypagination">
      <div style={{marginRight:4,position:"relative"}}  >
        <img src={Ellipse44} style={{position:"absolute",right:"-6px",top:"-1.05px"}}/>
        <img src={Ellipse40} />
        </div>
        <img src={Ellipse41} />
        <img src={Ellipse41} />
        <img src={Ellipse41} />
      </div>
    </div>
  );
};

export default Comma;
