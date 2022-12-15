import React from "react";
import img1 from "../assets/Group 238.png";
import img2 from "../assets/Group 236.png";
import img3 from "../assets/Group 144.png";
const Section5 = () =>{

return(

<>
   <div className="section5">

    <div>

        <h2><span className="light">The Result:</span> MobileAlly</h2>
        <p>An Affordable All-In-One Cell Phone Plan</p>
        <div className="left5" >
            <div>
                <img src={img2} />
                <p>Grandma Stays Connected To The Ones She Loves</p>
            </div>
            <div className="line">

            </div>
            <div>
                <img src={img1} />
                <p>Grandma Feels Safe At All Times</p>
            </div>
        </div>
    </div>
    <div className="right5">

    <img src={img3}  />
    <p>“Now I can call my grandkids whenever I feel like it! I can enjoy life to the fullest, because I feel safe knowing that help is just a click away.” </p>
   <p>- Joanne Goodman</p>
    </div>

   </div>

</>
)

}

export default Section5