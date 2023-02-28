import {
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CustomTabs } from './CustomTabs';
import { Example } from './Example';
import { HoveringCard } from './HoveringCard';
import { SidePanel } from './SidePanel';
import './components.css';

const UseCase: React.FC<{ title: string; tabs: any; description: string }> = ({
	title,
	tabs,
	description,
}) => {
	const [selected, setSelected] = useState(0);
	const [translation, setTranslation] = useState('translate-x-0');

	useEffect(() => {
		setTranslation('translate-x-[150%]');
		setTimeout(() => {
			setTranslation('translate-x-0');
		}, 700);
	}, [selected]);

	return (
		<div className='flex flex-row-reverse flex-nowrap overflow-x-hidden relative rounded-md mb-14 text-left w-full h-fit'>
			<div className='basis-5/12'>
				<SidePanel
					description={description}
					selected={selected}
					setSelected={setSelected}
					tabs={tabs}
					title={title}
				/>
			</div>
			<div
				className='basis-7/12 overflow-x-hidden overflow-y-visible'
				style={{ direction: 'rtl' }}
			>
				<div className='w-full flex justify-center align-center items-center flex-col z-0 my-10 mx-10'>
					{tabs[selected].img}
				</div>
			</div>
		</div>
	);
};
export default UseCase;
