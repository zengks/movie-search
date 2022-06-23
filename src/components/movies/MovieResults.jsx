import React from 'react'
import { useContext } from 'react'
import OmdbContext from '../../context/omdb/OmdbContext'
import Spinner from '../layout/Spinner'
import logo from '../layout/asset/omdb-logo.png'

function MovieResults() {

  const {movies, loading} = useContext(OmdbContext)

  const {
    Poster,
    Title,
    Year,
    Response,
    imdbID,
  } = movies

  if(!loading && Response === 'True') {
    return (
      <div className='container'>
        <div className='row'>
            {Poster !== 'N/A' ? (
              <figure className='col-xl-3 col-lg-4 col-sm-12'>
                <img src={Poster} alt={`${Title}'s Movie Poster`} />
              </figure>
            ) : (
              <h2 className='mb-3 col-xl-3 col-lg-4 col-sm-12'>*Oops! Movie Poster Not Available*</h2>
            )}
            
          <div className='col-xl-4 col-lg-4 ms-lg-5 col-sm-12'>
            <h2 className='mb-4'>{Title}</h2>
            <h3>Year of Release: {Year !== 'N/A' ? Year : "Not Available"}</h3>
            <button className='btn btn-success mt-3 mb-3' type='button' data-toggle="collapse" data-target="#labelDisplay" aria-expanded="false" aria-controls="labelDisplay">More Details</button>
            <div className='collapse' id='labelDisplay'>
              <div className="card card-body mb-5">
                <figure>
                  <img src={logo} alt="OMDb Logo" />
                </figure>
                <p className='card-title'><strong>Movie ID: {imdbID}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else if(!loading && Response === 'False'){
    return <h3>Movie Not Found!</h3>
  }else if(loading){
    return <Spinner />
  }
}

export default MovieResults