import { Card, CardBody, Text } from '@chakra-ui/react';
import React from 'react';
import './components.css';

export const HoveringCard: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='animation absolute right-0 bg-selected_blue p-10 rounded-md w-52'>
      <Text>{text}</Text>
    </div>
  );
};
