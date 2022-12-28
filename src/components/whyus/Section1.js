import React from "react";
import img1 from "../assets/Group 272.png";
import img2 from "../assets/Group 275.png";
import img3 from "../assets/Group 273.png";
import img4 from "../assets/Group 274.png";
const Section1 = () =>{

return(


  <div className="maindiv">
        <div className="left">
            <div className="benefit">
            <div className="image">
            <img src={img2} /></div>
            <div className="info">
                <h2>The Most Affordable</h2>
                <p className="myp1">Inflation has affected every aspect of the economy – except ours.</p>
                <p className="myp2">We still offer unlimited talk, text and data plans at a price that’s way lower than our competitors. We have no upper-class offices to maintain and no sales teams to manage. We bring the savings directly to you.</p>
            </div>
          

            </div>
            <div className="line"></div>

             <div className="benefit">
            <div className="image">
            <img src={img4} /></div>
            <div className="info">
                <h2>No Monthly Contracts</h2>
                <p className="myp1">Pay for what you need each month – and no more.</p>
                <p className="myp2">We offer unlimited everything. So you won’t pay for any overages, ever. Feel free to switch between our two plans, at no additional charge.</p>
            </div>

            </div>
   <div className="line2"></div>
             <div className="benefit">
            <div className="image">
            <img src={img3} /></div>
            <div className="info">
                <h2>Cutting-Edge Technology</h2>
                <p className="myp1">We partner with Teltik to bring you premium service - 5G LTE.</p>
                <p className="myp2">We’ve created the technology that powers GPS tracking devices and manages phone communications nationwide. We use 100+ years of combined experience to service you.</p>
            </div>

            </div>

              
        </div>    
        <div className="right">
        <img src={img1}  />
        {/* <div className="line1"></div>
        <div className="line1"></div> */}
        
        </div>

    </div>

)

}

export default Section1;