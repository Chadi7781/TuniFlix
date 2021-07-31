import React from 'react';
import './App.css';
import Banner from './Banner';
import  Row from'./Row';
import  requests from'./requests';

function App() {
  return (
    <div className="App">
      {/*Navbar*/}


      {/*Banner*/}
      <Banner/>
      
      <h1>Hey Let's build Tuniflix</h1>
      <Row title="TUNIFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      ></Row>
      <Row title="Trending originals"fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated"fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title=" Romance Movies"fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title=" Documentaries"fetchUrl={requests.fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
