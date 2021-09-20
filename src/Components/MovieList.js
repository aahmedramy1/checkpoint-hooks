import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function MovieList({ movies, term, filter }) {
  return (
    <>
      {movies
        .filter((val) => {
          return term === ""
            ? val.rating <= filter
            : val.Title.toLowerCase().includes(term.toLowerCase())
            ? val.rating <= filter
            : null;
        })
        .map((movie, index) => (
          <div style={{ width: "18rem", margin: "30px" }} key={index}>
            <Link
              to={`/${movie.movieID}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MovieCard
                title={movie.Title}
                imageURL={movie.Poster}
                description={movie.Description.substring(0, 50) + " ...."}
                rating={movie.rating}
              />
            </Link>
          </div>
        ))}
    </>
  );
}
