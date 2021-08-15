import React from 'react';

export function MovieDetail({movies, movieID}) {
    
    const movie = movies.find((item) => {
        
        if(item.movieID === movieID)
        {   
            console.log(item);
            return item;
        }
    })

   
    return(
    <>
        <div style = {{display : "flex", justifyContent: "center"}}>
            <div style = {{width : "30%"}}>
            <div>
                <img src = {movie.Poster} style = {{width : "40%", marginBottom : "2rem"}} />
                <iframe width="60%" height = "auto"  src= {movie.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1 style = {{marginBottom : "3rem"}}>{movie.Title}</h1>
            <p>{movie.Description}</p>
            </div>
        </div>
    </>
    );
}