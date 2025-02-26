import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Inicio from '../components/content/Inicio';
import TaskKronotime from '../components/content/TaskKronotime';
import TaskMafe from '../components/content/TaskMafe';
import TaskInversiones from '../components/content/TaskInversiones';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/task-kronotime" element={<TaskKronotime/>} />
          <Route path="/task-mafe" element={<TaskMafe/>} />
          <Route path="/task-inversiones" element={<TaskInversiones/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;