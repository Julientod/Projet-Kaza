import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={require("../../images/logo_kaza_white.png")} />
      <div className="footer_content">
        <i className="fa-regular fa-copyright"></i>
        <p className="footer_text">2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
