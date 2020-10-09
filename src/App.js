import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <MovieList></MovieList>
    </div>
  );
}

export default App;
