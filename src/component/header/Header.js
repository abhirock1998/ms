import { Button } from "@material-ui/core";
import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
          <img src="/images/logo.png" alt="ms-logo"/>
      </div>
      <div className="header__menu">
          <a href="/">Enterprises</a>
          <a href="/">D.I.Y</a>
          <a href="/">Resources</a>
          <a href="/">Life at MS</a>
         
      </div>
      <div className="header__user">
      <a href="/">Demo</a>
      <Button  variant="outlined"  >Log In</Button>
      </div>
    </div>
  );
}

export default Header;
