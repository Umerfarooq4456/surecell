import React from "react";
import Group18 from "../assets/Group18.svg";
import Group19 from "../assets/Group19.svg";
import Group17 from "../assets/Group17.svg";

const Unlimited = () => {
  return (
    <div className="unlimiteddiv">
      <div>
        <img src={Group19} />
        <div className="textdiv">
        Unlimited Talk
        </div>
      </div>
      <div>
        <img src={Group18} />
        <div className="textdiv">
        Unlimited Data
        </div>
      </div>
      <div>
        <img src={Group17} />
        <div className="textdiv">
        Unlimited Text
        </div>
      </div>
    </div>
  );
};

export default Unlimited;
