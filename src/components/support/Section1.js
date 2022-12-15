import React from "react";
import "./support.css";
import img1 from "../assets/Group 279.png";
const Section1 = () => {
  return (
    <>
       <div className="dial">

            <img src={img1}  />
            <div className="line pos1"></div>
            <div className="line pos2"></div>
            <div className="line pos3"></div>

       
            <div className="feature1">
                    <h2 className='font-size'>Nationwide Dispatch</h2>
                    <p className="font-para">It doesn’t matter where you are. Our agents can send help to any location in the USA.</p>

            </div>

            <div className="feature2">
                    <h2 className='font-size'>Fall Detection</h2>
                    <p className="font-para">If a fall is detected, our agents will reach out and ensure you get the help you need.</p>

            </div>
            <div className="feature3">
                    <h2 className='font-size'>Family Connection</h2>
                    <p className="font-para">Our agents notify family and caregivers whenever help is dispatched.</p>

            </div>
            <div className="feature4">
                    <h2 className='font-size'>Simple Set-Up</h2>
                    <p className="font-para">Our agents get you set up in minutes.</p>

            </div>
            <div className="feature5">
                    <h2 className='font-size'>Audio + Video Services</h2>
                    <p className="font-para">Upon activation,our agents can use video to assess your situation and send help, even if you can’t answer.</p>

            </div>
            <div className="feature6">
                    <h2 className='font-size'>Location Assist</h2>
                    <p className="font-para">If you reach out, our agents can track your location and send help, even if you don’t know where you are</p>

            </div>
       </div> 


    </>
  );
};

export default Section1;
