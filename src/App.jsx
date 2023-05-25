import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage, GamePage, PokemonPage, SearchPage, NotFoundPage } from './pages';
import { PageWrapper } from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <PageWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/pokemon/:id" element={<SearchPage />} />
        <Route path="/info" element={<BestSnackPage />} />
        <Route path="/game" element={<AddSnackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

