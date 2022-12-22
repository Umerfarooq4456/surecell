import React from "react";
import "./Sectionthree.css";
import { Button } from "@mui/material";
import Group44 from "../assets/Group44.svg";
import Group48 from "../assets/Group48.svg";
// import Arowicon from '../assets/Arowicon.svg';
import Group50 from "../assets/Group50.svg";
import Group53 from "../assets/Group53.svg";
import Ellipse40 from "../assets/Ellipse40.svg";
import Ellipse41 from "../assets/Ellipse41.svg";
import Ellipse44 from "../assets/Ellipse44.svg";
import Stack from "@mui/material/Stack";
import arrow from "../assets//arrow.png";

const Sectionthree = () => {
  return (
    <>
    


     

        <div className="cardn">
          <div className="citem1">
            <img style={{ marginTop: "73px" }} src={Group44} />
            <h1 className="ch1">24/7 Customer Support</h1>
            <p className="cp1">
              Our professional support team is available at all hours. Have a
              question regarding activation, billing, or apps? Help is just a
              phone call away.
            </p>
          </div>
          <div className="citem2">
            <img style={{ marginTop: "73px" }} src={Group48} />
            <h1 className="ch1">No Extra Charge</h1>
            <p className="cp1">
              What you see is what you get. There are no hidden fees, no fine
              print, and no add-ons. Just top-of-the-line cell phone service for
              a set monthly price.
            </p>
          </div>
          <div className="citem1">
            <img style={{ marginTop: "73px" }} src={Group50} />
            <h1 className="ch1">Risk Free Guarantee</h1>
            <p className="cp1">
              We know you’ll be 100% satisfied with our service. we’re so sure
              that We’re giving you 7 days to try us out. Not completely happy?
              Cancel and pay nothing.
            </p>
          </div>
        </div>


      {/* <div className="paragrap">
        <h1>
          <img style={{ marginTop: "120%" }} src={Group53} />
        </h1>
        <div className="head11">
          <h1>They’ve connected for less:</h1>
        </div>
        <div className="par1">
          <p className="ppp1">
            My daughter has been trying to get me to wear a tracker for a while
            now, but they are all too bulky and scream GRANDMA! I never agreed
            to wear any of them until I found the DOT Wearable. It’s a simple,
            smooth device that weighs almost nothing and is easily hidden
            beneath my clothes. I feel safer when wearing my Mobile Medical
            Alert. I know that if I need help, I just need to push the button.
          </p>
        </div>
        <div style={{ marginTop: "2%" }}>
          <span className="tag">- Steve M., state</span>
        </div>
        <div className="pagination">
          <Stack spacing={2} direction="row">
            <img
              style={{ position: "absolute", top: "-6px", left: "10px" }}
              src={Ellipse44}
            />
            <img src={Ellipse40} />
            <img src={Ellipse41} />
            <img src={Ellipse41} />
            <img src={Ellipse41} />
          </Stack>
        </div>
      </div> */}
    </>
  );
};

export default Sectionthree;
