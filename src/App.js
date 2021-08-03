import MovieCard from './Components/MovieCard.js';
import MovieList from './Components/MovieList.js';
import ButtonGroup from "./Components/Modal"
import React, {useState} from 'react'


function App() {
  const [movies, setMovies] = useState([
    {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Poster": "https://avatarfiles.alphacoders.com/633/63329.png",
        "Title": "Goku",
        "Description": "bla blab bla Goku"
    },
    {
        "Poster": "https://avatarfiles.alphacoders.com/968/96848.png",
        "Title": "Yato",
        "Description": "bla blab bla Yato"
    },
    {
        "Poster": "https://avatarfiles.alphacoders.com/107/107487.jpg",
        "Title": "Anonymous",
        "Description": "bla blab bla Anonymous"
    },
    {
        "Poster": "https://avatarfiles.alphacoders.com/688/68800.png",
        "Title": "Second Goku",
        "Description": "bla blab bla Goku"
    },
    {
        "Poster": "https://avatarfiles.alphacoders.com/656/65658.png",
        "Title": "Stitch",
        "Description": "bla blab bla Stitch"
    }
]);

return (
    <>
    <div style = {{marginTop: "1.8%", marginLeft: "2%"}}>
        <ButtonGroup />
    </div>
    
    <div className = 'd-flex justify-content-center'>
        <div className='row' style = {{width: "80%"}}>
            <MovieList movies={movies} />
        </div>
    </div>
    </>

);

}

export default App;
