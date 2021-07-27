import React from 'react';
import './App.css';

import  Row from'./Row';
import  requests from'./requests';

function App() {
  return (
    <div className="App">
      <h1>Hey Let's build Tuniflix</h1>
      <Row title="TUNIFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending originals"fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
