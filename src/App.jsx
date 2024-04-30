import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/gallery/Gallery";

const PAGE_NUMBER = 1;

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    async function fetchData() {
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

    // Fetch data only on initial render
    if (!initialRender) {
      fetchData();
    }
  }, [page, initialRender]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setInitialRender(false);
  }, []);

  return (
    <div className="app">
      <h1>Products</h1>
      <Gallery products={products} />
    </div>
  );
}

export default App;
