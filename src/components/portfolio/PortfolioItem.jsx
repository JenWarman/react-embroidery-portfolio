import React from "react";

const PortfolioItem = ({ image }) => {
  return (
    <div className="portfolio-item">
      <div className="image-wrapper">
        <img src={image} alt="Embroidery art" />
      </div>
    </div>
  );
};

export default PortfolioItem;
