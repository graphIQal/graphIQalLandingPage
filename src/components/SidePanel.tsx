import { Heading } from '@chakra-ui/react';
import React, { useState } from 'react';

export const SidePanel: React.FC<{
  title: string;
  tabs: any;
  selected: number;
  setSelected: (val: number) => void;
}> = ({ title, tabs, selected, setSelected }) => {
  return (
    <div className='cursor-pointer  relative bg-selected_blue h-container p-container rounded-md flex flex-col justify-items-stretch'>
      <Heading as='h3' size='lg'>
        {title}
      </Heading>
      <div className='absolute bottom-0 w-full'>
        {tabs.map((tab: any, i: number) => (
          <div
            onClick={() => setSelected(i)}
            className={
              'h-52 mt-5 rounded-md hover:opacity-95 flex align-center items-center justify-center ' +
              (selected === i ? 'bg-base_black' : 'bg-selected_white')
            }
          >
            <Heading key={i} size='md'>
              {tab.title}
            </Heading>
          </div>
        ))}
        {/* <div className='bg-selected_white h-52 rounded-md flex align-center items-center justify-center'>
          <Heading size='md'>For Writers</Heading>
        </div>
        <div className='bg-selected_white h-52 mt-5 rounded-md flex align-center items-center justify-center'>
          <Heading size='md'>For Research</Heading>
        </div> */}
      </div>
    </div>
  );
};
