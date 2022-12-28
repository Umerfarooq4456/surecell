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
    <>
    <div className="sectionone">
    <div className="myleft">
    <h2>Talk More Pay Less</h2>
    <img className="talkborder" style={{ display: "flex", width: "391px", height: "11px" }} src={Group2} />
      <p style={{marginTop:12}}>Starting at <span>$15/mo</span></p>

      <div className="joindiv">
        <button className="join">Join Today</button>
        <div className="savediv"><span className="save">Save up to</span><span className="yearly"> $300 on your yearly cell phone bill</span></div>
      </div>
    </div>
    <div className="myright">
      <img src={Group}  />
      <div className="highspeed">
        <h4>2GB High Speed Data</h4>
        <div className="highimage">
        <img className="a2" src={Group254} />
        <img className="a2" src={Group255} />
        <img className="a2" src={Group256} />
        </div>
      
      </div>
      <div className="bestvaluecontainer">
        <div className="bestvalue">Best Value</div>
        <h2><span className="dollar">$</span>15<span className="bracket">/</span><span className="mo">mo</span></h2>
      </div>
    </div>


    </div>
  
    </>
    );

};

export default Section1;
