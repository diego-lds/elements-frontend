import PropTypes from "prop-types";
import "./Gallery.css";
function Gallery({ products }) {
  return (
    <div className="gallery">
      <div className="grid-container">
        {products.map((product, index) => (
          <div key={index} className="grid-item">
            <p>{product.name}</p>
            <img
              src={product.imageUrl}
              alt={product.name}
              width={100}
              loading="lazy"
            />
            <p>{product.category}</p>
            <p>R$ {product.price}</p>
            <p>{product.rating}</p>
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
