import React from "react";
import PortfolioItem from "./PortfolioItem";

const images = [
  "/BlackCat.jpg",
  "/BostonTerrier.jpg",
  "/CatandSkulls.jpg",
  "/CatwithGreyBG.jpg",
  "/Chihuahua.jpg",
  "/FoxTerrier.jpg",
  "/GingerCat.jpg",
  "/Owl.jpg",
  "/Skulls.jpg",
];

const PortfolioGallery = () => {
  const columns = [[], [], [], []];
  images.forEach((img, idx) => {
    columns[idx % 4].push(img);
  });

  return (
    <div className="portfolio-gallery">
      {columns.map((colImages, colIdx) => (
        <div className={`scroll-column col-${colIdx}`} key={colIdx}>
          {[...colImages, ...colImages].map((img, idx) => (
            <PortfolioItem key={idx} image={img} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallery;
