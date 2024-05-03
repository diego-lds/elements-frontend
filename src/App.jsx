import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Gallery from "./components/Gallery";
import Filter from "./components/Filter";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Container from "./components/Container";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { buildUrlWithFilters } from "./utils/filtersUtils";
import "./App.css";

const BASE_URL = import.meta.env.VITE_API_URL;
const INITIAL_PAGE = 1;

function App() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [questionsList, setQuestionsList] = useState([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const url = buildUrlWithFilters(BASE_URL, pagination, filters);
      const response = await axios.get(url);

      pagination === INITIAL_PAGE
        ? setProducts(response.data)
        : setProducts((prev) => [...prev, ...response.data]);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [pagination, filters]);

  const fetchQuestions = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/quiz`);
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados");
      }
      const data = await response.json();
      setQuestionsList(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  }, []);

  const keepLoadingData = useCallback(() => {
    setPagination((prevPage) => prevPage + 1);
  }, []);

  useInfiniteScroll(keepLoadingData);

  const handleFilter = useCallback((params) => {
    setFilters(params);
    setPagination(INITIAL_PAGE);
  }, []);

  useEffect(() => {
    pagination !== INITIAL_PAGE ? fetchProducts() : fetchQuestions();
  }, [pagination, fetchProducts, fetchQuestions]);

  useEffect(() => {
    fetchProducts();
    fetchQuestions();
  }, [fetchProducts, fetchQuestions]);

  return (
    <main className="app">
      <Header />
      <Container>
        <h2>Listagem de produtos</h2>
        <Filter onFilter={handleFilter} />
        <Gallery products={products} />
        <Quiz questions={questionsList} />
      </Container>
    </main>
  );
}

export default App;
