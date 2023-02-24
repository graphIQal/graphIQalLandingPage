import { Heading } from '@chakra-ui/react';
import React from 'react';
import UseCase from '../../components/UseCase';

// TypeScript users only add this code

const ConnectionSection: React.FC = () => {
  return (
    <div className='p-container flex flex-col w-full'>
      <Heading>Making Associations and Connections</Heading>
      <UseCase
        title='Different Views for Interconnected Information'
        examples={['Tasks', 'Writing a Book']}
      />
      <UseCase
        title='Breaking Down Information into Pieces'
        examples={['Students']}
      />
      <UseCase
        title='No Hierarchy. No Limitations.'
        examples={['Second Brain', 'Product Dev']}
      />
    </div>
  );
};

export default ConnectionSection;
