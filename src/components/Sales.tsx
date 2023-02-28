import { Heading } from '@chakra-ui/react';
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Face from '../assets/images/face.png';
import './components.css';
export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold: 1 }
      ),
    [ref]
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
export const Sales: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const enhance = (id: any) => {
    const element = document.getElementById(id);
    console.log(element?.innerText);
    const text = element?.innerText.split('');

    element && (element.innerText = '');

    text?.forEach((letter) => {
      const span = document.createElement('div');
      //   span.style.backgroundColor = 'black';
      //   span.style.width = '40px';
      //   span.style.margin = '2px';
      //   span.style.color = 'white';
      span.className = 'letter';

      span.innerText = letter;

      const x = Math.floor(Math.random() * 1000) - 500;
      const y = Math.floor(Math.random() * 400) - 200;
      const rotation = Math.floor(Math.random() * 180) - 90;

      span.style.transform =
        'translate(' + x + '%,' + y + '%) rotate(' + rotation + 'deg)';
      element?.appendChild(span);
    });
  };

  useEffect(() => {
    for (let i = 3; i <= 5; ++i) {
      enhance('word-' + i);
    }
  }, []);
  useEffect(() => {
    if (!isVisible) return;

    setTimeout(() => {
      for (let i = 3; i <= 5; ++i) {
        const letters = document.getElementById('word-' + i)?.childNodes;
        if (letters) {
          for (var j = 0; j < letters?.length; ++j) {
            (letters[j] as HTMLElement).style.transform = 'translate(0,0)';
          }
        }
      }
    }, 1200);
  }, [isVisible]);

  return (
    <div className='flex flex-row w-full p-container'>
      <div
        ref={ref}
        className='rounded-md w-[90%] text-left p-container flex flex-col space-y-5'
      >
        <div className='text-xl p-container  quote italic font-medium'>
          {/* <span className='italic ml-[-5%] text-[3rem] '>"</span> */}
          {/* <br /> */}
          There he recognized that he could combine telephone call-routing
          technology with Boole’s logic system to encode and transmit any type
          of information electronically. It was the fundamental insight on which
          computers rely. “It just happened that no one else was familiar with
          both those fields at the same time,” Shannon said.”
        </div>
        {/* <div className='w-[60%] text-left space-y-5 p-container bg rounded-md bg-selected_white drop-shadow-lg '> */}
        <div className='font-semibold text-4xl flex flex-col w-full letter'>
          <div className='flex flex-col px-container py-5'>
            <div>
              <span className='font-normal'>Leverage </span>
              <span className='opacity-0 text-sm'>a</span>
              <span className='font-normal' id='word-1'>
                your
              </span>

              <span className='opacity-0 text-sm'>a</span>
              <span className='font-normal' id='word-2'>
                unique
              </span>
            </div>
            <div>
              <span id='word-3'>mosaic</span>
              <span className='opacity-0 text-sm'>a</span>
              <span id='word-4'>of</span>

              <span className='opacity-0 text-sm'>a</span>
              <span id='word-5'>experiences.</span>
            </div>
          </div>
          <a className='flex flex-row align-middle items-center justify-start px-container gap-2 hover:cursor-pointer text-xl font-semibold text-[#2F3C7E]'>
            Unlock your potential with the power of connections
            <ArrowForwardIcon />
          </a>
        </div>
        {/* </div> */}

        {/* </div> */}
      </div>
      <div className='w-[90%] p-container rounded-md overflow-hidden'>
        <img src={Face} id='face' />
      </div>
    </div>
  );
};
