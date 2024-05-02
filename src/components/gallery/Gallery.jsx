import PropTypes from "prop-types";
import "./Gallery.css";
import StarRating from "../StartRating";
function Gallery({ products }) {
  return (
    <div className="gallery">
      <div className="grid-container">
        {products.map((product, index) => (
          <div key={index} className="grid-item">
            <div className="grid-item-title">
              <h4>{product.name}</h4>
            </div>
            <img src={product.imageUrl} alt={product.name} loading="lazy" />
            <span className="badge">{product.category}</span>
            <p className="price">R$ {product.price}</p>
            <div className="rating">
              <StarRating rating={product.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Gallery;
