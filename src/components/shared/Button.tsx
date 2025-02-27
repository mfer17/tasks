import React from 'react';

import '../../styles/button.css';

interface ButtonProps {
  text: string;
  styleBtn: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, styleBtn, onClick }) => {
  return (
    <button className={styleBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;