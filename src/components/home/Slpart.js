import React from "react";
import "./Slpart.css";
import { Button } from "@mui/material";
// import Stack from '@mui/material/Stack';
import Phone from "../assets/phone.svg";
import Group41 from "../assets/Group41.svg";
import Group42 from "../assets/Group42.svg";
import Group259 from "../assets/Group259.png";
import Group68 from "../assets/Group68.svg";
import Group69 from "../assets/Group69.svg";
import Group70 from "../assets/Group70.svg";
import Group260 from "../assets/Group260.png";
import Group261 from "../assets/Group261.png";
import Group2 from "../assets/Group2.png";
import Group24 from "../assets/Group24.png";
import Group71 from "../assets/Group 71.png";

const Slpart = () => {
  return (
    <>
      <div className="slpart1">
        <div className="s1">
          <img className="img259" src={Group259} />
        </div>
        <div className="section2">
          <div className="p11">
            <div className="i11">
              <img src={Phone} className="icon11" />
              <h3 className="talk-text1">
                Bring Your
                <br />
                Own Phone
              </h3>
            </div>
            <div className="i22">
              <img src={Group41} className="icon11" />
              <h3 className="talk-text2">
                Keep Your
                <br /> Old Number
              </h3>
            </div>
            <div className="i33">
              <img src={Group42} className="icon11" />
              <h3 className="talk-text3">
                Quick & Easy
                <br /> Activation
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="slpart" style={{paddingTop: "100px"}}>
        <div className="section1">
        <img className="img260" src={Group260} />
        </div>
        <div className="section22">
          <h1 className="hhh3">2GB High Speed Data</h1>
          <img className="g2b" src={Group24} />
          <div className="p1">
            <div className="i1">
              <img src={Group69} className="icon1" />
              <h3 className="talk-text">
                Send
                <br />
                Pictures
              </h3>
            </div>
            <div className="i2">
            <img src={Group68} className="icon1" />
              <h3 className="talk-text">
                Music
              </h3>
            </div>
            <div className="i3">
            <img src={Group70} className="icon1" />
              <h3 className="talk-text">
                GPS
              </h3>
            </div>
          </div>
        </div>
      </div> */}

      <div className="highspeed2">
        <div className="img260">
          <img  src={Group260} />
        </div>

        <div className="upperdiv">
          <div><h1>2GB High Speed Data</h1>
          <img className="smallimi"  src={Group71} /></div>
          

          <div className="imidiv">
          <div>
          <img src={Group69}  />
          <h3 >
                Send
                <br />
                Pictures
              </h3>
          </div>
            <div className="line"></div>
            <div>
          <img src={Group68}  />
          <h3 >
               Music
               
              </h3>
          </div>
          <div className="line"></div>
          <div>
          <img src={Group70}  />
          <h3 >
             GPS
               
              </h3>
          </div>

          </div>
        </div>
      </div>
{/* 
      <div
        className="slpart"
        style={{ paddingBottom: "100px", paddingTop: "40px" }}
      >
        <div className="section2">
          <h1 className="he1" style={{ textAlign: "center" }}>
            Get Unlimited Talk, Text,
            <br />
            And Data And SAVE!
          </h1>
          <img className="savetalk" src={Group2} />
          <br />
          <Button
            className="btn-savetalk"
            style={{
              width: "236px",
              height: "62px",
              background: " #152D79 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "34px",
              opacity: "1",
              fontSize: "14px",
              position: "relative",
              left: "115px",
              top: "34px",
            }}
            variant="contained"
          >
            Join Us Today
          </Button>
        </div>
        <div className="section1">
          <img className="img261" src={Group261} />
        </div>
      </div> */}

      <div className="highspeed3">

        <div className="unlimiteddiv2">
        <div>
        <h2>Get Unlimited Talk, Text, <br></br> And Data<span> And SAVE!</span></h2>
        <img  src={Group2} />
        </div>
        <button>Join Us Today</button>
        </div>

        <div className="img261">
        <img  src={Group261} />
        </div>


      </div>



    </>
  );
};

export default Slpart;
