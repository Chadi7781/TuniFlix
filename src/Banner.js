import React, { useEffect, useState } from 'react'
import axios from './axios';

import './Banner.css';
import  requests  from './requests';

function Banner(){

    const [movie,setMovie] = useState([]);



    useEffect(()=> {
     async function fetchData()  {
         
      const request = await  axios.get(requests.fetchNetflixOriginals);

        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        );
        return request;
     }
     fetchData();
    },[]);

    
    console.log(movie);
    
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:  `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
        
        >
        <div className="banner__contents">
            {/*Title*/}
            <h1 className="banner__title">{movie?.title ||movie?.name ||movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                
            </div>
            <h1 className="banner__description">
                {movie?.overview}

            </h1>
            {/*div >2 buttons*/}
            {/*Description*/}

        </div>
         
        </header>

    )
}
export default Banner;