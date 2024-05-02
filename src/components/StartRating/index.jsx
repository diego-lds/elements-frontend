import PropTypes from "prop-types";
import "./styles.css"; // Importando o arquivo CSS

const StarRating = ({ rating }) => {
  // Arredonda o número para baixo e converte para inteiro
  const roundedRating = Math.floor(rating);

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`star ${index < roundedRating ? "filled" : ""}`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
