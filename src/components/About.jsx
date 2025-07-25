import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('#about h2', {
			type: 'words'
		})

		const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: '#about',
					start: 'top center'
				}
			})
		
		timeline
			.from(titleSplit.words, {
				opacity: 0,
				duration: 1,
				yPercent: 100,
				ease: 'expo.out',
				stagger: 0.02
			})
			.from('.top-grid div, .bottom-grid div', {
				opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
			}, '-=0.75')
	})
  return (
	<div id="about">
		<div className='mb-16 md.px-0 px-5'>
			<div className='content'>
				<div className='md:col-span-8'>
					<p className='badge'>
						I miei cocktail migliori
					</p>
					<h2>
						Dove ogni dettaglio conta <span className='text-white'>- </span> dalla decorazione al colore
					</h2>
				</div>
				<div className='sub-content'>
					<p>
						Ogni cocktail che servo è un'opera d'arte, un'esperienza sensoriale che va oltre il semplice bere. La mia passione per la mixology si riflette in ogni dettaglio, dalla scelta degli ingredienti alla presentazione finale. Credo che un cocktail debba essere un'esperienza completa, capace di sorprendere e deliziare i sensi.
					</p>

					<div>
						<p className='md:text-3xl text-xl font-bold'>
							<span>4.5</span>/5
						</p>
						<p className='text-sm text-white-100'>
							Più di 100 recensioni
						</p>
					</div>
				</div>
			</div>
		</div>

		<div className='top-grid'>
			<div className='md:col-span-3'>
				<div className='noisy'>
					<img src="/images/abt1.png" alt="about-1" />
				</div>
			</div>

			<div className='md:col-span-6'>
				<div className='noisy'>
					<img src="/images/abt2.png" alt="about-2" />
				</div>
			</div>

			<div className='md:col-span-3'>
				<div className='noisy'>
					<img src="/images/abt5.png" alt="about-5" />
				</div>
			</div>
		</div>

		<div className='bottom-grid'>
			<div className='md:col-span-8'>
				<div className='noisy'>
					<img src="/images/abt3.png" alt="about-3" />
				</div>
			</div>
			<div className='md:col-span-4'>
				<div className='noisy'>
					<img src="/images/abt4.png" alt="about-4" />
				</div>
			</div>
		</div>
	</div>
  )
}

export default About
