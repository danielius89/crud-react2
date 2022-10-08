import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import MoviesCat from './pages/movies-page';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';
import GamesCat from './pages/games-cat';
import TvSeriesCat from './pages/tvseries-page';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesCat />} />
      <Route path="/games" element={<GamesCat />} />
      <Route path="/tv-series" element={<TvSeriesCat />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
