import MovieList from "./Components/MovieList.js";
import ButtonGroup from "./Components/ButtonGroup";
import React, { useState } from "react";
import Data from "./data.json";
import { MovieDetail } from "./Components/MovieDetail.js";
import { Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(Data);

  const [filterNum, setFilterNum] = useState(5);

  const [searchTerm, setSearchTerm] = useState("");

  const addMovie = (movieObj) => {
    setMovies((prev) => {
      return [movieObj, ...prev];
    });
  };

  const filterMovies = (movieRating) => {
    setFilterNum(movieRating);
  };

  const clearFilter = () => {
    setFilterNum(5);
    setSearchTerm("");
  };

  return (
    <>
      <Route exact path="/">
        <div style={{ marginTop: "1.8%", marginLeft: "2%" }}>
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              style={{ marginBottom: "1%", paddingLeft: "0.5%", width: "20%" }}
            />
          </div>
          <ButtonGroup
            addMovie={addMovie}
            filterDone={filterMovies}
            clearFilter={clearFilter}
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className="row" style={{ width: "80%" }}>
            <MovieList movies={movies} term={searchTerm} filter={filterNum} />
          </div>
        </div>
      </Route>
      <Route
        path="/:id"
        render={({ match }) => (
          <MovieDetail
            movies={movies}
            movieID={match.params.id}
            match={match}
          />
        )}
      />
    </>
  );
}

export default App;
