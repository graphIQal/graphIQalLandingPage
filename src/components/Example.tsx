import React, { ReactNode } from 'react';
import FigmaExample from '../assets/images/FigmaExample.png';

export const Example: React.FC<{ img: ReactNode }> = ({ img }) => {
  return <div>{img}</div>;
};
