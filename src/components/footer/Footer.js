import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footer from '../assets/footer.png';
import logo2 from '../assets/logo2.png';

function Footer() {
  return (
    <>
    <div className="footer-container">
        <div className="social-media-wrap" >
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img className="footerlogo" src={footer} />
           </Link>
           <div className="detail">
            <h3 className="number">1-877-331-4255</h3>
            <h3  className="email">Support@Homeawaysecure.Com</h3>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2 className="hq1">Plans</h2>
              <h3 className="hq2">Talk. Text, Data</h3>
              <h3 className="hq2">TTD + Alert</h3>
            </div>
            <div className="footer-link-items">
              <h2 className="hq1">Products</h2>
              <h3 className="hq2">Simple Smartphone</h3>
              <h3 className="hq2">DOT Wearable</h3>
            </div>
            <div className="footer-link-items">
              <h2 className="hq1">Support</h2>
              <h3 className="hq2">Activate Device</h3>
              <h3 className="hq2">FAQ</h3>
            </div>
          </div>
        </div>
    </div>


    <div className="ft1">
      <p className="ftl">Powered By</p>
      <img src={logo2 } />
    </div>
    </>
  );
}

export default Footer;
