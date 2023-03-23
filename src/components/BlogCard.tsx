import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import './components.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import NeuralNetwork from '../assets/images/blog/neural.png';

type BlogCardProps = {
  post: {
    title: string;
    url: string;
    description: string;
    tags: string[];
    date: string;
    img: string;
  };
};
const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div>
      <div
        id='blog_card'
        onClick={() => window.open(post.url, '_blank')}
        style={{ backgroundImage: `url(${post.img})` }}
        className=' h-72 w-80 p-8 rounded-sm flex flex-col justify-center text-left space-y-3 bg-cover relative hover:cursor-pointer '
      >
        <div
          // style={{ backgroundImage: `url(${NeuralNetwork})` }}
          className='h-72 w-32 bg-base_black z-5 absolute left-0 transition-all duration-1000 rounded-l-sm'
          id='square'
        ></div>
        <div
          id='circle'
          className='bg-base_white h-32 w-32 rounded-full absolute -right-16 opacity-0 transition-all delay-1000 duration-500 flex flex-col justify-center'
        >
          <AiOutlineArrowRight
            color='black'
            size={'2rem'}
            className=' ml-[1.5rem]'
          />
        </div>

        {/* <img src={post.img} /> */}
        <div className='h-full align-bottom flex flex-col justify-end z-10'>
          {post.tags.map((tag, i) => (
            <Text
              key={i}
              className=' text-white z-10 absolute top-[60%]'
              fontSize='xs'
            >
              {tag}
            </Text>
          ))}
          <Heading color='white' size='md' className=' drop-shadow-md'>
            {post.title}
          </Heading>
        </div>

        {/* <Text fontSize={'xs'}>{post.date}</Text>
      <Text size='sm'>{post.description}</Text>
      <div className='flex flex-row items-center align-middle justify-between'>
        <div
          onClick={() => window.open(post.url, '_blank')}
          className=' hover:cursor-pointer hover:bg-slate-500 p-2 rounded-sm bg-base_white'
        >
          Read more
        </div>
      </div> */}
      </div>
    </div>
  );
};
export default BlogCard;
