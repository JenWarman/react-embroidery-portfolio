import { useState } from "react";
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

function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const columns = [[], [], [], []];
  images.forEach((img, idx) => {
    columns[idx % 4].push(img);
  });


  return (
    <>
      <div className="portfolio-gallery">
        {columns.map((colImages, colIdx) => (
          <div className={`scroll-column col-${colIdx}`} key={colIdx}>
            {[...colImages, ...colImages].map((img, idx) => (
              <PortfolioItem key={idx} image={img} onImageClick={setSelectedImage} />
            ))}
          </div>
        ))}
      </div>

      {selectedImage && (
  <div className="image-modal" onClick={() => setSelectedImage(null)}>
    <img src={selectedImage} alt="Full size" />
  </div>
)}

    </>
  );
};

export default PortfolioGallery;
