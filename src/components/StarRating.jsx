import PropTypes from "prop-types";
import "./StarRating.css";

const StarRating = ({ rating }) => {
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
