import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="main-1">
        <div className="head1 ">
          <div className=" head-items">
            <i class="fa-solid fa-location-dot"></i>
            <p className="p-head">Alwartirunagar, Chennai, Tamil Nadu 600087</p>
            <i class="fa-regular fa-clock"></i>
            <p className="p-head">Mon - Sat : 10.00 AM - 07.00 PM</p>
          </div>
        </div>
        <div className="head2">
          <div className=" head-items">
            <div className="p-number">
              <i class="fa-solid fa-phone"></i>
              <p className="p-head">095441 11093</p>
            </div>
            <div className="icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="main-2">
        <div className="logo-image">
          <img src={logo} alt="" height="70px" />
        </div>
        <div className="nav-item">
          <ul className="nav-list">
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/about-main">
              <li>ABOUT</li>
            </Link>
          <Link to='/service-main'>  <li>SERVICES</li></Link>
            <Link to='/product'><li>PRODUCT</li></Link>
            <Link to='/blog'><li>BLOG</li></Link>
           <Link to='/contact'> <li>CONTACT</li></Link>
           <Link to='/quote'> <li>GET A QUOTE </li></Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
