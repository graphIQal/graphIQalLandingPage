import React from 'react';
import TitleRotation from '../../components/TitleRotation';

// TypeScript users only add this code

const HeaderSection: React.FC = () => {
	return (
		<div className='h-screen w-screen w-min-screen flex items-center justify-items-center'>
			<div className='h1 flex-1 align-middle items-center'>
				<div className='flex flex-row text-5xl font-bold align-middle items-center justify-center mb-10'>
					<span className='self-center'>Your</span>
					<TitleRotation /> doesn’t fit in files & folders.
				</div>
				<span>
					Graphiqal is where information is translated into great work
					because it's treated how it is in your brain - flexible and
					interconnected.
				</span>
			</div>
		</div>
	);
};

export default HeaderSection;
