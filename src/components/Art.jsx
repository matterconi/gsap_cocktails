import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		const start = isMobile ? 'top 20%' : 'top top';
		
		const maskedTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#art',
				start: start,
				end: 'bottom center',
				scrub: 1.5,
				pin: true
			}
		});

		maskedTimeline
			.to('.will-fade', {
				opacity: 0,
				stagger: 0.2,
				ease: 'power1.inOut',
			})
			.to('.masked-img', {
				scale: 1.2,
				maskPosition: 'center',
				maskSize: '400%',
				duration: 1,
				ease: 'power1.inOut',
			})
			.to('#masked-content', {
					opacity: 1,
					duration: 1,
					ease: 'power1.inOut',
				}
			)
	});

  return (
	<div id="art">
		<div className='container mx-auto h-ful pt-20'>
			<h2 className='will-fade'>The Art</h2>
			<div className='content'>
				<ul className='space-y-4 will-fade'>
					{
						goodLists.map((feature, index) => (
							<li key={index} className='flex items-center gap-2'>
								<img src="/images/check.png" alt="check" className='w-5 h-5' />
								<p>{feature}</p>
							</li>
						))
					}
				</ul>

				<div className='cocktail-img'>
					<img
						src="/images/under-img.jpg" 
						alt="cocktail-img"
						className='abs-center masked-img size-full object container'
					/>
				</div>

				<ul className='space-y-4 will-fade'>
					{
						featureLists.map((feature, index) => (
							<li key={index} className='flex items-center justify-start gap-2'>
								<img src="/images/check.png" alt="check" className='w-5 h-5' />
								<p className='md:w-fit w-60'>{feature}</p>
							</li>
						))
					}
				</ul>
			</div>

			<div className='masked-container'>
				<h2 className='will-fade'>
					Sip-Worthy Perfection
				</h2>
				<div id="masked-content">
					<h3>Fatti col Cuore, decorati con Passione</h3>
					<p>I miei non sono solo cocktail, sono la mia ricerca artistica e sensoriale</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Art