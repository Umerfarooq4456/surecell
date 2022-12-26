import React from "react";
import Group86 from "../assets/Group86.svg";
import img1 from "../assets/Group 277.png";
import img2 from "../assets/Group 137.png";
import img3 from "../assets/Group 141.png";
const Section4 = () =>{

return(

<>
    <div className="plans-main">
    <div className="support-tetx whyus">
      <div className="whyus">
       
        <h1 className="head-p">How We Began</h1>
        <img className="im86" src={Group86} />
      </div>
    </div>
</div>

<div className="section4why">
    <div className="left">
        <img src={img1} />
        <p className="joanna">Grandma Joanne’s request</p>
        <img src={img3}  className="arrow"/>
    </div>
    <div className="right">
    <div>
        <h2>Meet Joanne Goodman -</h2>
        <span>The most fun-loving grandma ever.</span>
       
    </div>
        <p>Grandma’s on a fixed income (retirement + social security) - but wants to stay connected to her children and grandchildren.</p>
        <p>We want Grandma to be able to call us, without worrying about going over her minutes. We also want Grandma to feel safe all the time. </p>
        <p>We decided to develop an affordable phone plan that includes a robust medical alert protection system.</p>

        <div className="bottomdiv">
            <img className="comma" src={img2} width="73" height="53"/>
            <p>“I want a something that’s easy to use, without needing to learn new things.”</p>
        </div>
    </div>
</div>
</>
)

}

export default Section4