import React, { useState } from "react";
import "./carousel.css";

function Carousel(props) {
  const { pictures } = props;
  const [index, setIndex] = useState(0);
  const nextImage = () => {
    const newIndex = index + 1;
    if (newIndex > pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  const previousImage = () => {
    const newIndex = index - 1;
    if (newIndex < 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      <img className="activeImg" src={pictures[index]} />
      {pictures.length > 1 && (
        <div className="carouselContent">
          <img
            src={require("../../images/LeftArrow.png")}
            alt="fleche gauche"
            className="arrow arrow-left"
            onClick={previousImage}
          />
          <img
            src={require("../../images/RightArrow.png")}
            alt="fleche gauche"
            className="arrow arrow-right"
            onClick={nextImage}
          />
          <div className="counter">
            {index + 1}/{pictures.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
