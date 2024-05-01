import { useState } from "react";

const useFilter = (onFilter) => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");

  const handleFilter = () => {
    const minPriceFloat = parseFloat(minPrice);
    const maxPriceFloat = parseFloat(maxPrice);
    const ratingNumber = parseInt(rating);

    onFilter({
      category,
      priceMin: minPriceFloat,
      priceMax: maxPriceFloat,
      rating: ratingNumber,
    });
  };

  return {
    category,
    minPrice,
    maxPrice,
    rating,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setRating,
    handleFilter,
  };
};

export default useFilter;
