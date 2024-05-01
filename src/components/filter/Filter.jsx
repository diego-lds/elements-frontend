import useFilter from "../../hooks/useFilter";
import PropTypes from "prop-types";
import "./Filter.css";
const Filter = ({ onFilter }) => {
  const {
    category,
    minPrice,
    maxPrice,
    rating,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setRating,
    handleFilter,
  } = useFilter(onFilter);

  return (
    <div className="filter-container">
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="chair">Cadeiras</option>
          <option value="table">Mesas</option>
          <option value="monitor">Monitores</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          value={minPrice}
          placeholder="Preço Mínimo"
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Preço Máximo:"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Selecione uma avaliação</option>
          <option value="1">1 estrela</option>
          <option value="2">2 estrelas</option>
          <option value="3">3 estrelas</option>
          <option value="4">4 estrelas</option>
          <option value="5">5 estrelas</option>
        </select>
      </div>
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
