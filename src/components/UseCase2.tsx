import React from 'react';
import './components.css';

const UseCase2: React.FC<{
  description: string;
  // index: number;
  src: string;
}> = ({ description, src }) => {
  return (
    <div className='text-left flex md:flex-row flex-col relative rounded-md items-center md:items-start space-y-5 md:space-y-0'>
      {/* <div className='h-full absolute bg-base_black top-0 left-0 w-1 z-0'></div>
			<div className='rounded-full w-10 h-10 bg-base_black text-base_white flex justify-center items-center font-bold timeline_number '>
				{index}
			</div> */}
      <div className='md:w-[50%] max-w-[90%] h-56 lg:h-72 flex flex-col justify-center align-middle items-center overflow-hidden shadow-md'>
        {/* <CustomTabs selected={false} text='' /> */}
        <img src={src} className='h-full w-auto' />
      </div>
      <div className='relative h-container ml-5 rounded-md flex flex-col space-y-5 md:w-[50%] whitespace-pre-line text-md'>
        {description}
      </div>
    </div>
  );
};
export default UseCase2;
