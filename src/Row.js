import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import axios from './axios';
import './Row.css'

function Row({title, fetchUrl, isLargeRow}) {

    const base_url = "https://image.tmdb.org/t/p/original"

    const  [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };


      const handleClick =  (movie) => {
        if(trailerUrl) {
            setTrailerUrl("");

      }
      else {
        movieTrailer(movie?.name || "")
        .then((url) => {
            const  urlParams = new URLSearchParams(new URL(url).search());
            setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
}
  

    //console.table(movies)

    return(
        <div className="row">
            {/*  Title */}
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(movie =>{
                    return <img
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${isLargeRow &&"row__posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path}`
                } alt={movie.name}/>
            })}
                
      

            </div>
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );


}

export default Row;