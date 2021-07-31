import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css'
function Row({title, fetchUrl, isLargeRow}) {

    const base_url = "https://image.tmdb.org/t/p/original"

    const  [movies, setMovies] = useState([]);

    // A snippets of code which runs based on a specific condition/variables
    useEffect(()=>{
        //if [], run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    },[fetchUrl])


    //console.table(movies)

    return(
        <div className="row">
            {/*  Title */}
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(movie =>{
                    return <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow &&"row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
                } alt={movie.name}/>
            })}
                
      

            </div>
            {/*  Container */}
        </div>
    );


}

export default Row;