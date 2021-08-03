import React from 'react'

export default function MovieCard({title, imageURL, description}) {
    return(
        <div className="card" style={{width: "18rem", margin: '30px'}}>
        <img src= {imageURL} class="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
        </div>
    )
}
