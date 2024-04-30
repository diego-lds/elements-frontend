import { useState, useEffect } from "react";
import axios from "axios";
const PAGE_NUMBER = 1;
function Gallery() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(`http://locahost:3001/items?${page}`);

      setProducts((prev) => {
        return [...prev, ...response.data];
      });
      setLoading(false);
    }, 1500);
  }, [page]);

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

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
    </div>
  );
}

export default Gallery;
