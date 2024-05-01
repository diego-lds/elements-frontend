import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/gallery/Gallery";
import Filter from "./components/filter/Filter";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const PAGE_NUMBER = 1;

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/items?page=${page}`
        );

        setProducts((prev) => {
          return [...prev, ...response.data];
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    if (!initialRender) {
      fetchData();
    }
  }, [page, initialRender]);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  const keepLoading = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useInfiniteScroll(keepLoading);

  return (
    <div className="app">
      {loading && <span>loading...</span>}
      <h1>Products</h1>
      <Filter />
      <Gallery products={products} />
    </div>
  );
}

export default App;
