import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
	const videoRef = React.useRef(null);

	const isMobile = useMediaQuery({maxWidth: 768})

	useGSAP(() => {
		const heroSplit = new SplitText('.title', { type: 'chars words' });
		const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

		heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: 'expo.out',
			stagger: 0.05
		});	

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: 'expo.out',
			stagger: 0.05,
			delay: 1
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '#hero',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			}
		})
		.to('.right-leaf', {
			y: 200
		}, 0)
		.to('.left-leaf', {
			y: -200
		}, 0)

		const startValue = isMobile ? 'top 50%' : 'center 60%';
		const endValue = isMobile ? '120% top' : 'bottom top';

		gsap.timeline({
			scrollTrigger: {
				trigger: 'video',
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true,
				onUpdate: (self) => {
					if (videoRef.current) {
						const progress = self.progress;
						const video = videoRef.current;
						const duration = video.duration;
						
						if (duration) {
							video.currentTime = progress * duration;
						}
					}
				}
			}
		});
	}, [])
  return (
	<>
		<section id="hero" className='noisy'>
			<h1 className='title'>
				Davide 
			</h1>
			<img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
			<img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

			<div className='body'>
				<div className='content'>
					<div className='space-y-5 hidden md:block'>
						<p>
							Barman al tuo servizio
						</p>
						<p className='subtitle'>
						Cocktail: <br /> La mia Passione
						</p>
					</div>

					<div className='view-cocktails'>
						<p className='subtitle'>
							I miei cocktail sono un'esperienza unica, un viaggio di sapori che ti porterà in un mondo di freschezza e creatività
						</p>
						<a href="#cocktails">Scopri i miei Cocktail</a>
					</div>
				</div>
			</div>
		</section>

		<div className='video absolute inset-0'>
			<video
				ref={videoRef}
				src="/videos/output.mp4"
				muted
				playsInline
				preload='auto'
			/>
		</div>
	</>
  )
}

export default Hero