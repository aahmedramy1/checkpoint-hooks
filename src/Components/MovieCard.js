import React from 'react'
import StarIcon from '@material-ui/icons/Star';


export default function MovieCard({title, imageURL, description, rating}) {
    return(
        <div className="card" >
            <img src= {imageURL} class="card-img-top" alt="..."  style = {{maxWidth: "100%", height: "auto"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className = "d-flex">
                    <p style = {{marginRight : "3%"}}>{rating}</p>
                    <StarIcon/>
                </div>
            </div>
        </div>
    )
}
