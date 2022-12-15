// import React from 'react';
// import './HeroSection.css';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';

// function HeroSection({
//   lightBg,
//   topLine,
//   lightText,
//   lightTextDesc,
//   headline,
//   headline1,
//   description,
//   buttonLabel,
//   img,
//   alt,
//   imgStart
// }) {
//   return (
//     <>
//       <div
//         className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
//       >
//         <div className='container'>
//           <div
//             className='row home__hero-row'
//             style={{
//               display: 'flex',
//               flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
//             }}
//           >
//             <div className='col'>
//               <div className='home__hero-text-wrapper'>
//                 <div className='top-line'>{topLine}</div>
//                 <h1 className={lightText ? 'heading' : 'heading dark'}>
//                   {headline}
                  
//                 </h1>
//                 <h1 className={lightText ? 'heading' : 'heading dark'}>
//                   {headline1}
                  
//                 </h1>
//                 <p
//                   className={
//                     lightTextDesc
//                       ? 'home__hero-subtitle'
//                       : 'home__hero-subtitle dark'
//                   }
//                 >
//                   {description}
//                 </p>
//                 <Link to='/Login' style={{display:"flex",justifyContent:"center"}}>
//                   <Button buttonSize='btn--wide'  buttonColor='orange'>
//                     {buttonLabel}
//                   </Button>
//                 </Link>
//                 <div className='card-style'>
//               <p>Save upto $300 on your yearly cell phone bill</p>
//             </div>
//               </div>
//             </div>
//             <div className='col'>
//               <div className='home__hero-img-wrapper'>
//                 <img src={img} alt={alt} className='home__hero-img' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HeroSection;
