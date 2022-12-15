import React from "react";
import img1 from "../assets/Group 239.png";
import img2 from "../assets/Group 280.png";
import img3 from "../assets/Group 242.png";
import img4 from "../assets/Group 249.png";
const Section2 = () => {
  return (
    <>
       
      <div className="section2support">
        <div className="basis"><img src={img1} />
        <h4>24/7 Customer Support</h4>
        <p>75 trained emergency response agents</p></div>
   
        <div className="line"></div>
  
        <div className="basis"><img src={img2} />
        <h4>Long Battery Life</h4>
        <p>Lasts up to 18 months</p></div>
      
        <div className="line"></div>
     
        <div className="basis"><img src={img3} />
        <h4>Quarter Sized Device</h4>
        <p>Small enough to wear on your wrist</p></div>
     
      <div className="line"></div>
      <div className="basis"><img src={img4} />
        <h4>Water Resistant</h4>
        <p>Wear it all the time, even in the shower</p></div>

       </div>
      <div className="emergency">
        <p>Our emergency dispatchers are based only in the USA</p>
        </div>
    </>
  );
};

export default Section2;
