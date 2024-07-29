import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="logo_container">
        <img src={require("../../images/logo_kaza.png")} alt="kasa" />
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about-us">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
