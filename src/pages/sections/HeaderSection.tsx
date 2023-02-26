import React, { useEffect } from 'react';
import TitleRotation from '../../components/TitleRotation';

// TypeScript users only add this code

const HeaderSection: React.FC = () => {
  useEffect(() => {
    const blob = document.getElementById('blob');

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;
      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };
  }, []);

  return (
    <div className='h-screen w-screen w-min-screen flex items-center justify-items-center'>
      <div id='blob'></div>
      <div id='blur'></div>

      <div className='flex-col flex items-center justify-items-center w-full z-10'>
        <div className='h1 flex-1 align-middle items-center w-fit text-5xl font-bold'>
          <div className='flex flex-row  align-middle items-center justify-center mb-10'>
            <span className='self-center'>Your</span>
            <TitleRotation /> doesn’t
          </div>
          <div className=' align-middle mb-10 justify-between flex flex-row'>
            <div>fit</div> <div>in</div> <div>files</div> <div>&</div>
            <div>folders</div>
          </div>
        </div>
        <div className='flex-1 w-1/2 mb-10'>
          Graphiqal is where information is translated into great work because
          it's treated how it is in your brain - flexible and interconnected.
        </div>
        <div> </div>
        <div className='flex-1 w-fit'>
          <button
            type='button'
            className='py-3 px-10 text-white bg-[#2F3C7E] hover:bg-[#1B234B] focus:ring-4 focus:outline-none focus:ring-blue-300 text-xl rounded-lg text-sm .5 text-center mr-3 '
          >
            Get graphIQal
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
