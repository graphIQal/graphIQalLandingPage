import React, { useCallback, useEffect } from 'react';
import TitleRotation from '../../components/TitleRotation';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { particleSettings } from '../../components/Particles.js/particleSettings';
import { Example } from '../../components/Example';
import FigmaExample from '../../assets/images/FigmaExample.png';

// TypeScript users only add this code

const HeaderSection: React.FC = () => {
	useEffect(() => {
		const blob = document.getElementById('blob');

		window.onpointermove = (event) => {
			const { clientX, clientY } = event;
			blob?.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`,
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};
	}, []);

	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	return (
		<div className='h-screen w-screen w-min-screen flex flex-col overflow-x-hidden'>
			<div id='blob'></div>
			<div id='blur'></div>
			<div className='z-0 absolute h-screen w-screen'>
				<Particles
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						pauseOnBlur: true,
						pauseOnOutsideViewport: true,
						// background: {
						// 	size: '100vh 100vw',
						// 	repeat: 'no-repeat',
						// 	position: 'relative',
						// 	opacity: 0,
						// },
						fullScreen: false,
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: 'push',
								},
								onHover: {
									enable: true,
									mode: 'grab',
								},
								resize: true,
							},
							modes: {
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
								grab: {
									distance: 200,
								},
							},
						},
						particles: {
							color: {
								value: '#ffffff',
							},
							links: {
								color: '#ffffff',
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							collisions: {
								enable: false,
							},
							move: {
								direction: 'none',
								enable: true,
								outModes: {
									default: 'bounce',
								},
								random: false,
								speed: 3,
								straight: false,
								// gravity: {
								// 	enable: true,
								// },
								// attract: {
								// 	enable: true,
								// 	distance: 10,
								// 	rotateX: 1,
								// 	rotateY: 1,
								// },
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 80,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: 'circle',
							},
							size: {
								value: { min: 1, max: 5 },
							},
						},
						detectRetina: true,
					}}
				/>
			</div>
			<div className='flex-col flex items-center h-full w-full z-10 justify-start'>
				<div className='h-1/5'></div>
				<div className='h1 align-middle w-fit text-6xl font-extrabold'>
					<div className='flex flex-row align-middle items-center justify-center mb-10'>
						<span className='self-center'>Your</span>
						<TitleRotation /> doesn’t
					</div>
					{/* <div className=' align-middle mb-10 justify-between flex flex-row'>
						<div>fit</div> <div>in</div> <div>files</div>{' '}
						<div>&</div>
						<div>folders</div>
					</div> */}
					<div className='self-center align-middle mb-10 justify-center flex flex-row'>
						fit in files & folders
					</div>
				</div>
				<div className='w-1/2 mb-10'>
					Graphiqal is where information is translated into great work
					because it's treated how it is in your brain - flexible and
					interconnected.
				</div>
				<div className='w-fit'>
					<button
						type='button'
						className='py-3 px-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm .5 text-center mr-3 '
					>
						Get graphIQal free
					</button>
				</div>
				<div className='w-full mx-auto h-auto mt-10'>
					{/* <CustomTabs selected={false} text='' /> */}
					<div className='absolute w-full mb'>
						<img
							className={
								'mx-auto h-auto w-3/4 drop-shadow-xl rounded'
							}
							src={FigmaExample}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderSection;
