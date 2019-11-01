import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <MovieList />
    </div>
  );
}

export default App;
