import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



export function MovieDetail({movies, movieID, match}) {
    
    const movie = movies.find((item) => {
        if(item.movieID === movieID)
        {   
            console.log(item);
            return item;
        }
    })

    if(!movie)
    {
        return(
            <>
                <h1>Error</h1>
            </>
        )
    }

   const handleBackClick = () => {
       window.history.back();
   }

    return(
    <>
        <div  >
            <button type = "button" style = {{border: "0", margin: "0.6rem", borderRadius: "15px", padding: "0.1%"}} onClick = {handleBackClick}>
                <ArrowBackIcon style = {{margin: "2rem"}} />
            </button>
                
        </div>
        <div style = {{display : "flex", justifyContent: "center"}}>
            <div style = {{width : "30%"}}>
            <div>
                <img src = {movie.Poster} style = {{width : "40%", marginBottom : "2rem"}} />
                <iframe width="60%" height = "auto"  src= {movie.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h1 style = {{marginBottom : "3rem"}}>{movie.Title}</h1>
            <p>{movie.Description}</p>
            </div>
        </div>
    </>
    );
}