import React from 'react';
import Navbar from '../components/Navbar';
import ConnectionSection from './sections/ConnectionSection';
import CreativeProcessSection from './sections/CreativeProcessSection';
import HeaderSection from './sections/HeaderSection';

// TypeScript users only add this code

const MainPage: React.FC = () => {
	return (
		<div>
			<Navbar />
			<HeaderSection />
			<ConnectionSection />
			<CreativeProcessSection />
		</div>
	);
};

export default MainPage;
