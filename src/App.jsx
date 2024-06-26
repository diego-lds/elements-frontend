import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/gallery/Gallery";
import Filter from "./components/filter/Filter";
import Quiz from "./components/quiz/Quiz";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

import "./App.css";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const API = import.meta.env.VITE_API_URL;
const INITIAL_PAGE = 1;

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [filters, setFilters] = useState({});
  const [questionsList, setQuestionsList] = useState([]);

  function handleFilter(params) {
    setFilters(params);
    setPage(INITIAL_PAGE);
  }
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${API}/products?page=${page}`;
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
      fetchQuestions();
    }
  }, [page, initialRender, filters]);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  const keepLoadingData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${API}/quiz`);
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados");
      }
      const jsonData = await response.json();
      setQuestionsList(jsonData);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useInfiniteScroll(keepLoadingData);

  return (
    <div className="app">
      <Header />
      <Container>
        <Filter onFilter={handleFilter} />
        <Gallery products={products} />
        <Quiz questions={questionsList} />
      </Container>
    </div>
  );
}

export default App;
