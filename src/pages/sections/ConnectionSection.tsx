import { Heading } from '@chakra-ui/react';
import React from 'react';
import { BsPenFill } from 'react-icons/bs';
import { FaGraduationCap, FaPaintBrush, FaSeedling } from 'react-icons/fa';
import FigmaExample from '../../assets/images/FigmaExample.png';
import UseCase from '../../components/UseCase';

// TypeScript users only add this code
import { GiArchiveResearch } from 'react-icons/gi';
import { AiFillEye } from 'react-icons/ai';

const ConnectionSection: React.FC = () => {
	const className =
		'drop-shadow-xl rounded-lg border border-lining max-h-[65vh] w-auto h-auto';
	const iconClassName = 'h-full w-full';
	const tabs = [
		{
			title: 'Writers',
			icon: <BsPenFill className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
			description:
				'Version Control for your work. Explore and iterate without fear. ',
		},
		{
			title: 'Visual',
			icon: <AiFillEye className={iconClassName} />,
			img: <img className={className} src={FigmaExample} />,
			description: '',
		},
		// {
		// 	title: 'Researchers',
		// 	icon: <GiArchiveResearch className={iconClassName} />,
		// 	img: <img className={className} src={FigmaExample} />,
		// 	description: ''
		// },
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
					title='The Power of Connections'
					description='The world is complex, but it doesn’t have to be messy. By thinking in terms of associations and relationships rather than rows and tables in a database, graphIQal can turn information overwhelm into a a weapon of creativity.'
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
