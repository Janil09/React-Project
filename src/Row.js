
// Alternative Code 1

//  import React, { useEffect, useState } from 'react';
//  import axios from "./axios";
// import "./Row.css";
// import YouTube from 'react-youtube';

// const base_url = "https://image.tmdb.org/t/p/original/";
// const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

// function Row({ title, fetchUrl, isLargeRow }) {
//     const [movies, setMovies] = useState([]);
//     const [trailerUrl, setTrailerUrl] = useState("");

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(fetchUrl);
//             console.log(request);
//             setMovies(request.data.results);
//             return request;
//         }
//         fetchData();
//     }, [fetchUrl]);
//     console.log(API_KEY);

//     const opts = {
//         height: "390",
//         width: "100%",
//         playerVars: {
//             autoplay: 1,
//         },
//     };

//     console.log(movies);

//     const handleClick = (movie) => {
//         if (trailerUrl) {
//             setTrailerUrl('');
//         } else {
//             axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${"19f84e11932abbc79e6d83f82d6d1045"}`)
//                 .then(response => {
//                     const trailer = response.data.results.find(video => video.type === 'Trailer');
//                     if (trailer) {
//                         setTrailerUrl(trailer.key);
//                     } else {
//                         console.log("Trailer not found");
//                         alert("Trailer not found for this movie.");
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Error finding trailer:", error);
//                     alert("Trailer not found for this movie.");
//                 });
//         }
//     };

//     return (
//         <div className="row">
//             <h2>{title}</h2>

//             <div className={`row_posters ${isLargeRow && "row_posterLarge"}`}>
//                 {movies.map(movie => (
//                     <img
//                         key={movie.id}
//                         onClick={() => handleClick(movie)}
//                         className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
//                         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//                         alt={movie.name}
//                     /> 
//                     {hoverMovie === movies.id &&(
//                         <div className="movie_name">{movies.title || movies.name}</div>
//                     )}
                
//                 ))}
//             </div>
//             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//         </div>
//     );
// }

// export default Row;


//Alternative code 2



import React, { useEffect, useState } from 'react';
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";
const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [hoveredMovie, setHoveredMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`)
                .then(response => {
                    const trailer = response.data.results.find(video => video.type === 'Trailer');
                    if (trailer) {
                        setTrailerUrl(trailer.key);
                    } else {
                        console.log("Trailer not found");
                        alert("Trailer not found for this movie.");
                    }
                })
                .catch(error => {
                    console.error("Error finding trailer:", error);
                    alert("Trailer not found for this movie.");
                });
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className={`row_posters ${isLargeRow && "row_posterLarge"}`}>
                {movies.map(movie => (
                    <div
                        key={movie.id}
                        className="row_posterContainer"
                        onMouseEnter={() => setHoveredMovie(movie.id)}
                        onMouseLeave={() => setHoveredMovie(null)}
                    >
                        <img
                            onClick={() => handleClick(movie)}
                            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                        {hoveredMovie === movie.id && (
                            <div className="movie_name">{movie.title || movie.name}</div>
                        )}
                    </div>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;













