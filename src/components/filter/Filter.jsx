import useFilter from "../../hooks/useFilter";
import PropTypes from "prop-types";
import "./Filter.css";
import Select from "../common/select";
import Input from "../common/input";
import Button from "../common/button";
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
      <Select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        placeholder={"Selecione uma categoria"}
        options={[
          { value: "chair", label: "Cadeiras" },
          { value: "table", label: "Mesas" },
          { value: "monitor", label: "Monitores" },
        ]}
      />
      <Select
        onChange={(e) => setRating(e.target.value)}
        value={rating}
        placeholder={"Selecione uma classificação"}
        options={[
          { value: 1, label: "1 estrela" },
          { value: 2, label: "2 estrela" },
          { value: 3, label: "3 estrela" },
          { value: 4, label: "4 estrela" },
          { value: 5, label: "5 estrela" },
        ]}
      />
      <Input
        value={minPrice}
        type="number"
        placeholder="Preço Mínimo"
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <Input
        value={maxPrice}
        type="number"
        placeholder="Preço Máximo"
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Button onClick={handleFilter}>Filtrar</Button>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default Filter;
