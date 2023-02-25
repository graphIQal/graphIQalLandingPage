import React, { useEffect } from 'react';

import './FeatureGrid.css';
// TypeScript users only add this code

const FeatureGrid: React.FC = () => {
	useEffect(() => {
		const cards = document.getElementById('cards');
		if (cards) {
			cards.onmousemove = (e) => {
				for (const card of document.getElementsByClassName(
					'card'
				) as HTMLCollectionOf<HTMLElement>) {
					const rect = card.getBoundingClientRect(),
						x = e.clientX - rect.left,
						y = e.clientY - rect.top;

					card.style.setProperty('--mouse-x', `${x}px`);
					card.style.setProperty('--mouse-y', `${y}px`);
				}
			};
		}
	}, []);

	return (
		<div className='cards-body'>
			<div id='cards'>
				<div className='card'>
					<div className='card-content'>
						<div className='card-info-wrapper'>
							<div className='card-info'>
								{/* <i className='fa-duotone fa-apartment'></i> */}
								<div className='card-info-title'>
									<h3 className='text-xl font-bold'>
										Apartments
									</h3>
									<h4>Places to be apart. Wait, what?</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-content'>
						<div className='card-info-wrapper'>
							<div className='card-info'>
								{/* <i className='fa-duotone fa-unicorn'></i> */}
								<div className='card-info-title'>
									<h3 className='text-xl font-bold'>
										Unicorns
									</h3>
									<h4>A single corn. Er, I mean horn.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-content'>
						<div className='card-info-wrapper'>
							<div className='card-info'>
								{/* <i className='fa-duotone fa-blender-phone'></i> */}
								<div className='card-info-title'>
									<h3 className='text-xl font-bold'>
										Blender Phones
									</h3>
									<h4>These absolutely deserve to exist.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-content'>
						<div className='card-info-wrapper'>
							<div className='card-info'>
								{/* <i className='fa-duotone fa-person-to-portal'></i> */}
								<div className='card-info-title'>
									<h3 className='text-xl font-bold'>Adios</h3>
									<h4>See you...</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-content'>
						<div className='card-info-wrapper'>
							<div className='card-info'>
								{/* <i className='fa-duotone fa-person-from-portal'></i> */}
								<div className='card-info-title'>
									<h3 className='text-xl font-bold'>
										I mean hello
									</h3>
									<h4>...over here.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card'>
					<div className='card-content'>
						<div className='card-info-wrapper'>
							<div className='card-info'>
								{/* <i className='fa-duotone fa-otter'></i> */}
								<div className='card-info-title'>
									<h3 className='text-xl font-bold'>
										Otters
									</h3>
									<h4>Look at me, imma cute lil fella.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureGrid;
