import { Divider } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import { Sales } from '../components/Sales';
import ConnectionSection from './sections/ConnectionSection';
import CreativeProcessSection from './sections/CreativeProcessSection';
import FeatureGrid from './sections/FeatureGrid';
import HeaderSection from './sections/HeaderSection';

// TypeScript users only add this code

const MainPage: React.FC = () => {
	return (
		<div className=''>
			<Navbar />
			<HeaderSection />
			<ConnectionSection />
			<Divider />
			<Sales />
			<Divider />
			<CreativeProcessSection />
			<FeatureGrid />
		</div>
	);
};

export default MainPage;
