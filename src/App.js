import { useEffect, useState } from "react";
import "./App.css"
import MovieCar from "./MovieCar";
import searchIcon from "./search.svg"


const ApiUri = "http://www.omdbapi.com/?i=tt3896198&apikey=29aa8fc3";

const movie1 = {
    'Title': "spiderman",
    "Year": "2012",
    "imbdId": "tyfguihb8i",
    "Poster": "N/A",
    "Type": "movie"

}


const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const fetchData = async () => {

    }

    const searchMovies = async (title) => {
        const res = await fetch(`${ApiUri}&S=${title}`)
        const dat = await res.json()
        console.log(dat.Search)
        setMovies(dat.Search)
    }

    useEffect(() => {
        // fetchData()
        searchMovies("spiderman")
    }, []);




    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input type="text" placeholder="search for movies" onChange={(e) => {

                    setSearchTerm(e.target.value)
                }} value={searchTerm} />

                <img src={searchIcon}
                    onClick={() => {
                        searchMovies(searchTerm)
                     }}
                    alt="" srcset="" />
            </div>
            {
                movies?.length > 0
                    ? (<div className="container">
                        {movies.map((e) => <MovieCar movie1={e} />)}
                    </div>) : (
                        <div className="empty">

                            <h2>No Movies found</h2>
                        </div>
                    )
            }

        </div>
    )
}

export default App



//http://www.omdbapi.com/?i=tt3896198&apikey=29aa8fc3