import React, { useState } from "react";
import { fetchMovies } from "./components/Api";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    try {
      const moviesWithPosters = await fetchMovies(query);
      setMovies(moviesWithPosters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
