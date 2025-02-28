import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Inicio from '../components/content/Inicio';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;