import { Heading } from '@chakra-ui/react';
import React from 'react';
import UseCase from '../../components/UseCase';
import ConnectionIcon from '../../assets/images/connection_icon.png';
import FigmaExample from '../../assets/images/FigmaExample.png';
import { FaPaintBrush, FaGraduationCap, FaSeedling } from 'react-icons/fa';
import { BsPenFill } from 'react-icons/bs';

// TypeScript users only add this code
import { GiArchiveResearch } from 'react-icons/gi';
const ConnectionSection: React.FC = () => {
	const className =
		'drop-shadow-xl rounded-lg border border-lining max-h-[65vh] w-auto h-auto';
	const iconClassName = 'h-full w-full';
	const tabs = [
		{
			title: 'Writers',
			icon: <BsPenFill className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
		},
		{
			title: 'Researchers',
			icon: <GiArchiveResearch className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
		},
		{
			title: 'Artists',
			icon: <FaPaintBrush className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
		},
		{
			title: 'Students',
			icon: <FaGraduationCap className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
		},
		{
			title: 'Personal',
			icon: <FaSeedling className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
		},
	];
	const tabs2 = [
		{
			title: 'Learners',
			icon: <BsPenFill className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
		},
	];
	const tabs3 = [
		{
			title: 'Students',
			icon: <FaGraduationCap className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
		},
	];

	return (
		<div className='flex flex-col rounded-md'>
			<div className='w-0.3 text-center mb-5'>
				<Heading>Flexible, Interconnected Information</Heading>
			</div>
			<div className='space-y-12'>
				<UseCase
					title='Perfect visualisation for your information'
					description='See and edit your information in a graph, a document, organized by time, or however you want. And sync seamlessly between them.'
					tabs={tabs}
				/>
				<UseCase
					title={
						'You’re not messy.  organisation for a complex world.'
					}
					description='Put information wherever and in however many places you want. Break it down to individual units.'
					tabs={tabs3}
				/>
				<UseCase
					title='Connections are a first class citizen'
					description='Make connections between seemingly unrelated information, uncovering new insights.'
					tabs={tabs2}
				/>
			</div>
		</div>
	);
};

export default ConnectionSection;
