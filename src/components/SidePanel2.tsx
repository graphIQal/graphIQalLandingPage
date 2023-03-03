import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Pencil from '../assets/images/pencil.png';

export const SidePanel2: React.FC<{
  title: string;
  tabs: any;
  selected: number;
  setSelected: (val: number) => void;
  description: string;
  index: number;
}> = ({ title, tabs, selected, setSelected, description, index }) => {
  const defaultWidth = 'w-32';
  const secondaryWidth = 'w-16';
  const [width, setWidth] = useState([defaultWidth, defaultWidth]);

  //   useEffect(() => {
  //     setWidth([secondaryWidth, secondaryWidth]);
  //     let newWidths: string[] = Array(width.length).fill(secondaryWidth);
  //     newWidths[selected] = defaultWidth;
  //     setWidth(newWidths);
  //   }, [selected]);
  return (
    <div className='cursor-pointer relative h-container p-container rounded-md flex flex-col space-y-5 w-[40%]'>
      <div className='rounded-full w-10 h-10 bg-base_black text-base_white flex justify-center items-center font-bold timeline_number '>
        {index}
      </div>
      <div className='w-[80%] space-y-5 backdrop-filter rounded-md'>
        {/* <img src={Pencil} /> */}
        <Heading as='h3' size='lg'>
          {title}
        </Heading>
        <p className='text-body w-[70%]'>{description}</p>
      </div>
      {/* <div>
        <p className='text-body transition-transform'>
          {tabs[selected].description}
        </p>
      </div> */}
      <div className='absolute bottom-0 right-0 flex flex-col align-bottom items-end'>
        {tabs.map((tab: any, i: number) => (
          <div
            onClick={() => setSelected(i)}
            className={
              'drop-shadow p-[0.15rem] h-36 w-36 mt-3 rounded-l-md  flex align-center items-center justify-center bg-opacity-50 bg-selected_white ' +
              width[i] +
              ' transition-all ease-in'
            }
          >
            <div
              className={
                'w-full h-full flex flex-col justify-center space-y-3 items-center bg-opacity-50 rounded-sm ' +
                (selected == i ? 'bg-base_white ' : 'bg-selected_white ')
              }
            >
              <div className='w-[30%]'>{tab.icon}</div>
              <p key={i} className={'text-lg font-bold text-black '}>
                {tab.title}
              </p>
            </div>
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
