import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage, GamePage, PokemonPage, SearchPage, NotFoundPage } from './pages';
import { PageWrapper } from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper />} />
        <Route index element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/pokemon/id" element={<SearchPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

