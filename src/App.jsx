// import { useState, useEffect } from "react";
// import axios from "axios";
import Header from "./components/header/Header";

function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/products")
  //     .then((response) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);

  return (
    <main>
      <Header />
    </main>
  );
}

export default App;
