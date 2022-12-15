import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Home from "./home/Home";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return window.removeEventListener("resize", showButton);
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  return (
    <>
      <IconContext.Provider value={{ color: "#1c2237" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
            ></Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/Plansmain"
                  onClick={closeMobileMenu}
                  className="nav-link"
                >
                  Plans
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  to="/WhyUs"
                  onClick={closeMobileMenu}
                  className="nav-link"
                >
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Support"
                  onClick={closeMobileMenu}
                  className="nav-link"
                >
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/MyAccount"
                  onClick={closeMobileMenu}
                  className="nav-link"
                >
                  My Account
                </Link>
              </li>
             
            
           
              </ul>
              <ul className="nav-menu">
                 <li className="nav-cart " style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTtop: "13px",
                listStyle: "none",
                marginTop: "16px",
              }}>
                <Link to="/addtoCart" onClick={closeMobileMenu}></Link>
              </li>
              <li className="nav-btn btn1">
                {button ? (
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="btn-link"
                  >
                    <Button buttonstyle="btn--outline">Login</Button>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="btn-link"
                  >
                    <Button buttonstyle="btn--outline" buttonsize="btn--mobile">
                      Login
                    </Button>
                  </Link>
                )}
              </li>
              </ul>
          </div>
        </nav>
      </IconContext.Provider>
      {/* <Home /> */}
    </>
  );
}

export default Navbar;
