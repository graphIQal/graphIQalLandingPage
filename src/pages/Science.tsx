import { Divider, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NeuralNetwork from '../assets/images/blog/neural_network2.png';
import BlogCard from '../components/BlogCard';
import Blog, { blogPosts } from './Blog';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

export const Science: React.FC = () => {
  const blogsToShow = [];
  blogsToShow.push(blogPosts[0], blogPosts[1], blogPosts[2]);
  const filename = 'SciencePost.md';
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`./${filename}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  const newTheme = {
    p: (props: { children: any }) => {
      const { children } = props;
      return (
        <Text textAlign={'left'} fontSize='lg' mb={'8'}>
          {children}
        </Text>
      );
    },
  };

  return (
    <div>
      <Navbar />
      <div className='text-white'>hello</div>
      <div className='w-full h-full p-0'>
        <div
          style={{ backgroundImage: `url(${NeuralNetwork})` }}
          className='flex mt-14 w-screen h-[30rem] bg-cover bg-no-repeat flex-col justify-center align-start items-center text-left '
        >
          <div className=' h-[30rem] w-full bg-base_black opacity-70 absolute'></div>
          <div className='flex flex-col w-[60%] align-top items-start justify-center space-y-10'>
            <Heading size='2xl' className='text-base_white z-10'>
              The Science Behind graphIQal
            </Heading>
            <Heading size='lg' className='text-left text-gray-400  z-10'>
              Understanding what our brain sees
            </Heading>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center align-middle justify-center py-container'>
        <div className='w-[60%]'>
          <ReactMarkdown
            components={ChakraUIRenderer(newTheme)}
            skipHtml
            children={post}
          ></ReactMarkdown>
        </div>
        {/* <Text fontSize={'xl'} className='w-[60%] space-y-5'>
          At the core of graphIQal lies the goal of capturing what we’re calling
          our brain’s “native language”. It is only in this situation, where we
          can see things in front of us the way our brain sees them, that we can
          produce at our maximum potential. So, it is imperative first to
          understand what it is that our brain “sees”.
          <br />
          Our brain breaks down information into two components: concepts, or
          nodes, and connections between them.
          <br />
          <Heading className='my-10' size={'lg'}>
            What is a Concept?
          </Heading>
          It can be an experience, a thought, a feeling, a piece of knowledge, a
          current snapshot of your brain state.
          <br />
          It’s a recursively deep entity: if it is something like the concept of
          psychology, it entails concepts within itself, and each of these is
          its own recursively deep entity. Concepts contain concepts that
          contain concepts. This is the idea of putting things into “folders” in
          your mind, but a concept that entails another concept isn’t
          necessarily its parent.
          <br />
          <Heading className='my-10' size={'lg'}>
            How are concepts placed?
          </Heading>
          A better question,{' '}
          <span className='italic'>how are they connected?</span> <br />
          Psychologists think of ideas as nodes in a vast network, called
          associative memory, in which each idea is linked to many others. There
          are different types of links: causes are linked to their effects
          (virus → cold); things to their properties (lime → green); things to
          the categories to which they belong (banana → fruit); things to
          themselves at a different stage in time (final draft → rough draft).
          <br />
          In stark contrast to modern technology, where everything is in folders
          and categories, our brains have
          <span className='bold'>countless</span> ways to connect and place this
          information. The conceptual metaphor theory of psychology argues that
          our brain doesn’t merely use metaphors to express “literal” thoughts:
          we instead think in the language of metaphors. But what are metaphors,
          really? **They’re connections.** *Our brain thinks in terms of
          connections.* The process of making these connections in our brain is
          way more powerful than we think. An idea that has been activated does
          not merely evoke one other idea. It activates many ideas, which in
          turn activate others. Furthermore, only a few of the activated ideas
          will register in consciousness; most of the work of associative
          thinking is silent, hidden from our conscious selves. The notion that
          we have limited access to the workings of our minds is difficult to
          accept because, naturally, it is alien to our experience, but it is
          true: you know far less about yourself than you feel you do.
          Naturally, capturing these connections that are firing in your brain
          is a difficult task. But I argue that this is a powerful process, a
          process worth capturing. So what do we get from connecting things
          better? First and foremost, we get enhanced
          ***************understanding.*************** We can arrange, filter,
          and manipulate concepts based on the connections between them. But
          there’s a whole other world unleashed as well: the world of
          creativity. In order to be creative, the ideas have to be present in
          your head already. We must forage for information in order to be
          creative. You can’t break movies you don’t understand (from Huberman)
          In essence, we’re asking and exploring how we can come up with
          something new, something creative: and that’s by making a connection
          between two concepts in your brain that haven’t ever been connected
          before. Examples + experts: Range: Our greatest strength is the exact
          opposite of narrow specialization. It is the ability to integrate
          broadly. Claude Shannon, who launched the Information Age thanks to a
          philosophy course he took to fulfill a requirement at the University
          of Michigan. In it, he was exposed to the work of self-taught
          nineteenth-century English logician George Boole, who assigned a value
          of 1 to true statements and 0 to false statements and showed that
          logic problems could be solved like math equations. It resulted in
          absolutely nothing of practical importance until seventy years after
          Boole passed away, when Shannon did a summer internship at AT&T’s Bell
          Labs research facility. There he recognized that he could combine
          telephone call-routing technology with Boole’s logic system to encode
          and transmit any type of information electronically. It was the
          fundamental insight on which computers rely. “It just happened that no
          one else was familiar with both those fields at the same time,”
          Shannon said.” Originals: The idea of “Vuja de”: the opposite of deja
          vu. We face something similar, but we see it with a fresh perspective
          that enables us to gain new insights into old problems a particular
          paper cited other areas of research that rarely, if ever, appeared
          together, then it was classified as having used an atypical
          combination of knowledge. Most papers relied purely on conventional
          combinations of previous knowledge. That is, they cited work from
          other journals that often appeared together in other studies’ lists of
          references. The “hit” papers, those that over the next decade were
          used by a huge number of other scientists, featured ample conventional
          combinations, but also added an injection of unusual knowledge
          combinations. These random insights could be in anyone - could be in
          you? *If we could understand the ‘physics of concepts’, then we could
          perhaps derive from it the ‘chemistry of creativity’*
        </Text> */}
        <Divider width={'70%'} alignSelf='center' className='my-10' />
        <div className='text-left px-container'>
          <div className='flex flex-row gap-x-5 align-middle items-center'>
            <Heading size='lg' className='ml-5'>
              Read More
            </Heading>
            <Link to='/blog'>
              <AiOutlineArrowRight
                size={24}
                className='hover: cursor-pointer'
              />
            </Link>
          </div>
          <div
            className=' flex flex-row justify-center flex-wrap
      '
          >
            {blogsToShow.map((post, i) => (
              <div className='m-5'>
                <BlogCard key={i} post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
