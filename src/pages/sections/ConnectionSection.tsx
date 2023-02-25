import { Heading } from '@chakra-ui/react';
import React from 'react';
import UseCase from '../../components/UseCase';
import ConnectionIcon from '../../assets/images/connection_icon.png';

// TypeScript users only add this code

const ConnectionSection: React.FC = () => {
  return (
    <div className='p-container flex flex-col bg-selected_white rounded-md m-12'>
      <div className='m-5 bg-selected_white w-0.3 rounded-md p-4 text-center inline-block border-b-2 mt-[-50px]'>
        {/* <img
          className='w-16 absolute mt-[-40px] ml-[-40px]'
          src={ConnectionIcon}
        /> */}
        <Heading>Associations and Connections</Heading>
      </div>
      <div>
        <UseCase
          title='Different Views for Interconnected Information'
          examples={['Tasks', 'Writing a Book']}
        />
        {/* <UseCase
        title='Breaking Down Information into Pieces'
        examples={['Students']}
      />
      <UseCase
        title='No Hierarchy. No Limitations.'
        examples={['Second Brain', 'Product Dev']}
      /> */}
      </div>
    </div>
  );
};

export default ConnectionSection;
