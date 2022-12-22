import React from "react";
import arrow from "../assets//arrow.png";
import Sectionthree from "./Sectionthree";

const Howitworks = () =>{

return(
    <div className="howitworksdiv">
     
     <div className="howtext">
        <h2>How It Works</h2>
        <p>Pay less per month, get unlimited support and connect to the ones you love.</p>
     </div>
 
    <div className="chooseplan">
        <div>
            <h1 className="one">1</h1>
            <h2 className="two">Choose your plan</h2>
            <p className="three">Bring your own phone (or buy a new one)</p>
        </div>
        <div><img src={arrow} /></div>
        
       
        <div  className="text">
            <h1 className="one">2</h1>
            <h2 className="two">Get your SIM</h2>
            <p className="three">You will get it Via express mail (within 3-5 Days)</p>
        </div>
        <div><img src={arrow} /></div>
        <div className="text">
            <h1 className="one">3</h1>
            <h2 className="two">Activate your device</h2>
            <p className="three">You can keep your old Number (our agents will guide you)</p>
        </div>
    </div>

    <div>
        <button className="joinbtn">Join Us Today</button>
    </div>

    <div className="payless">
    Pay less per month, get unlimited support and connect to the ones you love.
    </div>

    <Sectionthree/>
    </div>

)


}

export default Howitworks;