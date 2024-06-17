// import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import Row from './Row';
// import requests from './requests';
// import Banner from "./Banner"
// import NavBar from './NavBar';




// function App() {
//   return (
//     <div className="App">
     
//       <NavBar />
//       <Banner />
//       <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
//         isLargeRow={true}
//       />
//       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
//       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
//       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//       <Row title="Comdey Movies" fetchUrl={requests.fetchComedyMovies} />
//       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
//     </div>
//   );
// }

// export default App;



//alternative code

import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import NavBar from './NavBar';
import LoginScreen from './pages/LoginScreen';
import LogoutScreen from './pages/LogoutScreen';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <>
         
          <NavBar />
          <Banner />
          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          <LogoutScreen onLogout={handleLogout} />
        </>
      )}
    </div>
  );
}

export default App;








