import React from "react";
import "./banner.css";

function BannerAboutUs() {
  return (
    <div className="banner">
      <img
        src={require("../../images/banner_aboutUs.png")}
        alt="banniere A propos"
      />

      <div className="banner-opacity"></div>
    </div>
  );
}

export default BannerAboutUs;
