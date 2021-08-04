import React from 'react'
import StarIcon from '@material-ui/icons/Star';


export default function MovieCard({title, imageURL, description, rating}) {
    return(
        <div className="card" style={{width: "18rem", margin: '30px'}}>
        <img src= {imageURL} class="card-img-top" alt="..." />
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
