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
    // <div className="sectionk">
    //   <div className="leftdiv">
    //     <h1 className="hd1">
    //       Talk More
    //       <br /> Pay Less <br />
    //       <img
    //       className="talkborder"
    //         style={{ display: "flex", width: "32%", height: "11px" }}
    //         src={Group2}
    //       />
    //     </h1>
    //     <h2 className="hd2" style={{ fontFamily: "Nunito Sans , SemiBold" }}>
    //       Starting at
    //       <span
    //        className="mo15"
    //         style={{
    //           fontFamily: "Nunito Sans, ExtraBold",
    //           fontSize: "50px",
    //           fontWeight: "800",
    //         }}
    //       >
    //         $15/mo
    //       </span>{" "}
    //     </h2>
    //     <Button
    //       className="buttonw"
    //       style={{ fontFamily: "Nunito Sans, Bold" }}
    //       variant="primary"
    //     >
    //       Join Today
    //     </Button>{" "}
    //     <div className="card1">
    //       <h3
    //         className="pp1"
    //         style={{ color: "#EE8B3F", fontFamily: "Nunito Sans, ExtraBold" }}
    //       >
    //         Save up to{" "}
    //         <span className="save-upto" style={{ fontFamily: "Nunito Sans, Bold", color: "#152D79" }}>
    //           {" "}
    //           $300 on your yearly cell phone bill
    //         </span>
    //       </h3>
    //     </div>
    //   </div>

    //   <div className="rightdiv">
    //     <div className="cd1">
    //       <h2 className="cd1h">2GB High Speed Data</h2>
    //     </div>
    //     <img className="img" src={Group} />

    //     <div className="cd1i">
    //       <div className="a1">
    //         <img className="a2" src={Group254} />
    //       </div>
    //       <div className="a1">
    //         <img className="a2" 
    //           style={{ marginLeft: "13px", marginRight: "13px" }}
    //           src={Group255}
    //         />
    //       </div>
    //       <div className="a1">
    //         <img  className="a2"  src={Group256} />
    //       </div>
    //     </div>

    //     <div className="cd2">
    //       <h2
    //         className="cd2h"
    //         style={{
    //           fontSize: "85px",
    //           marginTop: "41px",
    //           marginRight: "-18px",
    //         }}
    //       >
    //         <span className="dollar" style={{ fontSize: "30px" }}>
    //           $
    //         </span>{" "}
    //         <span className="mo151">15</span> <span className="mo1" style={{ fontSize: "36px", marginTop: "16px" }}>/mo</span>
    //       </h2>
    //       <div className="cd2t">
    //         <h1 className="bestvalue">Best Value</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  
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
  
  
    );

};

export default Section1;
