import React from "react";
import "./Section1.css";
import Group from "../assets/Group.png";
import Group2 from "../assets/Group2.png";
import Button from "react-bootstrap/Button";
import Group254 from "../assets/Group254.svg";
import Group255 from "../assets/Group255.svg";
import Group256 from "../assets/Group256.svg";

const Section1 = () => {
  return (
    <div className="sectionk">
      <div className="leftdiv">
        <h1 className="hd1">
          Talk More
          <br /> Pay Less <br />
          <img
          className="talkborder"
            style={{ display: "flex", width: "32%", height: "11px" }}
            src={Group2}
          />
        </h1>
        <h2 className="hd2" style={{ fontFamily: "Nunito Sans , SemiBold" }}>
          Starting at{" "}
          <span
           className="mo15"
            style={{
              fontFamily: "Nunito Sans, ExtraBold",
              fontSize: "50px",
              fontWeight: "800",
            }}
          >
            $15/mo
          </span>{" "}
        </h2>
        <Button
          className="buttonw"
          style={{ fontFamily: "Nunito Sans, Bold" }}
          variant="primary"
        >
          Join Today
        </Button>{" "}
        <div className="card1">
          <h3
            className="pp1"
            style={{ color: "#EE8B3F", fontFamily: "Nunito Sans, ExtraBold" }}
          >
            Save up to{" "}
            <span className="save-upto" style={{ fontFamily: "Nunito Sans, Bold", color: "#152D79" }}>
              {" "}
              $300 on your yearly cell phone bill
            </span>
          </h3>
        </div>
      </div>

      <div className="rightdiv">
        <div className="cd1">
          <h2 className="cd1h">2GB HIGH SPEED DATA</h2>
        </div>
        <img className="img" src={Group} />

        <div className="cd1i">
          <div className="a1">
            <img className="a2" src={Group254} />
          </div>
          <div className="a1">
            <img className="a2" 
              style={{ marginLeft: "13px", marginRight: "13px" }}
              src={Group255}
            />
          </div>
          <div className="a1">
            <img  className="a2"  src={Group256} />
          </div>
        </div>

        <div className="cd2">
          <h2
            className="cd2h"
            style={{
              fontSize: "85px",
              marginTop: "41px",
              marginRight: "-18px",
            }}
          >
            <span className="dollar" style={{ fontSize: "30px" }}>
              $
            </span>{" "}
            15 <span className="mo1" style={{ fontSize: "35px", marginTop: "10px" }}>/mo</span>
          </h2>
          <div className="cd2t">
            <h1 className="bestvalue">Best Value</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
