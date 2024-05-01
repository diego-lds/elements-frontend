import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/gallery/Gallery";
import Filter from "./components/filter/Filter";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const INITIAL_PAGE = 1;

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [filters, setFilters] = useState({});

  function handleFilter(params) {
    setFilters(params);
    setPage(INITIAL_PAGE); // Redefine a página para a primeira página ao aplicar filtros
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `http://localhost:3001/products?page=${page}`;
        const filterParams = new URLSearchParams();

        if (filters && Object.keys(filters).length > 0) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) {
              filterParams.append(key, value);
            }
          });
          url += `&${filterParams.toString()}`;
        }
        const response = await axios.get(url);

        if (page === INITIAL_PAGE) {
          setProducts(response.data);
        } else {
          setProducts((prev) => [...prev, ...response.data]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    if (!initialRender) {
      fetchData();
    }
  }, [page, initialRender, filters]);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  const keepLoadingData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useInfiniteScroll(keepLoadingData);

  return (
    <div className="app">
      {loading && <span>loading...</span>}
      <h1>Products</h1>
      <Filter onFilter={handleFilter} />
      <Gallery products={products} />
    </div>
  );
}

export default App;
