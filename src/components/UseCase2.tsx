import React from 'react';
import './components.css';

import About from '../assets/images/about.png';

const UseCase2: React.FC<{
	title: string;
	tabs: any;
	description: string;
	index: number;
}> = ({ title, tabs, description, index }) => {
	return (
		<div className='text-left flex flex-row p-container relative rounded-md justify-around'>
			{/* <div className='h-full absolute bg-base_black top-0 left-0 w-1 z-0'></div>
			<div className='rounded-full w-10 h-10 bg-base_black text-base_white flex justify-center items-center font-bold timeline_number '>
				{index}
			</div> */}
			<div className='w-[50%] h-auto flex flex-col justify-center align-middle items-center'>
				{/* <CustomTabs selected={false} text='' /> */}
				<img src={About} />
			</div>
			<div className='relative h-container ml-5 rounded-md flex flex-col space-y-5 w-[50%]'>
				<p className='text-md'>{description}</p>
			</div>
		</div>
	);
};
export default UseCase2;
