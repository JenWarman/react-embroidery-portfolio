function PortfolioItem({ image, onImageClick }) {
  return (
    <div className="portfolio-item" onClick={() => onImageClick(image)}>
      <div className="image-wrapper">
        <div className="image-overlay">
          <p className="image-overlay-text">See More</p>
        </div>
        <img src={image} alt="Embroidery art" />
      </div>
    </div>
  );
};

export default PortfolioItem;
