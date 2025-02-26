import React from 'react';

interface TitleProps {
  title: string;
  level: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title: React.FC<TitleProps> = ({ title, level }) => {
  const Heading = level;
  return <Heading>{title}</Heading>;
};

export default Title;