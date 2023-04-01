import { Heading } from '@chakra-ui/react';
import React from 'react';
import { BsPenFill } from 'react-icons/bs';
import { FaGraduationCap, FaPaintBrush, FaSeedling } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { GiStairsGoal } from 'react-icons/gi';
import FigmaExample from '../../assets/images/FigmaExample.png';
import UseCase from '../../components/UseCase';
import BlogPost from '../../assets/images/figmas/blog_post.png';
import Timeline from '../../assets/images/figmas/book_timelines.png';
import Goals from '../../assets/images/figmas/goal_planning.png';
import Meeting from '../../assets/images/figmas/meeting_minutes.png';
import Roadmap from '../../assets/images/figmas/product_roadmap.png';
import Research from '../../assets/images/figmas/research_resources.png';
import VC from '../../assets/images/figmas/version_control.png';
import Wiki from '../../assets/images/figmas/wiki.png';

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
      img: <img className={className} src={VC} />,
    },
    {
      title: 'Teams',
      icon: <RiTeamLine className={iconClassName} />,
      img: <img className={className} src={Roadmap} />,
    },
    // {
    //   title: 'Artists',
    //   icon: <FaPaintBrush className={iconClassName} />,
    //   img: <img className={className} src={FigmaExample} />,
    // },
    // {
    //   title: 'Students',
    //   icon: <FaGraduationCap className={iconClassName} />,
    //   img: <img className={className} src={FigmaExample} />,
    // },
    // {
    //   title: 'Personal',
    //   icon: <FaSeedling className={iconClassName} />,
    //   img: <img className={className} src={FigmaExample} />,
    // },
  ];
  const tabs2 = [
    {
      title: 'Goals',
      icon: <GiStairsGoal className={iconClassName} />,
      img: <img className={className} src={Goals} />,
    },
    {
      title: 'Writers',
      icon: <BsPenFill className={iconClassName} />,
      img: <img className={className} src={Timeline} />,
    },
  ];
  const tabs3 = [
    {
      title: 'Teams',
      icon: <RiTeamLine className={iconClassName} />,
      img: <img className={className} src={Meeting} />,
    },
    {
      title: 'Researchers',
      icon: <GiArchiveResearch className={iconClassName} />,
      img: <img className={className} src={Research} />,
    },
  ];
  const tabs4 = [
    {
      title: 'Writers',
      icon: <BsPenFill className={iconClassName} />,
      img: <img className={className} src={BlogPost} />,
    },
    {
      title: 'Students',
      icon: <FaGraduationCap className={iconClassName} />,
      img: <img className={className} src={Wiki} />,
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
          title={'You’re not messy.  organisation for a complex world.'}
          description='Put information wherever and in however many places you want. Break it down to individual units.'
          tabs={tabs3}
        />
        <UseCase
          title='Connections are a first class citizen'
          description='Make connections between seemingly unrelated information, uncovering new insights.'
          tabs={tabs2}
        />
        <UseCase
          title='Accumulation of Knowledge'
          description='Collect resources and ideas as you live, no worryinga about organization.'
          tabs={tabs4}
        />
      </div>
    </div>
  );
};

export default ConnectionSection;
