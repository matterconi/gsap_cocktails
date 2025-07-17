import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

	useGSAP(() => {
		const nav = document.querySelector('nav')
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: nav,
				start: 'bottom top',
				end: 'bottom top',
				scrub: true,
			}
		})
		navTween.fromTo(nav, {
			backgroundColor: 'transparent'}, {
				backgroundColor: '#00000050',
				backgroundFilter: 'blur(10px)',
				duration: 1,
				ease: 'power1.inOut'
			});
		})

  return (
	<nav>
		<div>
			<a href="#home" className='flex items-center gap-2'>
				<img src="/images/logo.png" alt="logo" className='w-10 h-10' />
				<p>
					Davide's
				</p>
			</a>

			<ul>
				{navLinks.map((link) => (
					<li key={link.id} className='flex items-center gap-4'>
						<a href={`#${link.id}`} className='text-[16px] font-normal text-secondary hover:text-primary'>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	</nav>
  )
}

export default Navbar