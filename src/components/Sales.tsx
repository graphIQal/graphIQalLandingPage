import { Heading } from '@chakra-ui/react';
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import './components.css';
export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
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

      const x = Math.floor(Math.random() * 400) - 200;
      const y = Math.floor(Math.random() * 400) - 200;

      span.style.transform = 'translate(' + x + '%,' + y + '%)';
      element?.appendChild(span);
    });
  };

  useEffect(() => {
    if (!isVisible) return;
    for (let i = 1; i <= 5; ++i) {
      enhance('word-' + i);
    }
    setTimeout(() => {
      for (let i = 1; i <= 5; ++i) {
        const letters = document.getElementById('word-' + i)?.childNodes;
        if (letters) {
          for (var j = 0; j < letters?.length; ++j) {
            (letters[j] as HTMLElement).style.transform = 'translate(0,0)';
          }
        }
      }
    }, 500);
  }, [isVisible]);

  return (
    <div className='flex flex-row w-full p-container'>
      <div
        ref={ref}
        className='rounded-md w-[90%] text-left bg-base_white p-container flex flex-col space-y-5'
      >
        {/* <div className='w-[50%] text-right space-y-5'> */}
        <Heading className='font-semibold'>
          <span id='word-1'>Your</span>
          <span> </span>
          <span id='word-2'>unique</span>
          <span> </span>
          <span id='word-3'>mosaic</span>
          <span> </span>
          <span id='word-4'>of</span>
          <span> </span>
          <span id='word-5'>experiences</span>
        </Heading>

        <p className='text-2xl font-semibold text-[#2F3C7E]'>
          Unlock this potential with the Power of Connections
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};
