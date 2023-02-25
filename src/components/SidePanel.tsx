import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export const SidePanel: React.FC<{
  title: string;
  tabs: any;
  selected: number;
  setSelected: (val: number) => void;
}> = ({ title, tabs, selected, setSelected }) => {
  const [width, setWidth] = useState(['w-64', 'w-64']);

  useEffect(() => {
    setWidth(['w-64', 'w-64']);
    let newWidths: string[] = Array(width.length).fill('w-64');
    newWidths[selected] = 'w-80';
    setWidth(newWidths);
  }, [selected]);
  return (
    <div className='cursor-pointer relative h-container p-container rounded-md flex flex-col space-y-5'>
      <Heading as='h3' size='lg'>
        {title}
      </Heading>
      <p className='text-body'>
        Make connections between your information and keep it all in one place
      </p>
      <div>
        <p className='text-body transition-transform'>
          {tabs[selected].description}
        </p>
      </div>
      <div className='absolute bottom-0 right-0 flex flex-col align-bottom items-end'>
        {tabs.map((tab: any, i: number) => (
          <div
            onClick={() => setSelected(i)}
            className={
              'drop-shadow p-5 h-16 mt-5 rounded-l-md  flex align-center items-center justify-center z-10 ' +
              (selected === i ? 'bg-base_black ' : 'bg-base_white ') +
              width[i] +
              ' transition-all ease-in'
            }
          >
            <Heading
              color={selected === i ? 'white' : 'black'}
              key={i}
              size='md'
              fontWeight={'normal'}
            >
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
