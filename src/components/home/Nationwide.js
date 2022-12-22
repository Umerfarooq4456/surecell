import React from "react";



const Nationwide = () =>{

return(
    <div className="nationwidediv">
        <div className="nationwideright">
            <h2>Nationwide Coverage For Less</h2>
            <p>connect to america's largest, fastest <br></br> and most reliable 5G network.</p>
        </div>
        <div className="nationwideleft">
            <h2>Check your Coverage</h2>
            <div className="flex">
            <div className="zipcode">
                <input placeholder="Zip code" />

            </div>
                <button className="letsgo">Let's Go</button>
            </div>
        </div>

    </div>

)


}

export default Nationwide;