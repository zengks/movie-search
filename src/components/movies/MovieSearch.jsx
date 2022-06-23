import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'

import { searchMovieByID, searchMovieByTitle } from '../../context/omdb/OmdbActions';
import OmdbContext from '../../context/omdb/OmdbContext';
import AlertContext from '../../context/alert/AlertContext';

function MovieSearch() {

    const [title, setTitle] = useState('')
    const [movieId, setMovieId] = useState('')

    const { movies, dispatch } = useContext(OmdbContext)
    const { setAlert } = useContext(AlertContext)

    const handleTitleSubmit = async e => {
        e.preventDefault()
        if(title === ''){
            setAlert('***Please Enter a Movie Title***', 'error')
        }else{
            dispatch({type: 'SET_LOADING'})
            const movies = await searchMovieByTitle(title)
            dispatch({
                type: 'GET_MOVIES',
                payload: movies
            })
            setTitle('')
        }
    }

    const handleTitleChange = e => setTitle(e.target.value)

    const handleIDSubmit = async e => {
        e.preventDefault()
        if(movieId === ''){
            setAlert('***Please Enter a Movie ID***', 'error')
        }else{
            dispatch({type: 'SET_LOADING'})
            const movies = await searchMovieByID(movieId)
            dispatch({
                type: 'GET_MOVIES',
                payload: movies
            })
            setMovieId('')
        }
    }

    const handleMovieIdChange = e => setMovieId(e.target.value)

  return (
    <>
        <div className='container my-3'>
            <form onSubmit={handleTitleSubmit}>
                <div className='form-group'>
                    <label htmlFor="inputTitle"><h2>Search By Movie Title</h2></label>
                    <input type="text" className='form-control my-2' id='inputTitle' value={title} onChange={handleTitleChange} placeholder="Movie Title" />
                    <button type='submit' className='btn btn-primary me-2'>Search</button>
                </div>
            </form>

            <hr />

            <form onSubmit={handleIDSubmit}>
                <div className="form-group">
                    <label htmlFor="inputMovieId"><h2>Search By Movie ID</h2></label>
                    <input type="text" className='form-control my-2' id='inputMovieId' value={movieId} onChange={handleMovieIdChange} placeholder="Movie ID" />
                    <button type='submit' className='btn btn-primary me-2'>Search</button>
                </div>
            </form>
        </div>

        <div className='container my-3'>
            {movies.Response === 'True' && (
                    <div>
                        <button className="btn btn-warning me-2" onClick={ () => dispatch({type: 'CLEAR_MOVIES'})}>Clear All Results</button>
                    </div>
            )}
        </div>
    </>
  )
}

export default MovieSearch