import React from 'react';
import './components.css';

const UseCase2: React.FC<{
	description: string;
	// index: number;
	src: string;
}> = ({ description, src }) => {
	return (
		<div className='text-left flex flex-row relative rounded-md'>
			{/* <div className='h-full absolute bg-base_black top-0 left-0 w-1 z-0'></div>
			<div className='rounded-full w-10 h-10 bg-base_black text-base_white flex justify-center items-center font-bold timeline_number '>
				{index}
			</div> */}
			<div className='w-[50%] h-72 flex flex-col justify-center align-middle items-center overflow-hidden shadow-md'>
				{/* <CustomTabs selected={false} text='' /> */}
				<img src={src} className='h-full w-auto' />
			</div>
			<div className='relative h-container ml-5 rounded-md flex flex-col space-y-5 w-[50%] whitespace-pre-line text-md'>
				{description}
			</div>
		</div>
	);
};
export default UseCase2;
