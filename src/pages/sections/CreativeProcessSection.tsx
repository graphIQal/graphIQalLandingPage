import { Heading } from '@chakra-ui/react';
import React from 'react';
import UseCase from '../../components/UseCase';
import FigmaExample from '../../assets/images/FigmaExample.png';

// TypeScript users only add this code

const CreativeProcessSection: React.FC = () => {
	const className = 'h-auto w-[1700px] drop-shadow-xl ';

	const tabs = [
		{
			title: 'For Writers',
			img: <img className={className} src={FigmaExample} />,
			description: 'Description of first use case',
		},
		{
			title: 'For Researchers',
			img: <img className={className} src={FigmaExample} />,
			description: 'Description of second use case',
		},
	];
	const tabs2 = [
		{
			title: 'For Developers',
			img: <img className={className} src={FigmaExample} />,
			description: 'Description of first use case',
		},
		{
			title: 'For Learners',
			img: <img className={className} src={FigmaExample} />,
			description: 'Description of first use case',
		},
	];
	const tabs3 = [
		{
			title: 'For Students',
			img: <img className={className} src={FigmaExample} />,
			description: 'Description of first use case',
		},
	];
	return (
		<div className='flex flex-col rounded-md space-y-10'>
			<div className='m-5 w-0.3 text-center'>
				{/* <img
          className='w-16 absolute mt-[-40px] ml-[-40px]'
          src={ConnectionIcon}
        /> */}
				<Heading>Flexible, Interconnected Information</Heading>
			</div>
			<UseCase
				title='Connections are a first class citizen'
				description='See and edit your information in a graph, a document, organized by time, or however you want. And sync seamlessly between them.'
				tabs={tabs}
			/>
			<UseCase
				title={"It's not you. Organsation that makes sense"}
				description='Put information wherever and in however many places you want. Break it down to individual units.'
				tabs={tabs3}
			/>
			<UseCase
				title=''
				description='Make connections between seemingly unrelated information, uncovering new insights.'
				tabs={tabs2}
			/>
		</div>
	);
};

export default CreativeProcessSection;
