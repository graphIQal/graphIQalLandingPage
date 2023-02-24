import { Divider } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import ConnectionSection from './sections/ConnectionSection';
import CreativeProcessSection from './sections/CreativeProcessSection';
import HeaderSection from './sections/HeaderSection';

// TypeScript users only add this code

const MainPage: React.FC = () => {
	return (
		<div className='w-full'>
			<Navbar />
			<HeaderSection />
			<Divider />
			<ConnectionSection />
			<Divider />
			<CreativeProcessSection />
		</div>
	);
};

export default MainPage;
