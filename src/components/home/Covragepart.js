import React from "react";
import "./Covragepart.css";
import {Button} from "react-bootstrap";
import Group18 from "../assets/Group18.svg";
import Group19 from "../assets/Group19.svg";
import Group17 from "../assets/Group17.svg";
import tick from "../assets/tick.svg";
import Iconarrow from "../assets/Iconarrow.svg";

const covragepart = () => {
  return (
    <>
   
<div className="cardd2">
<div className="kk1">
          <h1 className="kk2">We make Wireless Simple</h1>
          <p className="k1">Choose between 2 cell phone plans:</p>
        </div>
</div>
    

      <div className="cardd1">
       

        <div className="parice-card">
          <button className="btnbasic">Basic Plan</button>
          <div className="doll2">
            <span  className="d0l-1"
            
              style={{
                marginLeft: "-140px",

                font: "normal normal 800 31px/29px Nunito Sans",
              }}
            >
              $
            </span>
            <span className="mo-15"
              style={{
                font: " bold 63px / 18px Nunito Sans",
              }}
            >
              15<sapn className="month1">/month</sapn>
            </span>
          </div>
          <div className="border"></div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <h1 className="l1">Unlimited Talk</h1>
          </div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <h1 className="l1">Unlimited Text</h1>
          </div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
              }}
            >
              <h1 className="l1">2GB High Data</h1>
              <h1 style={{ fontSize: "14px",color:" #152D79" }}>(Pictures, Maps, Songs)</h1>
            </div>
          </div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <h1 className="l1">Basic Location Protection</h1>
          </div>
          <Button
            className="buttonw1"
            style={{
              fontFamily: "Nunito Sans",
              width: "293px",
              height: "67px",
              marginTop: "40px",
              marginRight: "295px",
              marginBottom: "54px",
              background: "0% 0% no-repeat padding-box padding-box rgb(21, 45, 121)",
              boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px",
              borderRadius: "34px",
              opacity: "1",
              color: "rgb(255, 255, 255)",
            }}
            variant="primary"
          >
            Learn More
            <img className="pricc-btnimg"
                style={{ width: "7px", height: "10px", marginLeft: "10px" }} src={Iconarrow} />
          </Button>{" "}
        </div>



        
        <div className="parice-card">
          <button className="btnbasic1">Premium Protection Plan</button>
          <div className="doll2">
            <span className="d0l-1"
              style={{
                marginLeft: "-140px",

                font: "normal normal 800 31px/29px Nunito Sans",
              }}
            >
              $
            </span>
            <span className="mo-15"
              style={{
                font: " bold 63px / 18px Nunito Sans",
              }}
            >
              25<sapn className="month1">/month</sapn>
            </span>
          </div>
          <div className="border"></div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <h1 className="l1">Unlimited Talk</h1>
          </div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <h1 className="l1">Unlimited Text</h1>
          </div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
              }}
            >
              <h1 className="l1">2GB High Data</h1>
              <br/>
            </div>
          </div>
          <div className="talk">
            <img className="tick1" src={tick} />
            <h1 className="l1">Madical Alert Protection</h1>
          </div>
          <Button
            className="buttonw1"
            style={{
              fontFamily: "Nunito Sans",
              width: "293px",
              height: "67px",
              marginTop: "40px",
              marginRight: "295px",
              marginBottom: "54px",
              background: "0% 0% no-repeat padding-box padding-box rgb(21, 45, 121)",
              boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px",
              borderRadius: "34px",
              opacity: "1",
              color: "rgb(255, 255, 255)",
            }}
            variant="primary"
          >
            Learn More
            <img className="pricc-btnimg"
                style={{ width: "7px", height: "10px", marginLeft: "10px" }} src={Iconarrow} />
          </Button>{" "}
        </div>
      </div>
      <div className="text-belowbtn">
          <p className="belowbtn1">You don't need to figure out how many minutes you need each month or how much data you use. We offer unlimited everything, at one set price per month.</p>
        </div>
      
    </>
  );
};

export default covragepart;
