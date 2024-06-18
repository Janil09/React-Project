
//alternative code 

// import React, { useEffect, useState } from 'react';
// import axios from './axios'; // Import the configured axios instance
// import requests from './requests';
// import './Banner.css';

// function Banner() {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const req = await axios.get(requests.fetchNetflixOriginals);
//         const movies = req.data.results;
//         if (movies && movies.length > 0) {
//           const randomMovie = movies[Math.floor(Math.random() * movies.length)];
//           console.log('Selected Movie:', randomMovie); // Log the selected movie
//           setMovie(randomMovie);
//         }
//       } catch (error) {
//         console.error("Failed to fetch data", error);
//       }
//     }
//     fetchData();
//   }, []);

//   console.log('Movie State:', movie); // Log the movie state

//   const backgroundImageUrl = `https:image.tmdb.org/t/p/original/${movie&&movie.backdrop_path}`;
//   console.log('Background Image URL:', backgroundImageUrl); // Log the background image URL

//   function truncate(str,n){
//     return str?.length > n ? str.substr(0,n-1)+ "...": str;
//   }

//   return (
//     <header className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("${backgroundImageUrl}")`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">

//           {truncate(movie?.overview,150)}
//         </h1>
//       </div>
//        <div className="banner--fadeBottom"></div>
//     </header>
//   );
// }

// export default Banner  





import React, { useEffect, useState } from 'react';
import axios from './axios'; // Import the configured axios instance
import requests from './requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get(requests.fetchNetflixOriginals);
        const movies = req.data.results;
        if (movies && movies.length > 0) {
          const randomMovie = movies[Math.floor(Math.random() * movies.length)];
          console.log('Selected Movie:', randomMovie); // Log the selected movie
          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }
    fetchData();
  }, []);

  console.log('Movie State:', movie); // Log the movie state

  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  console.log('Background Image URL:', backgroundImageUrl); // Log the background image URL

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;













