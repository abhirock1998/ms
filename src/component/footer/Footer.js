import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img src="/images/logo.png" alt="" />
          <span>Megasoft Solutions</span>
        </div>
        <div className="footer__social">
          <a href="/">
            <img src="/images/v1.png" alt="" />
          </a>
          <a href="/">
            <img src="/images/v2.png" alt="" />
          </a>
          <a href="/">
            <img src="/images/v3.png" alt="" />
          </a>
          <a href="/">
            <img src="/images/v4.png" alt="" />
          </a>
        </div>
        <div className="footer__email">contactus@megasoftsol.com</div>
      </div>
      <div className="footer__options">
        <div className="footer__optionsBlock">
          <h5> Explore</h5>
      <ul>
      <li>   <a href="/">OUR SOLUTIONS</a></li>
         <li> <a href="/">BUSINESS PARTNERS</a></li>
         <li> <a href="">Careers</a></li>
          <li><a href="/">Acts</a></li>
      </ul>
        </div>
        <div className="footer__optionsBlock">
         <ul>
         <li> <a href="/"> HRMS LOGIN</a></li>
         <li> <a href="/">MDI LOGIN</a></li>
          <li><a href="/">FMS LOGIN</a></li>
         <li> <a href="/">CONTACT US</a></li>
         </ul>
        </div>
        <div className="footer__optionsBlock">
          <h5> Corporate Office</h5>

          <address>
            MEGASOFT SOLUTIONS INDIA PVT LTD 475, Udyog Vihar Phase V, Gurgaon,
            Haryana, India CIN – U80302DL1998PTC094349
          </address>
        </div>
        <div className="footer__optionsBlock">
          <div className="footer__optionsBlockContact">
            <img src="/images/phone.png" alt="contact" /> 011-46067710
          </div>
          <div className="footer__optionsBlockContact">
            <img src="/images/print.png" alt="contact" />
            011-46067736
          </div>
          <div className="footer__optionsBlockContact">
            <img src="/images/web.png" alt="contact" />
           <a href="https://www.megasoftsol.com"> www.megasoftsol.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
