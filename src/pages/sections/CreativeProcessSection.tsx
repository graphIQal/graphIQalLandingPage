import { Heading } from '@chakra-ui/react';
import React from 'react';
import UseCase from '../../components/UseCase';
import FigmaExample from '../../assets/images/FigmaExample.png';
import {
	FaPaintBrush,
	FaGraduationCap,
	FaSeedling,
	FaPodcast,
} from 'react-icons/fa';
import { BsPenFill } from 'react-icons/bs';
import { GiArchiveResearch } from 'react-icons/gi';
import '../../components/components.css';
import UseCase2 from '../../components/UseCase2';

// TypeScript users only add this code

const CreativeProcessSection: React.FC = () => {
	const className = 'h-auto w-[1700px] drop-shadow-xl ';
	const iconClassName = 'w-full h-full';

	const tabs = [
		{
			title: 'Writers',
			img: <img className={className} src={FigmaExample} />,
			icon: <BsPenFill className={iconClassName} />,
		},
		{
			title: 'Researchers',
			img: <img className={className} src={FigmaExample} />,
			icon: <GiArchiveResearch className={iconClassName} />,
		},
	];
	const tabs2 = [
		{
			title: 'Students',
			img: <img className={className} src={FigmaExample} />,
			icon: <FaGraduationCap className={iconClassName} />,
		},
		{
			title: 'Writers',
			img: <img className={className} src={FigmaExample} />,
			icon: <BsPenFill className={iconClassName} />,
		},
	];
	const tabs3 = [
		{
			title: 'Researchers',
			img: <img className={className} src={FigmaExample} />,
			icon: <GiArchiveResearch className={iconClassName} />,
		},
		{
			title: 'Podcasts',
			img: <img className={className} src={FigmaExample} />,
			icon: <FaPodcast className={iconClassName} />,
		},
	];
	//   const tabs2 = [
	//     {
	//       title: 'For Developers',
	//       img: <img className={className} src={FigmaExample} />,
	//       description: 'Description of first use case',
	//     },
	//     {
	//       title: 'For Learners',
	//       img: <img className={className} src={FigmaExample} />,
	//       description: 'Description of first use case',
	//     },
	//   ];
	//   const tabs3 = [
	//     {
	//       title: 'For Students',
	//       img: <img className={className} src={FigmaExample} />,
	//       description: 'Description of first use case',
	//     },
	//   ];
	return (
		<div
			id='creative_processes'
			className='flex flex-col rounded-md space-y-10 relative px-[15vw]'
		>
			<div className='m-5 w-0.3 text-center'>
				{/* <img
          className='w-16 absolute mt-[-40px] ml-[-40px]'
          src={ConnectionIcon}
        /> */}
				<Heading>Elevating the Creative Process</Heading>
			</div>
			<UseCase2
				title="Sometimes, it's easiest to just draw"
				description='See your ideas in your brain’s native language. Materialize your intricate web of thoughts with no friction.'
				tabs={tabs}
				index={1}
			/>
			<UseCase2
				title={'Develop your ideas under a spotlight'}
				description='Each idea– each entity of information– is independent. Connect and view them with no limitations.'
				tabs={tabs2}
				index={2}
			/>
			<UseCase2
				title='From a web of thoughts to a final product'
				description='No thoughts and ideas thrown away. From a mind map, to an outline, to a document, transform with no loss of information.'
				tabs={tabs3}
				index={3}
			/>
		</div>
	);
};

export default CreativeProcessSection;
