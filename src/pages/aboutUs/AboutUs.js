import React from "react";
import BannerAboutUs from "../../components/banner/BannerAboutUs";
import Dropdown from "../../components/dropdown/Dropdown";
import AboutUsList from "./About.json";
import "./aboutUs.css";

function AboutUs() {
  return (
    <>
      <BannerAboutUs />
      <div className="dropdown">
        <div className="dropdown-about">
          {AboutUsList.map((about) => (
            <Dropdown
              title={about.title}
              key={about.title}
              content={about.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
