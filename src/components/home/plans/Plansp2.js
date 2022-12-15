import React from "react";
import "./Plansp2.css";
import Group271 from '../../assets/Group271.png';
import Group1 from '../../assets/Group1.svg';
import Group2 from '../../assets/Group2.svg';
import Group3 from '../../assets/Group3.svg';
import Group4 from '../../assets/Group4.svg';
import Group5 from '../../assets/Group5.svg';
import Group6 from '../../assets/Group6.svg';
import { Button } from "react-bootstrap";



const Plansp2 = () => {
  return (
    <>
      <div className="P2-main">
        <div className="icons-div">
          <h3 className="no1">No</h3>
          <p className="po1">No Long-Term Contracts</p>
        </div>
        <div className="icons-div">
          <h3 className="no1">No</h3>
          <p className="po1">No Long-Term Contracts</p>
        </div>
        <div className="icons-div">
          <h3 className="no1">No</h3>
          <p className="po1">No Long-Term Contracts</p>
        </div>
        <div className="icons-div">
          <h3 className="no1">No</h3>
          <p className="po1">No Long-Term Contracts</p>
        </div>
      </div>

      <div className="para-div">
        <p className="po2">Stay connected and feel secure with our</p>
        <div>
            <h1 className="ho3">Mobile Medical Alert Protection System.</h1>
        </div>
        <div className="po3-div">
            <p className="po3">
            Press the button on the wearable pendant to call an Emergency Response Agent through your smartphone. The agent will dispatch emergency services, reach out to your family or health care provider, and stay on the line until help arrives.
            </p>
        </div>
      </div>

      <div className="need-text">
          <div>
            <p className="need-p">
            Get help whenever you need it,
            </p>
            <h1 className="need-h">As soon as you need it.</h1>
          </div>
        </div>

        <div className="main-imgdiv">
          <div className="img-div">
            <img  className="Group271" src={Group271} />
          </div>
           
           <div className="need-leftdiv">
            <div className="nd-text1">
              <h3 className="nd-head">24/7 Connection</h3>
              <p className="nd-para">Connect to an agent<br/>within 30 seconds.</p>
            </div>
            <div className="nd-text2">
              <h3 className="nd-head">Nationwide Dispatch</h3>
              <p className="nd-para">Receive support<br/>anytime, anywhere.</p>
            </div>
            <div className="nd-text3">
              <h3 className="nd-head">Location Assist</h3>
              <p className="nd-para">Let your loved ones <br/>know your location.</p>
            </div>
            
            <div className="nd-text4">
              <h3 className="nd-head1">Fall Detection</h3>
              <p className="nd-para1">Get help if you fall, even<br/> if you can’t speak.</p>
            </div>
            <div className="nd-text5">
              <h3 className="nd-head1">Nationwide Dispatch</h3>
              <p className="nd-para1">Wear it on a chain<br/>or on your wrist.</p>
            </div>
            <div className="nd-text6">
              <h3 className="nd-head1">Location Assist</h3>
              <p className="nd-para1">Use the battery for<br/>up to 18 months.</p>
            </div>      
           <img className="Group5" src={Group5} />
            <img  className="Group4" src={Group4} />
            <img className="Group6" src={Group6} />
            <img  className="Group1" src={Group1} />
            <img className="Group2" src={Group2} />
            <img className="Group3" src={Group3} />
           </div>
        </div>
        
        <div className="need-btn">
            <button className="nd-btn">
              <a className="learn-more">Learn more</a>
              <p className="btn-pa">about the DOT Wearable</p>
            </button>
           </div>
    </>
  );
};

export default Plansp2;
