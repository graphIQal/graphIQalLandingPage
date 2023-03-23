import React from 'react';
import BlogCard from '../components/BlogCard';
import Cards from '../assets/images/blog/blog_cards.png';
import Contents from '../assets/images/blog/contents.png';
import { Heading } from '@chakra-ui/react';
import Hackathon from '../assets/images/blog/hackathon.png';
import Vision from '../assets/images/blog/vision.png';
import Proverbs from '../assets/images/blog/design_proverbs.png';
import System from '../assets/images/blog/design_system.png';
import Navbar from '../components/Navbar';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Journey of GraphIQal: Table of Contents',
      url: 'https://medium.com/@isabelle.ilyia/the-journey-of-graphiqal-table-of-contents-6f98b63dd072',
      description: '',
      tags: ['OVERVIEW'],
      date: '',
      img: Contents,
    },
    {
      title: 'A Baby GraphIQal, and the 36 Hours That Preceded It',
      url: 'https://medium.com/better-programming/a-baby-graphiqal-and-the-36-hours-that-preceded-it-8a574f5cac73',
      description: '',
      tags: ['HACKATHON'],
      date: '',
      img: Hackathon,
    },
    {
      title: 'Our Vision and Competition',
      url: 'https://medium.com/better-programming/baby-graphiqal-takes-its-first-steps-vision-competition-c94eceb8fc43',
      description: '',
      tags: ['PRODUCT'],
      date: '',
      img: Vision,
    },
    {
      title: 'Proverbs of UX Design: Building a Design Compass',
      url: 'https://medium.com/better-programming/proverbs-of-ux-design-building-a-design-compass-542c9608866d',
      description: '',
      tags: ['DESIGN'],
      date: '',
      img: Proverbs,
    },
    {
      title: 'On consistency without repetition',
      url: 'https://medium.com/@isabelle.ilyia/on-consistency-without-repetition-6928203d5c40',
      description: '',
      tags: ['DESIGN'],
      date: '',
      img: System,
    },
    {
      title: 'Building Our Backend House of Cards',
      url: 'https://medium.com/better-programming/building-our-backend-house-of-cards-5773234f6e0b',
      description:
        ' A tech stack is a delicate structure, kind of like a house of cards.',
      tags: ['BACKEND'],
      date: 'February 11, 2023',
      img: Cards,
    },
  ];
  return (
    <>
      <Navbar />
      <div className='p-container'>
        {/* <div className='w-0.3 text-center mb-5 mt-16'>
          <Heading>Our Blog</Heading>
        </div> */}
        <div
          className=' flex flex-row justify-left items-stretch flex-wrap mt-16
      '
        >
          {blogPosts.map((post, i) => (
            <div className='m-5'>
              <BlogCard key={i} post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Blog;
