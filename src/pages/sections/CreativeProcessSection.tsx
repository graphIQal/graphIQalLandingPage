import { Heading } from '@chakra-ui/react';
import React from 'react';
import '../../components/components.css';
import UseCase2 from '../../components/UseCase2';
import Tools from '../../assets/images/narrative/tools.png';
import Frustration from '../../assets/images/narrative/frustrations.png';
import Box from '../../assets/images/narrative/box.png';
import Mind from '../../assets/images/narrative/mind2.png';
import People from '../../assets/images/narrative/people.png';
import History from '../../assets/images/narrative/history.png';
import Lightbulb from '../../assets/images/narrative/lightbulb.png';
import Plane from '../../assets/images/narrative/plane.png';

const CreativeProcessSection: React.FC = () => {
  return (
    <div
      id='creative_processes'
      className='flex flex-col rounded-md space-y-10 relative md:px-[15vw] gap-y-10 mt-10 md:mt-0'
    >
      <div className='md:m-5 md:w-0.3 w-full text-center'>
        {/* <img
          className='w-16 absolute mt-[-40px] ml-[-40px]'
          src={ConnectionIcon}
        /> */}
        <Heading>Our Story: the Inspiration Behind graphIQal</Heading>
      </div>
      <UseCase2
        description={
          "Hi there! If you're reading this, You’re probably like us — sitting in front of a computer, a lot navigating the complexity of work and life. You’ve also probably used a variety of tools to do so, from Microsoft Word to Email to Excel. "
        }
        src={Tools}
      />
      <UseCase2
        src={History}
        description='While we’re complete nerds about these tools, we’ve had our fair share of frustrations working with them. To understand why they have the limitations they do, we have to question the history behind them.'
      />
      <UseCase2
        description={
          'Despite their evolution, our modern tools are really just digital versions of our past physical tools. While Email can send a letter across the world instantaneously, there is nothing fundamentally different about that letter than if it was scribed in paper and ink. While I can type at 143 words per minute on Microsoft Word (😎), the product is not something unproducible in the 1500’s.\n\n Our organisation system is literally just files & folders… but on the computer. While we’ve come a long way from papyrus, our work is still well… pages pieced together ~~in a linear fashion~~'
        }
        src={Frustration}
      />
      <UseCase2
        description={
          'Developing our digital tools to mimic the physical ones we already know makes intuitive sense, but we can’t help but ask: Why are our digital tools defined by  limitations of our physical ones? What could we improve if our tools weren’t bounded by the box of silly little physics? \n\n Being tech natives ourselves, we felt the frustration of wanting to move our whiteboard nodes like in Figma, or wishing our textbooks had working links like the Internet.  '
        }
        src={Box}
      />
      <UseCase2
        description={
          'To find out, we talked to a lot of people, from professors to writers to students. What powered their creativity and productivity? \n\n In that exploration process, we found many interesting ways of doing and thinking, but underneath it all we found a common underlying shape of thought, governed by four rules.'
        }
        src={People}
      />
      <UseCase2
        description={
          '1. Thoughts are always interconnected, each thought blooming into many others - the human mind is made for thriving in the creative chaos of creating connections, insights and content.\n\n 2. All thoughts are run through the lens of context. Resources, data, and outlines should be seen and grouped through the context they’re in. \n\n 3. Information is recursively discrete. \n\n 4. We learn best when we can attach new information to a foundation, to our existing mental models.'
        }
        src={Mind}
      />
      <UseCase2
        description={
          "Along with these shapes of thought, we found the deeper philosophies that powered Creativity and Productivity. \n\n The Knowledge-Action Gap: Most of us know what we should do to be happier, healthier, and wealthier. Our world doesn’t lack information, but it lacks ways to grapple that information, to bridge the knowledge-action gap, to be able to flit between both the high-level goals and the low-level tasks. \n\n Your second brain : Our brains aren't good at Storage. By creating an organised space to store your knowledge, we can become less stressed and more productive."
        }
        src={Lightbulb}
      />
      <UseCase2
        description={
          'Creativity : Our research into the space of creativity has shown us that groundbreaking insights are about making connections between things that aren’t usually connected. Since everyone has a unique mosaic of experiences, skills, and knowledge, we want to bring out the potential for everyone to create something impactful. \n\n Thats everything for now! We appreciate you getting this far, and would love to hear your input on graphIQal or anything else :)'
        }
        src={Plane}
      />
    </div>
  );
};

export default CreativeProcessSection;
