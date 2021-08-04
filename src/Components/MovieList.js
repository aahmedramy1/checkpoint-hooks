import React from "react"
import MovieCard from "./MovieCard";

export default function MovieList({movies, term, filter})
{
	return (
		<>
			{ movies.filter((val) => {
				if(term === "") {
					return val.rating <= filter;
				} else if(val.Title.toLowerCase().includes(term.toLowerCase())) {
					return val.rating <= filter;
				}
			}).map((movie) => (
                <MovieCard title = {movie.Title} imageURL = {movie.Poster} description = {movie.Description} rating = {movie.rating} />
			))}
		</>
	);
}