import axios from "axios";

const OMDB_BASE_URL = process.env.REACT_APP_OMDB_BASE_URL
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY
const OMDB_URL = OMDB_BASE_URL + OMDB_API_KEY

export const searchMovieByTitle = async (text) => {
    const res = await axios.get(`${OMDB_URL}&t=${text}`)
    return res.data
}

export const searchMovieByID = async (movieId) => {
    const res = await axios.get(`${OMDB_URL}&i=${movieId}`)
    return res.data
}

