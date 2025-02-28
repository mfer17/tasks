import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><Link to="/">Task</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;