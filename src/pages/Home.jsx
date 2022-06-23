import MovieSearch from "../components/movies/MovieSearch"
import MovieResults from "../components/movies/MovieResults"

function Home() {
    return (
        <>
            <div className="container">
                <MovieSearch />
                <MovieResults />
            </div>
        </>
    )
    
}

export default Home