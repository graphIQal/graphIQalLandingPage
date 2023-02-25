import { Card, CardBody, Text } from '@chakra-ui/react';
import React from 'react';
import './components.css';

export const HoveringCard: React.FC<{ text: string; translation?: string }> = ({
  text,
  translation = 'translate-x-[120%]',
}) => {
  console.log('translation');

  return (
    <div
      className={
        translation +
        ' absolute right-0 top-0 bg-selected_white p-2 rounded-md w-64 h-24 transition-transform ease-in drop-shadow-md z-10'
      }
    >
      <div className='w-full h-full flex justify-center align-center items-center'>
        <Text>{text}</Text>
      </div>
    </div>
  );
};
