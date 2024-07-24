import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={require("../../images/banner (1).png")} alt="banniere Kasa" />

      <div className="banner-opacity">
        <p className="banner-text">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};
export default Banner;
