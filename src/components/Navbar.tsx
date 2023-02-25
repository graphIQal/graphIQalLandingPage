import React from 'react';
import NavItem from './Navbar/NavItem';

// TypeScript users only add this code

const Navbar: React.FC = () => {
	return (
		<div className='flex w-full flex-row justify-between justify-items-stretch px-4 border-b border-gray-200 fixed z-10'>
			<div className='flex flex-row justify-items-stretch align-middle py-4 '>
				<span className='self-center text-xl font-semibold whitespace-nowrap text-w px-6'>
					graphIQal
				</span>
				<a
					href='#'
					className='block flex-auto  pl-3 pr-4 py-2'
					aria-current='page'
				>
					Home
				</a>

				<a
					href='#'
					className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black '
				>
					The Science
				</a>

				<a
					href='#'
					className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black '
				>
					Pricing
				</a>
			</div>
			<div className='flex flex-row justify-items-stretch align-middle py-4'>
				<a
					href='#'
					className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black  '
				>
					Our Blog
				</a>
				<a
					href='#'
					className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black  '
				>
					Contact Us
				</a>
				<button
					type='button'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 .5 text-center mr-3 '
				>
					Get graphIQal
				</button>
			</div>
		</div>
	);
};

export default Navbar;

// const Navbar: React.FC = () => {
// 	return (
// 		<nav className='bg-white  px-2 sm:px-4 .5 fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
// 			<div className='container flex items-center justify-between mx-auto'>
// 				<div className='flex flex-row justify-start align-middle'>
// 					<span className='self-center text-xl font-semibold whitespace-nowrap text-w'>
// 						graphIQal
// 					</span>

// 					<a
// 						href='#'
// 						className='block flex-auto  pl-3 pr-4 py-2'
// 						aria-current='page'
// 					>
// 						Home
// 					</a>

// 					<a
// 						href='#'
// 						className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black md:p-0'
// 					>
// 						The Science
// 					</a>

// 					<a
// 						href='#'
// 						className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black md:p-0'
// 					>
// 						Pricing
// 					</a>
// 				</div>
// 				<div className='flex flex-row flex-end'>
// 					<a
// 						href='#'
// 						className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black md:p-0  '
// 					>
// 						Our Blog
// 					</a>

// 					<a
// 						href='#'
// 						className='block flex-auto  pl-3 pr-4 py-2 text-gray-700 rounded hover:text-black md:p-0  '
// 					>
// 						Contact Us
// 					</a>
// 					<button
// 						type='button'
// 						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 .5 text-center mr-3 md:mr-0 '
// 					>
// 						Get GraphIQal
// 					</button>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };
