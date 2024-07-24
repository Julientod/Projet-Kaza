import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card(props) {
  const { logement } = props;
  return (
    <Link
      to={"/logement/" + logement.id}
      className="card"
      style={{ backgroundImage: `url(${logement.cover})` }}
    >
      <div className="card-opacity">
        <div className="card-title">
          <h2>{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
