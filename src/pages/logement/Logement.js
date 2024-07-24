import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Dropdown from "../../components/dropdown/Dropdown";
import logements from "../../datas/logements.json";
import "./logement.css";

function Logement() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeRate, setActiveRate] = useState([]);

  useEffect(() => {
    if (logement) {
      let rateArray = [];
      for (let i = 0; i < 5; i++) {
        if (parseInt(logement.rating) > i) {
          rateArray.push(true);
        } else {
          rateArray.push(false);
        }
      }
      console.log(rateArray);
      setActiveRate(rateArray);
    }
  }, [logement]);

  useEffect(() => {
    const index = logements.findIndex((logement) => logement.id === id);
    if (index === -1) {
      navigate("/error");
    } else {
      setLogement(logements[index]);
      setLoading(false);
    }
  }, [id, navigate]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="logement">
      <div>
        <Carousel pictures={logement.pictures} />
        <div className="location">
          <div className="title_and_tags">
            <div className="location_title">
              <h3>{logement.title}</h3>
              <p className="location_place">{logement.location}</p>
              <div className="tags">
                {logement.tags.map((tag, i) => (
                  <div className="tag" key={i}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="host_and_rating">
            <div className="host_content">
              <div className="host_name">
                <div>{logement.host.name.split(" ")[0]}</div>
                <div>{logement.host.name.split(" ")[1]}</div>
              </div>
              <img src={logement.host.picture} alt={logement.host}></img>
            </div>

            <div className="rating">
              {activeRate.map((rating, i) =>
                rating ? (
                  <i key={i} className="fa-solid fa-star active-rate"></i>
                ) : (
                  <i key={i} className="fa-solid fa-star rate"></i>
                )
              )}
            </div>
          </div>
        </div>

        <div className="collapse">
          <div className="logement-collapse">
            <Dropdown title="Description" content={logement.description} />
          </div>
          <div className="logement-collapse">
            <Dropdown
              title="Equipements"
              key={Logement.id}
              content={logement.equipments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
