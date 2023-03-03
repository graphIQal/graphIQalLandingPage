import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export const SidePanel: React.FC<{
  title: string;
  tabs: any;
  selected: number;
  setSelected: (val: number) => void;
  description: string;
}> = ({ title, tabs, selected, setSelected, description }) => {
  // const [width, setWidth] = useState(['w-64', 'w-64']);

  useEffect(() => {
    // setWidth(['w-52', 'w-52']);
    // let newWidths: string[] = Array(width.length).fill('w-52');
    // newWidths[selected] = 'w-64';
    // setWidth(newWidths);
  }, [selected]);

  return (
    <div className=' relative h-container p-container rounded-md flex flex-col space-y-5'>
      <div className='w-[80%] space-y-5'>
        <Heading as='h3' size='lg'>
          {title}
        </Heading>
        <p className='text-body'>{description}</p>
      </div>
      <div className='flex flex-row flex-wrap'>
        {tabs.map((tab: any, i: number) => (
          <div
            onClick={() => setSelected(i)}
            className={
              'border-selected_white p-5 h-32 w-32 mt-3 mr-3 rounded-md flex align-center items-center justify-end cursor-pointer transition-all ease-in flex-col ' +
              (selected === i
                ? 'bg-white border-2 drop-shadow'
                : 'bg-selected_white border-2')
            }
          >
            <div className='grow p-3'>{tab.icon}</div>
            <p
              key={i}
              className={
                'grow-0 h-fit font-bold text-' +
                (selected === i ? 'black ' : 'black ')
              }
            >
              {tab.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
