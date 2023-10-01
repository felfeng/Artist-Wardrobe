import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
