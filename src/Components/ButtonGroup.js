import React, {useRef} from 'react'


function ButtonGroup({addMovie, filterDone, clearFilter}) {
    const title = useRef();
    const description = useRef();
    const URL = useRef();
    const filter = useRef();
    const rating = useRef();

    const handleClick = () => {
        const movie = {"Poster" : URL.current.value, "Title": title.current.value, "Description": description.current.value, "rating": rating.current.value};
        addMovie(movie);   
    }

    const handleFilterClick = () => {
        // console.log(filter.current.value);
        filterDone(filter.current.value);
    }

    const handleClearFiterClick = () => {
        clearFilter();
    }


    return (
        <div>
            <div style = {{width: "30%"}}>
                <label for="customRange3" class="form-label">Rating Filter</label>
                <input type="range" ref = {filter} class="form-range" min="0" max="5" step="1" id="customRange3"></input>
            </div>


            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Movie</button>
                <button type="button" class="btn btn-primary" onClick = {handleClearFiterClick} >Clear Filter</button>
                <button type="button" onClick = {handleFilterClick} class="btn btn-primary">Apply Filter</button>
            </div>
                        
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Movie</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="movie-image" className="col-form-label">Image URL:</label>
                                <input type="text" ref = {URL} className="form-control" id="movie-image" />
                            </div>  
                            <div className="mb-3">
                                <label for="movie-title" className="col-form-label">Title: </label>
                                <input type="text" ref = {title} className="form-control" id="movie-title" />
                            </div> 
                            <div className="mb-3">
                                <label for="movie-description" class="col-form-label">Description:</label>
                                <textarea className="form-control" ref = {description} id="movie-description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="movie-rating" className="col-form-label">Rating:</label>
                                <input  type = "number" min = "0" max = "5" className="form-control" ref = {rating} id="movie-rating" />
                            </div> 
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick = {handleClick} data-bs-dismiss="modal" class="btn btn-primary">Add Movie</button>
                    </div> 
                </div>
            </div>
            </div>
        </div>
    )
}

export default ButtonGroup


