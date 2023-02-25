import React, { ReactNode } from 'react';
import FigmaExample from '../assets/images/FigmaExample.png';

export const Example: React.FC<{ img: ReactNode }> = ({ img }) => {
  return (
    <div className='w-full h-full flex justify-center align-center items-center flex-col z-0 '>
      {img}
    </div>
  );
};
