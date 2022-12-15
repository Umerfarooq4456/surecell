import React from 'react'
import img1 from "../assets/Group 285.png";

const Section4 = () => {

  return (
    <>
     <div className='dial-text'>
            <h1 className='dial-head'>A Smart-Yet-Simple Phone</h1>
        </div>
    <div className="dial">
         <img src={img1}  />
         <div className="line pos1"></div>
         <div className="line pos2"></div>
         <div className="line pos3"></div>

    
         <div className="feature1">
                 <h2 className='font-size'>Simple Menu</h2>
                 <p className="font-para">A navigation that shows only the features you want</p>

         </div>

         <div className="feature2">
                 <h2 className='font-size'>Strong Battery</h2>
                 <p className="font-para">Lasts for days on a single charge</p>

         </div>
         <div className="feature3">
                 <h2 className='font-size'>Large Screen</h2>
                 <p className="font-para">Big icons so you can find what you want easily</p>

         </div>
         <div className="feature4">
                 <h2 className='font-size'>Mobile Internet</h2>
                 <p className="font-para">Enjoy a simplified browsing experience</p>

         </div>
         <div className="feature5">
                 <h2 className='font-size'>Voice Typing</h2>
                 <p className="font-para">Record your message and send it as text</p>

         </div>
         <div className="feature6">
                 <h2 className='font-size'>Video Chat</h2>
                 <p className="font-para">Stay connected to family and friends</p>

         </div>
    </div> 


 </>
  )
}

export default Section4
