import React, {useState} from "react"
import MovieCard from "./MovieCard";

export default function MovieList({movies})
{
	return (
		<>
			{ movies.map((movie, index) => (
                <MovieCard title = {movies[index].Title} imageURL = {movies[index].Poster} description = {movies[index].Description}/>
			))}
		</>
	);
}