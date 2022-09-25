import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import MovieView from './components/MovieView';
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=dd60bbc8f34edb4bbbe30c373d4cfbaa&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} searchResults={searchResults}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route
          path="/movies/:id"
          element={
            <MovieView />
          }
        />
        <Route
          path="*"
          element={
            <NotFoundPage />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
