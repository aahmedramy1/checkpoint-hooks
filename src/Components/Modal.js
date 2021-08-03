import React from 'react'

function Modal() {
    return (
        <div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Movie</button>
                <button type="button" class="btn btn-primary">Clear Filter</button>
                <button type="button" class="btn btn-primary">Apply Filter</button>
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
                            <input type="text" className="form-control" id="movie-image" />
                        </div>  
                        <div className="mb-3">
                            <label for="movie-title" className="col-form-label">Title: </label>
                            <input type="text" className="form-control" id="movie-title" />
                        </div> 
                        <div className="mb-3">
                            <label for="movie-description" class="col-form-label">Description:</label>
                            <textarea className="form-control" id="movie-description"></textarea>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add Movie</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Modal


