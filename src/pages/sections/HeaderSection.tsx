import React from 'react';

// TypeScript users only add this code

const HeaderSection: React.FC = () => {
	return (
		<div className='h-screen w-screen w-min-screen flex items-center justify-items-center'>
			<div className='h1 flex-1'>
				<h1 className='text-5xl font-bold'>
					Your work doesn’t fit in files & folders.
				</h1>
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
