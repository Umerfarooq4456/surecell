import React from "react";
import img1 from "../assets/Group 276.png";
import img2 from "../assets/Group 230.png";
import img3 from "../assets/Group 239.png";
const Section2 = () =>{

return(


  <div className="section2why" >

        <h2>Surecell - Service You Can Count On</h2>
        <p>Our trained agents are available around the clock. No matter where you are or what time it is - a professional, friendly rep is ready to guide you and support you.</p>

        <div className="service">
            <div className="servicecard">
                <div><img src={img1} /></div>
                <h2>Super Short Wait Times</h2>
                <p>Be connected to a rep within 2 - 3 minutes</p>

            </div>
            <div className="line"></div>
            <div className="servicecard">
               <div> <img src={img2} /></div>
                <h2>Easy To Speak To</h2>
                <p>Humans that understand what you need</p>

            </div>
            <div className="line"></div>
            <div className="servicecard">
                <div><img src={img3} /></div>
                <h2>24/7 Phone And Chat Support</h2>
                <p>Try it! Contact us at 2:00 am.</p>

            </div>
        </div>
  </div>

)

}

export default Section2;