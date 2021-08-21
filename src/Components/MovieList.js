import React from "react"
import MovieCard from "./MovieCard";
import {Link} from 'react-router-dom';

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
			}).map((movie, index) => (
				<div style = {{width: "18rem", margin: "30px"}} key ={index}>
					<Link to = {`/${movie.movieID}`} style = {{textDecoration : "none", color: "black"}}  >
						<MovieCard title = {movie.Title} imageURL = {movie.Poster} description = {movie.Description.substring(0, 50) + " ...."} rating = {movie.rating}  />
					</Link>
				</div>
			))}
		</>
	);
}