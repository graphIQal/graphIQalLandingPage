import React from 'react';

import Header1 from '../assets/images/figmas/Header1.png';
import Header2 from '../assets/images/figmas/Header2.png';

export const HeaderImage = () => {
	const left = document.getElementById('left-side');

	const handleMove = (e: any) => {
		console.log(`${((e.clientX / window.innerWidth - 1 / 6) * 3) / 2} %`);

		if (left)
			left.style.width = `${
				(((e.clientX / window.innerWidth - 1 / 6) * 3) / 2) * 100
			}%`;
	};

	document.onmousemove = (e) => handleMove(e);

	document.ontouchmove = (e) => handleMove(e.touches[0]);

	return (
		<div className='w-full mb-3 relative'>
			<div className='lg:w-2/3 w-[90%] drop-shadow-xl rounded-md border mx-auto relative '>
				<img className={''} src={Header2} />
				<div
					id='left-side'
					className='absolute top-0 left-0 h-full overflow-hidden '
				>
					<img src={Header1} className='h-full' />
				</div>
			</div>
		</div>
	);
};
