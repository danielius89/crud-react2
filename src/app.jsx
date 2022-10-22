import * as React from 'react';
import { useState, useMemo } from 'react';
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
import ArticlePage from './pages/article-page';
import { UserContext } from './global/UserContext';
import Footer from './components/footer';

const App = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesCat />} />
          <Route path="/games" element={<GamesCat />} />
          <Route path="/tv-series" element={<TvSeriesCat />} />
          <Route path="article/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
