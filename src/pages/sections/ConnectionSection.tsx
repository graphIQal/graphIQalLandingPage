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
import { AiFillFolderOpen } from 'react-icons/ai';

// TypeScript users only add this code
import { GiArchiveResearch } from 'react-icons/gi';
import { AiFillEye } from 'react-icons/ai';

const ConnectionSection: React.FC = () => {
  const className =
    'drop-shadow-lg md:drop-shadow-xl rounded-md md:rounded-lg border border-lining max-h-[65vh] w-auto h-auto';
  const iconClassName = 'h-full w-full';
  const tabs = [
    {
      title: 'Writing',
      icon: <BsPenFill className={iconClassName} />,
      img: <img className={className} src={VC} />,
      description:
        'Version Control for your work. Explore parallel versions and iterate without fear.',
    },
    {
      title: 'Visualizing',
      icon: <AiFillEye className={iconClassName} />,
      img: <img className={className} src={Roadmap} />,
      description:
        'Represent and work with information visually, seamlessly translating to the end goal.',
    },
    {
      title: 'Organizing',
      icon: <AiFillFolderOpen className={iconClassName} />,
      img: <img className={className} src={BlogPost} />,
      description:
        'Beyond Files & Folders. Simply create connections and be seamlessly organised.',
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
      title: 'Teams',
      icon: <RiTeamLine className={iconClassName} />,
      img: <img className={className} src={Meeting} />,
      description:
        'Because connections are non-linear, your tasks & documentation can be organized however needed: by Teams, Time, Project, Person, etc. ',
    },
    {
      title: 'Writing',
      icon: <BsPenFill className={iconClassName} />,
      img: <img className={className} src={Timeline} />,
      description:
        'Be able to write for a specific character, see all personalities of a group, and understand how each setting affects each character - without redundancy.',
    },
    {
      title: 'Research',
      icon: <GiArchiveResearch className={iconClassName} />,
      img: <img className={className} src={Research} />,
      description:
        'Open a resource in the context of a project or topic, and see only the relevant highlights.',
    },
    // {
    // 	title: 'Creatives',
    // 	icon: <BsPenFill className={iconClassName} />,
    // 	img: <img className={className} src={Timeline} />,
    // 	description:
    // 		'Map the structure of one idea into another to create powerful analogies and capabilities.',
    // },
  ];
  const tabs3 = [
    {
      title: 'Goals',
      icon: <GiStairsGoal className={iconClassName} />,
      img: <img className={className} src={Goals} />,
      description:
        'Beyond Bullet Journals. A bullet journal that integrates straight to your to-do’s.',
    },
    {
      title: 'Research',
      icon: <GiArchiveResearch className={iconClassName} />,
      img: <img className={className} src={Research} />,
      description:
        'No longer be forced to have your knowledge bound by entire books, chapters, or even paragraphs. graphIQal treats each level as its own entity.',
    },
  ];
  const tabs4 = [
    {
      title: 'Writing',
      icon: <BsPenFill className={iconClassName} />,
      img: <img className={className} src={BlogPost} />,
      description:
        'Unite the knowledge and resources you interact with in one place.',
    },
    {
      title: 'Learning',
      icon: <FaGraduationCap className={iconClassName} />,
      img: <img className={className} src={Wiki} />,
      description: "Build your own knowledge graphs, wiki's, and guides.",
    },
  ];

  return (
    <div className='flex flex-col rounded-md'>
      <div className='lg:w-1/2 w-[90%] text-center mb-5 self-center'>
        <Heading className='mb-3'>Unleash the Power of Connections</Heading>
        <div>
          You’re not disorganised, lost, or unfocused. Think of the complexity
          of your life, your thoughts, and your work. Most tools doesn’t speak
          your brain’s native language, where information is layered, flexible,
          interconnected. Anyone who wants to succeed in our current,
          hyper-connected world stands to benefit from graphIQal.
        </div>
      </div>
      <div className='space-y-12'>
        <UseCase
          title='The power of connections'
          description='The world is complex, but it doesn’t have to be messy. By thinking in terms of associations and relationships rather than rows and tables in a database, graphIQal can turn information overwhelm into a a weapon of creativity.'
          tabs={tabs}
        />
        <UseCase
          title={'See only the essential for your context.'}
          description='When the world is a firehose of information, we needed a tool that could help us block out the unessential as much as one helping us use it. GraphIQal is a tool that’s focused on making use of your information according to your specific context, and helping the unessential stay out of your way until you need it.'
          tabs={tabs2}
        />
        <UseCase
          title='Break down information for clarity & focus'
          description='Make connections between seemingly unrelated information, uncovering new insights.'
          tabs={tabs3}
        />
        <UseCase
          title='Accumulation of knowledge'
          description='Leverage your unique constellation of knowledge. graphIQal is built to handle the complexity of your projects, designed for speed of input and to pull from your resources seamlessly. '
          tabs={tabs4}
        />
      </div>
    </div>
  );
};

export default ConnectionSection;
