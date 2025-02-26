import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Tasks. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;