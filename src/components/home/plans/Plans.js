import React from "react";
import "./Plans.css";
import Group86 from "../../assets/Group86.svg";
import tick from "../../assets/tick.svg";
import { Button } from "react-bootstrap";
import Iconarrow from "../../assets/Iconarrow.svg";
import Group263 from "../../assets/Group263.svg";
import Group262 from "../../assets/Group262.svg";
import Group203 from "../../assets/Group203.svg";
import Group201 from "../../assets/Group201.svg";
import Group199 from "../../assets/Group199.svg";

const Plans = () => {
  return (
    <>
      <div className="plans-main">
        <div className="support-tetx">
          <div className="support-trans">
            <p className="service-p">
              The Service You Want. The Support You Need.{" "}
            </p>
            <h1 className="head-p">One Low Monthly Fee.</h1>
            <img className="im86" src={Group86} />
          </div>
        </div>

        <div className="price-text">
          <h1 className="head-h1">Which plan is right for you?</h1>
        </div>

        <div className="pc">
          <div className="parice-card2">
            <button className="btnbasic3">Basic Plan</button>
            <div className="doll2">
              <span
                style={{
                  font: " 800 27px / 40px Nunito Sans",
                }}
              >
                $
              </span>
              <span
                style={{
                  font: " bold 55px / 13px Nunito Sans",
                }}
              >
                15
                <span
                  style={{ font: " normal normal 800 29px/1px Nunito Sans" }}
                >
                  /month
                </span>
              </span>
            </div>
            <div className="border"></div>
            <div className="pcardh1">
              <h1 className="whatsinclude">What’s included?</h1>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <h1 className="l11">Unlimited Talk</h1>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <h1 className="l11">Unlimited Text</h1>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                }}
              >
                <h1 className="l11">2GB High Speed Data</h1>
                <span
                className="sp-text"
                  style={{
                    font: "normal normal bold 11px/19px Nunito Sans",
                    color: "#152D79",
                    width: "226px",
                    height: "35px",
                  }}
                >
                  (Pictures, Maps, Songs After 2 GB of data, data speeds will
                  slow.)
                </span>
              </div>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <h1 className="l11">Basic Location Protection</h1>
            </div>
            <Button
              className="buttonplan"
              style={{
                fontFamily: "Nunito Sans",
                width: "224px",
                height: "47px",
                marginTop: "27px",
                marginBottom: "24px",
                background:
                  "0% 0% no-repeat padding-box padding-box rgb(21, 45, 121)",
                boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px",
                borderRadius: "34px",
                opacity: "1",
                color: " rgb(255, 255, 255)",
              }}
              variant="primary"
            >
              Choose this Plan
              <img className="pricc-btnimg"
                style={{ width: "7px", height: "10px", marginLeft: "10px" }}
                src={Iconarrow}
              />
            </Button>{" "}
          </div>
          <div className="parice-card3">
            <button className="btnbasic4">Premium Protection Plan</button>
            <div className="doll2">
              <span
                style={{
                  font: " 800 27px / 40px Nunito Sans",
                }}
              >
                $
              </span>
              <span
                style={{
                  font: " bold 55px / 13px Nunito Sans",
                }}
              >
                25
                <span
                  style={{ font: " normal normal 800 29px/1px Nunito Sans" }}
                >
                  /month
                </span>
              </span>
            </div>
            <div className="border"></div>
            <div className="pcardh1">
              <h1 className="whatsinclude">What’s included?</h1>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <h1 className="l11">Unlimited Talk</h1>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <h1 className="l11">Unlimited Text</h1>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                }}
              >
                <h1 className="l11">2GB High Data</h1>
                <span
                  style={{
                    font: "normal normal bold 11px/19px Nunito Sans",
                    color: "#152D79",
                    width: "226px",
                    height: "35px",
                  }}
                >
                  (Pictures, Maps, Songs After 2 GB of data, data speeds will
                  slow.)
                </span>
              </div>
            </div>
            <div className="talk1">
              <img className="tick2" src={tick} />
              <h1 className="l11">Madical Alert Protection</h1>
            </div>
            <Button
              className="buttonplan"
              style={{
                fontFamily: "Nunito Sans",
                width: "224px",
                height: "47px",
                marginTop: "27px",
                marginBottom: "24px",
                background:
                  "0% 0% no-repeat padding-box padding-box rgb(21, 45, 121)",
                boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px",
                borderRadius: "34px",
                opacity: "1",
                color: " rgb(255, 255, 255)",
              }}
              variant="primary"
            >
              Choose this Plan{" "}
              <img
               className="pricc-btnimg"
                style={{ width: "7px", height: "10px", marginLeft: "10px" }}
                src={Iconarrow}
              />
            </Button>
          </div>
        </div>

        <div className="pa1">
          <h1 className="showtext">
            *The totals shown here are costs for your monthly service only. They
            do not include any taxes and fees.
          </h1>
        </div>

        <div className="network-part">
          <div className="network-heading">
            <h1 className="nth">
              Powered by the nation’s strongest 5G network.
            </h1>
            <img
            className="img866"
              style={{
                position: "absolute",
                marginTop: "122px",
                height: "2.9px",
                marginLeft: "137px",
              }}
              src={Group86}
            />
          </div>

          <div className="main-iccon">
            <div className="iicon">
              <div className="iicon-head">
                <img className="iicon-img" src={Group263} />
                <h2 className="hed">Port Your Phone Number</h2>
                <p className="per">
                  Keep your existing number - let friends and family stay in
                  touch.
                </p>
              </div>
            </div>

            <div className="iicon">
              <div className="iicon-head">
                <img className="iicon-img" src={Group262} />
                <h2 className="hed">Free Calls To Canada & Mexico</h2>
                <p className="per">
                  Free international calling - without incurring an additional
                  charge.
                </p>
              </div>
            </div>

            <div className="iicon">
              <div className="iicon-head">
                <img className="iicon-img" src={Group203} />
                <h2 className="hed">Wifi Calling</h2>
                <p className="per">
                  Stay connected to your loved ones - even if the phone service
                  is down.
                </p>
              </div>
            </div>

            <div className="iicon">
              <div className="iicon-head">
                <img className="iicon-img" src={Group201} />
                <h2 className="hed">Mobile Hotspot</h2>
                <p className="per">
                  Use your smartphone as wifi - enable others to access the
                  internet.
                </p>
              </div>
            </div>

            <div className="iicon">
              <div className="iicon-headl">
                <img className="iicon-img" src={Group199} />
                <h2 className="hed">Location Assist</h2>
                <p className="per">
                  Know where your loved ones are - with the click of a button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
