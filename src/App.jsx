import React from 'react';
import {Routes, Route } from 'react-router-dom';

import { HomePage, GamePage, PokemonPage, SearchPage, NotFoundPage } from './pages';
import { PageWrapper } from './components/';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<PageWrapper />} >
            <Route index element={<HomePage />} />
            <Route path="/pokemon" element={<PokemonPage />} />
            <Route path="/pokemon/id" element={<SearchPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </>
  );
};

export default App;

