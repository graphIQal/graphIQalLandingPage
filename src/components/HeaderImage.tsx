import React, { useEffect } from 'react';

import Header1 from '../assets/images/figmas/Header1.png';
import Header2 from '../assets/images/figmas/Header2.png';

export const HeaderImage = () => {
	useEffect(() => {
		const left = document.getElementById('left-side');

		const handleMove = (e: any) => {
			console.log(
				`${Math.max(
					((e.clientX / window.innerWidth - 1 / 6) * 3) / 2,
					0
				)} %`
			);
			console.log(left);
			if (left)
				left.style.width = `${
					Math.max(
						((e.clientX / window.innerWidth - 1 / 6) * 3) / 2,
						0
					) * 100
				}%`;
		};

		document.onmousemove = (e) => handleMove(e);

		document.ontouchmove = (e) => handleMove(e.touches[0]);
	}, []);

	return (
		<div className='w-full mb-3 relative'>
			<div className='lg:w-2/3 w-[90%] drop-shadow-xl rounded-md border mx-auto relative overflow-hidden '>
				<img className={''} src={Header1} />
				<img
					id='left-side'
					src={Header2}
					className='absolute top-0 left-0 lg:h-[60vh] h-full overflow-hidden object-cover object-left'
				/>
			</div>
		</div>
	);
};
