import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><Link to="/inicio">Inicio</Link></li>
          <li><Link to="/task-kronotime">Task Kronotime</Link></li>
          <li><Link to="/task-mafe">Task Mafe</Link></li>
          <li><Link to="/task-inversiones">Task Inversiones</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;