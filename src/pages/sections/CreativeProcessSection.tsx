import { Heading } from '@chakra-ui/react';
import React from 'react';
import '../../components/components.css';
import UseCase2 from '../../components/UseCase2';

const CreativeProcessSection: React.FC = () => {
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
				description={
					"Hi there! If you're reading this, You’re probably like us — sitting in front of a computer, a lot navigating the complexity of work and life. You’ve also probably used a variety of tools to do so, from Microsoft Word to Email to Excel. "
				}
			/>
			<UseCase2 description='While we’re complete nerds about these tools, we’ve had our fair share of frustrations working with them. To understand why they have the limitations they do, we have to question the history behind them.' />
			<UseCase2
				description={
					'Despite their evolution, our modern tools are really just digital versions of our past physical tools. While Email can send a letter across the world instantaneously, there is nothing fundamentally different about that letter than if it was scribed in paper and ink. While I can type at 143 words per minute on Microsoft Word (😎), the product is not something unproducible in the 1500’s.\n\n Our organisation system is literally just files & folders… but on the computer. While we’ve come a long way from papyrus, our work is still well… pages pieced together ~~in a linear fashion.~~'
				}
			/>
			<UseCase2
				description={
					'Developing our digital tools to mimic the physical ones we already know makes intuitive sense, but we can’t help but ask: Why are our digital tools defined by  limitations of our physical ones? What could we improve if our tools weren’t bounded by the box of silly little physics? \n\n Being tech natives ourselves, we felt the frustration of wanting to move our whiteboard nodes like in Figma, or wishing our textbooks had working links like the Internet.  '
				}
			/>
			<UseCase2
				description={
					'To find out, we talked to a lot of people, from professors to writers to students. What powered their creativity and productivity? \n\n In that exploration process, we found many interesting ways of doing and thinking, but underneath it all we found a common underlying shape of thought, governed by four rules.'
				}
			/>
			<UseCase2
				description={
					'1. Thoughts are always interconnected, each thought blooming into many others - the human mind is made for thriving in the creative chaos of creating connections, insights and content.\n\n 2. All thoughts are run through the lens of context. Resources, data, and outlines should be seen and grouped through the context they’re in. '
				}
			/>
		</div>
	);
};

export default CreativeProcessSection;
